import { userValidate } from "../validation";
import axios from "axios";

const bcrypt = require("bcryptjs");
const passport = require("passport");
// Load User model
import User from "../models/User";
// routes controlles
export const createUser = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    account_type,
    password,
    password2,
  } = req.body;

  if (password != password2) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const { value, error } = userValidate.validate(req.body);

  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    console.log("error", message);
    return res.status(422).json({ error: message });
  }
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const newUser = new User({
      firstname,
      lastname,
      email,
      phone,
      account_type,
      password,
    });

    const options = {
      method: "GET",
      url: "https://email-checker.p.rapidapi.com/verify/v1",
      params: { email: newUser.email },
      headers: {
        "x-rapidapi-host": "email-checker.p.rapidapi.com",
        "x-rapidapi-key": "40de40357amshdb35763011ace2ap1b4fc8jsnb6a5f2ac690e",
      },
    };

    axios
      .request(options)
      .then((check) => {
        if (check.data.status === "invalid")
          return res.json({ error: check.data.reason });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) return res.json({ error: err });
            newUser.password = hash;
            console.log(hash);
            newUser
              .save()
              .then((user) => {
                res.status(201).json({
                  status: "user created",
                  user,
                });
              })
              .catch((err) => res.status(400).json({ error: err }));
          });
        });
        
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
};
