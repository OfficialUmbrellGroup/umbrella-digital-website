import { useMemo } from "react";
import { generateRandomStats } from "../utils/randomStats";

export function useRandomStats() {
  return useMemo(() => generateRandomStats(), []);
}
