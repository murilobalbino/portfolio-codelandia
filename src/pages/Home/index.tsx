import { Container } from './styles'
import MainSection from "../../components/MainSection";
import AboutMe from '../../components/AboutMe'
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";


const Home = () => {
    return (
        <Container>
            <MainSection />
            <AboutMe />
            <Experience />
            <Projects />
            <Footer />
        </Container>
    )
}

export default Home