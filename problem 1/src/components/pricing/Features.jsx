/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Title } from "../../styleComponent";
import FeatureList from "./FeatureList";

const Features = ({ features, plan, selectedPlan }) => {
  const renderPlanDetails = () => {
    if (plan.name === "Free") return null;
    const { title, text } = selectedPlan || plan;
    return (
      <FeatureList
        featureTitle={title}
        featureDesc={text}
        left="50%"
        transform="translateX(-50%)"
        afterLeft="10%"
      />
    );
  };

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
        {renderPlanDetails()}
        {features.map((feature) => (
          <FeatureList
            left="50%"
            transform="translateX(-50%)"
            afterLeft="10%"
            key={feature.feature_title}
            featureTitle={feature.feature_title}
            featureDesc={feature.feature_desc}
          />
        ))}
      </ul>
    </div>
  );
};

export default Features;
