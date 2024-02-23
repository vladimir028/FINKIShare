// import logo from './logo.svg';
import '../App.css';
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import {Col, Row, Container} from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import NavigationAnimation from '../components/NavigationAnimation';
import NavigationAnimationNew from '../components/NavigationAnimationNew';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import HomePageCard from '../components/HomePageCard/HomePageCard';


function HomePage() {
    return (

        <div className="App">
            {/* <NavigationBar></NavigationBar> */}
           <NavigationAnimationNew></NavigationAnimationNew>
            <Home></Home>
            <Container style={{backgroundColor: '#F6F5F3'}}>
                <Row style={{color: 'black', textAlign: 'center', fontFamily: 'sans-serif', fontWeight: '600', fontSize: '20px'}}>
                    <h5>Дополнителни активности</h5>
                </Row>
                <Row style={{color: 'black', textAlign: 'center'}}>
                    <h2>Студентски организации</h2>
                </Row>
            <Row>
                <Col>
            <HomePageCard
                imgSrc= '/images/st_org_best_logo.png'
                cardTitle= "BEST"
                cardContent= "BEST"
                linkContent= "View Details"
             />
             </Col>
             <Col>
            <HomePageCard
                imgSrc= '/images/st_org_iaeste_logo.png'
                cardTitle= "IAESTE"
                cardContent= "IAESTE"
                linkContent= "View Details"
             />
             </Col>
             <Col>
            <HomePageCard
                imgSrc= '/images/eestec.png'
                cardTitle= "EESTEC"
                cardContent= "EESTEC"
                linkContent= "View Details"
             />
             </Col>
             <Col>
            <HomePageCard
                imgSrc= '/images/fss_finki.png'
                cardTitle= "FSS FINKI"
                cardContent= "FSS FINKI"
                linkContent= "View Details"
             />
             </Col>
             </Row>
            </Container>
            <FooterComponent></FooterComponent>
        </div>
    );
}

export default HomePage;