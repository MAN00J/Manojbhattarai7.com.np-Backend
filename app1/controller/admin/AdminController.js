// authController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Authcheck = async (req, res) => {
   const { username, password } = req.body;

   if (username !== process.env.Adminusername) {
      return res.status(401).json({ message: "Invalid username" });
   }

   const isMatch = await bcrypt.compare(password, process.env.Adminpassword);
   if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
   }

   const token = jwt.sign({ username }, process.env.secretjwt, { expiresIn: "1h" });
   

   res.status(200).json({ message: "Logged in successfully",token });
};

export default Authcheck;