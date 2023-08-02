import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Images from "./Images";

//create your first component
const Home = () => {
	let imgs = [
		{
			src: "https://picsum.photos/id/237/300/325",
			title: "Card Title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut metus vel lectus congue pharetra. Vestibulum commodo ullamcorper tellus, a dignissim leo congue id",
			label: "Find out more"
		},
		{
			src: "https://picsum.photos/id/17/300/325",
			title: "Card Title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut metus vel lectus congue pharetra. Vestibulum commodo ullamcorper tellus, a dignissim leo congue id",
			label: "Find out more"
		},
		{
			src: "https://picsum.photos/id/100/300/325",
			title: "Card Title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut metus vel lectus congue pharetra. Vestibulum commodo ullamcorper tellus, a dignissim leo congue id",
			label: "Find out more"
		},
		{
			src: "https://picsum.photos/id/90/300/325",
			title: "Card Title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut metus vel lectus congue pharetra. Vestibulum commodo ullamcorper tellus, a dignissim leo congue id",
			label: "Find out more"
		}
	];
	return (
		<>
			<Navbar />
			<Welcome
				title={"A Warm Welcome!"}
				description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."}
				label={"Call to action!"}
			/>
			<Images
				imgs={imgs} />
			<Footer
				footerInfo={"Copyright @GeneyEdu 2023"}
			/>
		</>
	);
};

export default Home;
