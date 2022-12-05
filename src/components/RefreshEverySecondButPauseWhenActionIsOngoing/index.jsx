import { useRef } from "react";
import "./RefreshEverySecondButPauseWhenActionIsOngoing.css";

const RefreshEverySecondButPauseWhenActionIsOngoing = props => {
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;

	return (
		<>
			<div className="textContainer refreshEverySecondButPauseWhenActionIsOngoing">
				<h3>
					Refreshes Every Second But Pauses When Action Is On-going
				</h3>
				<input type="text" />
				<div className="marginTop">This refreshed {renderCounter.current} times!</div>
			</div>
		</>
	);
};

export default RefreshEverySecondButPauseWhenActionIsOngoing;
