import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type UserData = {
  name: string;
  age: number;
  mobile: string;
};

interface BearState {
  bears: number;
  name: string;
  userData: UserData;
  updateUser: (data: UserData) => void;
  increase: (by: number) => void;
}

export const useStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        name: "Karim",
        userData: {
          name: "Bahar",
          age: 24,
          mobile: "01857489911",
        },
        updateUser: (data) => {
          set((state) => {
            return { ...state, userData: data };
          });
        },
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      { name: "test-store" }
    )
  )
);
