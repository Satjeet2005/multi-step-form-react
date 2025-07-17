import styled from "./nextButton.module.css"

interface Props{
  handleNextStep : () => void
  step : number
}

const NextButton = ({handleNextStep,step} : Props) => {
  return (
      <button type="submit" className={step != 4 ? [styled.btn,styled.btnBlue].join(" ") : [styled.btn,styled.btnPurple].join(" ")} onClick={handleNextStep}>{step != 4 ? "Next Step" : "Confirm"}</button>
  )
}

export default NextButton