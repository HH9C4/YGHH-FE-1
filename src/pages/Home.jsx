import React from 'react'
import { useLocation } from 'react-router-dom';
import Likes from '../components/features/Likes';
import FindAddress
    from '../components/features/FindAddress';
const Home = () => {
    const location = useLocation();
    const KAKAO_CODE = location.search.split('=')[1];


    return (
        <div>Home입니다


            <FindAddress>asdas</FindAddress>

        </div>
    )
}

export default Home