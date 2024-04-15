import { User } from "../models/users.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { avatar } = req.files;
    let user = await User.findOne({ email })
  }
  catch (error) {

  }
}