import { create } from 'zustand';

const savedToken = localStorage.getItem('accessToken');

const useAuthStore = create((set) => ({
  user: savedToken ? { token: savedToken } : null,
  isAuthenticated: !!savedToken,
  points: 1000,

  // 가입 시 랜덤 닉네임 생성 (@ + 숫자 6자리)
  generateNickname: () => {
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    return `@${randomDigits}`;
  },

  login: (userData) => set({
    user: { ...userData, nickname: userData.nickname || `@${Math.floor(100000 + Math.random() * 900000)}` },
    isAuthenticated: true
  }),

  logout: () => {
    localStorage.removeItem('accessToken');
    set({ user: null, isAuthenticated: false });
  },

  updateProfile: (profileData) => set((state) => ({
    user: { ...state.user, ...profileData }
  })),

  addPoints: (amount) => set((state) => ({ points: state.points + amount })),
  spendPoints: (amount) => set((state) => {
    if (state.points >= amount) {
      return { points: state.points - amount };
    }
    return state;
  }),
}));

export default useAuthStore;
