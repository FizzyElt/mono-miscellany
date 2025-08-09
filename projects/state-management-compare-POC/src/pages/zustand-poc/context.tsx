import {
  createContext,
  type PropsWithChildren,
  useContext,
  useRef,
} from "react";
import { type StoreApi, useStore } from "zustand";
import { createFlowStore, type StoreState } from "./store";

export const FlowContext = createContext<StoreApi<StoreState>>(
  {} as StoreApi<StoreState>,
);

export const FlowProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<StoreApi<StoreState>>(null);

  if (!storeRef.current) {
    storeRef.current = createFlowStore();
  }

  return (
    <FlowContext.Provider value={storeRef.current}>
      {children}
    </FlowContext.Provider>
  );
};

export const useFlowContext = <T,>(selector: (state: StoreState) => T) => {
  const store = useContext(FlowContext);

  return useStore(store, selector);
};
