import { GlobalStore } from "../store/GlobalStore";
import { NavigateFunction } from "react-router-dom";

// Accept `navigate` as a parameter for flexibility
export const handleStartTest = (name: string, navigate: NavigateFunction) => {
  const setTestStarted = GlobalStore((state) => state.setTestStarted);
  const setUserName = GlobalStore((state) => state.setUserName);
  const setLoading = GlobalStore((state) => state.setLoading);

  setUserName(name);
  setLoading(true);

  setTimeout(() => {
    setTestStarted(true);
    setLoading(false);
    navigate("/test");
  }, 1500);
};
