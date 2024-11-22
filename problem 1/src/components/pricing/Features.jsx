/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Button,
  FeaturesListDescription,
  Flex,
  Title,
} from "../../styleComponent";
const Features = () => {
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
      <Button
        as="a"
        href="/pricing"
        textAlign="center"
        display="block"
        margin="auto"
        padding="10px 0px"
        backgroundColor="#b78deb"
        borderRadius="8px"
      >
        Select Plan
      </Button>
    </div>
  );
};
export default Features;
