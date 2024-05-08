import { create } from 'zustand'

interface GymModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useGymModal = create<GymModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))