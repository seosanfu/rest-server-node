const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  };

  middlewares() {
    this.app.use(express.static('public'));
    this.app.use(cors());
  };

  routes() {
    this.app.get('/api', (req, res) => {
      res.s.json({
        ok: true,
        msg: 'get API'
      })
    });

    this.app.post('/api', (req, res) => {
      res.s.json({
        ok: true,
        msg: 'post API'
      })
    });

    this.app.put('/api', (req, res) => {
      res.s.json({
        ok: true,
        msg: 'put API'
      })
    });

    this.app.delete('/api', (req, res) => {
      res.s.json({
        ok: true,
        msg: 'delete API'
      })
    });
  };

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto: '+process.env.PORT)
    })
  };

};

module.exports = Server;