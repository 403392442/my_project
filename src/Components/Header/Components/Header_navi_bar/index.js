import React, {useState} from 'react'

import './index.css'
import {
    APPAREL_URL, NEW_RELEASE_URL, BAITS_URL, BUNDLES_URL, TERMINAL_URL, GEAR_URL,
    RODS_REELS_URL, TEAM_URL, MAIN_PAGE_URL, ACCOUNT_URL, CART_URL
} from "../../../../Utils/utils";
import ApparelDetails from './Components/Apparel_details';
import BaitsDetails from "./Components/Baits_details";
import GearDetails from "./Components/Gear_details";
import RodsAndReelsDetails from "./Components/Rods_and_Reels_details";
import TerminalDetails from "./Components/Terminal_details";
import BundlesDetails from "./Components/Bundles_details";
import TeamDetails from "./Components/Team_details";

export default function Index() {

    const [clickSearch, setClickSearch] = useState(false);
    const [searchItem, setSearchItem] = useState('');

    const [hoverDropDown, setHoverDropDown] = useState(null);

    const handleSearchIcon = () => {
        if (!clickSearch) {
            setClickSearch(true);
        } else {
            console.log('jump to result')
        }
    }

    const handleSearchInputChange = (e) => {
        const input = e.target.value;
        setSearchItem(input);
    }

    const handleCancelSearch = () => {
        setClickSearch(false);
    }

    const handleItemMouseEnter = (component) => {
        setHoverDropDown(component)
    }

    const handleMouseLeaveDropDown = () => {
        setHoverDropDown(null)
    }

  return (
      <div className='navi-container__div' onMouseLeave={handleMouseLeaveDropDown}>

          {
              clickSearch ? (
                  <div className='navi-search-container__div'>
                      <span className='iconfont icon-search'></span>
                      <input placeholder='Search our store' value={searchItem}
                             onChange={e => handleSearchInputChange(e)} className='navi-search__input' type="text"/>
                      <button className='navi-search-cancel__button' onClick={() => handleCancelSearch()}>X</button>
                </div>
            ) : (
                <>
                    <div onClick={() => handleSearchIcon()} className='navi-left-search-container__div'>
                        <span className='iconfont icon-search'></span>
                    </div>
                    <div className='navi-center-directions-container__div'>
                        <div>
                            <ul className='navi-directions-left-container__ul'>
                                <li onMouseEnter={handleMouseLeaveDropDown}>
                                    <a href={NEW_RELEASE_URL}>NEW</a>
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<ApparelDetails handleMouseLeaveDropDown={handleMouseLeaveDropDown}/>)}>
                                    <a href={APPAREL_URL}>APPAREL</a>
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<BaitsDetails handleMouseLeaveDropDown={handleMouseLeaveDropDown} /> )}>
                                    <a href={BAITS_URL}>BAITS</a>
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<BundlesDetails handleMouseLeaveDropDown={handleMouseLeaveDropDown} /> )}>
                                    <a href={BUNDLES_URL}>BUNDLES</a>
                                </li>
                            </ul>
                        </div>
                        <div className='navi-directions-middle-container__div'>
                            <a href={MAIN_PAGE_URL}><img src='../../../../../public/GOOGAN_SQUAD_LOGO.png' alt="Googan Squad Logo"/></a>
                        </div>
                        <div>
                            <ul className='navi-directions-right-container__ul'>
                                <li onMouseEnter={()=>handleItemMouseEnter(<GearDetails handleMouseLeaveDropDown={handleMouseLeaveDropDown} />)}>
                                    <a href={GEAR_URL}>GEAR</a>
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<RodsAndReelsDetails handleMouseLeaveDropDown={handleMouseLeaveDropDown} />)}>
                                    <a href={RODS_REELS_URL}>RODS & REELS</a>
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<TerminalDetails handleMouseLeaveDropDown={handleMouseLeaveDropDown} />)}>
                                    <a href={TERMINAL_URL}>TERMINAL</a>
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<TeamDetails handleMouseLeaveDropDown={handleMouseLeaveDropDown} />)}>
                                    <a href={TEAM_URL}>TEAM</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='navi-right-account-cart-container__div'  onMouseEnter={handleMouseLeaveDropDown}>
                        <a href={ACCOUNT_URL}><span className='iconfont icon-account'></span></a>
                        <a href={CART_URL}><span className='iconfont icon-cart'></span></a>
                    </div>
                </>
            )
        }

        <div className='navi-detail-container--scroll-down__div'>
            {hoverDropDown !== null ? hoverDropDown : null}
        </div>


    </div>
  )
}
