const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");

const { SECRET } = require("../config");



/**
 * @DESC To register the user (ADMIN, SUPER_ADMIN, USER)
 */
const userRegister = async (req, role, res) => {
    // Validate the username
    let usernameNotTaken = await validateUsername(req.body.username);
    if (!usernameNotTaken) {
      req.flash('error', 'Username is already taken.');
      return res.redirect(`./register-${role}`);
    }

    // validate the email
    let emailNotRegistered = await validateEmail(req.body.email);
    if (!emailNotRegistered) {
      req.flash('error', 'Email is already registered.');
      return res.redirect(`./register-${role}`);
    }

    // Get the hashed password
    const password = await bcrypt.hash(req.body.password, 12);
    // create a new user
   
    const newUser = new User({
      ...req.body,
      password,
      role
    });

    await newUser.save();
    console.log(newUser);
    if(role === 'user' || role === 'manager'){
      return;
    }
    req.flash('success', 'Hurray! now you are successfully registred. Please now login.')
    return res.redirect(`./login-${role}`)
//   }
};

/**
 * @DESC To Login the user (ADMIN, SUPER_ADMIN, USER)
 */
const userLogin = async (req, role, res) => {
  let { username, password } = req.body;
  // First Check if the username is in the database
  const user = await User.findOne({ username });
  if (!user) {
    req.flash('error', 'Username is not found. Invalid login credentials.');
    return res.redirect(`./login-${role}`);
  }
  // We will check the role
  if (user.role !== role) {
    req.flash('error', 'Please make sure you are logging in from the right portal.');
    return res.redirect('./home');
  }
  // That means user is existing and trying to signin fro the right portal
  // Now check for the password
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    // Sign in the token and issue it to the user
    let token = jwt.sign(
      {
        user_id: user._id,
        role: user.role,
        username: user.username,
        email: user.email
      },
      SECRET,
      { expiresIn: "7 days" } 
    );

    let result = {
      username: user.username,
      role: user.role,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: 168
    };
    req.flash('success', 'Hurray! You are now logged in.');
    res.cookie("jwt", result, {secure: true, httpOnly: true});
    
    return res.redirect(`./homepage-${role}`);
  } else {
    req.flash('error', 'Incorrect password.');
    return res.redirect(`./login-${role}`);
  }
};

const validateUsername = async username => {
  let user = await User.findOne({ username });
  return user ? false : true;
};

/**
 * @DESC Passport middleware
 */
// const userAuth = passport.authenticate("jwt", { session: false });

const userAuth = (req, res, next) => {
  const token = req.cookies.token;
  passport.authenticate("jwt", { token });
  next();
}

/**
 * @DESC Check Role Middleware
 */
const checkRole = roles => (req, res, next)=>{
  //
  //console.log(req)
  const role = req.cookies.jwt.role;
  if(roles.includes(role)){
    next();
  }else{
    res.status(401).json("Unauthorized")
  }
};

const validateEmail = async email => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

const serializeUser = user => {
  return {
    username: user.username,
    email: user.email,
    name: user.name,
    _id: user._id,
    updatedAt: user.updatedAt,
    createdAt: user.createdAt
  };
};

module.exports = {
  userAuth,
  checkRole,
  userLogin,
  userRegister,
  serializeUser,
};