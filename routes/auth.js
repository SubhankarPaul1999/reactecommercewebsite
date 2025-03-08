const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");


//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne(
      {
        username: req.body.username
      }
    );

    // !user && res.status(401).json("Wrong User Name")
    if (!user) {
      return res.status(401).json("wrong username ");
      // stop further execution in this callback
    }

    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    console.log(`this is hashed password ${hashedPassword}`);

    const originalPassword = hashedPassword.toString();
    console.log(`this is originalpassword ${originalPassword}`);

    const inputPassword = CryptoJs.AES.decrypt(
      CryptoJs.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
      process.env.PASS_SEC
    ).toString();

    console.log(`This is input password ${inputPassword}`);

    // originalPassword != inputPassword &&
    //   res.status(401).json("Wrong Password");

    if (originalPassword !== inputPassword) {
      return res.status(401).json("wrong password");
      // stop further execution in this callback
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });

  } catch (err) {
    res.status(500).json(err);
  }

});


module.exports = router;