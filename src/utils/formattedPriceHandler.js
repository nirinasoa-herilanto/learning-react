/**
 * Use to format price with Intl
 * @param {number} price
 * @returns price formatted
 */
export const formattedPriceHandler = (price) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(price);
};
