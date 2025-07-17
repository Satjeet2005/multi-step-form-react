import { useState } from "react"
import styled from "./planToggleButton.module.css"

interface Props{
    handleClick : () => void;
}

const PlanToggleButton = ( { handleClick } : Props) => {
    const [isActive,setIsActive] = useState(false)
  return (
    <div>
        <div className={isActive ? [styled.btn,styled.btnActive].join(" ") : styled.btn} onClick={() => {setIsActive(!isActive); handleClick()}}>
            <div className={styled.btnBall}></div>
        </div>
    </div>
  )
}

export default PlanToggleButton