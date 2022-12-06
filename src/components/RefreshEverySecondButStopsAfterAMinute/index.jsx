import { useRef } from "react";
import "./RefreshEverySecondButStopsAfterAMinute.css";

const RefreshEverySecondButStopsAfterAMinute = props => {
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;

	return (
		<>
			<div className="textContainer refreshEverySecondButStopsAfterAMinute">
				<h3>Refreshes every second but stops after a minute</h3>
				<div>
					{renderCounter.current - 1 <= 0
						? "This section has not refreshed."
						: renderCounter.current - 1 === 1
						? "This section has refreshed once."
						: `This section has refreshed ${
								renderCounter.current - 1
						  } times!`}
				</div>
			</div>
		</>
	);
};

export default RefreshEverySecondButStopsAfterAMinute;
