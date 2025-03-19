import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="" target="_blank" rel="noreferrer" ><FaAngellist /></a>
    </div>
  )
}

export default HeaderSocials