import { NAVER_AUTH_URL } from "../../api/loginKeys"
import naverLogin2 from "../../assets/img/naverLogin2.png"
import naverLogin from "../../assets/img/g372.svg"
const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const handleLogin = () => {
    window.location.href = NAVER_AUTH_URL
  }
  return <img alt='naverlogin' className='w-[20px] h-[19px]' type="button" onClick={handleLogin} src={naverLogin}></img>
}

export default NaverLogin
