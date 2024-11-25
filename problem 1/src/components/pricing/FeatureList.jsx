/** @jsxImportSource @emotion/react */
import DOMPurify from "dompurify";
import {
  FeaturesList,
  FeaturesListDescription,
  Flex,
  Title,
} from "../../styleComponent";
const FeatureList = ({ featureTitle, featureDesc ,children }) => {
    
  const sanitizedFeatureTitle = DOMPurify.sanitize(featureTitle);
  const sanitizedFeatureDesc = DOMPurify.sanitize(featureDesc);

  return (
    <FeaturesList>
      <Flex>
       
          <Title dangerouslySetInnerHTML={{ __html: sanitizedFeatureTitle }} />
        
        <FeaturesListDescription
          left="50%"
          transform="translateX(-50%)"
          afterLeft="10%"
          dangerouslySetInnerHTML={{ __html: sanitizedFeatureDesc }}
        />
      </Flex>
    </FeaturesList>
  );
};

export default FeatureList;
