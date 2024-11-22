/** @jsxImportSource @emotion/react */
import { Flex, Button } from "../../styleComponent";
import { useSelector } from "react-redux";
import { css } from "@emotion/react";
const PricingInfo = () => {
  const {
    plansData: { plansInfo },
    billingType,
  } = useSelector((state) => state.pricingPlan);

  return (
    <Flex justifyContent="center" gap="20px" alignItems="center">
      {Object.keys(plansInfo).map((key, index) => (
        <div
          key={key}
          css={
            index === 0 &&
            css`
              border-right: 2px solid #c6d7e3;
            `
          }
        >
          <Button
            fontSize="16px"
            fontWeight="400"
            color="#49687e"
            padding="0 20px 0px 0px"
          >
            {plansInfo[key].title}
          </Button>
          {plansInfo[key].sub_title && (
            <Button
              fontSize="16px"
              fontWeight="400"
              color="#49687e"
              padding="0 20px 0px 0px"
            >
              {plansInfo[key].sub_title}
            </Button>
          )}
          {plansInfo[key].discount && (
            <Button
              fontSize="16px"
              fontWeight="400"
              color="#49687e"
              backgroundColor="#f1e9fb"
              padding="5px 12px"
              borderRadius="40px"
            >
              {plansInfo[key].discount}
            </Button>
          )}
        </div>
      ))}
    </Flex>
  );
};

export default PricingInfo;
