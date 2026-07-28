'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Flame } from 'lucide-react';
import { MUTED, ORANGE_SOFT, ORANGE_TEXT, display } from '../lib/colors';
import { PAGE_COPY } from '../lib/data';

export function TopBar() {
  const pathname = usePathname() || '';
  const key = Object.keys(PAGE_COPY).find((k) => pathname.startsWith(`/${k}`)) || 'dashboard';
  const copy = PAGE_COPY[key];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
      <div>
        <h3 style={{ ...display, fontSize: 22, fontWeight: 800, margin: '0 0 4px' }}>{copy.title}</h3>
        <div style={{ fontSize: 13.5, color: MUTED }}>{copy.sub}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: ORANGE_SOFT, color: ORANGE_TEXT, padding: '9px 15px', borderRadius: 100, fontSize: 13, fontWeight: 700 }}>
        <Flame size={13} />
        {'12-day streak'}
      </div>
    </div>
  );
}
