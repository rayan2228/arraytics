/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import { PlanItem, Title } from "../../styleComponent";
import Features from "./Features";

const PlanInfo = ({ plan, features }) => {
  const { billingType } = useSelector((state) => state.pricingPlan);
  console.log(plan);

  return (
    <PlanItem bcolor="blue">
      <Title>{plan.name}</Title>
      <Title>{plan.details[billingType].price}</Title>
      <Title>Up to 500 visitors/month</Title>
      <Features />
    </PlanItem>
  );
};
export default PlanInfo;
