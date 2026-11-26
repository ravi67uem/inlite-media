import type { CollectionConfig } from 'payload'

export const ContentItems: CollectionConfig = {
  slug: 'content-items',
  labels: {
    singular: 'Pipeline Item',
    plural: 'Pipeline Items',
  },
  admin: {
    useAsTitle: 'headline',
    defaultColumns: ['customId', 'client', 'format', 'postingDate', 'primaryOwner', 'status', 'reviewer'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'customId',
      type: 'text',
      required: true,
      label: 'ID (e.g. CF-R01, RE-R02)',
      admin: {
        placeholder: 'CF-R01',
      },
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      required: true,
      label: 'Client Brand',
    },
    {
      name: 'format',
      type: 'select',
      required: true,
      options: [
        { label: 'Reel (Video)', value: 'reel_video' },
        { label: 'Carousel (5 Slides)', value: 'carousel' },
        { label: 'Static Graphic', value: 'static_graphic' },
        { label: 'UGC Reel', value: 'ugc_reel' },
        { label: 'AI Reel (Meta Ad)', value: 'ai_reel_ad' },
        { label: 'LinkedIn Post', value: 'linkedin_post' },
        { label: 'Instagram Reel', value: 'instagram_reel' },
        { label: 'Offer / Promo Card', value: 'offer_card' },
      ],
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Hook / Topic Headline',
      admin: {
        placeholder: 'e.g. Why our cold brew takes 18 hours (and why you can taste it)',
      },
    },
    {
      name: 'postingDate',
      type: 'date',
      label: 'Target Posting Date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd-MMM-yyyy',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: '1_scripting',
      options: [
        { label: '1. Scripting', value: '1_scripting' },
        { label: '2. Ready for Shoot', value: '2_ready_for_shoot' },
        { label: '3. In Edit', value: '3_in_edit' },
        { label: '4. Internal Review', value: '4_internal_review' },
        { label: '5. Client Approval', value: '5_client_approval' },
        { label: '6. Scheduled / Live', value: '6_scheduled_live' },
      ],
    },
    {
      name: 'primaryOwner',
      type: 'relationship',
      relationTo: 'users',
      label: 'Primary Owner (Editor / Creator)',
    },
    {
      name: 'reviewer',
      type: 'relationship',
      relationTo: 'users',
      label: 'Reviewer / Account Manager',
    },
    {
      name: 'driveAssetLink',
      type: 'text',
      label: 'Drive Asset Link / Raw Footage / Final URL',
      admin: {
        placeholder: 'https://drive.google.com/... or filename.mp4',
      },
    },
    {
      name: 'clientNotes',
      type: 'textarea',
      label: 'Client Feedback & Approval Notes',
      admin: {
        placeholder: 'Client requested changes or approval status...',
      },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      label: 'Internal Production Notes',
      admin: {
        placeholder: 'Team coordination notes, rough cut feedback, audio check...',
      },
    },
  ],
}
