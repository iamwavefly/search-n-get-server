import mongoose from "mongoose";
import slugify from "slugify";
// import dompurify from "dompurify";
// import { JSDOM } from "jsdom";
import marked from "marked";
const PostSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
  },
  company_num_employees: {
    type: String,
  },
  employment_type: {
    type: String,
  },
  location: {
    type: String,
  },
  remote: {
    type: Boolean,
  },
  logo: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  date_posted: {
    type: Date,
    required: true,
  },
  keywords: {
    type: Array,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  sanitizedHtml: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: true,
  },
  date_added: {
    type: Date,
    default: Date.now(),
  },
});

// config domepurify
// const createDomPurify = dompurify(new JSDOM().window);

PostSchema.pre("validate", function (next) {
  if (this.role) {
    this.slug = slugify(this.role + "_" + this.id, {
      lower: true,
      strict: true,
    });
  }
  if (this.text) {
    this.sanitizedHtml = marked(this.text);
  }
  next();
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
