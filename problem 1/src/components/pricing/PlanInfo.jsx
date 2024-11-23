/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import { Button, PlanItem, Title } from "../../styleComponent";
import Features from "./Features";
import { useMemo, useState } from "react";
import { getDuplicatePlans, getFeatures } from "../../helpers";
import CustomDropdown from "../CustomDropdown";
import { useEffect } from "react";

const PlanInfo = ({ plan }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [filteredFeatures, setFilteredFeatures] = useState([]);
  const {
    billingType,
    plansData: { features, plans },
  } = useSelector((state) => state.pricingPlan);
  const duplicatePlans = useMemo(() => getDuplicatePlans(plans), [plans]) || [];
  const isDuplicatePlan =
    useMemo(
      () =>
        duplicatePlans.filter(
          (duplicatePlan) => duplicatePlan.name === plan.name
        ),
      [plan]
    ) || [];
  useEffect(() => {
    const filteredFeatures = getFeatures(plan.name, features);
    setFilteredFeatures(filteredFeatures);
  }, [plan, features]);

  return (
    <PlanItem bcolor="blue">
      <Title>{plan.name}</Title>
      <Title>
        {isDuplicatePlan.length > 0
          ? selectedPlan?.details[billingType].price
          : plan.details[billingType].price}
      </Title>
      {isDuplicatePlan.length > 0 ? (
        <CustomDropdown
          plan={plan.name}
          items={isDuplicatePlan}
          selected={selectedPlan}
          onSelect={setSelectedPlan}
        />
      ) : (
        <Title dangerouslySetInnerHTML={{ __html: plan.title }} />
      )}
      <Features features={filteredFeatures} planName={plan.name} />
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
