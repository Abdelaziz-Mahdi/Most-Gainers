import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import gainersSlice from '../redux/gainersSlice';

const store = configureStore({
  reducer: {
    gainers: gainersSlice,
  },
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Details />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
