import styled from "./sidebarSteps.module.css";

interface Props{
  currentStep : number
}

const SidebarSteps = ({currentStep} : Props) => {
  const steps = [1, 2, 3, 4];
  const stepsDescription = ["your info", "select plan", "add-ons", "summary"];
  return (
    <>
      <div className={styled.stepIndicatorWrapper}>
        {steps.map((step, index) => (
          <div className={styled.step} key={step}>
            <span
              className={
                step === currentStep
                  ? [styled.stepIndicator, styled.stepIndicatorActive].join(" ")
                  : styled.stepIndicator
              }
            >
              {step}
            </span>
            <div>
              <p className={styled.sidebarStepHeading}>step {step}</p>
              <p className={styled.sidebarStepDescription}>
                {stepsDescription[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SidebarSteps;
