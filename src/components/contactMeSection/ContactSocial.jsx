import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sachith-kavishka-aa7687313/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/SACHITH-KAVISHKA" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/s_kavishka_/" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.facebook.com/sachith.kavishka.752/" Icon={FaFacebook} />
    </div>
  );
};

export default ContactSocial;
