import "./App.css";
import RefreshEverySecond from "./components/RefreshEverySecond";
import RefreshEveryFiveSeconds from "./components/RefreshEveryFiveSeconds";
import RefreshEveryTenSeconds from "./components/RefreshEveryTenSeconds";
import RefreshEverySecondButPauseWhenActionIsOngoing from "./components/RefreshEverySecondButPauseWhenActionIsOngoing";
import RefreshEverySecondButStopsAfterAMinute from "./components/RefreshEverySecondButStopsAfterAMinute";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">Demo App</header>
			<RefreshEverySecond />
			<RefreshEveryFiveSeconds />
			<RefreshEveryTenSeconds />
			<RefreshEverySecondButPauseWhenActionIsOngoing />
			<RefreshEverySecondButStopsAfterAMinute />
		</div>
	);
}

export default App;
