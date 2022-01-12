import cv from "../assets/CV\ nelson\ ntepp.pdf";

function Cv() {
    return (
        <div className="h-screen" id="cv">
            {/* <embed src={cv} className="h-[40rem] w-96"/> */}
            <a href={cv} download="CV\ nelson\ ntepp.pdf">
                <button> Telecharger le cv</button>
            </a>
        </div>
    )
}

export default Cv
