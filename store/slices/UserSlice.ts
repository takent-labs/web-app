import { create, StateCreator } from 'zustand'

interface User {
    id: string;
    username: string;
    email: string;
}

export interface UserSlice {
    user: User | null;
    setUser: (user: User) => void
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
    user: null,
    setUser: (user: User) => set({ user: user }),
})