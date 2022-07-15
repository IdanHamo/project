const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User } = require("../model/users");

router.post("/", async (req, res) => {
  const { error } = validation(req.body);

  if (error) return res.status(400).send(error);
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("user doesn't exist");

  const checkPassword = await bcrypt.compare(user.password, req.body.password);
  if (!checkPassword)
    return res.status(400).send("Email / password are incorrect");

  const token = user.generateAuthToken();
  res.status(200).send(token);
});

function validation(values) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(400).email().required(),
    password: Joi.string().min(6).max(1024).required(),
  });

  return schema.validate(values);
}

module.exports = router;
