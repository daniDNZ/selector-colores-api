import mongoConnection from './mongo.js'

import express from 'express'
import cors from 'cors'
import Palette from './models/Palette.js'

mongoConnection()
const app = express()

app.use(cors())
app.use(express.json())

// Get all palettes
app.get('/api/palettes', (request, response) => {
  Palette.find({})
    .then(palettes => {
      response.json(palettes)
    })
})

// Remove one palette
app.delete('/api/palettes/:id', (request, response) => {
  const { id } = request.params

  Palette.findByIdAndRemove(id)
    .then(result => {
      response.status(204).end()
    })
    .catch(err => {
      console.error(err)
      response.status(400).end()
    })
})

// Create one pallete
app.post('/api/palettes', (request, response) => {
  const palette = request.body

  Palette.find({})
    .then(palettes => {
      if (palettes.length < 8) {
        const newPalette = new Palette({
          name: palette.name,
          arrayColors: palette.arrayColors
        })

        newPalette.save()
          .then(savedPalette => {
            response.status(201).json(savedPalette)
          })
      } else {
        response.status(400).json({
          error: 'Too much elements'
        })
      }
    })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
