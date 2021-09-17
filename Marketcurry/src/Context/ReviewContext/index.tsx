import React, {createContext, useContext, useReducer, Dispatch} from 'react';

const initialState: IState = {
  review: [],
};

type IDispatch = Dispatch<Action>;

const StateContext = createContext<IState | null>(null);
const DispatchContext = createContext<IDispatch | null>(null);

function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case 'SET_REVIEW':
      return {
        ...state,
        review: action.payload,
      };
    default:
      throw new Error('unhandled action');
  }
}

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

export function StoreProvider({children}: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useStateContext() {
  const state = useContext(StateContext);
  if (!state) throw new Error('Cannot find StateContext');
  return state;
}

export function useDispatchContext() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error('Cannot find DispatchContext');
  return dispatch;
}
