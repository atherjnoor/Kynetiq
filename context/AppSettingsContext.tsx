'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { THEMES } from '../lib/colors';
import { defaultIntegrations, Integration } from '../lib/data';

type Unit = 'imperial' | 'metric';

interface AppSettings {
  accent: string;
  setAccent: (value: string) => void;
  unit: Unit;
  setUnit: (value: Unit) => void;
  notifications: boolean;
  setNotifications: (fn: boolean | ((v: boolean) => boolean)) => void;
  integrations: Integration[];
  setIntegrations: (fn: Integration[] | ((v: Integration[]) => Integration[])) => void;
}

const AppSettingsContext = createContext<AppSettings | undefined>(undefined);

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState(THEMES[0].value);
  const [unit, setUnit] = useState<Unit>('imperial');
  const [notifications, setNotifications] = useState(true);
  const [integrations, setIntegrations] = useState<Integration[]>(defaultIntegrations);

  return (
    <AppSettingsContext.Provider
      value={{ accent, setAccent, unit, setUnit, notifications, setNotifications, integrations, setIntegrations }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
}

export function useAppSettings() {
  const ctx = useContext(AppSettingsContext);
  if (!ctx) throw new Error('useAppSettings must be used within an AppSettingsProvider');
  return ctx;
}
