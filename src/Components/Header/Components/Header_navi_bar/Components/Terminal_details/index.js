import React, {useEffect} from 'react';

import './index.css';
import {
    TERMINAL_CRAPPIE_JIGS_URL,
    TERMINAL_GOLD_SERIES_HOOKS_URL,
    TERMINAL_GREEN_SERIES_HOOKS_URL,
    TERMINAL_HOOKS_URL, TERMINAL_LINE_URL, TERMINAL_TUNGSTEN_URL

} from "../../../../../../Utils/utils";


function Index(props) {

    useEffect(() => {
        setHovering('terminal')
        return () => {
            setHovering(null)
        }
    })

    const {handleMouseLeaveDropDown, setHovering} = props;

    return (
        <div className='terminal-details-container__div' onMouseLeave={handleMouseLeaveDropDown}>
            <div className='terminal-detail-item-hooks'>
                <a className='terminal-detail-item-topic__a' href={TERMINAL_HOOKS_URL}><p>HOOKS</p></a>
                <a className='terminal-detail-item-category__a' href={TERMINAL_GREEN_SERIES_HOOKS_URL}><p>GREEN SERIES HOOKS</p></a>
                <a className='terminal-detail-item-category__a' href={TERMINAL_GOLD_SERIES_HOOKS_URL}><p>GOLD SERIES HOOKS</p></a>
            </div>
            <div className='terminal-detail-item-other'>
                <a className='terminal-detail-item-topic__a' href={TERMINAL_TUNGSTEN_URL}><p>TUNGSTEN</p></a>
                <a className='terminal-detail-item-topic__a' href={TERMINAL_LINE_URL}><p>LINE</p></a>
                <a className='terminal-detail-item-topic__a' href={TERMINAL_CRAPPIE_JIGS_URL}><p>CRAPPIE JIGS</p></a>
            </div>
        </div>
    );
}

export default Index;