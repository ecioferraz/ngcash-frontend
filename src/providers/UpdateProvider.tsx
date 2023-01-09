import { PropsWithChildren, useState } from 'react';
import { UpdateContext } from '../contexts/Update.context';

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
