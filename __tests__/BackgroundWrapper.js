import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import '@testing-library/jest-dom';


import BackgroundWrapper from '../client/components/BackgroundWrapper';
import CenteredWrapper from '../client/components/CenteredWrapper';


describe('BackgroundWrapper unit tests', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = render(
    <BackgroundWrapper>
      <div>TEST CHILD</div>  
      <div>TEST CHILD</div>  
      <div>TEST CHILD</div>  
      <div>TEST CHILD</div>  
      <div>TEST CHILD</div>  
    </BackgroundWrapper>
    );
  });
  test('should have default height/width settings', () => {
    expect(screen.getByTestId('background-wrapper')).toHaveClass('h-full');
    expect(screen.getByTestId('background-wrapper')).toHaveClass('w-full');
  })
  test('should render all children correctly', () => {
    expect(wrapper.getAllByText('TEST CHILD').length).toBe(5);
  })
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});