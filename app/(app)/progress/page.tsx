'use client';

import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { useAppSettings } from '../../../context/AppSettingsContext';
import { Card } from '../../../components/ui';
import { workoutBars, heatColors, heatIntensity, personalRecords, progressPhotos } from '../../../lib/data';
import { INK, MUTED, MUTED2, GREEN_TEXT, ORANGE_TEXT, BORDER_SOFT, display } from '../../../lib/colors';

export default function ProgressPage() {
  const { accent, unit } = useAppSettings();
  const toKg = (lbs: number) => (lbs / 2.20462).toFixed(1) + ' kg';
  const weightNow = unit === 'metric' ? toKg(174) : '174 lbs';
  const weightStart = unit === 'metric' ? toKg(182) : '182 lbs';
  const weightDelta = unit === 'metric' ? '-' + (8 / 2.20462).toFixed(1) + ' kg' : '-8 lbs';
  const photos = progressPhotos(accent);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 14, marginBottom: 32 }}>
        <Card style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>Weight trend</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: GREEN_TEXT }}>{weightDelta}</div>
          </div>
          <svg viewBox="0 0 560 150" style={{ width: '100%', height: 130, display: 'block' }}>
            <polyline points="20,20 97,32 174,42 251,58 328,70 405,86 482,102 540,110" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="540" cy="110" r="5" fill={accent} />
            <text x="20" y="140" fontSize="11" fill={MUTED} fontFamily="Work Sans">{`8 weeks ago \u00b7 ${weightStart}`}</text>
            <text x="540" y="140" textAnchor="end" fontSize="11" fill={INK} fontFamily="Work Sans" fontWeight="700">{`Today \u00b7 ${weightNow}`}</text>
          </svg>
        </Card>
        <Card style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 16 }}>Workouts / week</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 100 }}>
            {workoutBars.map((b) => (
              <div key={b.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ width: '100%', borderRadius: '6px 6px 2px 2px', background: b.active ? accent : 'oklch(85% 0.02 250)', height: `${b.height}%` }} />
                <div style={{ fontSize: 10.5, color: MUTED }}>{b.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 32 }}>
        <Card style={{ padding: 16 }}>
          <div style={{ fontSize: 12.5, color: MUTED, fontWeight: 600, marginBottom: 8 }}>Protein intake</div>
          <div style={{ ...display, fontSize: 19, fontWeight: 800, color: GREEN_TEXT, display: 'flex', alignItems: 'center', gap: 4 }}><ArrowUp size={16} /> 8%</div>
        </Card>
        <Card style={{ padding: 16 }}>
          <div style={{ fontSize: 12.5, color: MUTED, fontWeight: 600, marginBottom: 8 }}>Carb intake</div>
          <div style={{ ...display, fontSize: 19, fontWeight: 800, color: MUTED2 }}>{'\u2014 stable'}</div>
        </Card>
        <Card style={{ padding: 16 }}>
          <div style={{ fontSize: 12.5, color: MUTED, fontWeight: 600, marginBottom: 8 }}>Fat intake</div>
          <div style={{ ...display, fontSize: 19, fontWeight: 800, color: ORANGE_TEXT, display: 'flex', alignItems: 'center', gap: 4 }}><ArrowDown size={16} /> 4%</div>
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 32 }}>
        <Card style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 14 }}>{'Consistency \u00b7 last 5 weeks'}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 5 }}>
            {heatIntensity.map((v, i) => (
              <div key={i} style={{ aspectRatio: '1', borderRadius: 4, background: heatColors[v] }} />
            ))}
          </div>
          <div style={{ fontSize: 11.5, color: MUTED, marginTop: 10 }}>Darker means more activity logged that day</div>
        </Card>
        <Card style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 12 }}>Personal records</div>
          {personalRecords.map((pr) => (
            <div key={pr.ex} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 0', borderBottom: `1px solid ${BORDER_SOFT}` }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{pr.ex}</div>
              <div style={{ fontSize: 12.5, color: MUTED, textAlign: 'right' }}>{pr.value}<div style={{ fontSize: 11, color: 'oklch(60% 0.013 250)' }}>{pr.date}</div></div>
            </div>
          ))}
        </Card>
      </div>

      <div>
        <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 12 }}>Progress photos</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {photos.map((ph) => (
            <div key={ph.label} style={{ borderRadius: 14, overflow: 'hidden', height: 120, background: `linear-gradient(135deg, ${ph.c1}, ${ph.c2})`, display: 'flex', alignItems: 'flex-end', padding: 10 }}>
              <span style={{ fontFamily: 'monospace', fontSize: 10.5, color: 'rgba(255,255,255,0.9)' }}>{ph.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
