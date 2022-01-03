import header from "../assets/header.png";


function About() {
    return (
        <div className="h-screen" id="about">
            <header>
                <img src={header} alt="banniere tech" className="h-60 w-screen bg-contain"/>
            </header>
            <div>
                <h2 className="text-center text-6xl ">Nelson NTEPP</h2>
            </div>
        </div>
    )
}

export default About
