import { createContext, useContext, useReducer } from 'react';

const UpdateContext = createContext(null);

const UpdateDispatchContext = createContext(null);

export function UpdateProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    updateReducer,
    initialUpdate
  );

  return (
    <UpdateContext.Provider value={tasks}>
      <UpdateDispatchContext.Provider value={dispatch}>
        {children}
      </UpdateDispatchContext.Provider>
    </UpdateContext.Provider>
  );
}

export function useTasks() {
  return useContext(UpdateContext);
}

export function useTasksDispatch() {
  return useContext(UpdateDispatchContext);
}

function updateReducer(count, action) {
  switch (action.type) {
    case 'add': {
      return count + 1;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialUpdate = 0;
