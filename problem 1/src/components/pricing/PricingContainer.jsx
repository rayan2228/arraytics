/** @jsxImportSource @emotion/react */
import { Container, Flex } from "../../styleComponent";
import PlansWrapper from "./PlansWrapper";
import PricingInfo from "./PricingInfo";
import { css } from "@emotion/react";

const PricingContainer = () => {
  return (
    <section
      css={css`
        margin-top: 50px;
      `}
    >
      <Container>
        <Flex flexDirection="column" gap="40px">
          <PricingInfo />
          <PlansWrapper />
        </Flex>
      </Container>
    </section>
  );
};

export default PricingContainer;
