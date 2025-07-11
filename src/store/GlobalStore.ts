import { CODE_SAMPLES } from "constants/globalConstants";
import { create } from "zustand";

type CodeLang = keyof typeof CODE_SAMPLES;

type GlobalStore = {
  selectedLang: CodeLang;
  setSelectedLang: (lang: CodeLang) => void;

  testStarted: boolean;
  setTestStarted: (started: boolean) => void;

  userName: string;
  setUserName: (name: string) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const GlobalStore = create<GlobalStore>((set) => ({
  selectedLang: "javascript",
  setSelectedLang: (lang) => set({ selectedLang: lang }),

  testStarted: false,
  setTestStarted: (started) => set({ testStarted: started }),

  userName: "",
  setUserName: (name) => set({ userName: name }),

  loading: false,
  setLoading: (loading) => set({ loading }),
}));
