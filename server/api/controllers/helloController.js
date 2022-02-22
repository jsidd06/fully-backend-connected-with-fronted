export const messagesController = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: ['Hello siddharth', 'Hello samayra'],
  })
}
