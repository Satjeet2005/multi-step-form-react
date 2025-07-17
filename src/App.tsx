import MultiStepFormContainer from "./components/multiStepFormContainer/MultiStepFormContainer";
import "./App.css";
import { useRef, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import type { FormData } from "./components/types/formData";
import type { FormRef } from "./components/types/formRef";

const App = () => {
  const [step, setStep] = useState(1);
  const formRef = useRef<FormRef>(null);

  const [formState, setFormState] = useState<FormData>({
    user : {
      name : "",
      email : "",
      phone : "",
    },
    activePlanType: "monthly",
    activePlan: "arcade",
    activeAddon: [],
  });


  function handlePlanTypeChange() {
    setFormState({
      ...formState,
      activePlanType:
        formState.activePlanType === "monthly" ? "yearly" : "monthly",
    });
  }

  function handlePlanChange(plan: FormData["activePlan"]) {
    setFormState({ ...formState, activePlan: plan });
  }

  function handleAddonChange(addon: FormData["activeAddon"]) {
    setFormState({ ...formState, activeAddon: addon });
  }

  async function handleNext() {
    if (step === 1) {
      const isValid = await formRef.current?.validateForm();

      if (isValid) {
        const data = formRef.current?.getValues() as FormData["user"];

        setFormState({...formState,user : {...formState.user,name : data?.name,email : data?.email,phone : data.phone}})
      }
      else return
    }

    setStep((prev) => prev + 1);
  }



  return (
    <div className="multiStepFormContainer">
      <Sidebar
        currentStep={step === 5 ? 4 : step}
      ></Sidebar>
      <MultiStepFormContainer
        step={step}
        handlePlanTypeChange={handlePlanTypeChange}
        handlePlanChange={(plan) => handlePlanChange(plan)}
        handleAddonChange={(addon) => handleAddonChange(addon)}
        formData={formState}
        handleStepChange={() => setStep(2)}
        handleNextStep={handleNext}
        ref={formRef}
        handleBack={() =>    setStep((prev) => prev-1)
}
        user={formState.user}
      ></MultiStepFormContainer>
    </div>
  );
};

export default App;
