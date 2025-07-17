import { type ReactElement } from "react"
import styled from "./buttonContainer.module.css"

interface Props{
    children : ReactElement
    activePlanType : "monthly" | "yearly"
}
const ButtonContainer = ({ children,activePlanType } : Props) => {
  return (
    <div className={styled.buttonContainer}>
        <p className={ activePlanType === 'monthly' ? [styled.planType,styled.planTypeActive].join(" ") : styled.planType}>
            Monthly
        </p>
        {children}
        <p className={activePlanType === 'yearly' ? [styled.planType,styled.planTypeActive].join(" ") : styled.planType}>
            Yearly
        </p>
    </div>
  )
}

export default ButtonContainer