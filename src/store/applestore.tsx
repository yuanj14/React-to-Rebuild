import { create } from 'zustand'

interface AppleStore {
  count: number
  price: number
  increment: () => void
  setPrice: (price: number) => void
  getTotal: () => number
}

export const useAppleStore = create<AppleStore>((set, get) => {
  return {
    count: 0,
    price: 2,
    increment: () =>
      set((state) => {
        return { count: state.count + 1 }
      }),
    setPrice: (price) => set({ price }),
    getTotal: () => {
      const { count, price } = get()
      return count * price
    },
  }
})
