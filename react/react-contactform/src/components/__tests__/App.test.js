//set relative path in env.js file
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Inputfield from '../Inputfield';
import Dob from '../Dob';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows input fields', () => {
    expect(wrapped.find(Inputfield).length).toEqual(2);
   
 });

 it('shows Dob field', () => {
     expect(wrapped.find(Dob).length).toEqual(1);

 });

