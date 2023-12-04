import { Container, Row, Col } from 'react-bootstrap';

import AboutUs1 from '../assets/img/illustration/01.svg';
import AboutUs2 from '../assets/img/illustration/02.svg';

const AboutUsPage = () => {
	return (
		<div className="about-us-page min-vh-100">
			<Container>
				<Row>
					<Col>
						<h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">About Us</h1>
						<p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Know more about us here</p>
					</Col>
				</Row>
				<Row className="box justify-content-center">
					<Col lg="3" xs="6" className="mb-5">
						<img src={AboutUs1} alt="" />
					</Col>
					<Col lg="9">
						<h1>Who We Are</h1>
						<p className="text">
							At the core of XYZ.Digital, we are a passionate team of creatives, developers, and strategists united by a common mission – to empower businesses in the
							digital age. With a commitment to excellence, we embark on each project as a unique opportunity to blend innovation with functionality.
						</p>
						<br />
						<h1>Our History</h1>
						<p className="text">
							Established in 2000, XYZ.Digital pioneered digital transformation with a mission to reshape the online landscape. Founded by visionaries, our journey is
							marked by adaptability, excellence, and a commitment to innovative solutions. From humble beginnings to a trusted industry name, we have consistently
							navigated digital evolution.
						</p>
					</Col>
				</Row>
				<Row className="box justify-content-center">
					<Col lg="3" xs="6" className="mb-5">
						<img src={AboutUs2} alt="" />
					</Col>
					<Col lg="9">
						<h1>Why Choose XYZ.Digital?</h1>
						<p className="text">
							Collaborative Approach: We believe in the power of collaboration. Your goals become ours, and together, we navigate the digital landscape to achieve
							unparalleled success.
							<br />
							<br />
							Expertise That Matters: Our seasoned professionals bring a wealth of experience in website development, digital marketing, and business consultancy. Rest
							assured, your project is in capable hands.
							<br />
							<br />
							Innovation at the Core: Embrace the future with us. We infuse each project with innovative solutions, ensuring your brand stays ahead of the curve in the
							ever-evolving digital sphere.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h1 className="value">Our Values</h1>
						<p className="value">
							Integrity: We operate with transparency, honesty, and a commitment to delivering what we promise.
							<br />
							<br />
							Creativity: We believe in the power of creativity to transform ideas into impactful digital experiences.
							<br />
							<br />
							Client-Centric Approach: Your satisfaction is our priority. We tailor our services to meet your unique needs and exceed your expectations.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutUsPage;
