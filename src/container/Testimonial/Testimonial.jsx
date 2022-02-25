import React, { useState, useEffect } from "react";
import "./testimonial.css";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Testimonial = () => {
	const [brands, setBrands] = useState([]);
	const [testimonials, setTestimonials] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const queryTestimonial = '*[_type =="testimonials"]';
		const queryBrand = '*[_type == "brands"]';

		client.fetch(queryBrand).then((data) => {
			setBrands(data);
		});
		client.fetch(queryTestimonial).then((data) => {
			setTestimonials(data);
		});
	}, []);
	const test = testimonials[currentIndex];
	return (
		<>
			{testimonials?.length && (
				<>
					<div className="app__testimonial-item app__flex">
						<img
							className="w-[100px] h-[100px] rounded-full object-cover min-ultra:w-[150px] min-ultra:h-[150px]"
							src={urlFor(test.imageurl)}
							alt="testimonial"
						/>
						<div className="app__testimonial-content">
							<p className=" text-xl leading-8 text-black-color font-dm ">
								{test.feedback}
							</p>
							<div className="">
								<h4 className=" font-semibold text-secondary mt-8 ">
									{test.name}
								</h4>
								<h5 className=" font-normal text-gray-color mt-[5px] ">
									{test.company}
								</h5>
							</div>
						</div>
					</div>
					<div className="app__testimonial-btns app__flex">
						<div
							className=" arrow-div app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								)
							}
						>
							<HiChevronLeft className="arrow " />
						</div>
						<div
							className="arrow-div app__flex"
							onClick={() =>
								handleClick(
									currentIndex === testimonials.length - 1
										? 0
										: currentIndex + 1
								)
							}
						>
							<HiChevronRight className="arrow " />
						</div>
					</div>
				</>
			)}

			<div className="app__testimonial-brands app__flex">
				{brands.map((brand, index) => (
					<motion.div
						className="w-[150px] m-6"
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
						key={"###+" + index}
					>
						<img
							className="brand-images"
							src={urlFor(brand.imgUrl)}
							alt="brands"
						/>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Testimonial, "app__testimonial"),
	"testimonial",
	"app__primarybg"
);
