import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AlarmAlert = ({ newNotice, setNewNotice }) => {
    const navigate = useNavigate()
    const userLocation = localStorage.getItem('location')
    useEffect(() => {
        if (newNotice.alarmType !== undefined) {
            setTimeout(() => { setNewNotice({}) }, 4000);
        }
    }, [newNotice])

    const clickMove = () => {
        if (newNotice.alarmType === "eventNewChat") {
            let regex = /[^0-9]/g;
            let result = newNotice.articlesId.replace(regex, "");
            window.location.replace(`/ChatRoomPage/${result}`);
        } else if (newNotice.alarmType === "eventGuPost") {
            let regex = /[^0-9]/g;
            let result = newNotice.articlesId.replace(regex, "");
            navigate(`/detail/${result}`)
        }
        else {
            let regex = /[^0-9]/g;
            let result = newNotice.articlesId.replace(regex, "");
            navigate(`/detail/${result}`)
        }
    }

    return (
        <div key={Math.random()}>
            {
                newNotice.message !== undefined && userLocation !== "chat" ? (
                    <div className='absolute left-[18px] top-[70px] w-[324px] z-30
                    bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-[4px] flex items-center px-[40px] py-[22px]  '>
                        <div className='absolute w-[8px] h-[8px] bg-bbred z-30 rounded-full 
                       top-[28px] left-4 animate-ping'></div>
                        <p
                            onClick={() => clickMove()}
                            className='text-b11 font-medium text-bb66 break-all'>
                            {newNotice.message}
                        </p>
                    </div>
                ) : ''
            }
        </div>

    )
}

export default AlarmAlert