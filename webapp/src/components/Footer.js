import GitHub from "../assets/images/github.png";
import LinkedIn from "../assets/images/linkedin.png";
import Email from "../assets/images/email.png";

export default function Footer() {
    return (
        <footer> 
            <div className="footer-container">
            <a className="footer-item" target="_blank" href="https://github.com/annabrisland">
            <img className="footer-icon" src={GitHub} alt="Github"></img>    
            </a> 
            <a className="footer-item" target="_blank" href="https://www.linkedin.com/in/anna-brisland/">
            <img className="footer-icon" src={LinkedIn} alt="LinkedIn"></img>    
            </a>  
            <a className="footer-item" href="mailto:annabrisland@gmail.com">
            <img className="footer-icon" src={Email}  alt="Email"></img>    
            </a>     
            </div> 
        </footer>
    )
}