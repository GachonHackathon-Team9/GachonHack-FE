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
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      fetch('https://gachonhack-be.onrender.com/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
      }).catch(() => {});
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    set({ user: null, isAuthenticated: false });
  },

  updateTokens: (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    set((state) => ({ user: { ...state.user, token: accessToken } }));
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
