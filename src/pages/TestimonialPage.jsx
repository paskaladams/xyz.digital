import { Container, Row, Col } from 'react-bootstrap';
import { testimonialSwiper } from '../data/index';

const TestimonialPage = () => {
	return (
		<div className="testimonial-page min-vh-100">
			<div className="testimonial">
				<Container>
					<Row>
						<Col>
							<h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Testimonial</h1>
							<p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus!
							</p>
						</Col>
					</Row>
					<Row className="row-cols-lg-3 row-cols-1">
						{testimonialSwiper.map((data) => {
							return (
								<Col key={data.id} className="mb-5 card">
									<p className="desc shadow-sm">{data.desc}</p>
									<div className="people">
										<img src={data.image} alt="" />
										<div>
											<h5 className="mb-1">{data.name}</h5>
											<p className="m-0 fw-bold">{data.from}</p>
										</div>
									</div>
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default TestimonialPage;
