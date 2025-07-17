import styled from "./addon.module.css";
import { addons } from "../../../data/data";
import { useState } from "react";

interface Props {
  activePlanType: "monthly" | "yearly";
  activeAddon: Number[];
  handleAddonChange: ([]: Number[]) => void;
}

const AddOns = ({ activePlanType, handleAddonChange, activeAddon }: Props) => {
  const [isActive, setIsActive] = useState<Number[]>(activeAddon);

  function handleClick(id: number) {
    const updatedIsActive = isActive.includes(id)
      ? isActive.filter((x) => x !== id)
      : [...isActive, id];
    setIsActive(updatedIsActive);
    handleAddonChange(updatedIsActive);
  }

  return (
    <div className={styled.addonWrapper}>
      {addons.map((addon) => {
        return (
          <div
            className={
              isActive.includes(addon.id)
                ? [styled.addon, styled.addonActive].join(" ")
                : styled.addon
            }
            key={addon.name}
            onClick={() => {
              handleClick(addon.id);
            }}
          >
            <input
              type="checkbox"
              id={addon.name}
              className={styled.checkbox}
              checked={isActive.includes(addon.id) ? true : false}
              onChange={() => handleClick(addon.id)}
            />
            <div>
              <p className={styled.addonHeading}>{addon.name}</p>
              <p className={styled.addonDescription}>{addon.description}</p>
            </div>
            <p className={styled.addonPrice}>{addon.price[activePlanType]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AddOns;
