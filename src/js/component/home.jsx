import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<Welcome 
		title={"A Warm Welcome!"}
		description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."}
		label={"Call to action!"}
		/>
		<Footer 
		footerInfo={"Copyright @GeneyEdu 2023"}
		/>
		</>
	);
};

export default Home;
