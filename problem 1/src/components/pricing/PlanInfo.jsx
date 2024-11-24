/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import { Button, Flex, PlanItem, Title } from "../../styleComponent";
import Features from "./Features";
import { useMemo, useState } from "react";
import { getDuplicatePlans, getFeatures } from "../../helpers";
import CustomDropdown from "../CustomDropdown";
import { useEffect } from "react";
import { css } from "@emotion/react";
import { colors } from "../../data/allData";
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
    <PlanItem bcolor={colors[plan.name].backgroundColor}>
      {plan.name == "Pro" && (
        <Title
          as={"span"}
          fontSize="12px"
          fontWeight="500"
          color="white"
          padding="0px 8px"
          css={css`
            background-color: ${colors[plan.name].backgroundColor};
            position: absolute;
            right: 5px;
            top: 5px;
            border-radius: 5px;
          `}
        >
          Most Popular
        </Title>
      )}
      <Title fontSize="18px">{plan.name}</Title>
      <Flex
        gap="10px"
        alignItems={"baseline"}
        padding="10px 0px"
        css={css`
          position: relative;
        `}
      >
        <Title
          fontSize="32px"
          fontWeight="600"
          color={colors[plan.name].backgroundColor}
        >
          {isDuplicatePlan.length > 0
            ? selectedPlan?.details[billingType].price
            : plan.details[billingType].price}
        </Title>
        <Flex flexDirection="column">
          {plan.name !== "Free" && billingType === "2_year" && (
            <Title
              as={"span"}
              color="#ff424d"
              fontSize="12px"
              css={css`
                text-decoration: line-through;
                position: absolute;
                top: 0px;
              `}
            >
              {isDuplicatePlan.length > 0
                ? selectedPlan?.details["1_year"].price
                : plan.details["1_year"].price}
              /Month
            </Title>
          )}
          {plan.name !== "Free" && (
            <Title color="#83a1b7" as={"span"}>
              /Month
            </Title>
          )}
        </Flex>
      </Flex>
      <div css={css`margin-bottom: 20px; margin-top: 10px;`}>
      {isDuplicatePlan.length > 0 ? (
        <CustomDropdown
          plan={plan.name}
          items={isDuplicatePlan}
          selected={selectedPlan}
          onSelect={setSelectedPlan}
        />
      ) : (
        <Title
          fontSize="13px"
          color={colors[plan.name].backgroundColor}
          padding="2px 8px"
          css={css`
            background-color: ${colors[plan.name].lightBackgroundColor};
            border-radius: 50px;
          `}
          dangerouslySetInnerHTML={{ __html: plan.title }}
        />
      )}
      </div>
      <Features features={filteredFeatures} planName={plan.name} />
      <Button
        as="a"
        href="/pricing"
        textAlign="center"
        display="block"
        margin="auto 0px 0px 0px"
        padding="10px 0px"
        backgroundColor={colors[plan.name].backgroundColor}
        borderRadius="8px"
        color="white"
        fontSize="16px"
        hoverBackgroundColor={colors[plan.name].hoverBackgroundColor}
      >
        Select Plan
      </Button>
    </PlanItem>
  );
};
export default PlanInfo;
