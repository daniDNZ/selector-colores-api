import mongoose from 'mongoose'

const mongoConnection = () => {
  const connectionString = 'mongodb+srv://adm123:adm123@cluster0.ivf4s.mongodb.net/selectorColores?retryWrites=true&w=majority'

  // Conection
  mongoose.connect(connectionString)
    .then(() => {
      console.log('Database connected')
    })
    .catch(err => {
      console.error(err)
    })
}

export default mongoConnection
