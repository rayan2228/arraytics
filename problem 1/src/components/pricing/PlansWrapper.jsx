/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "../../styleComponent";
import PlanInfo from "./PlanInfo";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { getDuplicatePlans, getUniquePlans } from "../../helpers";
const PlansWrapper = () => {
  const { plans, features } = useSelector(
    (state) => state.pricingPlan.plansData
  );
  const uniquePlans = useMemo(() => getUniquePlans(plans), [plans]);
  const duplicatePlans = useMemo(() => getDuplicatePlans(plans), [plans]);
  console.log(duplicatePlans);
  
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="20px">
      {uniquePlans.map((plan, index) => (
        <PlanInfo key={index} plan={plan} features={features} />
      ))}
    </Grid>
  );
};
export default PlansWrapper;
