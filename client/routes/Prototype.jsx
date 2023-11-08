import React from 'react'
import CenteredWrapper from '../components/CenteredWrapper';
import HexGreenBGWrapper from '../components/HexGreenBGWrapper'
import Button from '../components/Button';

const Prototype = props => {

  return (
    <>
    {/* <HexGreenBGWrapper>
      <CenteredWrapper> 
        Hello!
      </CenteredWrapper>
    </HexGreenBGWrapper> */}
    <Button value={'Testing'} additionalClasses={'border-8, bg-amber-400'}/>
    </>
  );
}

export default Prototype;