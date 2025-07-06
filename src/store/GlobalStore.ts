import { CODE_SAMPLES } from "constants/globalConstants";
import { create } from "zustand";

type CodeLang = keyof typeof CODE_SAMPLES;

type GlobalStore = {
  selectedLang: CodeLang;
  setSelectedLang: (lang: CodeLang) => void;
};

export const GlobalStore = create<GlobalStore>((set) => ({
  selectedLang: "javascript",
  setSelectedLang: (lang) => set({ selectedLang: lang }),
}));
