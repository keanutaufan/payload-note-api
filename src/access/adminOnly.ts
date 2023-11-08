import { Access } from 'payload/config'

export const adminOnly: Access = ({ req: { user } }) => {
  if (!user) {
    return false
  }
  
  if (user.collection === 'users') {
    return true
  }

  return false
}