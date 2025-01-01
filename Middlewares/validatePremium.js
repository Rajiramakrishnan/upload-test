const validatePremium = (req, res, next) => {
  console.log("premium validation working....");

  const premiumuser = req.isPremiumUser;
  console.log();
  const arr = ["normal user"];

  try {
    if (!premiumuser) {
      return res
        .status(200)
        .json({ message: "User not a premium user", data: arr });
    }
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Authentication failed", error: err.message });
  }
};
module.exports = { validatePremium };
