import mongoose from 'mongoose'
const { Schema } = mongoose

const paletteSchema = new Schema({
  name: String,
  arrayColors: Array
})

paletteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const Palette = mongoose.model('Palette', paletteSchema)

export default Palette
