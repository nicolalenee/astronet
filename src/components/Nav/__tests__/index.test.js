import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


// after each test, clean up leftover memory data
afterEach(cleanup);

// declare the component we're testing
describe('Nav component', () => {
  // baseline to verify that the component is rendering
  it('renders', () => {
    render(<Nav />);
  });
  // test case -> compare snapshot version of the DOM node structure
  it('matches snapshot DOM node structure',() => {
    // return snapshot
    const { asFragment } = render(<Nav />);
    // test and compare whether the expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  })
})