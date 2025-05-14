/**
 * @param {number} days
 *
 * @return {number}
 */
const rentalDay = 40;

function calculateRentalCost(days) {
  // write code here
  if (days === 0) {
    return 0;
  }

  if (days < 3) {
    return rentalDay;
  }

  if (days === 3) {
    return rentalDay * days - 20;
  }

  if (days > 3 && days <= 7) {
    return rentalDay * days - 50;
  }
}
module.exports = calculateRentalCost;
