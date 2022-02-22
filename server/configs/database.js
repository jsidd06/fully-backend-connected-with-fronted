import mongoose from 'mongoose'
export const connectDB = () => {
  const promise = new Promise((resolve, reject) => {
    mongoose
      .connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.8op7l.mongodb.net/plaza?retryWrites=true&w=majority`,
        { useNewUrlParser: true }
      )
      .then((res) => {
        resolve('MongoDB connected')
      })
      .catch((err) => {
        reject(err)
      })
  })
  return promise
}
