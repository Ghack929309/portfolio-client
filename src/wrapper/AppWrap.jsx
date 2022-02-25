import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import "./appWrap.css";

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />
				<div className="app__wrapper flex justify-center items-center">
					<Component />
					<div className="copyright1 p-8">
						<p className="font-dm text-sm text-right p-text  leading-6 uppercase text-black-color">
							@2022 Jonathan
						</p>
						<p className=" font-dm text-sm text-right p-text  leading-6 uppercase text-black-color">
							All rights reserved
						</p>
					</div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};

export default AppWrap;
