import { CollectionConfig } from 'payload/types'
import { authenticatedUser } from '../access/authenticatedUser'
import { authorOrAdmin } from '../access/authorOrAdmin'

const Notes: CollectionConfig = {
  slug: 'notes',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    create: authenticatedUser,
    read: authorOrAdmin,
    delete: authorOrAdmin,
    update: authorOrAdmin,
  },
  fields: [
    {
      name: 'authorID',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
    }
  ],
}

export default Notes
