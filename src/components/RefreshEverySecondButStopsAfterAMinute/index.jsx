import { useRef } from "react";
import "./RefreshEverySecondButStopsAfterAMinute.css";

const RefreshEverySecondButStopsAfterAMinute = props => {
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;

	return (
		<>
			<div className="textContainer refreshEverySecondButStopsAfterAMinute">
				<h3>Refreshes Every Second But Stops After A Minute</h3>
				<div>This refreshed {renderCounter.current} times!</div>
			</div>
		</>
	);
};

export default RefreshEverySecondButStopsAfterAMinute;
