import styled from "./Heading.module.css"

interface Props{
    step : number
}

const Heading = ( {step} : Props) => {
    const headings = [{
        heading : "Personal info",
        description : "Please provide your name, email address and phone number."
    },{
                heading : "Select your plan",
        description : "You have the option of monthly and yearly billing."

    },{
                        heading : "Pick add-ons",
        description : "Add-ons help enhance your gaming experience."

    },{
                                heading : "Finishing up",
        description : "Double-check everything looks OK before confirming."

    }]
  return (
    <div>
        <h1 className={styled.heading}>{headings[step-1].heading}</h1>
        <p className={styled.headingDescription}>{headings[step-1].description}</p>
    </div>
  )
}

export default Heading