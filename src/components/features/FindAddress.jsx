import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';



const FindAddress = () => {

    const navigate = useNavigate();
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);

            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        const userSearched = fullAddress.split(' ', 2)

        if (userSearched[0] === "서울" &&
            userSearched[1].substring(userSearched[1].length - 1, userSearched[1].length) === "구") {
            const gu = userSearched[1];
            navigate(`/landing`)
            // window.location.replace(`/list/${gu}/new`)
        } else {
            alert("현재는 서울지역만 서비스하고 있어요 ㅠ.ㅠ")
            navigate(`/address`)
        }
    }

    return (
        <>
            <DaumPostcode onComplete={handleComplete} />

            {/* <DaumPostcode
            onComplete={handleComplete}/> */}
        </>
    );
};

export default FindAddress