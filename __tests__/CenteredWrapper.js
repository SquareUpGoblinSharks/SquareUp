import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import '@testing-library/jest-dom';



import CenteredWrapper from '../client/components/CenteredWrapper';


describe('CenteredWrapper unit tests', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = render(
    <CenteredWrapper>
      <div>TEST CHILD</div>  
      <div>TEST CHILD</div>  
      <div>TEST CHILD</div>  
      <div>TEST CHILD</div>  
      <div>TEST CHILD</div>  
    </CenteredWrapper>
    );
  });
  test('should have default flex settings', () => {
    expect(screen.getByTestId('centered-wrapper')).toHaveClass('flex');
    expect(screen.getByTestId('centered-wrapper')).toHaveClass('items-center');
    expect(screen.getByTestId('centered-wrapper')).toHaveClass('justify-center');
    expect(screen.getByTestId('centered-wrapper')).toHaveClass('flex-col');
    expect(screen.getByTestId('centered-wrapper')).toHaveClass('h-full');
    expect(screen.getByTestId('centered-wrapper')).toHaveClass('w-full');
    expect(screen.getByTestId('centered-wrapper')).toHaveClass('bg-inherit');
  })
  test('should render all children correctly', () => {
    expect(wrapper.getAllByText('TEST CHILD').length).toBe(5);
  })
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});