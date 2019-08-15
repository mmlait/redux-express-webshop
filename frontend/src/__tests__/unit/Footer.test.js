import React from 'react';
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer';

describe('Footer component', () => {
    it('should render', () => {
    let tree = create(<Footer />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})