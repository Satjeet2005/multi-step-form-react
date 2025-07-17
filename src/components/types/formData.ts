export interface FormData {
  user : {
    name : string;
    email : string;
    phone : string;
  }
  activePlan: "arcade" | "advanced" | "pro";
  activePlanType: "monthly" | "yearly";
  activeAddon: Number[];
}
