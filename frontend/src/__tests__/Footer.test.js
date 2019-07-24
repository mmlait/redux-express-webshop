import React from 'react';
import Footer from '../components/Footer';
import { create } from 'react-test-renderer'

describe('My first snapshot test', () => {
    it('should render Footer component', () => {
    let tree = create(<Footer />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})