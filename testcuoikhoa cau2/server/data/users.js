import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("MindX@2022",10),
    isAdmin: true,
  },
  {
    name: "alice",
    email: "alice@example.com",
    password: bcrypt.hashSync("MindX@2022",10),
  },
];

export default users;
