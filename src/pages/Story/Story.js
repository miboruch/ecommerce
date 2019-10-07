import React from 'react';

import TitleSection from '../../components/TitleSection/TitleSection';
import StoryContent from '../../components/StoryContent/StoryContent';
import ContactFooter from '../../components/ContactFooter/ContactFooter';

const Story = () => {
  return (
    <>
      <TitleSection title='OUR STORY' />
      <StoryContent />
      <ContactFooter />
    </>
  );
};

export default Story;
