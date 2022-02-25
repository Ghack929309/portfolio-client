import React, { useState, useEffect } from "react";
import "./about.css";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";
import { MotionWrap } from "../../wrapper";
const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';
		client.fetch(query).then((data) => setAbouts(data));
	}, []);

	return (
		<>
			<h2 className="mt-4 head-text">
				I know that
				<span className="text-secondary"> Good Apps </span>
				<br />
				means
				<span className="text-secondary"> Good Business</span>
			</h2>
			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img
							className="w-full h-[170px] ultra:h-[320px] rounded-[15px] object-cover"
							src={urlFor(about.imgUrl)}
							alt={about.title}
						/>
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text1" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About, "app__about"),
	"about",
	"app__whitebg"
);
