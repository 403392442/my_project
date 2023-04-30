import React from 'react';

import './index.css';
import {
    GEAR_ACCESSORIES_URL,
    GEAR_DECALS_URL,
    GEAR_GIFT_CARD_URL,
    GEAR_LINE_URL,
    GEAR_STORAGE_URL,
    GEAR_SUNGLASSES_URL,
    GEAR_TACKLE_BAGS_URL,
    GEAR_TOOLS_URL,
    GEAR_UTILITY_BOXES_URL
} from "../../../../../../Utils/utils";


function Index(props) {

    const handleMouseLeaveDropDown = props.handleMouseLeaveDropDown;

    return (
        <div className='gears-details-container__div' onMouseLeave={handleMouseLeaveDropDown}>
            <div className='gears-detail-item-storage'>
                <a className='gears-detail-item-topic__a' href={GEAR_STORAGE_URL}><p>STORAGE</p></a>
                <a className='gears-detail-item-category__a' href={GEAR_TACKLE_BAGS_URL}><p>TACKLE BAGS</p></a>
                <a className='gears-detail-item-category__a' href={GEAR_UTILITY_BOXES_URL}><p>UTILITY BOXES</p></a>
            </div>
            <div className='gears-detail-item-other'>
                <a className='gears-detail-item-topic__a' href={GEAR_TOOLS_URL}><p>TOOLS</p></a>
                <a className='gears-detail-item-topic__a' href={GEAR_LINE_URL}><p>LINE</p></a>
                <a className='gears-detail-item-topic__a' href={GEAR_SUNGLASSES_URL}><p>SUNGLASSES</p></a>
                <a className='gears-detail-item-topic__a' href={GEAR_DECALS_URL}><p>DECALS</p></a>
                <a className='gears-detail-item-topic__a' href={GEAR_GIFT_CARD_URL}><p>GIFT CARDS</p></a>
                <a className='gears-detail-item-topic__a' href={GEAR_ACCESSORIES_URL}><p>ACCESSORIES</p></a>
            </div>
        </div>
    );
}

export default Index;