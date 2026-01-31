import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
// import logo from "../assets/.png";

export default function Navbar(){
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-bold text-cyan-400">Manasa Kanda</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/manasa-kanda/"
        target="_blank"
        ><FaLinkedin /> </a>  


       <a
       href="https://github.com/manasakanda"
       target="_blank" >
        <FaGithub /> </a> 
        
      </div>
    </nav> 
  );
};



