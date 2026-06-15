import SeedNavbar from "./SeedFundingSections/SeedNavbar";
import SeedMain from "./SeedFundingSections/SeedMain";
import SeedAbout from "./SeedFundingSections/SeedAbout";
import SeedBenefits from "./SeedFundingSections/SeedBenefits";
import SeedUpdates from "./SeedFundingSections/SeedUpdates";
import SeedFooter from "./SeedFundingSections/SeedFooter";

function SeedFunding() {
  return (
    <>
      <SeedNavbar />
      <SeedMain />
      <SeedAbout />
      <SeedBenefits />
      <SeedUpdates />
      <SeedFooter />
    </>
  );
}

export default SeedFunding;
