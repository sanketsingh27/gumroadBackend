const Review = require("./models/review");

module.exports.getReview = async () => {
  try {
    const reviews = await Review.getReviews();
    return reviews;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports.addNewReview = async (body) => {
  console.log({ body });
  const review = new Review(body);
  try {
    const newRating = await review.save();
    return newRating;
  } catch (e) {
    res.status(400).send(e);
  }
};
