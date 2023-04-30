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
    const [hovering, setHovering] = useState(null);


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
                                    <a className='new-option__a' href={NEW_RELEASE_URL}>NEW</a>
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<ApparelDetails setHovering={setHovering} handleMouseLeaveDropDown={handleMouseLeaveDropDown}/>)}>
                                    {hovering === 'apparel' ? <a className='add-underline' href={APPAREL_URL}>APPAREL</a> : <a href={APPAREL_URL}>APPAREL</a>}
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<BaitsDetails setHovering={setHovering} handleMouseLeaveDropDown={handleMouseLeaveDropDown} /> )}>
                                    {hovering === 'baits' ? <a className='add-underline' href={BAITS_URL}>BAITS</a> : <a href={BAITS_URL}>BAITS</a>}
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<BundlesDetails setHovering={setHovering} handleMouseLeaveDropDown={handleMouseLeaveDropDown} /> )}>
                                    {hovering === 'bundles' ? <a className='add-underline' href={BUNDLES_URL}>BUNDLES</a> : <a href={BUNDLES_URL}>BUNDLES</a>}
                                </li>
                            </ul>
                        </div>
                        <div className='navi-directions-middle-container__div'>
                            <a href={MAIN_PAGE_URL}><img src='../../../../../public/GOOGAN_SQUAD_LOGO.png' alt="Googan Squad Logo"/></a>
                        </div>
                        <div>
                            <ul className='navi-directions-right-container__ul'>
                                <li onMouseEnter={()=>handleItemMouseEnter(<GearDetails setHovering={setHovering} handleMouseLeaveDropDown={handleMouseLeaveDropDown} />)}>
                                    {hovering === 'gear' ? <a className='add-underline' href={GEAR_URL}>GEAR</a> : <a href={GEAR_URL}>GEAR</a>}
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<RodsAndReelsDetails setHovering={setHovering} handleMouseLeaveDropDown={handleMouseLeaveDropDown} />)}>
                                    {hovering === 'rods&reels' ? <a className='add-underline' href={RODS_REELS_URL}>RODS & REELS</a> : <a href={RODS_REELS_URL}>RODS & REELS</a>}
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<TerminalDetails setHovering={setHovering} handleMouseLeaveDropDown={handleMouseLeaveDropDown} />)}>
                                    {hovering === 'terminal' ? <a className='add-underline' href={TERMINAL_URL}>TERMINAL</a> : <a href={TERMINAL_URL}>TERMINAL</a>}
                                </li>
                                <li onMouseEnter={()=>handleItemMouseEnter(<TeamDetails setHovering={setHovering} handleMouseLeaveDropDown={handleMouseLeaveDropDown} />)}>
                                    {hovering === 'team' ? <a className='add-underline' href={TEAM_URL}>TEAM</a> : <a href={TEAM_URL}>TEAM</a>}
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
