import Message from '../../models/messages.js'

export const messagesController = (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json({
        status: 'success',
        message: messages,
      })
    }
  })
}

export const newMessageController = (req, res) => {
  new Message({
    message: req.params.new,
  }).save((err, doc) => {
    if (err) {
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong',
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'Message saved',
      details: doc,
    })
  })
}
