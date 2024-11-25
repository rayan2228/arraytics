/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import {
  Button,
  FeaturesList,
  FeaturesListDescription,
  Flex,
  PlanItem,
  Title,
  VisitorDetailsComponent,
} from "../../styleComponent";
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
      <div
        css={css`
          margin-bottom: 20px;
          margin-top: 10px;
        `}
      >
        {isDuplicatePlan.length > 0 ? (
          <VisitorDetailsComponent gap="10px" alignItems="center">
            <CustomDropdown
              plan={plan.name}
              items={isDuplicatePlan}
              selected={selectedPlan}
              onSelect={setSelectedPlan}
            />
            <FeaturesList>
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={`${colors[plan.name].backgroundColor}`}
                  width={"20px"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <FeaturesListDescription
                  afterRight="10%"
                  right="-25px"
                  dangerouslySetInnerHTML={{
                    __html: plan.text,
                  }}
                />
              </Flex>
            </FeaturesList>
          </VisitorDetailsComponent>
        ) : (
          <VisitorDetailsComponent
            alignItems="center"
            padding="2px 8px"
            css={css`
              background-color: ${colors[plan.name].lightBackgroundColor};
              border-radius: 50px;
            `}
          >
            <Title
              fontSize="13px"
              padding="2px 4px "
              color={colors[plan.name].backgroundColor}
              dangerouslySetInnerHTML={{ __html: plan.title }}
            />
            <FeaturesList alignItems="center" padding="2px 8px">
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={`${colors[plan.name].backgroundColor}`}
                  width={"20px"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <FeaturesListDescription
                  right="-22px"
                  afterRight="10%"
                  dangerouslySetInnerHTML={{
                    __html: plan.text,
                  }}
                />
              </Flex>
            </FeaturesList>
          </VisitorDetailsComponent>
        )}
      </div>
      <Features
        features={filteredFeatures}
        plan={plan}
        selectedPlan={selectedPlan}
      />
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
