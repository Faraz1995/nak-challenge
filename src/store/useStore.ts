import { create } from 'zustand'
import { User } from '../types/users'
import { mockData } from '../assets/mockData'

interface UserState {
  users: User[]
  setUsers: (newUser: User[]) => void
}

export const useUserStore = create<UserState>((set) => ({
  users: mockData,
  setUsers: (newUser: User[]) => set({ users: newUser })
}))
