import User from '../../models/User.js'

async function findAuthorIdByUserId(userId) {
  const user = await User.findById(userId);
  if (user.is_author) {
    return user._id; 
  } else {
    return null; 
  }
}

export default findAuthorIdByUserId
