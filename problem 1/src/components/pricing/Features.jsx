/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  FeaturesList,
  FeaturesListDescription,
  Flex,
  Title,
} from "../../styleComponent";
const Features = ({ features, planName }) => {
  return (
    <div css={css`margin-bottom: 20px;`}>
      <Title fontWeight="500" fontSize="16px" padding="8px 0px">
        {planName === "Free" ? "Free includes:" : "Everything in free plus:"}
      </Title>
      <ul>
        {features.map((feature) => (
          <FeaturesList key={feature.feature_title}>
            <Flex>
              <Title>{feature.feature_title}</Title>
              <FeaturesListDescription
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
