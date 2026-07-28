'use client';

import React from 'react';
import { Wifi } from 'lucide-react';
import { useAppSettings } from '../../../context/AppSettingsContext';
import { Card, SectionHeader, Toggle } from '../../../components/ui';
import { THEMES, MUTED, BORDER, BORDER_SOFT } from '../../../lib/colors';

export default function SettingsPage() {
  const {
    accent, setAccent, unit, setUnit, notifications, setNotifications, integrations, setIntegrations,
  } = useAppSettings();

  return (
    <div>
      <SectionHeader title="Preferences" />
      <Card style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: `1px solid ${BORDER_SOFT}` }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Units</div>
            <div style={{ fontSize: 12.5, color: MUTED, marginTop: 2 }}>{unit === 'metric' ? 'Metric (kg, km)' : 'Imperial (lbs, mi)'}</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {(['imperial', 'metric'] as const).map((u) => (
              <button key={u} onClick={() => setUnit(u)} style={{
                padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, border: `1px solid ${unit === u ? accent : BORDER}`,
                background: unit === u ? accent : 'white', color: unit === u ? 'white' : '#3F4650', cursor: 'pointer',
              }}>
                {u === 'imperial' ? 'lbs' : 'kg'}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: `1px solid ${BORDER_SOFT}` }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Push notifications</div>
            <div style={{ fontSize: 12.5, color: MUTED, marginTop: 2 }}>Reminders for meals and workouts</div>
          </div>
          <Toggle on={notifications} onClick={() => setNotifications((v) => !v)} accent={accent} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Dark mode</div>
            <div style={{ fontSize: 12.5, color: MUTED, marginTop: 2 }}>{'Coming soon \u2014 not wired up yet, so it stays off rather than pretend to work'}</div>
          </div>
          <Toggle on={false} disabled accent={accent} />
        </div>
      </Card>

      <SectionHeader title="Theme" />
      <Card style={{ padding: 18, marginBottom: 28 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          {THEMES.map((t) => (
            <button key={t.value} onClick={() => setAccent(t.value)} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '9px 14px', borderRadius: 10,
              border: `1px solid ${accent === t.value ? t.value : BORDER}`, background: accent === t.value ? `${t.value}14` : 'white', cursor: 'pointer',
            }}>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: t.value }} />
              <span style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</span>
            </button>
          ))}
        </div>
      </Card>

      <SectionHeader title="Connected accounts" />
      <Card>
        {integrations.map((r, i) => (
          <div key={r.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: i < integrations.length - 1 ? `1px solid ${BORDER_SOFT}` : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Wifi size={15} color={r.connected ? accent : MUTED} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 13.5 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: MUTED, marginTop: 1 }}>{r.connected ? 'Connected' : 'Not connected'}</div>
              </div>
            </div>
            <Toggle
              on={r.connected}
              accent={accent}
              onClick={() => setIntegrations((prev) => prev.map((x) => (x.name === r.name ? { ...x, connected: !x.connected } : x)))}
            />
          </div>
        ))}
      </Card>
    </div>
  );
}
