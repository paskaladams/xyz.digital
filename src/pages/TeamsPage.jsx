import { Container, Row, Col } from 'react-bootstrap';

import Team1 from '../assets/img/people/team1.jpg';
import Team2 from '../assets/img/people/team2.jpg';
import Team3 from '../assets/img/people/team3.jpg';

const TeamsPage = () => {
	return (
		<div className="teams-page min-vh-100">
			<Container>
				<Row>
					<Col>
						<h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Teams</h1>
						<p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Meet our Experts</p>
					</Col>
				</Row>
				<Row className="mb-5 justify-content-center">
					<Col lg="3" xs="6">
						<img src={Team1} alt="Tech Leader" className="mb-3" />
						<p className="fw-bold text-center">Bill Smith (Tech Director)</p>
						<p className="text-center">+1 111222333</p>
					</Col>
					<Col lg="9">
						<h1>1. Website Development Team</h1>
						<p>
							Our website development team comprises skilled professionals dedicated to turning ideas into immersive digital experiences. From front-end design to
							back-end functionality, their expertise includes:
							<br />
							<br />
							Front-End Development: Crafting visually appealing and user-friendly interfaces to enhance the overall user experience.
							<br />
							<br />
							Back-End Development: Building robust and scalable systems that power the functionality of websites and applications.
							<br />
							<br />
							E-commerce Specialists: Creating seamless online shopping experiences, from product displays to secure payment gateways.
						</p>
					</Col>
				</Row>
				<Row className="mb-5 justify-content-center">
					<Col lg="3" xs="6">
						<img src={Team2} alt="Digital Marketing Leader" className="mb-3" />
						<p className="fw-bold text-center">Molly Light (Digital Marketing Director)</p>
						<p className="text-center">+1 444555666</p>
					</Col>
					<Col lg="9">
						<h1>2. Digital Marketing Team</h1>
						<p>
							Our digital marketing experts are the driving force behind increasing your online visibility and engagement. Their key areas of expertise include:
							<br />
							<br />
							SEO Specialists: Optimizing your online presence to rank higher in search engine results, driving organic traffic to your website.
							<br />
							<br />
							Social Media Managers: Crafting and implementing effective social media strategies to boost brand awareness and engagement.
							<br />
							<br />
							Content Marketers: Creating compelling and relevant content that resonates with your target audience and supports your marketing objectives.
						</p>
					</Col>
				</Row>
				<Row className="mb-5 justify-content-center">
					<Col lg="3" xs="6">
						<img src={Team3} alt="Business Consultant & Planner Leader" className="mb-3" />
						<p className="fw-bold text-center">Mark Tyson (Business Director)</p>
						<p className="text-center">+1 777888999</p>
					</Col>
					<Col lg="9">
						<h1>3. Business Consultancy & Planning Team</h1>
						<p>
							Our business consultancy and planning team is committed to providing strategic guidance and insights to help your business thrive. Their expertise spans:
							<br />
							<br />
							Market Analysis: Conducting in-depth market research to identify opportunities and challenges in your industry.
							<br />
							<br />
							Strategic Planning: Developing actionable strategies to achieve your business goals, whether its growth, market expansion, or operational efficiency.
							<br />
							<br />
							Performance Metrics: Implementing and analyzing key performance indicators (KPIs) to measure and improve overall business performance.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default TeamsPage;
