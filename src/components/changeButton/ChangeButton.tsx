import styled from "./changeButton.module.css"

interface Props{
  handleStepChange : () => void;
}

const ChangeButton = ({handleStepChange} : Props) => {
  return (
    <p className={styled.btn} onClick={handleStepChange}>Change</p>
  )
}

export default ChangeButton