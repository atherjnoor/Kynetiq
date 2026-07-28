'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, Beef, Dumbbell, Droplet, TrendingUp, ChevronRight, Sparkles } from 'lucide-react';
import { useAppSettings } from '../../../context/AppSettingsContext';
import { Card, StatCard } from '../../../components/ui';
import { GREEN, GREEN_TEXT, ORANGE, ORANGE_TEXT, MUTED, MUTED2, display } from '../../../lib/colors';

export default function DashboardPage() {
  const { accent } = useAppSettings();

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14, marginBottom: 32 }}>
        <StatCard icon={Flame} label="Calories" value="1,840" pct={84} color={accent} sub="360 kcal remaining" />
        <StatCard icon={Beef} label="Protein" value="132g" pct={82} color={GREEN} sub="28g to hit 160g goal" />
        <StatCard icon={Dumbbell} label="Workouts" value="4 / 5" pct={80} color={ORANGE} sub="1 session left this week" />
        <StatCard icon={Droplet} label="Water" value="2.1L" pct={70} color={accent} sub="0.9L to daily goal" />
        <StatCard icon={TrendingUp} label="Weekly progress" value="78%" pct={78} color={GREEN} sub="+6% vs last week" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 32 }}>
        <Card style={{ padding: 18, display: 'flex', gap: 14 }}>
          <div style={{ width: 64, height: 64, flexShrink: 0, borderRadius: 12, background: `linear-gradient(135deg, ${accent}, ${GREEN})` }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>{'Today\u2019s workout'}</div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Barbell Back Squat</div>
            <div style={{ fontSize: 12.5, color: MUTED }}>{'4 sets \u00d7 8 reps \u00b7 Intermediate'}</div>
          </div>
          <Link href="/workouts" style={{ alignSelf: 'center' }}>
            <ChevronRight size={18} color={MUTED} />
          </Link>
        </Card>
        <Card style={{ padding: 18, display: 'flex', gap: 14 }}>
          <div style={{ width: 64, height: 64, flexShrink: 0, borderRadius: 12, background: `linear-gradient(135deg, ${ORANGE}, oklch(80% 0.1 80))` }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>{'Next meal'}</div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Grilled Chicken & Quinoa</div>
            <div style={{ fontSize: 12.5, color: MUTED }}>{'560 kcal \u00b7 45g protein'}</div>
          </div>
          <Link href="/meals" style={{ alignSelf: 'center' }}>
            <ChevronRight size={18} color={MUTED} />
          </Link>
        </Card>
      </div>

      <div style={{ borderRadius: 18, padding: 2, background: `linear-gradient(120deg, ${accent}, ${GREEN}, ${ORANGE})`, marginBottom: 8 }}>
        <div style={{ background: 'white', borderRadius: 16, padding: '22px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <Sparkles size={16} color={accent} />
            <h4 style={{ ...display, fontSize: 16.5, fontWeight: 800, margin: 0 }}>Coach Insights</h4>
            <div style={{ fontSize: 10.5, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: 'oklch(95% 0.01 240)', color: MUTED2, letterSpacing: '0.03em' }}>CONCEPT PREVIEW</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: accent, marginBottom: 6 }}>MEAL SUGGESTION</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: 'oklch(35% 0.02 250)' }}>{'Swap your afternoon snack for a high-protein option to close today\u2019s 28g protein gap.'}</div>
            </div>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: GREEN_TEXT, marginBottom: 6 }}>WORKOUT RECOMMENDATION</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: 'oklch(35% 0.02 250)' }}>{'Squat volume dropped last week \u2014 consider adding a 5th set on lower-body day.'}</div>
            </div>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: ORANGE_TEXT, marginBottom: 6 }}>WEEKLY SUMMARY</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: 'oklch(35% 0.02 250)' }}>You trained 4 of 5 planned days and stayed within calorie budget 6 of 7 days.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
