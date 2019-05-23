import React from 'react';
import { shallow } from 'enzyme';
import Useget from '../Useget';
import Inputfield from '../Inputfield';
import Dob from '../Dob';

let wrapped;
 beforeEach(() => {
    wrapped = shallow(<Useget/>);
 });

 it('shows input fields', () => {
   expect(wrapped.find(Inputfield).length).toEqual(2);
  
});

it('shows Dob fields', () => {
   expect(wrapped.find(Dob).length).toEqual(1); 
});