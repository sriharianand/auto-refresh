import { useRef } from "react";
import "./RefreshEveryFiveSeconds.css";

const RefreshEveryFiveSecond = props => {
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;

	return (
		<>
			<div className="textContainer refreshEveryFiveSecond">
				<h3>Refreshes Every Five Second</h3>
				<div>This refreshed {renderCounter.current} times!</div>
			</div>
		</>
	);
};

export default RefreshEveryFiveSecond;
