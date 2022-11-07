import React from 'react'
import { useLocation } from 'react-router-dom';
import Likes from '../components/features/Likes';

const Home = () => {
    const location = useLocation();
    const KAKAO_CODE = location.search.split('=')[1];


    return (
        <div>Home입니다
            {/* <h3>{KAKAO_CODE}</h3> */}
            <Likes />
        </div>
    )
}

export default Home