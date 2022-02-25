import React from "react";
import "./navigationDots.css";

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{["home", "about", "work", "skills", "testimonial", "contact"].map(
				(item, index) => (
					<a
						className="app__navigation-dot"
						style={active === item ? { backgroundColor: "#313BAC" } : {}}
						key={`#${item}${index}`}
						// onClick={() => setToggle(false)}
						href={`#${item}`}
					/>
				)
			)}
		</div>
	);
};

export default NavigationDots;
