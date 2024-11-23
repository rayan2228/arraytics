/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  FeaturesListDescription,
  Flex,
  Title,
} from "../../styleComponent";
const Features = ({ features }) => {
  return (
    <div>
      <Title>Free includes:</Title>
      <ul>
        <li
          css={css`
            position: relative;
          `}
        >
          <Flex>
            <Title>Unlimited widgets</Title>
            <FeaturesListDescription>
              Add any number of widgets. E.g., Create separate widgets for
              desktop and mobile, or show different widgets for different
              countries or different pages
            </FeaturesListDescription>
          </Flex>
        </li>
      </ul>
     
    </div>
  );
};
export default Features;
