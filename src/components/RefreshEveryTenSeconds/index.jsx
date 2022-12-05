import { useRef } from "react";
import "./RefreshEveryTenSeconds.css";

const RefreshEveryTenSecond = props => {
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;

	return (
		<>
			<div className="textContainer refreshEveryTenSecond">
				<h3>Refreshes Every Ten Second</h3>
				<div>This refreshed {renderCounter.current} times!</div>
			</div>
		</>
	);
};

export default RefreshEveryTenSecond;
