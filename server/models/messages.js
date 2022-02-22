import mongoose from 'mongoose'

const schema = mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
})

const Message = mongoose.model('Message', schema)

export default Message
