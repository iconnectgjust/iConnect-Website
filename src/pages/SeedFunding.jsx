import SeedNavbar from "./SeedFundingSections/SeedNavbar";
import SeedMain from "./SeedFundingSections/SeedMain";
import SeedAbout from "./SeedFundingSections/SeedAbout";
import SeedBenefits from "./SeedFundingSections/SeedBenefits";
import SeedGuidelines from "./SeedFundingSections/SeedGuidelines";
import SeedUpdates from "./SeedFundingSections/SeedUpdates";
import SeedFooter from "./SeedFundingSections/SeedFooter";
import SeedVideo from "./SeedFundingSections/SeedVideo"

function SeedFunding() {
  return (
    <>
      <SeedNavbar />
      <SeedMain />
      <SeedAbout />
      <SeedBenefits />
      <SeedGuidelines />
      <SeedUpdates />
      <SeedVideo />
      <SeedFooter />
    </>
  );
}

export default SeedFunding;
