import { PropsWithChildren, useState } from 'react';
import { UpdateContext } from '../contexts/UpdateContext';

export default function UpdateProvider({ children }: PropsWithChildren) {
  const [update, setUpdate] = useState(false);

  const triggerUpdate = () => setUpdate(!update);

  return (
    <UpdateContext.Provider
      value={{
        triggerUpdate,
        update,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
}
