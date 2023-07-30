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

export const UseMemorey = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        name: "Karim",
        userData: {
          name: "Nayeem",
          age: 21,
          mobile: "0184545821",
        },
        updateUser: (data) => {
          set((state) => {
            return { ...state, userData: data };
          });
        },
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      { name: "test-Memorey" }
    )
  )
);
