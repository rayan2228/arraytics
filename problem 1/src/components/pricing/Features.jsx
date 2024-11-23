/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FeaturesListDescription, Flex, Title } from "../../styleComponent";
const Features = ({ features, plansName }) => {
  return (
    <div>
      <Title>
        {plansName === "Free" ? "Free includes:" : "Everything in free plus:"}
      </Title>
      <ul>
        {features.map((feature) => (
          <li
            css={css`
              position: relative;
            `}
            key={feature.feature_title}
          >
            <Flex>
              <Title>{feature.feature_title}</Title>
              <FeaturesListDescription>
                {feature.feature_desc}
              </FeaturesListDescription>
            </Flex>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Features;
