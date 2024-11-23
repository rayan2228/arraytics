/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import { Button, PlanItem, Title } from "../../styleComponent";
import Features from "./Features";
import { useMemo, useState } from "react";
import { getDuplicatePlans } from "../../helpers";
import CustomDropdown from "../CustomDropdown";

const PlanInfo = ({ plan }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const {
    billingType,
    plansData: { features, plans },
  } = useSelector((state) => state.pricingPlan);
  const duplicatePlans = useMemo(() => getDuplicatePlans(plans), [plans]);
  const isDuplicatePlan = duplicatePlans.some(
    (duplicatePlan) => duplicatePlan.name === plan.name
  );

  return (
    <PlanItem bcolor="blue">
      <Title>{plan.name}</Title>
      <Title>{plan.details[billingType].price}</Title>
      {isDuplicatePlan ? (
        <CustomDropdown
          items={duplicatePlans}
          selected={selectedPlan}
          onSelect={setSelectedPlan}
        />
      ) : (
        <Title>Up to 500 visitors/month</Title>
      )}
      <Features features={features} />
      <Button
        as="a"
        href="/pricing"
        textAlign="center"
        display="block"
        margin="auto 0px 0px 0px"
        padding="10px 0px"
        backgroundColor="#b78deb"
        borderRadius="8px"
      >
        Select Plan
      </Button>
    </PlanItem>
  );
};
export default PlanInfo;
