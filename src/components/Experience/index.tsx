import {Container, Content, Experiences, Description } from './styles'
import {useState} from "react";

const Experience = () => {
    const [actived, setActived] = useState(0)

    const jobs = [
        {
            name: "Digital House",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
            role: "Professor conteudista em Frontend",
            time: "Nov 2021 - Atual"
        },
        {
            name: "Código Fonte TV",
            desc: "Código Fonte TV Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
            role: "Professor conteudista em Frontend",
            time: "Nov 2021 - Atual"
        },
        {
            name: "Zuplae",
            desc: "Zuplae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
            role: "Professor conteudista em Frontend",
            time: "Nov 2021 - Atual"
        },
        {
            name: "ContWeb",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
            role: "Professor conteudista em Frontend",
            time: "Nov 2021 - Atual"
        },
        {
            name: "iuricode",
            desc: "iuricode Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
            role: "Professor conteudista em Frontend",
            time: "Nov 2021 - Atual"
        },
        {
            name: "Freelancer",
            desc: "Freelancer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
            role: "Professor conteudista em Frontend",
            time: "Nov 2021 - Atual"
        }
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
                                    <p>{value.name}</p>
                                </div>
                            )
                        })}
                    </Experiences>
                </div>

                <Description>
                    <div className={"title"} >
                        <h2>{jobs[actived].role}</h2>
                        <p>{jobs[actived].time}</p>
                    </div>
                    <h4>{jobs[actived].name}</h4>

                    <p> {jobs[actived].desc} </p>
                </Description>
            </Content>
        </Container>
    )
}

export default Experience