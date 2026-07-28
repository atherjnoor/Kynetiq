'use client';

import React from 'react';
import { useAppSettings } from '../../../context/AppSettingsContext';
import { Card, SectionHeader, ProgressBar } from '../../../components/ui';
import { meals, macros } from '../../../lib/data';
import { MUTED, TRACK, display } from '../../../lib/colors';

export default function MealsPage() {
  const { accent } = useAppSettings();
  const list = meals(accent);
  const macroList = macros(accent);

  return (
    <div>
      <SectionHeader title={'Today\u2019s meals'} action={<span style={{ fontSize: 13.5, fontWeight: 600, color: accent }}>{'+ Log a meal'}</span>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 32 }}>
        {list.map((m) => (
          <Card key={m.slot} style={{ padding: 14, display: 'flex', gap: 14 }}>
            <div style={{ width: 60, height: 60, flexShrink: 0, borderRadius: 12, background: `linear-gradient(135deg, ${m.c1}, ${m.c2})` }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>{m.slot}</div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{m.name}</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 3 }}>{`${m.kcal} kcal \u00b7 ${m.protein}g protein`}</div>
            </div>
          </Card>
        ))}
      </div>

      <SectionHeader title="Macros" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 32 }}>
        {macroList.map((m) => (
          <Card key={m.label} style={{ padding: 16 }}>
            <div style={{ fontSize: 12.5, color: MUTED, fontWeight: 600, marginBottom: 8 }}>{m.label}</div>
            <div style={{ ...display, fontSize: 16, fontWeight: 800, marginBottom: 8 }}>{m.value}</div>
            <ProgressBar pct={m.pct} color={m.color} />
          </Card>
        ))}
      </div>

      <Card style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Water intake</div>
          <div style={{ fontSize: 12.5, color: MUTED }}>{'2.1L of 3L goal \u00b7 7 of 10 glasses'}</div>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} style={{ width: 14, height: 22, borderRadius: '4px 4px 8px 8px', background: i < 7 ? accent : TRACK }} />
          ))}
        </div>
      </Card>
    </div>
  );
}
