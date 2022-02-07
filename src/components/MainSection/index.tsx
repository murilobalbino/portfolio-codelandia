import { Container, NavBar, Presentation, Content } from './styles'

import Looper from './assets/Looper.svg'

import Button from '../Button'

import Github from './assets/github.svg'
import Linkedin from './assets/linkedin.svg'

const MainSection = () => {
    return (
        <Container>
            <Content>
                <NavBar>
                    <p>Portfolio</p>
                    <div>
                        <a href={"#home"} >Home</a>
                        <a href={"##sobre"} >Sobre Mim</a>
                        <a href={"#experience"} >Experiência</a>
                        <a href={"#projects"} >Projetos</a>
                    </div>
                </NavBar>

                <Presentation>
                    Olá, eu sou<br/>
                    <div>Iuri Silva <br/> </div>
                    Desenvolvedor Front-end & UI Designer.
                </Presentation>
                <div className={"buttons"} >
                    <Button color={"purple"}> <img src={Linkedin} /> Linkedin</Button>
                    <Button color={"pink"}> <img src={Github} /> GitHub</Button>
                </div>
            </Content>
        </Container>
    )
}

export default MainSection