import React, {useState} from 'react';
import Glass from "@/assets/images/header/glass.png";
import GuideLinesStyle from "@/assets/styles/components/GuideLinesStyle";

const Guidelines = () => {
    const [blackAndWhiteVersion, setBlackAndWhiteVersion] = useState(false);
    const [guideLinesMenu, setGuideLinesMenu] = useState(false);
    const [zoom, setZoom] = useState(false);
    const openAndCloseMenu = () => setGuideLinesMenu(!guideLinesMenu);
    const changeVersion = (version) => {
        setBlackAndWhiteVersion(version)
        if (version) {
            document.body.classList.add('black__and__white');
        } else {
            document.body.classList.remove('black__and__white');
        }
    }
    const increaseFontSize = () => {
        setZoom(true)
        document.body.classList.add('zoom');
    }
    const decreaseFontSize = () => {
        setZoom(false)
        document.body.classList.remove('zoom');
    }
    return (
        <GuideLinesStyle onClick={openAndCloseMenu} className={guideLinesMenu ? "show" : ""}>
            <img src={Glass} alt="glass"/>
            <div className="guidelines__menu" onClick={e => e.stopPropagation()} onMouseLeave={openAndCloseMenu}>
                <button className={`guidelines__menu__item btn ${!blackAndWhiteVersion ? "active" : ""}`}
                        onClick={() => changeVersion(false)}>
                    Oddiy versiya
                </button>
                <button className={`guidelines__menu__item btn ${blackAndWhiteVersion ? "active" : ""}`}
                        onClick={() => changeVersion(true)}>
                    Qora oq versiya
                </button>
                <div className="guidelines__menu__item flex">
                    <button className={`guidelines__menu__item__child ${zoom && "active"}`} onClick={increaseFontSize}>
                        A+
                    </button>
                    <button className={`guidelines__menu__item__child ${!zoom && "active"}`} onClick={decreaseFontSize}>
                        A-
                    </button>
                </div>
            </div>
        </GuideLinesStyle>
    );
};

export default Guidelines;