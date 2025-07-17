import smallerSideBarImage from "../../assets/images/bg-sidebar-mobile.svg";
import largerSideBarImage from "../../assets/images/bg-sidebar-desktop.svg";
import styled from "./sidebar.module.css";
import SidebarSteps from "../sidebarSteps/SidebarSteps";

interface Props{
  currentStep : number,
}


const Sidebar = ({currentStep} : Props) => {
  return (
    <>
      <div className={styled.div}>
        <img
          src={smallerSideBarImage}
          alt="side-image"
          className={[styled.sidebarImage, styled.smallSidebarImage].join(" ")}
        />

        <img
          src={largerSideBarImage}
          alt="side-image"
          className={[styled.sidebarImage, styled.largerSidebarImage].join(" ")}
        />
        <SidebarSteps currentStep={currentStep}></SidebarSteps>
      </div>
    </>
  );
};

export default Sidebar;
