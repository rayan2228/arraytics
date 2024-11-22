/** @jsxImportSource @emotion/react */
import { Container } from "../../styleComponent";
import PricingInfo from "./PricingInfo";
import { css } from "@emotion/react";

const PricingContainer = () => {
  return (
    <Container>
      <div
        css={css`
          margin-top: 50px;
        `}
      >
        <PricingInfo />
      </div>
    </Container>
  );
};

export default PricingContainer;
