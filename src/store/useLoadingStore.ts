import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  show: () => void;
  hide: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  show: () => set({ isLoading: true }),
  hide: () => set({ isLoading: false }),
}));

// 为了方便调用，再封装一个 Hook
export const useLoading = () => {
  const { show, hide } = useLoadingStore();
  return { show, hide };
};
