import React from 'react';

import './index.css';
import {
    BAITS_CRANK_BAITS_URL,
    BAITS_CRAPPIE_BAITS_URL,
    BAITS_CRAW_AND_CREATURE_URL,
    BAITS_FLAMIN_HOT_URL,
    BAITS_HARD_BAITS_URL,
    BAITS_JERK_AND_SWIM_URL,
    BAITS_JERK_BAITS_URL,
    BAITS_JIGS_URL,
    BAITS_MICRO_URL,
    BAITS_SOFT_BAITS_URL,
    BAITS_SPINNER_BAITS_URL,
    BAITS_SWIM_BAITS_URL,
    BAITS_TOADS_URL,
    BAITS_TOP_WATER_URL,
    BAITS_TRAILERS_URL,
    BAITS_TUBES_URL,
    BAITS_WORMS_AND_FINESSE_URL,
    NEW_RELEASE_URL
} from '../../../../../../Utils/utils'

function Index(props) {

    return (
        <div className='baits-details-container__div'>
            <div className='baits-detail-item-new-release'>
                <a className='baits-detail-item-topic__a' href={NEW_RELEASE_URL}><p>2023 NEW RELEASE</p></a>
            </div>
            <div className='baits-detail-item-soft-baits'>
                <a className='baits-detail-item-topic__a' href={BAITS_SOFT_BAITS_URL}><p>SOFT BAITS</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_CRAW_AND_CREATURE_URL}><p>CRAW & CREATURE</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_WORMS_AND_FINESSE_URL}><p>WORMS & FINESSE</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_JERK_AND_SWIM_URL}><p>JERK & SWIM</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_TOADS_URL}><p>TOADS</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_TRAILERS_URL}><p>TRAILERS</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_TUBES_URL}><p>TUBES</p></a>
            </div>
            <div className='baits-detail-item-hard-baits'>
                <a className='baits-detail-item-topic__a' href={BAITS_HARD_BAITS_URL}><p>HARD BAITS</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_JIGS_URL}><p>JIGS</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_CRANK_BAITS_URL}><p>CRANK BAITS</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_JERK_BAITS_URL}><p>JERK BAITS</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_SPINNER_BAITS_URL}><p>SPINNER BAITS</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_SWIM_BAITS_URL}><p>SWIM BAITS</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_TOP_WATER_URL}><p>TOP WATER</p></a>
                <a className='baits-detail-item-category__a' href={BAITS_MICRO_URL}><p>MICRO</p></a>
            </div>
            <div className='baits-detail-item-other'>
                <a className='baits-detail-item-topic__a' href={BAITS_CRAPPIE_BAITS_URL}><p>CRAPPIE BAITS</p></a>
                <a className='baits-detail-item-topic__a' href={BAITS_FLAMIN_HOT_URL}><p>FLAMIN' HOT</p></a>
            </div>
        </div>
    );
}

export default Index;