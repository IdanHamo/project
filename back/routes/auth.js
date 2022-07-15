const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User } = require("../model/users");

router.post("/", async (req, res) => {
  const { error } = validation(req.body);

  if (error) return res.status(400).send(error);
  const user = await User.findOne({ email: req.body.email });
});

function validation(values) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(400).email().required(),
    password: Joi.string().min(6).max(1024).required(),
  });

  return schema.validate(values);
}
