/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "../../styleComponent";
import PlanInfo from "./PlanInfo";

const PlansWrapper = () => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap="20px"
      css={css`
        padding-top: 50px;
      `}
    >
      <PlanInfo />
    </Grid>
  );
};
export default PlansWrapper;
