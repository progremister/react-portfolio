import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://www.instagram.com/dmytro.kolosovskyi/">
                <BsInstagram />
            </a>
            <a href="https://github.com/progremister">
                <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/dmytro-kolosovskyi-8963a8242/">
                <FaLinkedin />
            </a>
        </div>
    );
};

export default SocialMedia;
