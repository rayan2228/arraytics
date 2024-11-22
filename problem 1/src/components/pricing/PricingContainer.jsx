/** @jsxImportSource @emotion/react */
import { Container } from "../../styleComponent";
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
        <PricingInfo />
        <PlansWrapper />
      </Container>
    </section>
  );
};

export default PricingContainer;
