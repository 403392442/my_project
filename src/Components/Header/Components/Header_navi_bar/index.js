import React, {useState} from 'react'

import './index.css'
import {APPAREL_URL, NEW_RELEASE_URL, TACKLE_URL, BUNDLES_URL, TERMINAL_URL, GEAR_URL,
    RODS_REELS_URL, TEAM_URL, MAIN_PAGE_URL, ACCOUNT_URL, CART_URL} from "../../../../Utils/utils";


export default function Index() {

    const [clickSearch, setClickSearch] = useState(false);
    const [searchItem, setSearchItem] = useState('');
    const [hoverNew, setHoverNew] = useState(false);
    const [hoverApparel, setHoverApparel] = useState(false);
    const [hoverTackle, setHoverTackle] = useState(false);
    const [hoverBundle, setHoverBundle] = useState(false);
    const [hoverGear, setHoverGear] = useState(false);
    const [hoverRodsReels, setHoverRodsReels] = useState(false);
    const [hoverTerminal, setHoverTerminal] = useState(false);
    const [hoverTeam, setHoverTeam] = useState(false);

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

  return (
    <div className='navi-container__div'>

      <div onClick={() => handleSearchIcon()} className='navi-left-search-container__div'>
        <span className='iconfont icon-search'></span>
      </div>

        {
            clickSearch? (
                <div className='navi-search-container__div'>
                    <input placeholder='Search our store' value={searchItem} onChange={e => handleSearchInputChange(e)} className='navi-search__input' type="text"/>
                    <button className='navi-search-cancel__button' onClick={() => handleCancelSearch()}>X</button>
                </div>
            ) : (
                <>
                    <div className='navi-center-directions-container__div'>
                        <div>
                            <ul className='navi-directions-left-container__ul'>
                                <li onMouseEnter={()=>setHoverNew(!hoverNew)} onMouseLeave={()=>setHoverNew(!hoverNew)}>
                                    {hoverNew ? (<a className='navi-directions__a--addUnderline' href={NEW_RELEASE_URL}>NEW</a>) : (<a href={NEW_RELEASE_URL}>NEW</a>)}
                                </li>
                                <li onMouseEnter={()=>setHoverApparel(!hoverApparel)} onMouseLeave={()=>setHoverApparel(!hoverApparel)}>
                                    {hoverApparel ? (<a className='navi-directions__a--addUnderline' href={APPAREL_URL}>APPAREL</a>) : (<a href={APPAREL_URL}>APPAREL</a>)}
                                </li>
                                <li onMouseEnter={()=>setHoverTackle(!hoverTackle)} onMouseLeave={()=>setHoverTackle(!hoverTackle)}>
                                    {hoverTackle ? (<a className='navi-directions__a--addUnderline' href={TACKLE_URL}>BAITS</a>) : (<a href={TACKLE_URL}>BAITS</a>)}
                                </li>
                                <li onMouseEnter={()=>setHoverBundle(!hoverBundle)} onMouseLeave={()=>setHoverBundle(!hoverBundle)}>
                                    {hoverBundle ? (<a className='navi-directions__a--addUnderline' href={BUNDLES_URL}>BUNDLES</a>) : (<a href={BUNDLES_URL}>BUNDLES</a>)}
                                </li>
                            </ul>
                        </div>
                        <div className='navi-directions-middle-container__div'>
                            <a href={MAIN_PAGE_URL}><img src='../../../../../public/GOOGAN_SQUAD_LOGO.png' alt="Googan Squad Logo"/></a>
                        </div>
                        <div>
                            <ul className='navi-directions-right-container__ul'>
                                <li onMouseEnter={()=>setHoverGear(!hoverGear)} onMouseLeave={()=>setHoverGear(!hoverGear)}>
                                    {hoverGear ? (<a className='navi-directions__a--addUnderline' href={GEAR_URL}>GEAR</a>) : (<a href={GEAR_URL}>GEAR</a>)}
                                </li>
                                <li onMouseEnter={()=>setHoverRodsReels(!hoverRodsReels)} onMouseLeave={()=>setHoverRodsReels(!hoverRodsReels)}>
                                    {hoverRodsReels ? (<a className='navi-directions__a--addUnderline' href={RODS_REELS_URL}>RODS & REELS</a>) : (<a href={RODS_REELS_URL}>RODS & REELS</a>)}
                                </li>
                                <li onMouseEnter={()=>setHoverTerminal(!hoverTerminal)} onMouseLeave={()=>setHoverTerminal(!hoverTerminal)}>
                                    {hoverTerminal ? (<a className='navi-directions__a--addUnderline' href={TERMINAL_URL}>TERMINAL</a>) : (<a href={TERMINAL_URL}>TERMINAL</a>)}
                                </li>
                                <li onMouseEnter={()=>setHoverTeam(!hoverTeam)} onMouseLeave={()=>setHoverTeam(!hoverTeam)}>
                                    {hoverTeam ? (<a className='navi-directions__a--addUnderline' href={TEAM_URL}>TEAM</a>) : (<a href={TEAM_URL}>TEAM</a>)}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='navi-right-account-cart-container__div'>
                        <a href={ACCOUNT_URL}><span className='iconfont icon-account'></span></a>
                        <a href={CART_URL}><span className='iconfont icon-cart'></span></a>
                    </div>
                </>
            )
        }


    </div>
  )
}
