import serializeTransactions from '../serializeTransactions';
import { dataMock, serializedMock } from './mocks';

describe('serializeTransactions', () => {
  it('should serialize transactions correctly', () => {
    const serialized = serializeTransactions(
      dataMock,
      dataMock[0].debitedAccountId,
    );

    expect(serialized).toStrictEqual(serializedMock);
  });
});
