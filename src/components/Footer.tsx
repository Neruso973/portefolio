import github from "../assets/git-footer.png";

function Footer() {
  return (
    <div className="footer bg-[#47607C] h-60">
      <footer className="flex justify-around">
      <div className="w-3/12 bg-white">
        <h3>Contact</h3>
        <p></p>
      </div>
       <div className="w-3/12 h-60 text-[#1B2271]">
         <div className="w-6/12 text-center m-12">
          <p>Site web designer et réaliser avec React-TS / tailwind par Nelson NTEPP</p>
          <a href="https://github.com/Neruso973/portefolio">
            <img src={github} alt="logo github" className="w-12 h-12 ml-12 mt-4"/>
          </a>
         </div>
       </div>
       <div className="w-3/12 bg-white"></div>
      </footer>
    </div>
  );
}

export default Footer;
