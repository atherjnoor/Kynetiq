'use client';

import React from 'react';
import { useAppSettings } from '../../../context/AppSettingsContext';
import { Card, SectionHeader, ProgressBar } from '../../../components/ui';
import { weekDays, weekPlanLabels, ACTIVE_DAY, todaysProgram, workoutLibrary, muscleVolume } from '../../../lib/data';
import { BORDER, BORDER_SOFT, MUTED, MUTED2, ORANGE, ORANGE_TEXT, GREEN_TEXT, display } from '../../../lib/colors';

export default function WorkoutsPage() {
  const { accent } = useAppSettings();
  const library = workoutLibrary(accent);
  const volume = muscleVolume(accent);

  return (
    <div>
      <SectionHeader title="This week" />
      <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
        {weekDays.map((day, i) => {
          const active = i === ACTIVE_DAY;
          return (
            <div key={day} style={{ flex: 1, textAlign: 'center', padding: '10px 4px', borderRadius: 12, background: active ? accent : 'white', color: active ? 'white' : 'oklch(30% 0.02 250)', border: `1px solid ${active ? accent : BORDER}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.75 }}>{day}</div>
              <div style={{ fontSize: 12.5, fontWeight: 700, marginTop: 3 }}>{weekPlanLabels[i]}</div>
            </div>
          );
        })}
      </div>

      <SectionHeader title={'Today\u2019s session \u00b7 Pull day'} />
      <Card style={{ marginBottom: 32, overflow: 'hidden' }}>
        {todaysProgram.map((ex, i) => (
          <div key={ex.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: i < todaysProgram.length - 1 ? `1px solid ${BORDER_SOFT}` : 'none' }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{ex.name}</div>
            <div style={{ display: 'flex', gap: 18, fontSize: 12.5, color: MUTED }}>
              <span>{ex.target}</span>
              <span>{ex.weight}</span>
              <span>{ex.rest}</span>
            </div>
          </div>
        ))}
      </Card>

      <SectionHeader title="Exercise library" action={<span style={{ fontSize: 13.5, fontWeight: 600, color: accent }}>{'View all \u2192'}</span>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 32 }}>
        {library.map((w) => (
          <Card key={w.name} style={{ overflow: 'hidden' }}>
            <div style={{ height: 88, background: `linear-gradient(135deg, ${w.c1}, ${w.c2})` }} />
            <div style={{ padding: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 8 }}>{w.name}</div>
              <div style={{ fontSize: 12.5, color: MUTED, marginBottom: 10 }}>{`${w.sets} sets \u00d7 ${w.reps}`}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 100, background: w.tagBg, color: w.tagColor }}>{w.difficulty}</div>
                {w.pr && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 100, background: 'oklch(95% 0.01 240)', color: 'oklch(35% 0.02 250)' }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: ORANGE }} />{'New PR'}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <h4 style={{ ...display, fontSize: 18, fontWeight: 800, margin: 0 }}>Smart Training Engine</h4>
        <div style={{ fontSize: 10.5, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: 'oklch(95% 0.01 240)', color: MUTED2, letterSpacing: '0.03em' }}>{'ADAPTIVE \u00b7 BEYOND BASIC LOGGING'}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
        <Card style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>{'Estimated 1-rep max \u00b7 Squat'}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: GREEN_TEXT }}>{'\u25b2 +12 lbs / 6 wks'}</div>
          </div>
          <svg viewBox="0 0 560 90" style={{ width: '100%', height: 78, display: 'block' }}>
            <polyline points="20,66 130,58 240,54 350,40 460,30 540,18" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="540" cy="18" r="5" fill={accent} />
          </svg>
          <div style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>{'Estimated from the Epley formula on your logged sets \u2014 no manual max testing needed.'}</div>
        </Card>
        <Card style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 14 }}>Weekly volume by muscle group</div>
          {volume.map((mv) => (
            <div key={mv.label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
              <div style={{ width: 68, fontSize: 12, color: MUTED2, flexShrink: 0 }}>{mv.label}</div>
              <div style={{ flex: 1 }}><ProgressBar pct={mv.pct} color={mv.color} height={8} /></div>
              <div style={{ width: 36, fontSize: 11.5, color: MUTED, textAlign: 'right', flexShrink: 0 }}>{mv.value}</div>
            </div>
          ))}
          <div style={{ fontSize: 12, color: ORANGE_TEXT, marginTop: 8, fontWeight: 600 }}>{'Legs are under-trained relative to push/pull this week'}</div>
        </Card>
      </div>
    </div>
  );
}
