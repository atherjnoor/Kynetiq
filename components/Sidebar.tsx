'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Dumbbell, Utensils, TrendingUp, Target, Settings as SettingsIcon } from 'lucide-react';
import { SIDEBAR, SIDEBAR_CARD, SIDEBAR_TEXT, GREEN, display } from '../lib/colors';
import { useAppSettings } from '../context/AppSettingsContext';

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { key: 'workouts', label: 'Workouts', href: '/workouts', icon: Dumbbell },
  { key: 'meals', label: 'Meals', href: '/meals', icon: Utensils },
  { key: 'progress', label: 'Progress', href: '/progress', icon: TrendingUp },
  { key: 'goals', label: 'Goals', href: '/goals', icon: Target },
  { key: 'settings', label: 'Settings', href: '/settings', icon: SettingsIcon },
];

export function Sidebar() {
  const pathname = usePathname();
  const { accent } = useAppSettings();

  return (
    <div style={{ width: 216, flexShrink: 0, background: SIDEBAR, padding: '24px 14px', display: 'flex', flexDirection: 'column', gap: 4, minHeight: '100vh' }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '0 8px 24px' }}>
        <div style={{ width: 26, height: 26, borderRadius: 7, background: `linear-gradient(135deg, ${accent}, ${GREEN})` }} />
        <span style={{ ...display, fontWeight: 700, fontSize: 15, color: 'white' }}>Kynetiq</span>
      </Link>
      {NAV_ITEMS.map((item) => {
        const active = pathname?.startsWith(item.href);
        return (
          <Link
            key={item.key}
            href={item.href}
            style={{
              display: 'flex', alignItems: 'center', gap: 11, padding: '11px 12px', borderRadius: 10, marginBottom: 2,
              background: active ? accent : 'transparent', color: active ? 'white' : SIDEBAR_TEXT,
            }}
          >
            <item.icon size={16} strokeWidth={2.2} style={{ opacity: active ? 1 : 0.65 }} />
            <span style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</span>
          </Link>
        );
      })}
      <div style={{ marginTop: 'auto', padding: '14px 12px', borderRadius: 12, background: SIDEBAR_CARD, color: SIDEBAR_TEXT, fontSize: 12.5, lineHeight: 1.5 }}>
        <div style={{ fontWeight: 700, color: 'white', marginBottom: 4 }}>Alex Rivera</div>
        {'Free plan \u00b7 12-day streak'}
      </div>
    </div>
  );
}
