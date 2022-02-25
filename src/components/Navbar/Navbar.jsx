import React, { useState } from "react";
import { images } from "../../constants";
import "./navbar.css";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img className="app__image-logo" src={images.jonathan} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{["home", "about", "work", "skills", "testimonial", "contact"].map(
					(item) => (
						<li className={`app__flex p-text `} key={"link-" + item}>
							<div className="w-[5px] h-[5px] bg-transparent rounded-full mb-[5px] hover:bg-secondary " />

							<a
								className="text-gray-color flex flex-col uppercase ease-out duration-300 hover:text-secondary"
								href={`#${item}`}
							>
								{item}
							</a>
						</li>
					)
				)}
			</ul>
			<div className="app__navbar-menu">
				<HiMenuAlt4
					className="text-white w-[70%] h-[70%]"
					onClick={() => setToggle(true)}
				/>
				{toggle && (
					<motion.div
						className="app__navbar-framer"
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
					>
						<HiX
							onClick={() => setToggle(false)}
							className="w-[35px] h-[35px] text-secondary my-2 mx-4"
						/>
						<ul className="list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col">
							{[
								"home",
								"about",
								"work",
								"skills",
								"testimonial",
								"contact",
							].map((item) => (
								<li className="m-4" key={item}>
									<a
										className="text-gray-color decoration-0 text-base uppercase font-medium font-dm ease-out duration-300 hover:text-secondary "
										onClick={() => setToggle(false)}
										href={`#${item}`}
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
