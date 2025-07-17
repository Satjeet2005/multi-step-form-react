import { forwardRef, useEffect, useImperativeHandle } from "react";
import styled from "./form.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormRef } from "../../types/formRef";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(25, { message: "Name must be at most 25 characters." }),
  email: z.email({ message: "Enter a valid email." }),
  phone: z.string().length(10, { message: "Phone number must be 10 digits." }).regex(/^[1-9][0-9]{9,14}$/, {message : "Enter a valid phone number"}),

});


type FormData = z.infer<typeof schema>;

interface Props{
  userData : FormData
}

const Form = forwardRef<FormRef,Props>((userData, ref) => {
  console.log(userData);
  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  useImperativeHandle(ref, () => ({
    validateForm: async () => {
      const result = await trigger(["name", "email", "phone"]);
      return result;
    },
    getValues,
  }));

    useEffect(() => {
    setValue("name", userData.userData.name);
        setValue("email", userData.userData.email); 

    setValue("phone", userData.userData.phone);
  }, [setValue]);


  return (
    <form noValidate onSubmit={() => handleSubmit((data) => console.log(data))}>
      <div className={styled.formField}>
        <div className={styled.formFieldHeader}>
          <label htmlFor="name">Name</label>
          {errors.name && (
            <p className={styled.errorText}>{errors.name?.message}</p>
          )}
        </div>
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          className={errors.name ? styled.errorState : ""}
          {...register("name")}
          
        />
      </div>

      <div className={styled.formField}>
        <div className={styled.formFieldHeader}>
          <label htmlFor="email">Email Address</label>
          {errors.email && (
            <p className={styled.errorText}>{errors.email?.message}</p>
          )}
        </div>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          className={errors.email ? styled.errorState : ""}
          {...register("email")}
        />
      </div>

      <div className={styled.formField}>
        <div className={styled.formFieldHeader}>
          <label htmlFor="phoneNumber">Phone Number</label>
          {errors.phone && (
            <p className={styled.errorText}>{errors.phone?.message}</p>
          )}
        </div>
        <input
          type="number"
          id="phoneNumber"
          placeholder="e.g. 1234567890"
          className={errors.phone ? styled.errorState : ""}
          {...register("phone",{min: 0})}
          
        />
      </div>
    </form>
  );
});

export default Form;
