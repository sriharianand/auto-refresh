import "./App.css";
import RefreshEverySecond from "./components/RefreshEverySecond";
import RefreshEveryFiveSeconds from "./components/RefreshEveryFiveSeconds";
import RefreshEveryTenSeconds from "./components/RefreshEveryTenSeconds";
import RefreshEverySecondButPauseWhenActionIsOngoing from "./components/RefreshEverySecondButPauseWhenActionIsOngoing";
import RefreshEverySecondButStopsAfterAMinute from "./components/RefreshEverySecondButStopsAfterAMinute";
import withAutoRefresh from "./lib/AutoRefreshHOC";

const App = () => {
	const EnhancedRefreshEverySecond = withAutoRefresh(RefreshEverySecond),
		EnhancedRefreshEveryFiveSeconds = withAutoRefresh(
			RefreshEveryFiveSeconds
		),
		EnhancedRefreshEveryTenSeconds = withAutoRefresh(
			RefreshEveryTenSeconds
		),
		EnhancedRefreshEverySecondButPauseWhenActionIsOngoing = withAutoRefresh(
			RefreshEverySecondButPauseWhenActionIsOngoing
		),
		EnhancedRefreshEverySecondButStopsAfterAMinute = withAutoRefresh(
			RefreshEverySecondButStopsAfterAMinute
		),
		checkForInputOnFocus = () => {
			const inputElement = document.querySelector(`input[name="test-input"]`);
			return inputElement === document.activeElement;
		};

	return (
		<div className="App">
			<header className="App-header">Demo App</header>
			<EnhancedRefreshEverySecond
				refreshFrequency={1000}
				fetchData={() => Math.random()}
			/>
			<EnhancedRefreshEveryFiveSeconds
				refreshFrequency={5000}
				fetchData={() => Math.random()}
			/>
			<EnhancedRefreshEveryTenSeconds
				refreshFrequency={10000}
				fetchData={() => Math.random()}
			/>
			<EnhancedRefreshEverySecondButPauseWhenActionIsOngoing
				refreshFrequency={1000}
				fetchData={() => Math.random()}
				checkForOngoingAction={checkForInputOnFocus}
			/>
			<EnhancedRefreshEverySecondButStopsAfterAMinute
				refreshFrequency={1000}
				fetchData={() => Math.random()}
				stopRefreshAfter={60000}
			/>
		</div>
	);
};

export default App;
