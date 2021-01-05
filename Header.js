import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";


function Header () {

	return (
		<div className="header">
			<div className="header__left">
				<Link to="/">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlCX_KCBoFMSJ8ocIWvCaHDwhcN4DEgnkMYg&usqp=CAU"
						alt=""
						className="header__icon"
					/>
				</Link>

			</div>
			<div className="header__center">
				<input type="text" placeholder="Where r u going" />
				<SearchIcon />
			</div>
			<div className="header__right">

				<p>Become a Host</p>

				<div className="header__rightElements">
					<LanguageIcon />
					<ExpandMoreIcon />
				</div>

				<Avatar />

			</div>
		</div>
	);
}

export default Header;