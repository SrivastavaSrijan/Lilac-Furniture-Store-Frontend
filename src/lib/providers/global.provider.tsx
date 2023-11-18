import {
  createContext,
  Dispatch,
  PropsWithChildren,
  Reducer,
  useReducer,
} from 'react';

/** Define a custom context to use throughout the application
 * @interface StateType, ActionType and
 */
function createGlobalContext<StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>,
  initialState: StateType,
  name: string,
) {
  const defaultDispatch: Dispatch<ActionType> = () => initialState;
  const context = createContext({
    state: initialState,
    dispatch: defaultDispatch,
  });
  context.displayName = name;
  function Provider(props: PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(
      reducer,
      initialState,
    );
    return <context.Provider value={{ state, dispatch }} {...props} />;
  }
  return [context, Provider] as const;
}

export default createGlobalContext;
