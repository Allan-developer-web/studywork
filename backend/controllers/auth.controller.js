import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    console.log("[auth.register] incoming body:", req.body);
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    console.error("[auth.register] error:", err);
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;

    const isProd = process.env.NODE_ENV === "production";
    const cookieOptions = {
      httpOnly: true,
      sameSite: isProd ? "none" : "lax",
      secure: isProd,
    };

    res.cookie("accessToken", token, cookieOptions).status(200).send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  const isProd = process.env.NODE_ENV === "production";
  const cookieOptions = {
    sameSite: isProd ? "none" : "lax",
    secure: isProd,
  };

  res.clearCookie("accessToken", cookieOptions).status(200).send("User has been logged out.");
};
