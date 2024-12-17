import React from "react";
import { Link } from "react-router-dom";

const PageNav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/product'>Home</Link>
				</li>
				<li>
					<Link to='/pricing'>Home</Link>
				</li>
				<li>
					<Link to='/'>Home</Link>
				</li>
			</ul>
		</nav>
	);
};

export default PageNav;
