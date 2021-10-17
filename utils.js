const Review = require("./models/review");

module.exports.getReview = async () => {
  try {
    const reviews = await Review.getReviews();
    return reviews;
  } catch (e) {
    console.log(e);
  }
};

module.exports.addNewReview = async (body) => {
  console.log({ body });
  const review = new Review(body);
  const { averageRating } = await Review.getReviews();

  try {
    const newReview = await review.save();
    return { newReview, averageRating };
  } catch (e) {
    console.log(e);
  }
};
