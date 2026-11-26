import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role', 'phone'],
  },
  auth: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'admin',
      options: [
        { label: 'Super Admin', value: 'superadmin' },
        { label: 'Admin', value: 'admin' },
        { label: 'Client', value: 'client' },
      ],
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      label: 'Assigned Client Brand',
      admin: {
        condition: (data) => data?.role === 'client',
        description: 'For client accounts: choose which brand this client belongs to.',
      },
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone / WhatsApp',
    },
  ],
  versions: false,
}
