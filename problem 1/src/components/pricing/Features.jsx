/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  FeaturesList,
  FeaturesListDescription,
  Flex,
  Title,
} from "../../styleComponent";
const Features = ({ features, plan, selectedPlan }) => {
  return (
    <div
      css={css`
        margin-bottom: 20px;
      `}
    >
      <Title fontWeight="500" fontSize="16px" padding="8px 0px">
        {plan.name === "Free" ? "Free includes:" : "Everything in free plus:"}
      </Title>
      <ul>
        {plan.name !== "Free" && (
          <FeaturesList>
            <Flex>
              <Title
                dangerouslySetInnerHTML={{
                  __html: selectedPlan?.title || plan.title,
                }}
              />
              <FeaturesListDescription
                left="50%"
                transform="translateX(-50%)"
                dangerouslySetInnerHTML={{
                  __html: selectedPlan?.text || plan.text,
                }}
              />
            </Flex>
          </FeaturesList>
        )}
        {features.map((feature) => (
          <FeaturesList key={feature.feature_title}>
            <Flex>
              <Title>{feature.feature_title}</Title>
              <FeaturesListDescription
                left="50%"
                transform="translateX(-50%)"
                dangerouslySetInnerHTML={{
                  __html: feature.feature_desc,
                }}
              />
            </Flex>
          </FeaturesList>
        ))}
      </ul>
    </div>
  );
};
export default Features;
