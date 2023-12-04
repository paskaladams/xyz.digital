import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FooterComponent = () => {
	let navigate = useNavigate();
	return (
		<div className="footer py-5">
			<Container>
				<Row className="d-flex justify-content-between">
					<Col lg="5">
						<h1 className="title fw-bold" onClick={() => navigate('/')}>
							XYZ.Digital
						</h1>
						<p className="desc">
							Elevate your online presence with XYZ.Digital, your trusted partner in website development, digital marketing, and business consultancy. We blend
							creativity, technology, and strategy to bring your brand to new heights in the digital landscape.
						</p>
						<div className="no mb-1 mt-4">
							<Link className="text-decoration-none">
								<i className="fa-brands fa-whatsapp"></i>
								<p className="m-0">+1 123456789</p>
							</Link>
						</div>
						<div className="mail">
							<Link className="text-decoration-none">
								<i className="fa-regular fa-envelope"></i>
								<p className="m-0">business@xyz.digital</p>
							</Link>
						</div>
					</Col>
					<Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
						<h5 className="fw-bold">Menu</h5>
						<Link to="">Home</Link>
						<Link to="about-us">About Us</Link>
						<Link to="services">Services</Link>
						<Link to="teams">Teams</Link>
					</Col>
					<Col lg="4" className="mt-lg-0 mt-5">
						<h5 className="fw-bold mb-3">Subscribe for more info</h5>
						<div className="subscribe">
							<input type="text" placeholder="Put your email here" />
							<button className="btn btn-success rounded-end rounded-0 ">Subscribe</button>
						</div>
						{/* <div className="social mt-3">
							<i className="fa-brands fa-facebook"></i>
							<i className="fa-brands fa-twitter"></i>
							<i className="fa-brands fa-linkedin"></i>
							<i className="fa-brands fa-youtube"></i>
						</div> */}
					</Col>
				</Row>
				<Row>
					<Col></Col>
				</Row>
			</Container>
		</div>
	);
};

export default FooterComponent;
