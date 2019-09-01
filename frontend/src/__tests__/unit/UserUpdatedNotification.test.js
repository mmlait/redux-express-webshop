import React from 'react';
import { create } from 'react-test-renderer'
import UserUpdatedNotification from '../../components/UserUpdatedNotification';

describe('UserUpdatedNotification component', () => {
    it('should render', () => {
    let tree = create(<UserUpdatedNotification />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})