import React from 'react';

import TitleSection from '../../components/molecules/TitleSection/TitleSection';
import StoryContent from '../../components/templates/StoryContent/StoryContent';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';

const Story = () => {
  return (
    <>
      <TitleSection>Our story</TitleSection>
      <StoryContent />
      <ContactFooter />
    </>
  );
};

export default Story;
