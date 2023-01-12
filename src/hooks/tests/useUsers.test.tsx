import { renderHook } from '@testing-library/react';
import useUsers from '../useUsers';

describe('useUsers', () => {
  it('should return data successfully', async () => {
    const { result } = renderHook(() => useUsers());

    expect(result).toBeDefined();
  });
});
