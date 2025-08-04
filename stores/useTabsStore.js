import { create } from 'zustand';

const useTabsStore = create((set) => ({
  activeTab: null,
  selectedTab: 'tours',

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedTab: (tabType) => set({ selectedTab: tabType }),
}));

export default useTabsStore;
