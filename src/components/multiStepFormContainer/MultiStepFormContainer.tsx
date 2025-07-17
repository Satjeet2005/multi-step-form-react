import Heading from "../Heading/Heading";
import Step1 from "../step1/Step1";
import Step2 from "../step2/Step2";
import Step3 from "../step3/Step3";
import { Step4 } from "../step4/Step4";
import styled from "./multiStepFormContainer.module.css";
import type { FormData } from "../types/formData";
import { NextButtonContainer } from "../nextButtonContainer/nextButtonContainer";
import { forwardRef } from "react";
import type { FormRef } from "../types/formRef"; // ✅ import the interface
import FinalStep from "../finalStep/FinalStep";

interface Props {
  step: number;
  handlePlanTypeChange: () => void;
  handlePlanChange: (plan: FormData["activePlan"]) => void;
  handleAddonChange: (addon: Number[]) => void;
  handleStepChange: () => void;
  handleNextStep: () => void;
  handleBack: () => void;
  formData: FormData;
  user: FormData["user"];
}

// ✅ forwardRef and pass it to Step1 only if step === 1
const MultiStepFormContainer = forwardRef<FormRef, Props>(
  (
    {
      step,
      handlePlanTypeChange,
      handlePlanChange,
      handleAddonChange,
      formData,
      handleStepChange,
      handleNextStep,
      handleBack,
      user,
    },
    ref
  ) => {
    return (
      <div className={styled.multiStepFormContainer}>
        {step <= 4 && <Heading step={step} />}
        {step === 1 && <Step1 ref={ref} userData={user} />}{" "}
        {/* ✅ Pass ref only to Step1 */}
        {step === 2 && (
          <Step2
            handlePlanTypeChange={handlePlanTypeChange}
            activePlanType={formData.activePlanType}
            currentPlan={formData.activePlan}
            handlePlanChange={handlePlanChange}
          />
        )}
        {step === 3 && (
          <Step3
            activePlanType={formData.activePlanType}
            activeAddon={formData.activeAddon}
            handleAddonChange={handleAddonChange}
          />
        )}
        {step === 4 && (
          <Step4 formData={formData} handleStepChange={handleStepChange} />
        )}
        {step === 5 && <FinalStep></FinalStep>}
        { step != 5 &&
          <NextButtonContainer
            handleNextStep={handleNextStep}
            step={step}
            handleBack={handleBack}
          />
        }
      </div>
    );
  }
);

export default MultiStepFormContainer;
