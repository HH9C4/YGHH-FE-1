import { NAVER_AUTH_URL } from "../../api/loginKeys"
import naverLogin2 from "../../assets/img/naverLogin2.png"
const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const handleLogin = () => {
    window.location.href = NAVER_AUTH_URL
  }
  return <img type="button" onClick={handleLogin} src={naverLogin2}></img>
}

export default NaverLogin
