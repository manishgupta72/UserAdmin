const { z } = require("zod");

const loginSchema=z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "password min 3 character" })
    .max(255, { message: "password max be 255 character" }),
})


const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "name minimum character is 3" })
    .max(255, { message: "name must not be more than 255 character" }),
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "phone must be 10 character" })
    .max(10, { message: "phone must be 10 character" }),

});
module.exports = {signupSchema,loginSchema};
