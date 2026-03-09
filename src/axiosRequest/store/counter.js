import { create } from "zustand";
import { persist } from "zustand/middleware";

const counter = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: "counter" },
  ),
);

export default counter;
