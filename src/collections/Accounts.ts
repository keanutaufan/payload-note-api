import { CollectionConfig } from 'payload/types'
import { selfOrAdmin } from '../access/selfOrAdmin'
import { adminOnly } from '../access/adminOnly'

const Accounts: CollectionConfig = {
  slug: 'accounts',
  auth: true,
  admin: {
    useAsTitle: 'username',
  },
  access: {
    create: () => true,
    read: selfOrAdmin,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      minLength: 4,
      maxLength: 20,
      required: true
    }
  ],
}

export default Accounts
