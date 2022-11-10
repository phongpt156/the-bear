import React from "react";
import style from "./bear.module.css"
import HeaderBG from "./Images/11.svg"
import SecondBG from "./Images/BG55.png"
import PlanetTim from "./Images/PLANET TIM.png"
import HomeIcon from "./Images/BEAR-HOME-UI_UX 1.png"
import BearLogo from "./Images/BEAR LOGO.png"
import MenuIcon from "./Images/MENU ICON.png"
import TBG from "./Images/Group 1000002545.png"
import PlanetDo from "./Images/PLANET DO.png"
import { BsMouse } from "react-icons/bs"
import hiddenBearGang from "./Images/BEAR GANG-0610 1.svg"
import { useRef, useEffect, useState } from "react"
import Planet_Do1 from "./Images/PLANET DO1.svg"
import Planet_Tim1 from "./Images/PLANET TIM1.svg"
import CarouselSlider from "./CarouselSlider/Slider";


function Bear() {

    const ref = useRef(null)
    useEffect(() => {
        var element = ref.current

        const transformTop = "translate(-50%, -113%)"
        const transformNorm = "translate(-50%, -35%)"
        if (window.outerWidth > 1400) {
            window.addEventListener('scroll', function () {
                if (window.scrollY > 10) {
                    element.style.transform = transformTop
                } else {
                    element.style.transform = transformNorm
                }
            })
        }

    }, [])





    

    return (
        <>
            <header>
                <div className={style.head}>
                    <img src={HomeIcon} className={style.HeadIcons} alt="" />
                    <img src={BearLogo} style={{ cursor: "pointer", width: "23vh", zIndex: "1" }} alt="" />
                    <img src={MenuIcon} className={style.HeadIcons} alt="" />
                </div>
                <h2 className={style.inc}>WELCOME TO</h2>
                <div className={style.heading}><img src={TBG} alt="" className={style.headIMG} /></div>
                <img src={HeaderBG} alt="" className={style.header_bg} />
                <img src={PlanetTim} alt="" className={style.planet_tim} />
                <img src={PlanetDo} alt="" className={style.planet_do} />
                <div className={style.icons_explore}>
                    <BsMouse style={{ height: "3.5vh", width: "3.5vh" }} />
                    <p>SCROLL DOWN TO EXPLORE</p>
                </div>
            </header>
            <div className={style.hiddenBear} ref={ref} >
                <img src={hiddenBearGang} alt="" className={style.hiddenImg} />
            </div>
            <article>
                <img src={SecondBG} alt="" className={style.second_bg} />
                <img src={Planet_Do1} alt="" className={style.planet_do1} />
                <img src={Planet_Tim1} alt="" className={style.planet_tim1} />

                <div className={style.pong}>
                    <div className={style.slider}>
                        <CarouselSlider />
                    </div>
                    <div className={style.introduce}>
                        <h5>WHO ARE WE?</h5>
                        <p>We are The Paparazzi of The Galaxy, who travel across the galaxy to keep the Earth updated with the most exquisite, insightful and laughable news in entertainment, lifestyle, technology, gaming and We save the humanity from being out-of-date, out-of-style and most importantly, out-of-news.</p>
                        <button className={style.first_button}>OWN A BEAR NOW</button>
                        <button className={style.second_button}>READ OUR NEWS</button>
                    </div>
                </div>
            </article>
            <footer></footer>
        </>
    )
};

export default Bear