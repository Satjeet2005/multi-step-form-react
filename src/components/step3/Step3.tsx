import AddOns from './add-ons/AddOns'

interface Props{
  activePlanType : "monthly" | "yearly"
  activeAddon : Number[],
  handleAddonChange : ([] : Number[]) => void
}

const Step3 = ({activePlanType,activeAddon,handleAddonChange} : Props) => {
  return (
    <AddOns activePlanType={activePlanType} activeAddon={activeAddon} handleAddonChange={(addon) => handleAddonChange(addon)}></AddOns>
  )
}

export default Step3