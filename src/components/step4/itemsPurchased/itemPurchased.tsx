import styled from "./itemPurchased.module.css";
import type { FormData } from "../../types/formData";
import { plans } from "../../../data/data";
import { addons } from "../../../data/data";
import ChangeButton from "../../changeButton/ChangeButton";

interface Props {
  formData: FormData;
  handleStepChange : () => void;
}

const ItemPurchased = ({ formData,handleStepChange }: Props) => {
  const planTypeKeyword = {
    short : {
            monthly: "mo",
    yearly: "yr",
    },
    monthly: "month",
    yearly: "year",
  };

  const plan = plans.filter((plan) => plan.name === formData.activePlan)[0];
  const addon = addons.filter((addon) =>
    formData.activeAddon.includes(addon.id) ? addon : ""
  );

  function convertNumber() {
    const array = [
      plan.price[formData.activePlanType],
      ...addon.map((add) => add.price[formData.activePlanType]),
    ];

    const total = array.reduce((acc, item) => {
      const match = item?.match(/\d+/);
      const number = match ? Number(match[0]) : 0;
      return acc + number;
    }, 0);

    return total;
  }


  return (
    <>
      <div className={styled.summaryWrapper}>
        <div className={addon.length ? [styled.summaryWrapperHeader,styled.bottomBorder].join(" ") : styled.summaryWrapperHeader}>
          <div>
            <p className={styled.planHeading}>
              {plan.name} ({formData.activePlanType})
            </p>
            <ChangeButton handleStepChange={handleStepChange}></ChangeButton>
          </div>
          <p className={styled.planPrice}>
            {plan.price[formData.activePlanType]}
          </p>
        </div>
        <div className={styled.summaryWrapperFooter}>
          {addon.map((add) => (
            <div key={add.id} className={styled.addon}>
              <p className={styled.addonHeading}>{add.name}</p>
              <p className={styled.addonPrice}>
                {add.price[formData.activePlanType]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styled.totalWrapper}>
        <p className={styled.totalText}>Total (per {planTypeKeyword[formData.activePlanType]})</p>
        <p className={styled.totalPrice}>+${convertNumber()}/{planTypeKeyword.short[formData.activePlanType]}</p>
      </div>
    </>
  );
};

export default ItemPurchased;
