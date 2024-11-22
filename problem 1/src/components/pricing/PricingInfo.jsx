/** @jsxImportSource @emotion/react */
import { Flex, Button } from "../../styleComponent";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import { setBillingType } from "../../redux/slices/pricingPlan";
const PricingInfo = () => {
  const {
    plansData: { plansInfo },
    billingType,
  } = useSelector((state) => state.pricingPlan);
  const dispatch = useDispatch();
  return (
    <Flex justifyContent="center" gap="20px" alignItems="center">
      {Object.keys(plansInfo).map((key, index) => (
        <div
          key={key}
          css={
            index === 0 &&
            css`
              border-right: 2px solid #c6d7e3;
              padding-right: 20px;
            `
          }
          onClick={() => dispatch(setBillingType(key))}
        >
          <Button
            fontSize="16px"
            fontWeight={billingType === key ? "600" : "400"}
            color={billingType === key ? "#b78deb" : "#49687e"}
            css={
              billingType === key &&
              css`
                border-bottom: 2px solid #b78deb;
              `
            }
          >
            {plansInfo[key].title}
          </Button>
          {plansInfo[key].sub_title && (
            <Button
              fontSize="16px"
              fontWeight="400"
              color="#49687e"
              margin="0px 20px"
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
              margin="0px 20px"
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
