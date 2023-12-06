import { Container, Row, Col } from 'react-bootstrap';

import { testimonialSwiper } from '../data/index';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Services1 from '../assets/img/illustration/Website.svg';
import Services2 from '../assets/img/illustration/DigitalMarketing.svg';
import Services3 from '../assets/img/illustration/Consultancy.svg';

const ServicesPage = () => {
	return (
		<div className="services-page min-vh-100">
			<Container>
				<Row>
					<Col>
						<h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Services</h1>
						<p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Bring your business to the next level</p>
					</Col>
				</Row>
				<Row className="web justify-content-center">
					<Col lg="3" xs="6" className="mb-5">
						<img src={Services1} alt="Website" />
					</Col>
					<Col lg="9">
						<h1>Website Development</h1>
						<p>From sleek corporate sites to dynamic e-commerce platforms, we turn your ideas into interactive online experiences.</p>
					</Col>
				</Row>
				<Row className="marketing justify-content-center">
					<Col lg="3" xs="6" className="mb-5">
						<img src={Services2} alt="Digital Marketing" />
					</Col>
					<Col lg="9">
						<h1>Digital Marketing</h1>
						<p>
							Harness the power of online channels with our comprehensive digital marketing solutions, including SEO, social media management, and content marketing.
						</p>
					</Col>
				</Row>
				<Row className="business justify-content-center">
					<Col lg="3" xs="6" className="mb-5">
						<img src={Services3} alt="Consultancy" />
					</Col>
					<Col lg="9">
						<h1>Business Consultancy & Planning</h1>
						<p>Maximize your potential with our strategic advice on business growth, market positioning, and operational efficiency.</p>
					</Col>
				</Row>
			</Container>
			<div className="services-page testimonial w-100">
				<Row>
					<Col className='justify-content-center'>
						<h1 className="text-center fw-bold mb-5">Testimonial</h1>
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

export default ServicesPage;
