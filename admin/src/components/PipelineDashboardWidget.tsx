'use client'

import React, { useEffect, useState } from 'react'

export type ContentItemUI = {
  id: string
  customId: string
  clientName: string
  format: string
  postingDate: string
  headline: string
  ownerName: string
  reviewerName: string
  status: string
  driveAssetLink: string
  clientNotes: string
}

const statusDisplayMap: Record<string, { label: string; bg: string; color: string }> = {
  '1_scripting': { label: '1. Scripting', bg: '#f1f5f9', color: '#475569' },
  '2_ready_for_shoot': { label: '2. Ready for Shoot', bg: '#e0f2fe', color: '#0369a1' },
  '3_in_edit': { label: '3. In Edit', bg: '#fef3c7', color: '#b45309' },
  '4_internal_review': { label: '4. Internal Review', bg: '#f3e8ff', color: '#7e22ce' },
  '5_client_approval': { label: '5. Client Approval', bg: '#ffedd5', color: '#c2410c' },
  '6_scheduled_live': { label: '6. Scheduled / Live', bg: '#dcfce7', color: '#15803d' },
}

const formatDisplayMap: Record<string, string> = {
  reel_video: 'Reel (Video)',
  carousel: 'Carousel (5 Slides)',
  static_graphic: 'Static Graphic',
  ugc_reel: 'UGC Reel',
  ai_reel_ad: 'AI Reel (Meta Ad)',
  linkedin_post: 'LinkedIn Post',
  instagram_reel: 'Instagram Reel',
  offer_card: 'Static Offer Card',
}

