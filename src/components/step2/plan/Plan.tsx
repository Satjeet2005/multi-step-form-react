import styled from "./plan.module.css";
import arcadeImage from "../../../assets/images/icon-arcade.svg";
import advancedImage from "../../../assets/images/icon-advanced.svg";
import proImage from "../../../assets/images/icon-pro.svg";
import { plans } from "../../../data/data";
import { useState } from "react";

type currentPlan = "arcade" | "advanced" | "pro";
interface Props {
  activePlanType: "monthly" | "yearly";
  currentPlan : "arcade" | "advanced" | "pro";
  handlePlanChange : (plan : currentPlan) => void
}

const Plan = ({ activePlanType,currentPlan,handlePlanChange }: Props) => {
  const [activePlan, setActivePlan] = useState<currentPlan>(currentPlan);

  const images = [arcadeImage, advancedImage, proImage];
  return (
    <>
      <div className={styled.plans}>
        {plans.map((plan, index) => (
          <div
            className={
              plan.name === activePlan
                ? [styled.plan, styled.planActive].join(" ")
                : styled.plan
            }
            key={plan.name}
            onClick={() => {setActivePlan(plan.name as currentPlan); handlePlanChange(plan.name as currentPlan)}}
          >
            <img src={images[index]} alt={plan.name} />
            <div className={styled.planContent}>
              <p className={styled.planHeading}>{plan.name}</p>
              <p className={styled.planPrice}>{plan.price[activePlanType]}</p>
              {activePlanType === "yearly" && <p className={styled.planOffer}>2 months free</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plan;
