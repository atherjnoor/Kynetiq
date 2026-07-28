'use client';

import React from 'react';
import { Plus, Check } from 'lucide-react';
import { useAppSettings } from '../../../context/AppSettingsContext';
import { Card, SectionHeader, ProgressBar } from '../../../components/ui';
import { goalMilestones } from '../../../lib/data';
import { MUTED, GREEN, GREEN_SOFT, GREEN_TEXT, ORANGE, BORDER_SOFT } from '../../../lib/colors';

export default function GoalsPage() {
  const { accent, unit } = useAppSettings();
  const goalWeightText = unit === 'metric' ? 'Lose 2.3 kg by September' : 'Lose 5 lbs by September';
  const goals = [
    { label: goalWeightText, pct: 68, color: accent },
    { label: 'Run a 5K under 25 minutes', pct: 45, color: GREEN },
    { label: 'Hit protein goal 5 days/week', pct: 80, color: ORANGE },
  ];

  return (
    <div>
      <SectionHeader
        title="Active goals"
        action={
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700, padding: '8px 14px', borderRadius: 10, background: accent, color: 'white', border: 'none', cursor: 'pointer' }}>
            <Plus size={14} /> New goal
          </button>
        }
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 28 }}>
        {goals.map((g) => (
          <Card key={g.label} style={{ padding: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>{g.label}</div>
            <ProgressBar pct={g.pct} color={g.color} height={7} />
            <div style={{ fontSize: 12, color: MUTED, marginTop: 8 }}>{g.pct}% complete</div>
          </Card>
        ))}
      </div>

      <SectionHeader title="Milestones" />
      <Card style={{ padding: '6px 18px' }}>
        {goalMilestones.map((gm, i) => (
          <div key={gm.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: i < goalMilestones.length - 1 ? `1px solid ${BORDER_SOFT}` : 'none' }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: GREEN_SOFT, color: GREEN_TEXT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={11} strokeWidth={3} />
            </div>
            <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{gm.label}</div>
            <div style={{ fontSize: 12, color: MUTED }}>{gm.date}</div>
          </div>
        ))}
      </Card>
    </div>
  );
}
