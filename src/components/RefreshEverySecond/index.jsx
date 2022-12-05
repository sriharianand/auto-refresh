import { useRef } from "react";
import "./RefreshEverySecond.css";

const RefreshEverySecond = props => {
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;

	return (
		<>
			<div className="textContainer refreshEverySecond">
				<h3>Refreshes Every Second</h3>
				<div>This refreshed {renderCounter.current} times!</div>
			</div>
		</>
	);
};

export default RefreshEverySecond;
