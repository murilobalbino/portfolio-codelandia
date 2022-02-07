import {Container, Content} from './styles'

import Logo from './assets/Logo.svg'

const Footer = () => {
    return (
        <Container>
            <Content>
                <p>@ 2022 - Iuri Silva</p>
                <p>Powered by <img src={Logo} className={"logo"} /></p>
            </Content>
        </Container>
    )
}

export default Footer