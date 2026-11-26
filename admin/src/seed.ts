import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

export async function seedDatabase() {
  console.log('--- Starting Database Seed for Inlite Media ---')
  const payload = await getPayload({ config })

  // 1. Create Team Users if not present
  const teamUsers = [
    { name: 'Harshit', email: 'harshit@inlitemedia.com', role: 'admin' as const, specialty: 'founder' as const, password: 'password123' },
    { name: 'Shalu', email: 'shalu@inlitemedia.com', role: 'manager' as const, specialty: 'smm' as const, password: 'password123' },
    { name: 'Shresth', email: 'shresth@inlitemedia.com', role: 'creator' as const, specialty: 'video' as const, password: 'password123' },
    { name: 'Designer', email: 'designer@inlitemedia.com', role: 'creator' as const, specialty: 'graphics' as const, password: 'password123' },
    { name: 'Intern', email: 'intern@inlitemedia.com', role: 'creator' as const, specialty: 'scripts' as const, password: 'password123' },
  ]

  const userMap: Record<string, string> = {}

  for (const u of teamUsers) {
    const existing = await payload.find({
      collection: 'users',
      where: { email: { equals: u.email } },
    })

    if (existing.docs.length > 0) {
      userMap[u.name] = existing.docs[0].id.toString()
      console.log(`User already exists: ${u.name}`)
    } else {
      const created = await payload.create({
        collection: 'users',
        data: u,
      })
      userMap[u.name] = created.id.toString()
      console.log(`Created user: ${u.name} (${u.email})`)
    }
  }

  // 2. Create Clients
  const clientList = [
    { name: 'The Launch Cafe', clientCode: 'CF', industry: 'fb' as const, contactPerson: 'Cafe Manager', contactPhone: '+91 98765 43210' },
    { name: 'Greenfield Heights', clientCode: 'RE', industry: 'real_estate' as const, contactPerson: 'Sales Director', contactPhone: '+91 98765 43211' },
    { name: 'Bodhgaya Heritage Villa', clientCode: 'HT', industry: 'hotel' as const, contactPerson: 'General Manager', contactPhone: '+91 98765 43212' },
    { name: 'Alankar Jewellers', clientCode: 'JW', industry: 'retail' as const, contactPerson: 'Hariom Ji', contactPhone: '+91 98765 43213' },
    { name: 'Inlite Media (Founder)', clientCode: 'IM', industry: 'founder' as const, contactPerson: 'Harshit', contactPhone: '+91 98765 43214' },
  ]

  const clientMap: Record<string, string> = {}

  for (const c of clientList) {
    const existing = await payload.find({
      collection: 'clients',
      where: { clientCode: { equals: c.clientCode } },
    })

    if (existing.docs.length > 0) {
      clientMap[c.name] = existing.docs[0].id.toString()
      console.log(`Client already exists: ${c.name}`)
    } else {
      const created = await payload.create({
        collection: 'clients',
        data: c,
      })
      clientMap[c.name] = created.id.toString()
      console.log(`Created client: ${c.name} [${c.clientCode}]`)
    }
  }

  // 3. Seed 19 Content Items
  const items = [
    // Launch Cafe
    {
      customId: 'CF-R01',
      client: clientMap['The Launch Cafe'],
      format: 'reel_video' as const,
      postingDate: new Date('2026-11-22').toISOString(),
      headline: 'Why our cold brew takes 18 hours (and why you can taste it)',
      primaryOwner: userMap['Shresth'],
      reviewer: userMap['Shalu'],
      status: '6_scheduled_live' as const,
      driveAssetLink: 'r01_final.mp4',
      clientNotes: 'Approved with zero changes.',
    },
    {
      customId: 'CF-R02',
      client: clientMap['The Launch Cafe'],
      format: 'reel_video' as const,
      postingDate: new Date('2026-11-24').toISOString(),
      headline: 'The 3 dishes people order on repeat every weekend',
      primaryOwner: userMap['Shresth'],
      reviewer: userMap['Shalu'],
      status: '4_internal_review' as const,
      driveAssetLink: 'r02_roughcut.mp4',
      clientNotes: 'Ready for Harshit 2-min sound check.',
    },
    {
      customId: 'CF-P01',
      client: clientMap['The Launch Cafe'],
      format: 'carousel' as const,
      postingDate: new Date('2026-11-25').toISOString(),
      headline: 'Weekend Brunch Secret Menu Reveal (Swipe to see)',
      primaryOwner: userMap['Designer'],
      reviewer: userMap['Shalu'],
      status: '5_client_approval' as const,
      driveAssetLink: 'p01_carousel.pdf',
      clientNotes: 'WhatsApp preview sent to cafe owner.',
    },
    {
      customId: 'CF-R03',
      client: clientMap['The Launch Cafe'],
      format: 'ugc_reel' as const,
      postingDate: new Date('2026-11-27').toISOString(),
      headline: 'Customer reaction to our signature truffle burger',
      primaryOwner: userMap['Shresth'],
      reviewer: userMap['Shresth'],
      status: '3_in_edit' as const,
      driveAssetLink: 'raw_ugc_clips/',
      clientNotes: 'Raw phone footage, rough cut in progress.',
    },
    {
      customId: 'CF-P02',
      client: clientMap['The Launch Cafe'],
      format: 'static_graphic' as const,
      postingDate: new Date('2026-11-29').toISOString(),
      headline: 'Sunday Live Acoustic Night Announcement',
      primaryOwner: userMap['Designer'],
      reviewer: userMap['Shalu'],
      status: '6_scheduled_live' as const,
      driveAssetLink: 'sunday_live.png',
      clientNotes: 'Scheduled on Meta Creator Studio.',
    },

    // Greenfield Heights
    {
      customId: 'RE-R01',
      client: clientMap['Greenfield Heights'],
      format: 'reel_video' as const,
      postingDate: new Date('2026-11-23').toISOString(),
      headline: 'Why 80% of buyers choose this 3BHK layout (Walkthrough)',
      primaryOwner: userMap['Shresth'],
      reviewer: userMap['Harshit'],
      status: '3_in_edit' as const,
      driveAssetLink: '3bhk_raw_cuts/',
      clientNotes: 'Voiceover recorded, audio sync in progress.',
    },
    {
      customId: 'RE-R02',
      client: clientMap['Greenfield Heights'],
      format: 'reel_video' as const,
      postingDate: new Date('2026-11-26').toISOString(),
      headline: 'The morning sunlight in the master balcony at 7:30 AM',
      primaryOwner: userMap['Shresth'],
      reviewer: userMap['Shalu'],
      status: '2_ready_for_shoot' as const,
      driveAssetLink: 'script_r02.doc',
      clientNotes: 'Shoot scheduled for Tuesday 7:30 AM.',
    },
    {
      customId: 'RE-P01',
      client: clientMap['Greenfield Heights'],
      format: 'carousel' as const,
      postingDate: new Date('2026-11-28').toISOString(),
      headline: 'Carpet Area vs Super Built-up: The Honest Builder Guide',
      primaryOwner: userMap['Designer'],
      reviewer: userMap['Shalu'],
      status: '4_internal_review' as const,
      driveAssetLink: 'carpet_v1.png',
      clientNotes: 'Design ready, Shalu checking typo in slide 3.',
    },
    {
      customId: 'RE-R03',
      client: clientMap['Greenfield Heights'],
      format: 'ai_reel_ad' as const,
      postingDate: new Date('2026-11-30').toISOString(),
      headline: 'Attention Patna & Gaya: 3BHKs starting at 65L near Bypass',
      primaryOwner: userMap['Intern'],
      reviewer: userMap['Harshit'],
      status: '6_scheduled_live' as const,
      driveAssetLink: 'ai_ad_v2.mp4',
      clientNotes: 'Live on Meta. 42 qualified leads generated.',
    },
    {
      customId: 'RE-P02',
      client: clientMap['Greenfield Heights'],
      format: 'static_graphic' as const,
      postingDate: new Date('2026-12-02').toISOString(),
      headline: 'Tower B Construction Milestone: 14th Floor Slab Complete',
      primaryOwner: userMap['Designer'],
      reviewer: userMap['Shalu'],
      status: '5_client_approval' as const,
      driveAssetLink: 'progress_nov.png',
      clientNotes: 'Sent to builder via WhatsApp.',
    },

    // Bodhgaya Heritage Villa
    {
      customId: 'HT-R01',
      client: clientMap['Bodhgaya Heritage Villa'],
      format: 'reel_video' as const,
      postingDate: new Date('2026-11-24').toISOString(),
      headline: '48 hours in a private pool villa (Weekend Escape)',
      primaryOwner: userMap['Shresth'],
      reviewer: userMap['Shalu'],
      status: '2_ready_for_shoot' as const,
      driveAssetLink: 'script_v01.doc',
      clientNotes: 'Props and poolside lighting confirmed.',
    },
    {
      customId: 'HT-R02',
      client: clientMap['Bodhgaya Heritage Villa'],
      format: 'reel_video' as const,
      postingDate: new Date('2026-11-28').toISOString(),
      headline: 'Behind the Kitchen: How our chef prepares royal Bihari thali',
      primaryOwner: userMap['Shresth'],
      reviewer: userMap['Intern'],
      status: '1_scripting' as const,
      driveAssetLink: 'thali_hook.doc',
      clientNotes: 'Intern drafting 3 hook variations.',
    },
    {
      customId: 'HT-P01',
      client: clientMap['Bodhgaya Heritage Villa'],
      format: 'offer_card' as const,
      postingDate: new Date('2026-11-25').toISOString(),
      headline: 'Winter Staycation Package: Book Direct for 20% Spa Credit',
      primaryOwner: userMap['Designer'],
      reviewer: userMap['Designer'],
      status: '3_in_edit' as const,
      driveAssetLink: 'winter_offer.psd',
      clientNotes: 'Final typography spacing adjustment.',
    },

    // Alankar Jewellers
    {
      customId: 'JW-R01',
      client: clientMap['Alankar Jewellers'],
      format: 'reel_video' as const,
      postingDate: new Date('2026-11-25').toISOString(),
      headline: 'What 50,000 wedding jewelry looks like vs 1.5 Lakhs',
      primaryOwner: userMap['Shresth'],
      reviewer: userMap['Intern'],
      status: '1_scripting' as const,
      driveAssetLink: 'r01_hook.doc',
      clientNotes: 'Script concept approved by Hariom.',
    },
    {
      customId: 'JW-P01',
      client: clientMap['Alankar Jewellers'],
      format: 'carousel' as const,
      postingDate: new Date('2026-11-27').toISOString(),
      headline: '5 Gold Necklaces Under 60 Grams for Wedding Season',
      primaryOwner: userMap['Designer'],
      reviewer: userMap['Shalu'],
      status: '5_client_approval' as const,
      driveAssetLink: 'catalog_50g.pdf',
      clientNotes: 'Client requested gold rate update in slide 4.',
    },

    // Inlite Media Founder
    {
      customId: 'IM-L01',
      client: clientMap['Inlite Media (Founder)'],
      format: 'linkedin_post' as const,
      postingDate: new Date('2026-11-20').toISOString(),
      headline: '1 Year Notice Period Birthday Story (No Backup Plan)',
      primaryOwner: userMap['Harshit'],
      reviewer: userMap['Harshit'],
      status: '6_scheduled_live' as const,
      driveAssetLink: 'bday_story.doc',
      clientNotes: 'Live on profile. Attached 4:5 enhanced photo.',
    },
    {
      customId: 'IM-L02',
      client: clientMap['Inlite Media (Founder)'],
      format: 'linkedin_post' as const,
      postingDate: new Date('2026-11-23').toISOString(),
      headline: 'The Hotel GM Math: Why 12 Rupees/Day Was Too Expensive',
      primaryOwner: userMap['Harshit'],
      reviewer: userMap['Harshit'],
      status: '6_scheduled_live' as const,
      driveAssetLink: 'hotel_math.doc',
      clientNotes: 'Ready to drop Monday morning 9 AM.',
    },
    {
      customId: 'IM-L03',
      client: clientMap['Inlite Media (Founder)'],
      format: 'linkedin_post' as const,
      postingDate: new Date('2026-11-25').toISOString(),
      headline: 'The Cafe Launch Blueprint: 12L Month 1 with Zero Free Food',
      primaryOwner: userMap['Harshit'],
      reviewer: userMap['Harshit'],
      status: '4_internal_review' as const,
      driveAssetLink: 'cafe_12l.doc',
      clientNotes: 'Text ready, reviewing opening 2 lines.',
    },
    {
      customId: 'IM-I01',
      client: clientMap['Inlite Media (Founder)'],
      format: 'instagram_reel' as const,
      postingDate: new Date('2026-11-26').toISOString(),
      headline: 'Gaya jaise shehar se 6 logon ki agency kaise chala rahe ho?',
      primaryOwner: userMap['Harshit'],
      reviewer: userMap['Shresth'],
      status: '2_ready_for_shoot' as const,
      driveAssetLink: 'script3.doc',
      clientNotes: 'Harshit to record 35-sec take at studio desk.',
    },
  ]

  for (const item of items) {
    const existing = await payload.find({
      collection: 'content-items',
      where: { customId: { equals: item.customId } },
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'content-items',
        data: item,
      })
      console.log(`Seeded item: ${item.customId}`)
    } else {
      console.log(`Item already exists: ${item.customId}`)
    }
  }

  console.log('--- Database Seeding Complete! ---')
}

seedDatabase()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
