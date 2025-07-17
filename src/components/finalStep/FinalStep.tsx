import styled from "./finalStep.module.css"
import tick from "../../assets/images/icon-thank-you.svg"
const FinalStep = () => {
  return (
    <div className={styled.wrapper}>
        <img src={tick} className={styled.tick}/>
        <div className={styled.content}>
            <p className={styled.heading}>
                Thank you!
            </p>
            <p className={styled.description}>Thanks for confirming your subscription!
We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </div>
  )
}

export default FinalStep