import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function POST(req: Request) {
  try {
    const { id, status } = await req.json()

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    const updated = await payload.update({
      collection: 'content-items',
      id,
      data: {
        status,
      },
    })

    return NextResponse.json({ success: true, item: updated })
  } catch (error: any) {
    console.error('Failed to update status:', error)
    return NextResponse.json({ error: error.message || 'Failed to update' }, { status: 500 })
  }
}
