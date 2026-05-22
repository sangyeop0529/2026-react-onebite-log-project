import type { Session } from "@supabase/supabase-js";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type State = {
  isLoaded: boolean;
  session: Session | null;
};

const initialStore = {
  isLoaded: false,
  session: null,
} as State;

const useSessionStore = create(
  devtools(
    combine(initialStore, (set) => ({
      actions: {
        setSessions: (session: Session | null) => {
          set({ session, isLoaded: true });
        },
      },
    })),
    { name: "sessionStore" },
  ),
);

export const useSession = () => {
  const session = useSessionStore((store) => store.session);
  return session;
};

export const useIsSessionLoaded = () => {
  const session = useSessionStore((store) => store.isLoaded);
  return session;
};

export const useSetSession = () => {
  const session = useSessionStore((store) => store.actions.setSessions);
  return session;
};
