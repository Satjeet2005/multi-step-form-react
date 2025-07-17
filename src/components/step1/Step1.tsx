import { forwardRef } from "react";
import Form from "./form/Form";
import type { FormRef } from "../types/formRef"; // Assuming FormRef is exported from there
import type {FormData} from "../types/formData"

interface Props{
  userData : FormData["user"]
}
const Step1 = forwardRef<FormRef,Props>(({userData}, ref) => {
  return <Form ref={ref} userData={userData} />;
});

export default Step1;
