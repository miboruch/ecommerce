import React from 'react';

import TitleSection from '../../components/molecules/TitleSection/TitleSection';
import StoryContent from '../../components/templates/StoryContent/StoryContent';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';

const Story = () => {
  return (
    <>
      <TitleSection title='our story' />
      <StoryContent />
      <ContactFooter />
    </>
  );
};

export default Story;
