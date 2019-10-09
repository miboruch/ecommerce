import React from 'react';

import TitleSection from '../../components/TitleSection/TitleSection';
import StoryContent from '../../components/StoryContent/StoryContent';
import ContactFooter from '../../components/ContactFooter/ContactFooter';

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
