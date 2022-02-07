import {Content, Container, ProjectsContainer} from './styles'

import Button from "../Button";

import Link from './assets/link.svg'

const Projects = () => {

    const ProjectsArray = [
        {
            name: "Nome Do Projeto",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
            techs: "Tecnologias usadas no projeto",
            img: ""
        },
        {
            name: "Nome Do Projeto",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
            techs: "Tecnologias usadas no projeto",
            img: ""
        },
        {
            name: "Nome Do Projeto",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
            techs: "Tecnologias usadas no projeto",
            img: ""
        },
        {
            name: "Nome Do Projeto",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
            techs: "Tecnologias usadas no projeto",
            img: ""
        }
    ]

    return (
        <Container id={"projects"} >
            <Content>
                <h1>PROJETOS</h1>

                <ProjectsContainer>
                    {ProjectsArray.map((value, index) => {
                        if( index > 3 ) return;
                        return (
                            <div className={""} key={index} >
                                <div className={"project-photo"} > {value.img.length < 0 ? <img src={value.img} /> : ""} </div>
                                <h1>{value.name}</h1>
                                <p>
                                    {value.description}
                                </p>
                                <h6>{value.techs}</h6>
                                <Button color={"purple"} className={""} > <img src={Link} /> Visualizar</Button>
                            </div>
                        )
                    })}
                </ProjectsContainer>
            </Content>
        </Container>
    )
}

export default Projects
