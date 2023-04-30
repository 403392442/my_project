import React, {useEffect} from 'react';

import './index.css';
import {
    RODS_AND_REELS_BLACK_SERIES_RODS_URL, RODS_AND_REELS_GOLD_SERIES_RODS_URL, RODS_AND_REELS_GREEN_SERIES_RODS_URL,
    RODS_AND_REELS_RODS_URL, RODS_AND_REELS_SPINNING_REELS_URL
} from "../../../../../../Utils/utils";


function Index(props) {

    useEffect(() => {
        setHovering('rods&reels')
        return () => {
            setHovering(null)
        }
    })

    const {handleMouseLeaveDropDown, setHovering} = props;

    return (
        <div className='rods-and-reels-details-container__div' onMouseLeave={handleMouseLeaveDropDown}>
            <div className='rods-and-reels-detail-item-reels'>
                <a className='rods-and-reels-detail-item-topic__a' href={RODS_AND_REELS_SPINNING_REELS_URL}><p>SPINNING REELS</p></a>
            </div>
            <div className='rods-and-reels-detail-item-rods'>
                <a className='rods-and-reels-detail-item-topic__a' href={RODS_AND_REELS_RODS_URL}><p>RODS</p></a>
                <a className='rods-and-reels-detail-item-category__a' href={RODS_AND_REELS_BLACK_SERIES_RODS_URL}><p>BLACK SERIES RODS</p></a>
                <a className='rods-and-reels-detail-item-category__a' href={RODS_AND_REELS_GOLD_SERIES_RODS_URL}><p>GOLD SERIES RODS</p></a>
                <a className='rods-and-reels-detail-item-category__a' href={RODS_AND_REELS_GREEN_SERIES_RODS_URL}><p>GREEN SERIES RODS</p></a>
            </div>
        </div>
    );
}

export default Index;