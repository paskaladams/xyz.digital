import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../assets/img/illustration/Hero.svg';
import AboutUsImage from '../assets/img/illustration/AboutUs.svg';
import ServicesImage from '../assets/img/illustration/Services.svg';
import TeamsImage from '../assets/img/illustration/Teams.svg';
import { testimonialSwiper } from '../data/index';

import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HomePage = () => {
	let navigate = useNavigate();
	return (
		<div className="homepage">
			<header className="w-100 min-vh-100 d-flex align-items-center">
				<Container>
					<Row className="header-box d-flex align-items-center pt-lg-5">
						<Col lg="6">
							<h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
								Unlocking
								<br />
								<span> Digital Success</span>
								<br />
								for Your Business
							</h1>
							<p className="mb-5 animate__animated animate__fadeInUp animate__delay-1s">
								Elevate your online presence with XYZ.Digital, your trusted partner in website development, digital marketing, and business consultancy. We blend
								creativity, technology, and strategy to bring your brand to new heights in the digital landscape.
							</p>
							<button
								className="btn btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
								onClick={() => navigate('/services')}>
								Our Services
							</button>
						</Col>
						<Col lg="6" className="pt-lg-0 pt-5">
							<img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
						</Col>
					</Row>
				</Container>
			</header>
			<div className="about-us">
				<Container>
					<Row>
						<Col>
							<h1 className="text-center fw-bold">About Us</h1>
							<p className="text-center">Overview</p>
						</Col>
					</Row>
					<Row>
						<Col className="d-flex align-items-center mx-5">
							<img src={AboutUsImage} alt="About Us" />
						</Col>
					</Row>
					<Row className="mb-5">
						<Col>
							{' '}
							<h1>Who We Are</h1>
							<p>
								Welcome to XYZ.Digital, where innovation meets digital excellence. As a trailblazing force in the realms of website development, digital marketing, and
								business consultancy, we take pride in shaping compelling online narratives and fostering growth for businesses across industries. We embody a culture that propels us into a future of continued excellence and enduring relationships.
							</p>
							<br />
							<h1>Our Teams</h1>
							<p>
								XYZ.Digital boasts a dynamic team of passionate professionals, each contributing unique expertise to our success. From the visionary leaders who drive
								innovation to our dedicated developers crafting digital experiences, every team member embodies our commitment to excellence. Together, we form a
								cohesive unit, dedicated to propelling your business to new heights in the digital realm.
							</p>
						</Col>
						<Col>
							<h1>Our History</h1>
							<p>
								Established in 2000, XYZ.Digital pioneered digital transformation with a mission to reshape the online landscape. Founded by visionaries, our journey is
								marked by adaptability, excellence, and a commitment to innovative solutions. From humble beginnings to a trusted industry name, we have consistently
								navigated digital evolution.
							</p>
							<br />
							<h1>Our Culture</h1>
							<p>
								At XYZ.Digital, our culture fuels success. A dynamic blend of creativity, collaboration, and client-centric values defines us. Innovation thrives,
								collaboration is our strength, and transparent communication builds trust. As dedicated partners in our clients digital journeys, we embody a culture
								that propels us into a future of continued excellence and enduring relationships.
							</p>
						</Col>
					</Row>
					<Row>
						<Col className="text-center" data-aos="fade-up" data-aos-duration="1000">
							<button
								className="btn btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
								onClick={() => navigate('/about-us')}>
								Learn More About Us <i className="fa-solid fa-chevron-right ms-1"></i>
							</button>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="services">
				<Container>
					<Row>
						<Col>
							<h1 className="text-center fw-bold">Our Services</h1>
							<p className="text-center">Bring your business to the next level</p>
						</Col>
					</Row>
					<Row className="mb-5">
						<Col>
							<h1>Our Services</h1>
							<p>
								Website Development: From sleek corporate sites to dynamic e-commerce platforms, we turn your ideas into interactive online experiences.
								<br />
								<br />
								Digital Marketing: Harness the power of online channels with our comprehensive digital marketing solutions, including SEO, social media management, and
								content marketing.
								<br />
								<br />
								Business Consultancy: Maximize your potential with our strategic advice on business growth, market positioning, and operational efficiency.
							</p>
						</Col>
						<Col className="d-flex align-items-center">
							<img src={ServicesImage} alt="Services" />
						</Col>
					</Row>
					<Row>
						<Col className="text-center" data-aos="fade-up" data-aos-duration="1000">
							<button
								className="btn btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
								onClick={() => navigate('/services')}>
								Learn More Our Services <i className="fa-solid fa-chevron-right ms-1"></i>
							</button>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="teams">
				<Container>
					<Row>
						<Col>
							<h1 className="text-center fw-bold">Our Teams</h1>
							<p className="text-center">Meet our Experts</p>
						</Col>
					</Row>
					<Row className="d-flex lg-flex-column mb-5">
						<Col className="d-flex align-items-center">
							<img src={TeamsImage} alt="Teams" />
						</Col>
						<Col>
							<h1>Our Mission</h1>
							<p>
								Our website development team comprises skilled professionals dedicated to turning ideas into immersive digital experiences. From front-end design to
								back-end functionality
								<br />
								<br />
								Our digital marketing experts are the driving force behind increasing your online visibility and engagement.
								<br />
								<br />
								Our business consultancy team is committed to providing strategic guidance and insights to help your business thrive
							</p>
						</Col>
					</Row>
					<Row>
						<Col className="text-center" data-aos="fade-up" data-aos-duration="1000">
							<button
								className="btn btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
								onClick={() => navigate('/teams')}>
								Learn More Our Teams <i className="fa-solid fa-chevron-right ms-1"></i>
							</button>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="testimonial py-5">
				<Row>
					<Col>
						<h1 className="text-center fw-bold mb-5">Testimonial</h1>
						<p className="text-center"></p>
					</Col>
				</Row>
				<Row>
					<Col>
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							pagination={{
								clickable: true,
							}}
							breakpoints={{
								640: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
								992: {
									slidesPerView: 2,
									spaceBetween: 50,
								},
								1200: {
									slidesPerView: 3,
									spaceBetween: 50,
								},
							}}
							modules={[Pagination]}
							className="mySwiper">
							{testimonialSwiper.map((data) => {
								return (
									<SwiperSlide key={data.id} className="rounded-5 ">
										<p className="desc">{data.desc}</p>
										<div className="people">
											<img src={data.image} alt="" />
											<div>
												<h5 className="mb-1">{data.name}</h5>
												<p className="m-0 fw-bold">{data.from}</p>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default HomePage;
