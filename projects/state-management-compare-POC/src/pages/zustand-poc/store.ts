import { createStore } from "zustand";
import type { FormOneData } from "../../components/form-one";
import type { FormTwoData } from "../../components/form-two";

export interface StoreState {
  formDataOne: FormOneData | null;
  formDataTwo: FormTwoData | null;
  submitFormOne: (data: FormOneData) => void;
  submitFormTwo: (data: FormTwoData) => void;
}

export const createFlowStore = () =>
  createStore<StoreState>((set) => ({
    formDataOne: null,
    formDataTwo: null,

    submitFormOne: (data: FormOneData) => set({ formDataOne: data }),
    submitFormTwo: (data: FormTwoData) => set({ formDataTwo: data }),
  }));
