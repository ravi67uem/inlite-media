import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config })

    const [itemsData, clientsData, usersData] = await Promise.all([
      payload.find({ collection: 'content-items', limit: 100, depth: 2 }),
      payload.find({ collection: 'clients', limit: 100 }),
      payload.find({ collection: 'users', limit: 100 }),
    ])

    const clientOptions = clientsData.docs.map((c) => c.name)
    const ownerOptions = usersData.docs.map((u) => u.name || u.email)

    const items = itemsData.docs.map((doc: any) => {
      let clientName = 'Unknown Client'
      if (doc.client) {
        clientName = typeof doc.client === 'object' ? doc.client.name : 'Client'
      }

      let ownerName = 'Unassigned'
      if (doc.primaryOwner) {
        ownerName = typeof doc.primaryOwner === 'object' ? doc.primaryOwner.name || doc.primaryOwner.email : 'Owner'
      }

      let reviewerName = '—'
      if (doc.reviewer) {
        reviewerName = typeof doc.reviewer === 'object' ? doc.reviewer.name || doc.reviewer.email : 'Reviewer'
      }

      let postingDateStr = '—'
      if (doc.postingDate) {
        try {
          const d = new Date(doc.postingDate)
          postingDateStr = d.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })
        } catch {
          postingDateStr = String(doc.postingDate)
        }
      }

      return {
        id: doc.id.toString(),
        customId: doc.customId || '—',
        clientName,
        format: doc.format || 'other',
        postingDate: postingDateStr,
        headline: doc.headline || 'Untitled',
        ownerName,
        reviewerName,
        status: doc.status || '1_scripting',
        driveAssetLink: doc.driveAssetLink || '',
        clientNotes: doc.clientNotes || '',
      }
    })

    return NextResponse.json({
      items,
      clientOptions,
      ownerOptions,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
