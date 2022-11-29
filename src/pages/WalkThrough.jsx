import React from 'react'
import Slider from 'react-slick'
import Layout from '../components/layout/Layout';
import walkthorugh1 from "../assets/img/walkthrough1.svg"
import walkthorugh2 from "../assets/img/walkthrough2.svg"
import walkthorugh3 from "../assets/img/walkthrough3.svg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const WalkThrough = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate();
    console.log(currentPage);

    function NextArrow(props) {
        const { style, onClick } = props;
        const onNextPage = () => {
            onClick()
            handleNextSlide()
        }
        return (
            <>
                {
                    currentPage !== 3 ?
                        <div className='relative '>
                            <div className='h-[48px] w-[324px] absolute top-[110px]  bg-bbpurple text-center flex justify-center rounded-[90px]'>
                                <button
                                    className='text-white text-b14  font-medium leading-[17px] items-center'
                                    style={{ ...style }}
                                    onClick={onNextPage}
                                >다음으로</button>
                            </div>
                        </div> :
                        <div className='relative '>
                            <div className='h-[48px] w-[324px] absolute top-[110px]  bg-bbpurple text-center flex justify-center rounded-[90px]'>
                                <button
                                    onClick={() => navigate('/home')}
                                    className='text-white text-b14 font-medium leading-[17px] items-center'>시작하기</button>
                            </div>
                        </div>
                }
            </>
        );
    }

    function PrevArrow(props) {
        const { style, onClick } = props;
        const onPreviousPage = () => {
            onClick()
            handlePrevSlide()
        }
        return (
            <div
                style={{ ...style, display: "block" }}
                onClick={onPreviousPage}
            />
        );
    }
    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "test-css",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div

                style={{
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        )
    };

    const handlePrevSlide = () => {
        // Slider.current.onClick();
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
        console.log("내려감?", currentPage);
    };
    const handleNextSlide = () => {
        // Slider.current.onClick();
        setCurrentPage(currentPage + 1);
        console.log("올라감?", currentPage);
    };

    return (
        <div className="bg-bbLpurple pb-[96px]  max-w-[750px] h-full min-h-[100vh]">
            <div className='flex h-[46px] px-[26px] justify-end items-end'>
                <button
                    onClick={() => setCurrentPage(3)}
                    className='text-b14 font-medium'>건너뛰기</button>
            </div>
            <div className='w-[324px] mx-auto'>
                <Slider {...settings}>
                    <div className='mx-auto'>
                        <div className='mt-[87px]'>
                            <img
                                className='w-[281px] mx-auto h-[204px]'
                                alt='서울시 스팟 곳곳의 인구 밀집 정도를
                                    연령별, 성별, 시간별로 다양하게 파악해요'
                                src={walkthorugh1}>
                            </img>
                        </div>
                        <p className='text-center pt-[36px] text-b14 font-medium'>서울시 스팟 곳곳의 인구 밀집 정도를<br />
                            연령별, 성별, 시간별로 다양하게 파악해요</p>
                    </div>
                    <div className='mx-auto'>
                        <div className='mt-[87px]'>
                            <img
                                className='w-[105px] mx-auto h-[210px]'
                                alt='지역별 커뮤니티를 통해
                                실시간으로 여러 소식을 주고받아요 '
                                src={walkthorugh2}>
                            </img>
                        </div>
                        <p className='text-center mt-[36px] text-b14 font-medium'>지역별 커뮤니티를 통해<br />
                            실시간으로 여러 소식을 주고받아요 </p>
                    </div>
                    <div className='mx-auto'>
                        <div className='mt-[87px]'>
                            <img
                                className='w-[183px] mx-auto h-[183px]'
                                alt='자주 가는 곳을 북마크해
                                쉽게 관리해요'
                                src={walkthorugh3}>
                            </img>
                        </div>
                        <p className='text-center mt-[53px] text-b14 font-medium'>자주 가는 곳을 북마크해<br />
                            쉽게 관리해요</p>
                    </div>

                </Slider>

            </div>
        </div>
    );

}

export default WalkThrough