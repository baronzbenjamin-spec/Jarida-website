import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Appointment,
  ChatMessage,
  Conversation,
  SEED_APPOINTMENTS,
  SEED_CONVERSATIONS,
} from "@/constants/data";

const ONBOARDING_KEY = "jarida.onboardingComplete";
const APPOINTMENTS_KEY = "jarida.appointments";
const CONVERSATIONS_KEY = "jarida.conversations";

interface AppContextValue {
  hydrated: boolean;
  onboardingComplete: boolean;
  completeOnboarding: () => void;
  appointments: Appointment[];
  bookAppointment: (
    input: Omit<Appointment, "id" | "status" | "createdAt">,
  ) => void;
  cancelAppointment: (id: string) => void;
  conversations: Conversation[];
  getConversation: (doctorId: string) => Conversation | undefined;
  sendMessage: (doctorId: string, text: string) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function newId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

function nowTimeLabel(): string {
  return new Date().toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [onboardingComplete, setOnboardingComplete] = useState<boolean>(false);
  const [appointments, setAppointments] =
    useState<Appointment[]>(SEED_APPOINTMENTS);
  const [conversations, setConversations] =
    useState<Conversation[]>(SEED_CONVERSATIONS);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const [ob, appts, convos] = await Promise.all([
          AsyncStorage.getItem(ONBOARDING_KEY),
          AsyncStorage.getItem(APPOINTMENTS_KEY),
          AsyncStorage.getItem(CONVERSATIONS_KEY),
        ]);
        if (!active) return;
        if (ob === "true") setOnboardingComplete(true);
        if (appts) setAppointments(JSON.parse(appts) as Appointment[]);
        if (convos) setConversations(JSON.parse(convos) as Conversation[]);
      } catch {
        // ignore corrupt storage; fall back to seed data
      } finally {
        if (active) setHydrated(true);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const persistAppointments = useCallback((next: Appointment[]) => {
    setAppointments(next);
    AsyncStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const persistConversations = useCallback((next: Conversation[]) => {
    setConversations(next);
    AsyncStorage.setItem(CONVERSATIONS_KEY, JSON.stringify(next)).catch(
      () => {},
    );
  }, []);

  const completeOnboarding = useCallback(() => {
    setOnboardingComplete(true);
    AsyncStorage.setItem(ONBOARDING_KEY, "true").catch(() => {});
  }, []);

  const bookAppointment = useCallback<AppContextValue["bookAppointment"]>(
    (input) => {
      const appointment: Appointment = {
        ...input,
        id: newId(),
        status: "upcoming",
        createdAt: Date.now(),
      };
      persistAppointments([appointment, ...appointments]);
    },
    [appointments, persistAppointments],
  );

  const cancelAppointment = useCallback(
    (id: string) => {
      const next = appointments.map((a) =>
        a.id === id ? { ...a, status: "cancelled" as const } : a,
      );
      persistAppointments(next);
    },
    [appointments, persistAppointments],
  );

  const getConversation = useCallback(
    (doctorId: string) => conversations.find((c) => c.doctorId === doctorId),
    [conversations],
  );

  const sendMessage = useCallback(
    (doctorId: string, text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      const message: ChatMessage = {
        id: newId(),
        text: trimmed,
        sender: "me",
        time: nowTimeLabel(),
      };
      const existing = conversations.find((c) => c.doctorId === doctorId);
      let next: Conversation[];
      if (existing) {
        next = conversations.map((c) =>
          c.doctorId === doctorId
            ? { ...c, messages: [...c.messages, message] }
            : c,
        );
      } else {
        next = [{ doctorId, messages: [message] }, ...conversations];
      }
      persistConversations(next);
    },
    [conversations, persistConversations],
  );

  const value = useMemo<AppContextValue>(
    () => ({
      hydrated,
      onboardingComplete,
      completeOnboarding,
      appointments,
      bookAppointment,
      cancelAppointment,
      conversations,
      getConversation,
      sendMessage,
    }),
    [
      hydrated,
      onboardingComplete,
      completeOnboarding,
      appointments,
      bookAppointment,
      cancelAppointment,
      conversations,
      getConversation,
      sendMessage,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return ctx;
}
