import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { webpackBundler } from '@payloadcms/bundler-webpack' // 
import { viteBundler } from '@payloadcms/bundler-vite'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Accounts from './collections/Accounts'
import Notes from './collections/Notes'

export default buildConfig({
  admin: {
    user: Users.slug,
    // bundler: webpackBundler(),
    bundler: viteBundler(),
  },
  // TODO: change to actual server domain
  cors: ['http://localhost:3000', 'http://localhost:5173'],
  csrf: ['http://localhost:3000', 'http://localhost:5173'],
  editor: slateEditor({}),
  collections: [Users, Accounts, Notes],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
