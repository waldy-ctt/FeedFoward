
import { useState } from 'react'
import './HamburgerMenu.css'

type HamburgerProps = {
    children : React.ReactNode
}

function HamburgerMenu(props: HamburgerProps)
{
    const [open, setOpen] = useState(false);

    function toggle(){
        setOpen(!open);
    }

    return(
        <>
            <div className="">
                <input className="check-icon hidden" id="check-icon" name="check-icon" type="checkbox" title="check"
                onClick={toggle}></input>
                <label className="icon-menu" htmlFor="check-icon">
                    <div className="bar bar--1"></div>
                    <div className="bar bar--2"></div>
                    <div className="bar bar--3"></div>
                </label>
            </div>
            <div className={`${open == true ? 'block' : 'hidden'}
                absolute left-0 top-16 w-full animate-pulse`}>
                {props.children}
            </div>
        </>
    )
}

export default HamburgerMenu;