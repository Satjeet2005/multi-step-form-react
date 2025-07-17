import type { FormData } from "../types/formData";
import ItemPurchased from "./itemsPurchased/itemPurchased";

interface Props {
  formData: FormData;
  handleStepChange : () => void;
}

export const Step4 = ({ formData,handleStepChange }: Props) => {
    console.log(formData);

    return <ItemPurchased formData={formData} handleStepChange={handleStepChange}></ItemPurchased>
};
