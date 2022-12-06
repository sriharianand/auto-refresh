import { useRef } from "react";
import "./RefreshEverySecondButPauseWhenActionIsOngoing.css";

const RefreshEverySecondButPauseWhenActionIsOngoing = props => {
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;

	return (
		<>
			<div className="textContainer refreshEverySecondButPauseWhenActionIsOngoing">
				<h3>
					Refreshes every second but pauses when an action is on going
				</h3>
				<input name="test-input" type="text" />
				<div className="marginTop">
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

export default RefreshEverySecondButPauseWhenActionIsOngoing;
