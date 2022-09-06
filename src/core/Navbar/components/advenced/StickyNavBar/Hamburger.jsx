import { useRef } from "react";
import { useState } from "react";
import Item from "../../basic/Item";
import "./css/hamburger.css";
const Hamburger = (props) => {
  const [showHamburger, setShowHamburger] = useState("Disabled");
  const [showSecondHamburger, setShowSecondHamburger] = useState("Disabled");
  const [indexOfPressed, setIndexOfPressed] = useState();
  return (
    <div className="hamburgerContainer">
      <div className={`hamburgerButtonContainer `}>
        <input
          type="checkbox"
          className={`toggler ${props.hamburgerButtonPosition}`}
          onClick={() => {
            setShowSecondHamburger("Disabled");
            showHamburger === "Disabled" && showSecondHamburger === "Disabled"
              ? setShowHamburger("Active")
              : setShowHamburger("Disabled");
            props.navVisible === "visible"
              ? props.setNavVisible("unvisible")
              : props.setNavVisible("visible");
          }}
        ></input>
        <div className={`hamburger ${props.hamburgerButtonPosition}`}>
          <div></div>
        </div>
      </div>
      <div
        className={`hamburgerItemsContainer${showHamburger} hamburger-${props.color} ${props.animation}`}
      >
        {props.items.map((item, index) =>
          Array.isArray(item) ? (
            <div key={index}>
              <Item
                hamburger={true}
                color={props.color}
                index={index}
                title={item[0].title}
                // link={item[0].link}
                handleClick={() => {
                  setShowHamburger("Disabled");
                  setIndexOfPressed(props.items.indexOf(item));
                  setShowSecondHamburger("Active");
                }}
              ></Item>
            </div>
          ) : (
            <div key={index}>
              <Item
                hamburger={true}
                color={props.color}
                index={index}
                title={item.title}
                link={item.link}
              ></Item>
            </div>
          )
        )}
      </div>
      <div
        className={`hamburgerItemsContainer${showSecondHamburger} hamburger-${props.color} ${props.animation}`}
      >
        {Array.isArray(props.items[indexOfPressed]) ? (
          props.items[indexOfPressed].map((item2, index2) => (
            <div key={index2}>
              <Item
                hamburger={true}
                color={props.color}
                index={index2}
                title={item2.title}
                link={item2.link}
              ></Item>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
