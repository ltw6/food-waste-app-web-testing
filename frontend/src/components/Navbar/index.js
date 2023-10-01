import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/data" activeStyle>
						Data
					</NavLink>
					<NavLink to="/query" activeStyle>
						Query
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
