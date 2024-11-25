/** @jsxImportSource @emotion/react */
import { sanitizeHTML } from "../../helpers";
import { FeaturesList, FeaturesListDescription, Flex, Title } from "../../styleComponent";

const FeatureList = ({ featureTitle, featureDesc, children , right, left, afterLeft, afterRight, transform}) => {



  return (
    <FeaturesList>
      <Flex>
        {children || (
          <Title
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(featureTitle) }}
          />
        )}

        <FeaturesListDescription
          right={right}
          left={left}
          afterLeft={afterLeft}
          afterRight={afterRight}
          transform={transform}
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(featureDesc) }}
        />
      </Flex>
    </FeaturesList>
  );
};

export default FeatureList;
