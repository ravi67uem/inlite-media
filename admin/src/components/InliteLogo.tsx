'use client'
import React from 'react'

export const InliteLogo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 0' }}>
      <img
        src="/logo.png"
        alt="Inlite Media"
        style={{ maxHeight: '46px', width: 'auto', objectFit: 'contain' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '0.05em', color: '#f5ce65' }}>
          INLITE MEDIA
        </span>
        <span style={{ fontSize: '10.5px', fontWeight: '600', letterSpacing: '0.08em', color: '#94a3b8', textTransform: 'uppercase' }}>
          Admin Dashboard
        </span>
      </div>
    </div>
  )
}
