import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
// import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

// Uses ReactShallowRenderer, commenting this since we're using Enzyme to render.
// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });