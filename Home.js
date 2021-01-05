import React from 'react';
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home () {
	return (
		<div className="home">
			<Banner />
			<h2> Live Anywhere </h2>
			<div className="home__section">
				<Card
					src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
					title="Entire Homes"
					description=""
					price="" />
				<Card
					src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
					title="Cabins and Cottages"
					description=""
					price="" />
				<Card
					src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
					title="Unique Stays"
					description=""
					price="" />
				<Card
					src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"
					title="Pets Welcomme"
					description=""
					price="" />
			</div>
			<div className="home__sectionTwoDiv">
				<h2>Meet Online Experiences</h2>
				<h3>Interactive activities you can do together, led by expert hosts.</h3>
				<div className="home__sectionTwo">
					<Card
						src="https://a0.muscache.com/im/pictures/6e0c69d9-e785-4b00-9633-aebad092e404.jpg?im_w=320"
						title="Explore a writer's World"
						description=""
						price="" />
					<Card
						src="https://a0.muscache.com/im/pictures/928c6296-3b28-491a-a579-e696b8928870.jpg?im_w=320"
						title="Backstage of tricks"
						description=""
						price="" />
					<Card
						src="https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg?im_w=480"
						title="Make dumplings in Seoul"
						description=""
						price="" />
					<Card
						src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=320"
						title="Trips"
						description="included All"
						price="" />
				</div>
			</div>

			<h2>Host on Airbnb along Millions</h2>
			<div className="home__section">
				<Card
					src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=320"
					title="Host your Home"
					description=""
					price="" />
				<Card
					src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=320"
					title="Host an Online Experience"
					description=""
					price="" />
				<Card
					src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=320"
					title="Host an Experience"
					description=""
					price="" />

			</div>
		</div>
	);
}
export default Home;
