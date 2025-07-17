import Plan from "./plan/Plan";
import ButtonContainer from "../buttonContainer/ButtonContainer";
import PlanToggleButton from "../planToggleButton/PlanToggleButton";

type currentPlan = "arcade" | "advanced" | "pro";
interface Props{
    activePlanType : "monthly" | "yearly"
    currentPlan : "arcade" | "advanced" | "pro"
    handlePlanTypeChange : () => void;
    handlePlanChange : (plan : currentPlan) => void
}



const Step2 = ({handlePlanTypeChange,activePlanType,currentPlan,handlePlanChange} : Props) => {

  return (
    <>
      <Plan activePlanType={activePlanType} currentPlan={currentPlan} handlePlanChange={(plan) => handlePlanChange(plan)}></Plan>
      <ButtonContainer activePlanType={activePlanType}>
        <PlanToggleButton handleClick={handlePlanTypeChange}></PlanToggleButton>
      </ButtonContainer>
    </>
  );
};

export default Step2;
