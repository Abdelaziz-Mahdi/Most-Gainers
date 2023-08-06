import '@testing-library/jest-dom';
import gainersReducer, { initialState, fetchGainers } from '../redux/gainersSlice';

describe('gainers reducer', () => {
  test('should return the initial state', () => {
    expect(gainersReducer(undefined, {})).toEqual(initialState);
  });
});

describe('gainers reducer', () => {
  test('should handle fetchGainers', () => {
    const actual = gainersReducer(initialState, fetchGainers());
    expect(actual.gainersLoading).toEqual(false);
  });
});

describe('gainers reducer', () => {
  test('should handle fetchGainers', () => {
    const mockGainers = [
      {
        ticker: 'AAPL',
        changes: 0.61,
        price: 127.45,
      },
    ];
    const actual = gainersReducer(initialState, fetchGainers.fulfilled(mockGainers));
    expect(actual.gainers).toEqual(mockGainers);
  });
});
