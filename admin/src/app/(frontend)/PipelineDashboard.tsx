'use client'

import React, { useState, useTransition } from 'react'
import Link from 'next/link'

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

type Props = {
  initialItems: ContentItemUI[]
  clientOptions: string[]
  ownerOptions: string[]
}

const statusDisplayMap: Record<string, { label: string; className: string }> = {
  '1_scripting': { label: '1. Scripting', className: 'st-script' },
  '2_ready_for_shoot': { label: '2. Ready for Shoot', className: 'st-ready' },
  '3_in_edit': { label: '3. In Edit', className: 'st-progress' },
  '4_internal_review': { label: '4. Internal Review', className: 'st-review' },
  '5_client_approval': { label: '5. Client Approval', className: 'st-approval' },
  '6_scheduled_live': { label: '6. Scheduled / Live', className: 'st-live' },
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

export default function PipelineDashboard({ initialItems, clientOptions, ownerOptions }: Props) {
  const [items, setItems] = useState<ContentItemUI[]>(initialItems)
  const [clientFilter, setClientFilter] = useState('ALL')
  const [ownerFilter, setOwnerFilter] = useState('ALL')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [search, setSearch] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  const handleStatusChange = async (itemId: string, newStatus: string) => {
    // Optimistic UI update
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
        showToast('⚠️ Could not persist to MongoDB. Please check network.')
      }
    } catch {
      showToast('⚠️ Update failed.')
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
  const reviewCount = items.filter((i) => i.status === '4_internal_review' || i.status === '5_client_approval').length
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
    <div className="wrapper">
      {/* Header */}
      <div className="header-bar">
        <div className="header-title">
          <h1>INLITE MEDIA • MASTER CONTENT PIPELINE</h1>
          <p>Production Tracker &amp; Client Workflow • Powered by Payload CMS &amp; MongoDB</p>
        </div>
        <div className="action-group">
          <button className="btn btn-gold" onClick={copyForSheets}>
            📋 Copy for Google Sheets
          </button>
          <Link className="btn btn-payload" href="/admin" target="_blank">
            ⚙ Open Payload Admin Panel
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-pills">
        <div className="stat-pill">
          Total Items: <strong>{total}</strong>
        </div>
        <div className="stat-pill" style={{ borderLeft: '4px solid #10b981' }}>
          🟢 Live / Scheduled: <strong>{liveCount}</strong>
        </div>
        <div className="stat-pill" style={{ borderLeft: '4px solid #f59e0b' }}>
          🟡 In Progress / Edit: <strong>{inProgressCount}</strong>
        </div>
        <div className="stat-pill" style={{ borderLeft: '4px solid #8b5cf6' }}>
          🟣 Review &amp; Approval: <strong>{reviewCount}</strong>
        </div>
        <div className="stat-pill" style={{ borderLeft: '4px solid #0284c7' }}>
          🔵 Ready for Shoot: <strong>{readyShootCount}</strong>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-item">
          <label>Filter Client:</label>
          <select value={clientFilter} onChange={(e) => setClientFilter(e.target.value)}>
            <option value="ALL">All Clients ({clientOptions.length})</option>
            {clientOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label>Filter Owner:</label>
          <select value={ownerFilter} onChange={(e) => setOwnerFilter(e.target.value)}>
            <option value="ALL">All Owners ({ownerOptions.length})</option>
            {ownerOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label>Status:</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="ALL">All Statuses</option>
            <option value="1_scripting">1. Scripting</option>
            <option value="2_ready_for_shoot">2. Ready for Shoot</option>
            <option value="3_in_edit">3. In Edit</option>
            <option value="4_internal_review">4. Internal Review</option>
            <option value="5_client_approval">5. Client Approval</option>
            <option value="6_scheduled_live">6. Scheduled / Live</option>
          </select>
        </div>

        <div className="filter-item" style={{ flex: 1, minWidth: 200 }}>
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search hook, headline, client or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Format</th>
              <th>Posting Date</th>
              <th>Hook / Topic Headline</th>
              <th>Primary Owner</th>
              <th>Status (Quick Change)</th>
              <th>Drive Asset</th>
              <th>Reviewer</th>
              <th>Client Notes &amp; Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={10} style={{ textAlign: 'center', padding: '36px', color: '#64748b' }}>
                  No pipeline items match the active filters.
                </td>
              </tr>
            ) : (
              filteredItems.map((item) => {
                const statusMeta = statusDisplayMap[item.status] || {
                  label: item.status,
                  className: 'st-script',
                }

                return (
                  <tr key={item.id}>
                    <td>
                      <span className="tag-id">{item.customId}</span>
                    </td>
                    <td>
                      <span className="client-tag">{item.clientName}</span>
                    </td>
                    <td>{formatDisplayMap[item.format] || item.format}</td>
                    <td>
                      <strong>{item.postingDate}</strong>
                    </td>
                    <td style={{ maxWidth: 320 }}>{item.headline}</td>
                    <td>
                      <strong>{item.ownerName}</strong>
                    </td>
                    <td>
                      <select
                        className={`status-select ${statusMeta.className}`}
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                      >
                        <option value="1_scripting">1. Scripting</option>
                        <option value="2_ready_for_shoot">2. Ready for Shoot</option>
                        <option value="3_in_edit">3. In Edit</option>
                        <option value="4_internal_review">4. Internal Review</option>
                        <option value="5_client_approval">5. Client Approval</option>
                        <option value="6_scheduled_live">6. Scheduled / Live</option>
                      </select>
                    </td>
                    <td>
                      {item.driveAssetLink ? (
                        <a
                          href={
                            item.driveAssetLink.startsWith('http')
                              ? item.driveAssetLink
                              : '#'
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-drive"
                        >
                          {item.driveAssetLink.length > 20
                            ? item.driveAssetLink.substring(0, 18) + '...'
                            : item.driveAssetLink}
                        </a>
                      ) : (
                        <span style={{ color: '#94a3b8' }}>—</span>
                      )}
                    </td>
                    <td>{item.reviewerName || '—'}</td>
                    <td style={{ maxWidth: 220, fontSize: '11.5px', color: '#64748b' }}>
                      {item.clientNotes || '—'}
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Toast */}
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </div>
  )
}
