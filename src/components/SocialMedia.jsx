import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import "./socialMedia.css";
const SocialMedia = () => {
	return (
		<div className="app__social">
			<div className="app__social-div">
				<a
					href="https://www.linkedin.com/in/jonathan-junior-calixte
"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsLinkedin className="app__social-icon" />
				</a>
			</div>
			<div className="app__social-div">
				<a href="mailto:ghack929309@gmail.com">
					<AiOutlineMail className="app__social-icon" />
				</a>
			</div>
			<div className="app__social-div">
				<a
					href="https://wa.link/acl2f2"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsWhatsapp className="app__social-icon" />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
