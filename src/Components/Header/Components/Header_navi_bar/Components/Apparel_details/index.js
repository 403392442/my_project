import React from 'react';

import './index.css';
import {
    APPAREL_ACCESSORIES_URL,
    APPAREL_CASUAL_URL,
    APPAREL_GAITERS_URL,
    APPAREL_HALF_AND_QUARTER_ZIPS_URL,
    APPAREL_HAT_URL,
    APPAREL_HOODED_LONG_SLEEVE_URL,
    APPAREL_HOODED_LONG_SLEEVE_W_GAITER_URL,
    APPAREL_HOODIES_URL,
    APPAREL_JACKETS_AND_VESTS_URL,
    APPAREL_LAST_CHANCE_URL,
    APPAREL_LONG_SLEEVE_URL,
    APPAREL_PANTS_URL,
    APPAREL_PERFORMANCE_HOODIES_URL,
    APPAREL_PERFORMANCE_URL,
    APPAREL_POLO_URL,
    APPAREL_SALE_URL,
    APPAREL_SHIRT_OF_THE_MONTH_URL,
    APPAREL_SHOES_URL,
    APPAREL_SHORTS_URL,
    APPAREL_T_SHIRTS_URL
} from '../../../../../../Utils/utils'

function Index(props) {

    const handleMouseLeaveDropDown = props.handleMouseLeaveDropDown;

    return (
        <div className='apparel-details-container__div' onMouseLeave={handleMouseLeaveDropDown}>
            <div className='apparel-detail-item-brief'>
                <a className='apparel-detail-item-topic__a' href={APPAREL_SALE_URL}><p>SALE</p></a>
                <a className='apparel-detail-item-topic__a' href={APPAREL_SHORTS_URL}><p>SHORTS</p></a>
                <a className='apparel-detail-item-topic__a' href={APPAREL_PANTS_URL}><p>PANTS</p></a>
                <a className='apparel-detail-item-topic__a' href={APPAREL_SHOES_URL}><p>SHOES</p></a>
            </div>
            <div className='apparel-detail-item-casual'>
                <a className='apparel-detail-item-topic__a' href={APPAREL_CASUAL_URL}><p>CASUAL</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_HAT_URL}><p>HATS</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_T_SHIRTS_URL}><p>T-SHIRTS</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_SHIRT_OF_THE_MONTH_URL}><p>SHIRT OF THE MONTH</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_HOODIES_URL}><p>HOODIES</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_ACCESSORIES_URL}><p>ACCESSORIES</p></a>
            </div>
            <div className='apparel-detail-item-performance'>
                <a className='apparel-detail-item-topic__a' href={APPAREL_PERFORMANCE_URL}><p>PERFORMANCE</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_LONG_SLEEVE_URL}><p>LONG-SLEEVE</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_HOODED_LONG_SLEEVE_URL}><p>HOODED LONG-SLEEVE</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_HOODED_LONG_SLEEVE_W_GAITER_URL}><p>HOODED LONG-SLEEVE w/GAITER</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_PERFORMANCE_HOODIES_URL}><p>PERFORMANCE HOODIES</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_HALF_AND_QUARTER_ZIPS_URL}><p>HALF & QUARTER-ZIPS</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_JACKETS_AND_VESTS_URL}><p>JACKETS & VESTS</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_GAITERS_URL}><p>GAITERS</p></a>
                <a className='apparel-detail-item-category__a' href={APPAREL_POLO_URL}><p>POLOS</p></a>
            </div>
            <div className='apparel-detail-item-last-chance'>
                <a className='apparel-detail-item-topic__a' href={APPAREL_LAST_CHANCE_URL}><p>LASTS CHANCE</p></a>
            </div>
        </div>
    );
}

export default Index;