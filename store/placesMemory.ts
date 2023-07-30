import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type UserData = {
  place: string;
  favorite: string;
  Tavel: string;
};

interface BearState {
  bears: number;
  name: string;
  userData: UserData;
  updateUser: (data: UserData) => void;
  increase: (by: number) => void;
}

export const UseDrive = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        name: "Karim",
        userData: {
          place: "Cox's Bazar",
          favorite: "Sea beach",
          Tavel: "Bus",
        },
        updateUser: (data) => {
          set((state) => {
            return { ...state, userData: data };
          });
        },
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      { name: "Places-Change" }
    )
  )
);
