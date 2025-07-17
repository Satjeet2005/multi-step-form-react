import styled from "./backButton.module.css"

interface Props{
    handleBack : () => void;
}

const BackButton = ({handleBack} : Props) => {
  return (
    <button type="submit" className={styled.btn} onClick={handleBack}>Go Back</button>
  )
}

export default BackButton