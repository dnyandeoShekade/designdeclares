import React from "react";
import DesignDeclaresUK from "../components/Homepage/DesignDeclaresUK";
import Breakdown from "../components/Homepage/Breakdown";
import DonateSection from "../components/Homepage/DonateSection";
import ActsOfEmergency from "../components/Homepage/ActsOfEmergency";
import DeclareForm from "../components/Homepage/DeclareForm";
import Latestsection from "../components/Homepage/Latest-section";
import Newsletter from "../components/Homepage/Newsletter";
import SignatoriesSection from "../components/Homepage/SignatoriesSection";
import GlobalSupporters from "../components/Homepage/GlobalSupporters";
import FooterSection from "../components/Homepage/FooterSection";
const page = () => {
  return (
    <div>
      <DesignDeclaresUK />
      <Breakdown />
      <DonateSection />
      <ActsOfEmergency/>
      <DeclareForm/>
      <Latestsection/>
      <Newsletter/>
      <SignatoriesSection/>
      <GlobalSupporters/>
      <FooterSection/>
    </div>
  );
};

export default page;
