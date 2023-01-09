import { createContext, useContext } from 'react';
import UpdateContextType from './UpdateContextType';

export const UpdateContext = createContext<UpdateContextType>({
  triggerUpdate: () => {
    return;
  },
  update: false,
});

export const useUpdateContext = () => useContext(UpdateContext);
