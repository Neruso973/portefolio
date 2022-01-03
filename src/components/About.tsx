import header from "../assets/header.png";
import github from "../assets/git.png";
import linkedin from "../assets/linkedin.png";

function About() {
  return (
    <div className="h-screen" id="about">
      <header>
        <img
          src={header}
          alt="banniere tech"
          className="h-72 w-screen bg-contain"
        />
      </header>
      <div>
        <h2 className="text-center text-7xl text-[#1B2271] mt-8">Nelson NTEPP</h2>
        <h3 className="text-center text-5xl text-[#1B2271] mt-8">
          Développeur web Full-Stack junior
        </h3>
        <div className="bg-[#37b5ae] h-1 w-6/12 ml-[26rem] mt-8"></div>
      </div>
      <div className="flex place-content-around mt-16">
        <div className="bg-white h-60 w-52 ml-16">
          <img src="" alt="" />
        </div>
        <div>
          <ul className="text-2xl text-[#1B2271]">
            <li className="flex space-x-3 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <p>Bordeaux, 33000</p>
            </li>
            <li className="flex space-x-3 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p>nelson.ntepp@icloud.com</p>
            </li>
            <li className="flex space-x-3 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p>(+33)6 64 76 48 64</p>
            </li>
            <li className="flex space-x-3 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <p>En recherhce de stage ou d'alternance</p>
            </li>
          </ul>
          <div className="flex place-content-around mt-10">
            <a href="http://www.linkedin.com/in/nelson-ntepp-5a6224221">
              <img src={linkedin} alt="logo linkedin" className="w-16 h-16" />
            </a>
            <a href="https://github.com/Neruso973/">
              <img src={github} alt="logo github" className="w-16 h-16" />
            </a>
          </div>
        </div>
        <div className="w-4/12 h-64 bg-[#47607C] rounded-3xl">
          <p className="text-white p-4">
            Intéressé depuis toujours par l’informatique, j’ai commencer à
            acquérir mon expérience en autodidacte. En commençant par le
            Hardware, via le montage et la maintenance de nombreux PC, et
            smartphone, puis je me suis intéressé au développement web.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
