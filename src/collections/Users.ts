import { CollectionConfig } from 'payload/types'
import { adminOnly } from '../access/adminOnly'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: adminOnly,
    read: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users
