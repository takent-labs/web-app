import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createUserSlice, UserSlice } from './slices/UserSlice'

type GlobalStore = UserSlice;

export const useBoundStore = create<GlobalStore>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
    }),
    { name: 'bound-store' },
  ),
)