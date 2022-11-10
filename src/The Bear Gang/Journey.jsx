import React from "react";
import style from "./Journey.module.css"
import journeyBG from "./Images/BGjourney.svg"
import journeyBackground from "./Images/Mediamodifier-Design (7).svg"
import { useRef, useEffect } from "react"
import journey1 from './Images/journey 1.svg'
import line from "./Images/inline/Group 1000002660.png"
import spaceship from "./Images/inline/SPACESHIP 1.svg"
import component1 from "./Images/inline/Component 1.svg"
import component2 from "./Images/inline/Component 2.svg"
import component3 from "./Images/inline/Component 3.svg"
import component4 from "./Images/inline/Component 4.svg"
import eclipse from "./Images/inline/Ellipse 457.svg"
import bear1 from "./Images/inline/bear 1.svg"
import bear2 from "./Images/inline/bear 2.svg"
import bear3 from "./Images/inline/bear 3.svg"
import bear4 from "./Images/inline/bear 4.svg"
import secondEclipse from "./Images/inline/Ellipse 100.svg"



function Journey() {
  // console.log(window.innerWidth)
  const reffed = useRef(null)
  const refs = useRef(null)
  const refer = useRef(null)



  useEffect(() => {
    const ship = refs.current
    const ships = refer.current
    const element = reffed.current;

if (15<=1100) {
  window.addEventListener('scroll', function(){  
    // console.log(window.scrollY)
   if (this.window.scrollY>3000) {
    ships.style.top = 30 + "%"
   }
   if(this.window.scrollY>3200){
    ships.style.top = 45 + "%"
   }
   if(this.window.scrollY>3400){
    ships.style.top = 65 + "%"
   }
   if(this.window.scrollY>3600){
    ships.style.top = 80 + "%"
   }
   if(this.window.scrollY>3800){
    ships.style.top = 85 + "%"
   }
   if(this.window.scrollY>4000){
    ships.style.top = 100 + "%"
   }
   if(this.window.scrollY>4200){
    ships.style.top = 120 + "%"
   }
   if(this.window.scrollY>4400){
    ships.style.top = 140 + "%"
   }
   if(this.window.scrollY>4600){
    ships.style.top = 160 + "%"
   }
   if(this.window.scrollY>4800){
    ships.style.top = 180 + "%"
   }
   if(this.window.scrollY>5000){
    ships.style.top = 225 + "%"
   }
   if(this.window.scrollY>5200){
    ships.style.top = 250 + "%"
   }
   if(this.window.scrollY>5400){
    ships.style.top = 277 + "%"
   }



  });
}

if (1200>1100) {
  if (element) {
    const onWheel = e => {
      if (element.scrollLeft >= 3900 && e.deltaY > 0) {
        return () => element.removeEventListener("wheel", onWheel);

      }
      if (element.scrollLeft === 0 && e.deltaY < 0) {
        return () => element.removeEventListener("wheel", onWheel);

      }
      if (e.deltaY === 0) return;
      e.preventDefault();
      element.scrollTo({
        left: element.scrollLeft + e.deltaY,
      });
      // console.log(element.scrollLeft)
      // console.log(e.deltaY)
      // console.log(ship.style.left)
      const shipSwipe = e => {
        ship.style.left = element.scrollLeft / 80 + "%"
        if (element.scrollLeft < 400) {
          ship.style.left = "5%"
        }
        if (element.scrollLeft >= 3699) {
          ship.style.left = "60.75%"
        }
        if (element.scrollLeft > 3899) {
          ship.style.left = "70.75%"
        }
      }
      shipSwipe(e)
    };
    element.addEventListener("wheel", onWheel);

  }
}
  }, []);





  return (
    <>
      <div className={style.wrapper} ref={reffed}>
        <img src={journeyBG} className={style.journey_Bg} alt="" />
        <div className={style.journey_map}>
          <img src={journey1} className={style.journe} alt="" />
        </div>
        <div className={style.container}>
          <div className={style.first_block}>
            <img src={component4} alt="" className={style.component4} />
            <img src={component3} alt="" className={style.component3} />
          </div>
          <div className={style.line}>
            <img src={spaceship} alt="" className={style.ship} ref={refs} />
            <img src={line} alt="" />
          </div>
          <div className={style.second_block}>
            <img src={component1} alt="" className={style.component1} />
            <img src={component2} alt="" className={style.component2} />
          </div>
          <img src={eclipse} alt="" className={style.eclipse} />
        </div>
      </div>



      <div className={style.wrapperSecond} >
        <img src={journeyBackground} alt="" className={style.journeySecondBg} />
        <div className={style.bigBlock}>
          <div className={style.journeyText}>
            <img src={journey1} alt="" className={style.journey_text} />
          </div>
          <div className={style.secondContainer}>
            <div className={style.SecondLine} ref={refer}>
              <img src={spaceship} alt="" className={style.secondShip} />
            </div>
            <div className={style.linear}>
              <img src={line} alt="" className={style.lineImg} />
            </div>
          </div>
          <div className={style.lineComponents}>
            <div className={style.leftComponents}>
              <img src={bear1} alt="" />
              <img src={bear2} alt="" />
            </div>
            <div className={style.rightComponents}>
            <img src={bear3} alt="" />
            <img src={bear4} alt="" />
            </div>
          </div>
          <div className={style.rearEclipse}>
            <img src={secondEclipse} alt="" style={{width: "100%"}}/>
          </div>



        </div>
      </div>

    </>
  )
};

export default Journey