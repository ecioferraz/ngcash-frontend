import { renderHook } from '@testing-library/react';
import useBalance from '../useBalance';

describe('useBalance', () => {
  it('should return data successfully', async () => {
    const { result } = renderHook(() => useBalance(false));

    expect(result).toBeDefined();
  });
});
