
import db from '../models/index.js';

export default class User {
  constructor() {
    this.user = db.User;
  }

  async index(req, res) {
    try {
      const user = await this.user.findAll();
      console.log(user);
      return res.status(200).send(user);

    } catch (error) {
      console.error('Error al buscar el usuario:', error);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const user = await this.user.findOne({
        where:{
          id:id
        }
      });
      console.log(user);
      return res.status(200).send(user);

    } catch (error) {
      console.error('Error al buscar el usuario:', error);
    }
  }

  async store(req, res) {
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password) {
      return res.status(400).send({ "message": "error" });
    }
    try {
      const user = await this.user.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      });
      console.log("exito");
      return res.status(200).send({ "message": "exito" });

    } catch (error) {

    }
  }


  async update(req, res) {
    const { id } = req.params;
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password) {
      return res.status(400).send({ "message": "error" });
    }
    try {
      const user = await this.user.findByPk(id);
      if (user === null) {
        return res.status(404).send({ "message": "not found" });
      }
      user.update({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      }),
      {
        where: {
          id: id
        }
      }

      return res.status(200).send(user);

    } catch (error) {
      return res.status(500).send({ "message": "error in server" });

    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    if(!id) return res.status(400).send();

    try {
      await this.user.destroy({
        where: {
          id: id
        }
      });

      return res.status(200).send("ok");
    } catch (error) {
      
    }
  }
}