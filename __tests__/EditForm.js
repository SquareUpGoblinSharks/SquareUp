import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";


import EditProfileForm from '../client/components/EditForm';

const mockEdit = jest.fn((name, sex, age, height, weight, fightingStyle, location)=>{
  return Promise.resolve({name, sex, age, height, weight, fightingStyle, location})
})

let testUser = {
  name: 'A#1 Cool Guy',
  age: 33,
  fightingStyle: 'orange',
  height: 5,
  sex: 'male',
  weight: 5,
  location: 'Encinitas, CA'
};

// describe('Edit form unit tests', () => {
//   let form;
//   beforeEach(()=>{
//     form = render(<EditProfileForm onsubmitHandler={mockEdit} defaultData ={testUser}/>)
//   });
//   test('should submit form with right values when button is pressed', ()=>{
//     for (let entry in testUser) {
//       fireEvent.input(screen.getByRole("textbox", { name: /entry/i }), {
//         target: {
//           value: testUser[entry],
//         }
//       })
//     }
//     fireEvent.submit(screen.getByRole("button"))
//   })
//   waitFor(()=> {
//       expect(mockEdit).toBeCalledWith(Object.values(testUser));
//       expect(mockEdit).toHaveBeenCalledTimes(1);
//   });
// });