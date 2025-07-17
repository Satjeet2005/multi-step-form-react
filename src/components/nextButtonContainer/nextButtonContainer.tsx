import NextButton from "../buttons/NextButton"
import styled from "./nextButtonContainer.module.css"
import BackButton from "../buttons/BackButton";

interface Props{
    handleNextStep : () => void;
    handleBack : () => void;
    step : number
}

export const NextButtonContainer = ({handleNextStep,step,handleBack} : Props) => {
  return (
    <div className={styled.btnWrapper}>
        {(step != 1 && step < 5) && <BackButton handleBack={handleBack}></BackButton>}
        {step != 5 && <NextButton handleNextStep={handleNextStep} step={step}></NextButton>}
    </div>
  )
}
