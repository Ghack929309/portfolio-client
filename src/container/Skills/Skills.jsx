import React, { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import ReactTooltip from "react-tooltip";
import "./skill.css";
import "./tooltip.css";
import { MotionWrap } from "../../wrapper";

const Skills = () => {
	const [skills, setSkills] = useState([]);
	const [experience, setExperience] = useState([]);
	useEffect(() => {
		const queryExperience = '*[_type =="experiences"]';
		const querySkills = '*[_type == "skills"]';
		client.fetch(querySkills).then((data) => {
			setSkills(data);
		});
		client.fetch(queryExperience).then((data) => {
			setExperience(data);
		});
	}, []);
	return (
		<>
			<h2 className="head-text">
				Skills <span className="text-secondary">&</span> Experience
			</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills?.map((skill, index) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name + index}
						>
							<div
								className="inside app__flex"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img
									className="w-1/2 h-1/2"
									src={urlFor(skill.icon)}
									alt={skill.name}
								/>
							</div>
							<p className="p-text font-medium mt-2 min-ultra:mt-4 ">
								{skill.name}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* experience */}
				<motion.div className="app__skills-exp">
					{experience?.map((experience, index) => (
						<motion.div
							className="app__skills-exp-item"
							key={experience.year + index}
						>
							<div className="app__skills-exp-year">
								<p className="font-extrabold text-secondary">
									{experience.year}
								</p>
							</div>
							<motion.div className="app__skills-exp-works">
								{experience?.works?.map((work, index) => (
									<Fragment key={work.company + index}>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
											data-tip
											data-for={work.name}
										>
											<h4 className="font-medium bold-text">{work.name}</h4>
											<p className=" font-normal text-gray-color mt-[5px] p-text">
												{work.company}
											</p>
										</motion.div>
										<ReactTooltip
											id={work.name}
											effect="solid"
											arrowColor="#fff"
											className="skills-tooltip"
										>
											{work.desc}
										</ReactTooltip>
									</Fragment>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, "app__skills"),
	"skills",
	"app__whitebg"
);
