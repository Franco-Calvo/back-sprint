import Author from '../../models/Author.js';

async function finds_id(req, res, next) {
  const author = await Author.findOne({user_id: req.user._id});
  if (author) {
    req.body.author_id = author._id
    return next() 
  } else {
    return res.status(404).json({
      succes: false,
      message: "Error find_id"
    }); 
  }
}

export default finds_id
