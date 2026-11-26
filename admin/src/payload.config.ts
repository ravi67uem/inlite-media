import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Clients } from './collections/Clients'
import { ContentItems } from './collections/ContentItems'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '• Inlite Media Admin',
      favicon: '/logo.png',
      ogImage: '/logo.png',
    },
    components: {
      graphics: {
        Logo: '/components/InliteLogo#InliteLogo',
        Icon: '/components/InliteIcon#InliteIcon',
      },
      afterDashboard: [
        '/components/PipelineDashboardWidget#PipelineDashboardWidget',
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Clients, ContentItems, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '7f8b9e6c4a3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || process.env.MONGODB_URI || '',
  }),
})
