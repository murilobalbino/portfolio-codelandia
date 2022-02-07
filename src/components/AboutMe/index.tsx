import { Container, Content, Photo } from './styles'

import Button from '../Button'

import Twitter from './assets/twitter.svg'
import Twitch from './assets/twitch.svg'
import Youtube from './assets/youtube.svg'
import Figma from './assets/figma.svg'
import CodePen from './assets/codepen.svg'
import Facebook from './assets/facebook.svg'

import Cloud from './assets/cloud.svg'
import Mail from './assets/mail.svg'


const AboutMe = () => {
    return (
        <Container id={"#sobre"}>
            <Content>
                <Photo></Photo>

                <div>
                    <h3>SOBRE MIM</h3>
                    <h4>Guarantã, Brasil</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.<br/> Praesent id egestas dui.
                        Nullam finibus aliquam enim quis<br/> faucibus.
                        Aenean ac commodo dolor, nec bibendum velit.
                    </p>
                    <div className={"icons"}>
                        <a href={""} > <img src={Twitter} />  </a>
                        <a href={""} > <img src={Twitch} />  </a>
                        <a href={""} > <img src={Youtube} />  </a>
                        <a href={""} > <img src={Figma} />  </a>
                        <a href={""} > <img src={CodePen} />  </a>
                        <a href={""} > <img src={Facebook} />  </a>
                    </div>
                    <div className={"btn"} >
                        <Button color={"pink"}> <img src={Cloud} /> Currículo </Button>
                        <Button color={"purple"}> <img src={Mail} /> E-mail </Button>
                    </div>
                </div>
            </Content>
        </Container>
    )
}

export default AboutMe