import {Container, Content, Experiences, Description } from './styles'
import {useState} from "react";

const Experience = () => {
    const [actived, setActived] = useState(0)

    const jobs = [
        "Digital House",
        "Código Fonte TV",
        "Zuplae",
        "ContWeb",
        "iuricode",
        "Freelancer"
    ]

    return (
        <Container id={"experience"} >
            <Content>
                <div>
                    <h2>experiência</h2>
                    <Experiences>
                        {jobs.map((value, index) => {
                            return (
                                <div key={index} className={actived === index ? "active" : ""} onClick={() => setActived(index)} >
                                    <p>{value}</p>
                                </div>
                            )
                        })}
                    </Experiences>
                </div>

                <Description>
                    <div className={"title"} >
                        <h2>Professor conteudista em Frontend</h2>
                        <p>Nov 2021 - Atual</p>
                    </div>
                    <h4>Digital House</h4>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus <br/>
                        risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. <br/>
                        Nullam sit amet mauris condimentum, volutpat augue in, mattis urna. <br/>
                    </p>

                </Description>
            </Content>
        </Container>
    )
}

export default Experience