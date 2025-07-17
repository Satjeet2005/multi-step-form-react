export interface FormRef {
  validateForm: () => Promise<boolean>;
  getValues: () => {
    name : string,
    email : string,
    phone : string
  }
  // setValues : () => void
}