import { renderHook } from '@testing-library/react';
import useTransactions from '../useTransactions';

describe('useTransactions', () => {
  it('should return data successfully', async () => {
    const { result } = renderHook(() => useTransactions('desc', 'all', false));

    expect(result).toBeDefined();
  });
});