export const PipelineDashboardWidget: React.FC = () => {
  const [items, setItems] = useState<ContentItemUI[]>([])
  const [clientOptions, setClientOptions] = useState<string[]>([])
  const [ownerOptions, setOwnerOptions] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [clientFilter, setClientFilter] = useState('ALL')
  const [ownerFilter, setOwnerFilter] = useState('ALL')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [search, setSearch] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/pipeline/items')
      if (res.ok) {
        const data = await res.json()
        setItems(data.items || [])
        setClientOptions(data.clientOptions || [])
        setOwnerOptions(data.ownerOptions || [])
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleStatusChange = async (itemId: string, newStatus: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, status: newStatus } : item))
    )

    try {
      const res = await fetch('/api/pipeline/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: itemId, status: newStatus }),
      })

      if (res.ok) {
        showToast(`✅ Status updated to: ${statusDisplayMap[newStatus]?.label || newStatus}`)
      } else {
        showToast('⚠️ Could not persist status to MongoDB.')
      }
    } catch {
      showToast('⚠️ Error updating status.')
    }
  }

  const filteredItems = items.filter((item) => {
    const matchClient = clientFilter === 'ALL' || item.clientName === clientFilter
    const matchOwner = ownerFilter === 'ALL' || item.ownerName === ownerFilter
    const matchStatus = statusFilter === 'ALL' || item.status === statusFilter
    const q = search.toLowerCase()
    const matchSearch =
      !q ||
      item.headline.toLowerCase().includes(q) ||
      item.customId.toLowerCase().includes(q) ||
      item.clientName.toLowerCase().includes(q)

    return matchClient && matchOwner && matchStatus && matchSearch
  })

  // Quick stats
  const total = items.length
  const liveCount = items.filter((i) => i.status === '6_scheduled_live').length
  const inProgressCount = items.filter((i) => i.status === '3_in_edit').length
  const reviewCount = items.filter(
    (i) => i.status === '4_internal_review' || i.status === '5_client_approval'
  ).length
  const readyShootCount = items.filter((i) => i.status === '2_ready_for_shoot').length

  const copyForSheets = () => {
    const headers = [
      'ID',
      'Client',
      'Format',
      'Posting Date',
      'Hook / Topic Headline',
      'Primary Owner',
      'Status',
      'Drive Asset Link',
      'Reviewer',
      'Client Notes & Status',
    ]

    let tsv = headers.join('\t') + '\n'

    filteredItems.forEach((row) => {
      const r = [
        row.customId,
        row.clientName,
        formatDisplayMap[row.format] || row.format,
        row.postingDate,
        row.headline,
        row.ownerName,
        statusDisplayMap[row.status]?.label || row.status,
        row.driveAssetLink,
        row.reviewerName,
        row.clientNotes,
      ]
      tsv += r.map((c) => (c || '').replace(/\t/g, ' ')).join('\t') + '\n'
    })

    navigator.clipboard.writeText(tsv).then(() => {
      showToast(`📋 Copied ${filteredItems.length} rows to clipboard! Ready to paste into Google Sheets.`)
    })
  }

  return (
    <div
      style={{
        marginTop: '32px',
        marginBottom: '48px',
        background: '#070d1e',
        border: '1px solid rgba(245, 206, 101, 0.25)',
        borderRadius: '14px',
        padding: '24px',
        color: '#f8fafc',
        boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '20px',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(245, 206, 101, 0.15)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                background: '#f5ce65',
                color: '#050c1f',
                padding: '4px 10px',
                borderRadius: '6px',
                fontWeight: '800',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Inlite Production Tracker
            </span>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: 0 }}>
              Master Content Pipeline
            </h2>
          </div>
          <p style={{ margin: '4px 0 0 0', fontSize: '12.5px', color: '#94a3b8' }}>
            Multi-client workflow tracker • Real-time status sync with MongoDB
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={fetchData}
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '8px 14px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            🔄 Refresh
          </button>
          <button
            onClick={copyForSheets}
            style={{
              background: '#f5ce65',
              color: '#050c1f',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(245, 206, 101, 0.3)',
            }}
          >
            📋 Copy for Google Sheets
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <div
          style={{
            background: '#0c1736',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '12px',
          }}
        >
          Total Items: <strong style={{ color: '#fff', fontSize: '14px' }}>{total}</strong>
        </div>
        <div
          style={{
            background: '#0c1736',
            border: '1px solid rgba(255,255,255,0.08)',
            borderLeft: '4px solid #10b981',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '12px',
          }}
        >
          🟢 Live / Scheduled: <strong style={{ color: '#fff' }}>{liveCount}</strong>
        </div>
        <div
          style={{
            background: '#0c1736',
            border: '1px solid rgba(255,255,255,0.08)',
            borderLeft: '4px solid #f59e0b',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '12px',
          }}
        >
          🟡 In Edit: <strong style={{ color: '#fff' }}>{inProgressCount}</strong>
        </div>
        <div
          style={{
            background: '#0c1736',
            border: '1px solid rgba(255,255,255,0.08)',
            borderLeft: '4px solid #8b5cf6',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '12px',
          }}
        >
          🟣 Review / Approval: <strong style={{ color: '#fff' }}>{reviewCount}</strong>
        </div>
        <div
          style={{
            background: '#0c1736',
            border: '1px solid rgba(255,255,255,0.08)',
            borderLeft: '4px solid #0284c7',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '12px',
          }}
        >
          🔵 Ready for Shoot: <strong style={{ color: '#fff' }}>{readyShootCount}</strong>
        </div>
      </div>

      {/* Filter Bar */}
      <div
        style={{
          background: '#0a132b',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px',
          padding: '14px 18px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          alignItems: 'center',
          marginBottom: '18px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>
            Client:
          </label>
          <select
            value={clientFilter}
            onChange={(e) => setClientFilter(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid #1e293b',
              background: '#050c1f',
              color: '#fff',
              fontSize: '12px',
            }}
          >
            <option value="ALL">All Clients ({clientOptions.length})</option>
            {clientOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>
            Owner:
          </label>
          <select
            value={ownerFilter}
            onChange={(e) => setOwnerFilter(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid #1e293b',
              background: '#050c1f',
              color: '#fff',
              fontSize: '12px',
            }}
          >
            <option value="ALL">All Owners ({ownerOptions.length})</option>
            {ownerOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>
            Status:
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid #1e293b',
              background: '#050c1f',
              color: '#fff',
              fontSize: '12px',
            }}
          >
            <option value="ALL">All Statuses</option>
            <option value="1_scripting">1. Scripting</option>
            <option value="2_ready_for_shoot">2. Ready for Shoot</option>
            <option value="3_in_edit">3. In Edit</option>
            <option value="4_internal_review">4. Internal Review</option>
            <option value="5_client_approval">5. Client Approval</option>
            <option value="6_scheduled_live">6. Scheduled / Live</option>
          </select>
        </div>

        <div style={{ flex: 1, minWidth: 200, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>
            Search:
          </label>
          <input
            type="text"
            placeholder="Search headline, client, or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #1e293b',
              background: '#050c1f',
              color: '#fff',
              fontSize: '12px',
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div
        style={{
          overflowX: 'auto',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: '#050c1f',
        }}
      >
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
            Loading content pipeline...
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#0b1633', borderBottom: '2px solid rgba(245, 206, 101, 0.2)' }}>
                <th style={{ padding: '12px 10px', color: '#f5ce65', fontWeight: '700' }}>ID</th>
                <th style={{ padding: '12px 10px', color: '#fff', fontWeight: '700' }}>Client</th>
                <th style={{ padding: '12px 10px', color: '#fff', fontWeight: '700' }}>Format</th>
                <th style={{ padding: '12px 10px', color: '#fff', fontWeight: '700' }}>Posting Date</th>
                <th style={{ padding: '12px 10px', color: '#fff', fontWeight: '700', minWidth: 240 }}>
                  Hook / Headline
                </th>
                <th style={{ padding: '12px 10px', color: '#fff', fontWeight: '700' }}>Owner</th>
                <th style={{ padding: '12px 10px', color: '#fff', fontWeight: '700' }}>Status (Change)</th>
                <th style={{ padding: '12px 10px', color: '#fff', fontWeight: '700' }}>Asset Link</th>
                <th style={{ padding: '12px 10px', color: '#fff', fontWeight: '700' }}>Reviewer</th>
                <th style={{ padding: '12px 10px', color: '#fff', fontWeight: '700', minWidth: 180 }}>
                  Client Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={10} style={{ textAlign: 'center', padding: '36px', color: '#94a3b8' }}>
                    No items match the active filters.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item, idx) => {
                  const statusMeta = statusDisplayMap[item.status] || {
                    label: item.status,
                    bg: '#334155',
                    color: '#fff',
                  }

                  return (
                    <tr
                      key={item.id}
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                      }}
                    >
                      <td style={{ padding: '10px' }}>
                        <span
                          style={{
                            background: '#091124',
                            border: '1px solid rgba(245, 206, 101, 0.4)',
                            color: '#f5ce65',
                            fontWeight: '800',
                            padding: '3px 6px',
                            borderRadius: '4px',
                            fontSize: '11px',
                          }}
                        >
                          {item.customId}
                        </span>
                      </td>
                      <td style={{ padding: '10px', fontWeight: '700', color: '#fff' }}>{item.clientName}</td>
                      <td style={{ padding: '10px', color: '#94a3b8' }}>
                        {formatDisplayMap[item.format] || item.format}
                      </td>
                      <td style={{ padding: '10px', color: '#e2e8f0', whiteSpace: 'nowrap' }}>
                        {item.postingDate}
                      </td>
                      <td style={{ padding: '10px', color: '#f1f5f9' }}>{item.headline}</td>
                      <td style={{ padding: '10px', fontWeight: '600', color: '#cbd5e1' }}>
                        {item.ownerName}
                      </td>
                      <td style={{ padding: '10px' }}>
                        <select
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value)}
                          style={{
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: '700',
                            background: statusMeta.bg,
                            color: statusMeta.color,
                            border: 'none',
                            cursor: 'pointer',
                            outline: 'none',
                          }}
                        >
                          <option value="1_scripting">1. Scripting</option>
                          <option value="2_ready_for_shoot">2. Ready for Shoot</option>
                          <option value="3_in_edit">3. In Edit</option>
                          <option value="4_internal_review">4. Internal Review</option>
                          <option value="5_client_approval">5. Client Approval</option>
                          <option value="6_scheduled_live">6. Scheduled / Live</option>
                        </select>
                      </td>
                      <td style={{ padding: '10px' }}>
                        {item.driveAssetLink ? (
                          <a
                            href={item.driveAssetLink.startsWith('http') ? item.driveAssetLink : '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#60a5fa', fontWeight: '600', textDecoration: 'none' }}
                          >
                            {item.driveAssetLink.length > 18
                              ? item.driveAssetLink.substring(0, 16) + '...'
                              : item.driveAssetLink}
                          </a>
                        ) : (
                          <span style={{ color: '#64748b' }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: '10px', color: '#cbd5e1' }}>{item.reviewerName || '—'}</td>
                      <td style={{ padding: '10px', fontSize: '11px', color: '#94a3b8' }}>
                        {item.clientNotes || '—'}
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: '#10b981',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '13px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            zIndex: 9999,
          }}
        >
          {toastMessage}
        </div>
      )}
    </div>
  )
}
