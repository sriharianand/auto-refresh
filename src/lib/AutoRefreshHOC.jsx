import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const withAutoRefresh = Component => {
	const AutoRefresh = props => {
		const {
				refreshFrequency,
				fetchData,
				stopRefreshAfter,
				checkForOngoingAction,
			} = props,
			[propsForChildComponent, setPropsForChildComponent] = useState({});

		useEffect(() => {
			const autoFetchData = setInterval(() => {
				const isActionOngoing = checkForOngoingAction();

				if (!(isActionOngoing === true)) {
					const fetchedData = fetchData();
					setPropsForChildComponent(fetchedData);
				}
			}, refreshFrequency);

			let stopRefreshTimeout;
			if (stopRefreshAfter > 0) {
				stopRefreshTimeout = setTimeout(() => {
					clearInterval(autoFetchData);
				}, stopRefreshAfter);
			}

			return () => {
				clearInterval(autoFetchData);
				clearTimeout(stopRefreshTimeout);
			}
		}, [
			refreshFrequency,
			fetchData,
			stopRefreshAfter,
			checkForOngoingAction,
		]);

		return <Component {...propsForChildComponent} />;
	};

	AutoRefresh.propTypes = {
		refreshFrequency: PropTypes.number.isRequired,
		fetchData: PropTypes.func.isRequired,
		stopRefreshAfter: PropTypes.number,
		checkForOngoingAction: PropTypes.func,
	};

	AutoRefresh.defaultProps = {
		stopRefreshAfter: 0,
		checkForOngoingAction: () => false,
	};

	return AutoRefresh;
};

export default withAutoRefresh;
