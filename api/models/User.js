import mongoose from "mongoose";
import slugify from "slugify";
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  account_type: {
    type: String,
    required: true,
    enum: ["job-seeker", "employer"],
    default: "job-seeker",
  },
  verified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("validate", function (next) {
  if (this.username) {
    this.slug = slugify(this.username, {
      lower: true,
      strict: true,
    });
  }
  next();
});

const User = mongoose.model("User", UserSchema);

export default User;
