'use client';

import React from 'react';
import Link from 'next/link';
import { Dumbbell, Utensils, TrendingUp, Target, EyeOff, ShieldCheck, Calculator } from 'lucide-react';
import { useAppSettings } from '../context/AppSettingsContext';
import { Card } from '../components/ui';
import {
  BG_PAGE, BORDER, MUTED, MUTED2, GREEN, display,
} from '../lib/colors';

export default function LandingPage() {
  const { accent } = useAppSettings();

  return (
    <div style={{ background: BG_PAGE, color: '#161B22', minHeight: '100vh', width: '100%' }}>
      {/* NAV */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 6vw',
        position: 'sticky', top: 0, zIndex: 50, background: 'oklch(98% 0.008 240 / 0.85)',
        backdropFilter: 'blur(10px)', borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: `linear-gradient(135deg, ${accent}, ${GREEN})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 11, height: 11, borderRadius: 3, background: 'white' }} />
          </div>
          <span style={{ ...display, fontWeight: 700, fontSize: 18 }}>Kynetiq</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, fontWeight: 500, color: MUTED2 }}>
          <a href="#trust">Trust</a>
          <a href="#showcase">Product</a>
          <a href="#features">Features</a>
          <Link href="/dashboard" style={{ padding: '10px 18px', borderRadius: 10, background: accent, color: 'white', fontWeight: 600, fontSize: 14 }}>
            Open dashboard
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 48, padding: '72px 6vw 88px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ flex: '1 1 460px', minWidth: 320 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 100, background: 'oklch(94% 0.01 240)', color: MUTED2, fontSize: 12.5, fontWeight: 600, marginBottom: 22 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN }} />
            {'Built solo, in the open \u2014 currently in beta'}
          </div>
          <h1 style={{ ...display, fontSize: 50, lineHeight: 1.08, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 22px' }}>
            {'Train smarter. Eat better.'}<br />
            <span style={{ color: accent }}>{'See the real numbers'}</span>{', not vague scores.'}
          </h1>
          <p style={{ fontSize: 17.5, lineHeight: 1.6, color: MUTED2, maxWidth: 480, margin: '0 0 30px' }}>
            {'Kynetiq brings your workouts, meals, and progress into one dashboard \u2014 built on actual formulas (1RM estimates, macro targets, trend math), not guesswork or growth-hack gimmicks.'}
          </p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/dashboard" style={{ padding: '15px 26px', borderRadius: 12, background: accent, color: 'white', fontWeight: 600, fontSize: 15, boxShadow: `0 12px 24px -8px ${accent}` }}>
              {'Open dashboard'}
            </Link>
            <a href="#trust" style={{ padding: '15px 26px', borderRadius: 12, background: 'white', color: '#3F4650', fontWeight: 600, fontSize: 15, border: `1px solid ${BORDER}` }}>
              {'See what we won\u2019t do'}
            </a>
          </div>
        </div>
        <div style={{ flex: '1 1 400px', minWidth: 300, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 60% 40%, ${accent}22, transparent 70%)`, filter: 'blur(10px)' }} />
          <Card style={{ position: 'relative', boxShadow: '0 30px 60px -20px oklch(30% 0.03 250 / 0.25)', padding: 26, width: '100%', maxWidth: 380 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ ...display, fontWeight: 700, fontSize: 15 }}>{'Today\u2019s Summary'}</div>
              <div style={{ fontSize: 12, padding: '4px 10px', borderRadius: 100, background: 'oklch(94% 0.05 55)', color: 'oklch(42% 0.13 55)', fontWeight: 600 }}>{'12-day streak'}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[['Calories', '1,840', '2,200'], ['Protein', '132g', '160g'], ['Workouts', '4', '5 wk'], ['Water', '2.1L', '3L']].map(([l, v, g]) => (
                <div key={l} style={{ background: '#F7F8FA', borderRadius: 14, padding: 14 }}>
                  <div style={{ fontSize: 12, color: MUTED, marginBottom: 6 }}>{l}</div>
                  <div style={{ ...display, fontWeight: 700, fontSize: 19 }}>{v}<span style={{ fontSize: 12, color: MUTED, fontWeight: 500 }}>{` / ${g}`}</span></div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* TRUST SECTION */}
      <div id="trust" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 6vw 96px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: accent, marginBottom: 12 }}>{'No empty promises'}</div>
          <h2 style={{ ...display, fontSize: 32, fontWeight: 800, letterSpacing: '-0.01em', margin: '0 0 14px' }}>{'What Kynetiq won\u2019t do'}</h2>
          <p style={{ fontSize: 16, color: MUTED2, lineHeight: 1.6, margin: 0 }}>
            {'Most fitness apps sell a transformation. Kynetiq just shows you your own data, clearly, with the math behind it.'}
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { icon: EyeOff, title: 'No fake countdowns', body: 'We won\u2019t promise you\u2019ll lose 10 lbs by a date. Bodies don\u2019t work on a marketing calendar.' },
            { icon: ShieldCheck, title: 'No selling your data', body: 'Your workouts, meals, and photos are yours. Nothing here is sold to advertisers.' },
            { icon: Calculator, title: 'Real math, shown plainly', body: 'Every projection \u2014 1RM, macros, trends \u2014 is a formula you could check by hand, not a hidden \u201cscore.\u201d' },
          ].map((t) => (
            <Card key={t.title} style={{ padding: 22 }}>
              <t.icon size={20} color={accent} style={{ marginBottom: 12 }} />
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{t.title}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.6, color: MUTED2 }}>{t.body}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* SHOWCASE */}
      <div id="showcase" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 6vw 96px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 36px' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: accent, marginBottom: 12 }}>{'The dashboard'}</div>
          <h2 id="features" style={{ ...display, fontSize: 32, fontWeight: 800, letterSpacing: '-0.01em', margin: '0 0 14px' }}>{'Everything you track, in one view'}</h2>
          <p style={{ fontSize: 16, color: MUTED2, lineHeight: 1.6, margin: 0 }}>{'Workouts, meals, and progress \u2014 organized like a real product, not a spreadsheet.'}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 8 }}>
          {[
            { icon: Dumbbell, label: 'Workout planner', body: 'Weekly split, exercise library, and today\u2019s session in one place.' },
            { icon: Utensils, label: 'Meal log', body: 'Track meals and macros without obsessive calorie-counting UX.' },
            { icon: TrendingUp, label: 'Progress tracking', body: 'Weight trend, consistency heatmap, and PRs \u2014 grounded in your logged sets.' },
            { icon: Target, label: 'Goals', body: 'Set targets tied to real numbers, not streak-shaming.' },
          ].map((f) => (
            <Card key={f.label} style={{ padding: 20 }}>
              <f.icon size={18} color={accent} style={{ marginBottom: 10 }} />
              <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 6 }}>{f.label}</div>
              <div style={{ fontSize: 13, color: MUTED2, lineHeight: 1.5 }}>{f.body}</div>
            </Card>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link href="/dashboard" style={{ display: 'inline-block', padding: '14px 26px', borderRadius: 12, background: accent, color: 'white', fontWeight: 600, fontSize: 14.5 }}>
            {'Open the full dashboard \u2192'}
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: `1px solid ${BORDER}`, padding: '30px 6vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: `linear-gradient(135deg, ${accent}, ${GREEN})` }} />
          <span style={{ ...display, fontWeight: 700, fontSize: 14 }}>Kynetiq</span>
        </div>
        <div style={{ fontSize: 12.5, color: MUTED, textAlign: 'center', maxWidth: 480 }}>
          {'Student portfolio project exploring full-stack product design. Frontend built with AI assistance; backend, integrations, and logic built by hand.'}
        </div>
        <div style={{ fontSize: 12.5, color: MUTED }}>{'\u00a9 2026 Kynetiq'}</div>
      </div>
    </div>
  );
}
