const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.static('static'))

const server = app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

const io = require('socket.io').listen(server)

io.sockets.on('connection', (socket) => {
  socket.on('set nickname', (name) => {
    socket.nickname = name
    socket.broadcast.emit('new user', {
      nickname: name,
      type: 'user'
    })
    socket.emit('login', {
      nickname: name,
      id: socket.id
    })
  })
  socket.on('new information', (str) => {
    io.emit('new information', {
      value: str,
      nickname: socket.nickname,
      type: 'information'
    })
  })
})
