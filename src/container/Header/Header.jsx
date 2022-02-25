import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./header.css";
const Header = () => {
	const scaleVariants = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	return (
		<div className="app__header app__flex  ">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span className="text-4xl ultra:text-7xl">👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I am</p>
							<h1 className="head-text text-2xl font-bold">
								Jonathan Junior Calixte
							</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text w-full uppercase text-right">
							Frontend web developer
						</p>
						{/* <p className="p-text">Hello, I am</p> */}
					</div>
				</div>
			</motion.div>
			{/* second motion div */}
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<img
					className="w-full object-contain z-10"
					src={images.profile}
					alt="Jonathan profile"
				/>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="overlay_circle"
					src={images.circle}
					alt="profile_circle"
				/>
			</motion.div>
			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles "
			>
				{[images.react, images.javascript, images.typescript].map(
					(circle, index) => (
						<div
							className={`circle-map app__flex m-4 ${
								index === 0
									? "w-[100px] h-[100px] ultra:w-[400px] ultra:h-[400px]"
									: index === 1
									? "w-[150px] h-[150px] m-6 ultra:w-[170px] ultra:h-[170px]"
									: "w-[70px] h-[70px] ultra:w-[200px] ultra:h-[200px]"
							} rounded-full bg-white shadow-lg shadow-[rgba(0,0,0,0.1)]`}
							key={`circle-${index}`}
						>
							<img className="w-[60%] h-[60%]" src={circle} alt="circle" />
						</div>
					)
				)}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, "home");
