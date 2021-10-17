const Review = require("./models/review");

const clients = [];

module.exports.addClient = () => {};

module.exports.removeClient = () => {};

module.exports.getReview = async () => {
  try {
    const reviews = await Review.getReviews();
    return reviews;
  } catch (e) {
    throw new Error(e);
  }
};
