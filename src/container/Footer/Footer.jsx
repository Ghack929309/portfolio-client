import React, { useState, useEffect } from "react";
import "./footer.css";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmit, setIsFormSubmit] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorTracker, setErrorTracker] = useState(false);
	const [error, setError] = useState(false);
	const [info, setInfo] = useState([]);
	const { name, email, message } = formData;

	//fetch contact information
	useEffect(() => {
		const informationQuery = '*[_type == "information"]';
		client.fetch(informationQuery).then((data) => {
			setInfo(data);
		});
	}, []);
	//input handler
	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	//tracker error statement
	useEffect(() => {
		if (!name && !email && !message) {
			setError(true);
		} else if (name && email && message) {
			setError(false);
		}
	}, [error, name, email, message]);

	//submit the contact form
	const handleSubmit = () => {
		setErrorTracker(true);
		const contact = {
			_type: "contact",
			name,
			email,
			message,
		};
		if (error) {
			setLoading(false);
			setError(true);
		} else {
			setLoading(true);
			client.create(contact).then(() => {
				setLoading(false);
				setIsFormSubmit(true);
			});
		}
	};

	//retrieve information
	const infoData = [];
	info.map((el) => {
		if (el.email) {
			infoData.push(el.email);
		}
		if (el.phone) {
			infoData.push(el.phone);
		}
	});
	const [infoEmail, phone] = infoData;

	return (
		<>
			<h2 className="mt-4 head-text ">
				Take a coffee <span className="text-secondary">&</span> chat with me
			</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card ">
					<img className=" contact-img" src={images.email} alt="email" />
					<a
						href={`mailto:${infoEmail}`}
						id="mail"
						className="underline font-semibold "
					>
						{infoEmail}
					</a>
				</div>

				<div className="app__footer-card ">
					<img className="contact-img" src={images.mobile} alt="mobile" />
					<a
						href={`tel: ${phone}`}
						id="telephone"
						className="underline font-semibold "
					>
						{phone}
					</a>
				</div>
			</div>

			{/* form */}
			{!isFormSubmit ? (
				<div className="app__footer-form ">
					<div className="footer-div ">
						<input
							type="text"
							className="footer-input"
							placeholder="Your Name"
							value={name}
							name="name"
							onChange={handleChangeInput}
						/>
						{errorTracker && !name && (
							<p className="p-error">Please enter your name</p>
						)}
					</div>
					<div className="footer-div">
						<input
							type="email"
							className="footer-input"
							placeholder="Your Email"
							value={email}
							name="email"
							onChange={handleChangeInput}
						/>
						{errorTracker && !email && (
							<p className="p-error">please enter your email</p>
						)}
					</div>
					<div className="footer-div">
						<textarea
							className="footer-input h-[170px]"
							placeholder="Your Message"
							name="message"
							onChange={handleChangeInput}
						/>
						{errorTracker && !message && (
							<p className="p-error">please leave a message</p>
						)}
					</div>
					<div className="flex justify-center items-center">
						<button type="button" className="send" onClick={handleSubmit}>
							{loading ? "Sending" : "Send Message"}
						</button>
					</div>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
