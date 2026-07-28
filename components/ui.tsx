'use client';

import React, { ReactNode } from 'react';
import { BORDER, MUTED, TRACK, display } from '../lib/colors';
import type { LucideIcon } from 'lucide-react';

export function ProgressBar({ pct, color, height = 6 }: { pct: number; color: string; height?: number }) {
  return (
    <div style={{ height, borderRadius: 100, background: TRACK, overflow: 'hidden' }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 100 }} />
    </div>
  );
}

export function Toggle({ on, onClick, disabled, accent }: { on: boolean; onClick?: () => void; disabled?: boolean; accent: string }) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{
        width: 38, height: 22, borderRadius: 100, border: 'none', position: 'relative',
        background: on ? accent : TRACK, cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1, padding: 0, flexShrink: 0,
      }}
      aria-pressed={on}
    >
      <div style={{
        position: 'absolute', top: 3, left: on ? 19 : 3, width: 16, height: 16, borderRadius: '50%',
        background: 'white', transition: 'left 150ms ease',
      }} />
    </button>
  );
}

export function Card({ children, style, ...rest }: { children: ReactNode; style?: React.CSSProperties; [key: string]: any }) {
  return (
    <div style={{ background: 'white', borderRadius: 16, border: `1px solid ${BORDER}`, ...style }} {...rest}>
      {children}
    </div>
  );
}

export function SectionHeader({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
      <h4 style={{ ...display, fontSize: 18, fontWeight: 800, margin: 0 }}>{title}</h4>
      {action}
    </div>
  );
}

export function StatCard({
  icon: Icon, label, value, pct, color, sub,
}: { icon: LucideIcon; label: string; value: string; pct: number; color: string; sub: string }) {
  return (
    <Card style={{ padding: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
        <Icon size={14} color={MUTED} />
        <div style={{ fontSize: 12.5, color: MUTED, fontWeight: 600 }}>{label}</div>
      </div>
      <div style={{ ...display, fontSize: 22, fontWeight: 800, marginBottom: 6 }}>{value}</div>
      <ProgressBar pct={pct} color={color} />
      <div style={{ fontSize: 11.5, color: MUTED, marginTop: 7 }}>{sub}</div>
    </Card>
  );
}
