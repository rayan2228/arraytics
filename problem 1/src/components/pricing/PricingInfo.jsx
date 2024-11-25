/** @jsxImportSource @emotion/react */
import { Flex, PricingInfoButton } from "../../styleComponent";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import { setBillingType } from "../../redux/slices/pricingPlan";
import { useCallback } from "react";

const borderStyle = css`
  border-right: 2px solid #c6d7e3;
  padding-right: 20px;
`;

const PricingInfo = () => {
  const dispatch = useDispatch();
  const {
    plansData: { plansInfo },
    billingType,
  } = useSelector((state) => state.pricingPlan);

  const handleBillingTypeChange = (key) => {
    dispatch(setBillingType(key));
  };

  const getButtonStyles = useCallback(
    (isActive) =>
      css`
        font-weight: ${isActive ? "600" : "400"};
        color: ${isActive ? "#b78deb" : "#49687e"};
        ${isActive &&
        css`
          border-bottom: 2px solid #b78deb;
        `}
      `,
    []
  );

  return (
    <Flex
      justifyContent="center"
      gap="20px"
      alignItems="center"
      margin="40px 0px"
    >
      {Object.entries(plansInfo).map(([key, info], index) => (
        <div
          key={key}
          css={index === 0 && borderStyle}
          onClick={() => handleBillingTypeChange(key)}
        >
          <PricingInfoButton
            fontSize="16px"
            css={getButtonStyles(billingType === key)}
          >
            {info.title}
          </PricingInfoButton>

          {info.sub_title && (
            <PricingInfoButton
              fontSize="16px"
              fontWeight="400"
              color="#49687e"
              margin="0px 20px"
            >
              {info.sub_title}
            </PricingInfoButton>
          )}

          {info.discount && (
            <PricingInfoButton
              fontSize="16px"
              fontWeight="400"
              color="#49687e"
              backgroundColor="#f1e9fb"
              padding="5px 12px"
              borderRadius="40px"
              margin="0px 20px"
            >
              {info.discount}
            </PricingInfoButton>
          )}
        </div>
      ))}
    </Flex>
  );
};

export default PricingInfo;
