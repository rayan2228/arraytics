/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Flex, Grid } from "../../styleComponent";
import PlanInfo from "./PlanInfo";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { getUniquePlans } from "../../helpers";
const PlansWrapper = () => {
  const { plans } = useSelector((state) => state.pricingPlan.plansData);
  const uniquePlans = useMemo(() => getUniquePlans(plans), [plans]);
  return (
    <section
      css={css`
        max-width: 1110px;
        margin: auto;
      `}
    >
      <Grid templateColumns="repeat(4, 1fr)" gap="20px">
        {uniquePlans.map((plan, index) => (
          <PlanInfo key={index} plan={plan} />
        ))}
      </Grid>
    </section>
  );
};
export default PlansWrapper;
