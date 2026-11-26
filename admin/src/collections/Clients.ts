import type { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'industry', 'clientCode', 'contactPerson', 'active'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Client / Brand Name',
    },
    {
      name: 'clientCode',
      type: 'text',
      required: true,
      label: 'Code Prefix (e.g. CF, RE, HT, JW, IM)',
    },
    {
      name: 'industry',
      type: 'select',
      required: true,
      options: [
        { label: 'Food & Beverage (F&B)', value: 'fb' },
        { label: 'Real Estate', value: 'real_estate' },
        { label: 'Hotel & Hospitality', value: 'hotel' },
        { label: 'Retail & Jewelry', value: 'retail' },
        { label: 'Founder Personal Brand', value: 'founder' },
        { label: 'Healthcare & Wellness', value: 'healthcare' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'contactPerson',
      type: 'text',
      label: 'Primary Contact Person',
    },
    {
      name: 'contactPhone',
      type: 'text',
      label: 'WhatsApp / Phone',
    },
    {
      name: 'contactEmail',
      type: 'email',
      label: 'Email',
    },
    {
      name: 'googleDriveFolder',
      type: 'text',
      label: 'Master Google Drive Folder URL',
    },
    {
      name: 'brandGuidelines',
      type: 'textarea',
      label: 'Brand Tone / Style Notes',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active Retainer Client',
    },
  ],
}
