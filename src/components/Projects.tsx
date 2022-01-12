import Portfolio from "./Portfolio"
import { portfolio } from "../data/portfolio"

function Projects() {
    return (
        <div className="h-screen" id="projects">
            <h3 className="text-2xl ml-4">Mes PROJETS</h3>
      <div className="bg-[#1B2271] w-16 h-1 mb-6 ml-28"></div>
            {portfolio.map((item) => <Portfolio name={item.name} screen={item.screen} link={item.link} technos={item.technos} github={item.github} />)}
        </div>
    )
}

export default Projects
