export function calculateOffPercentage(actual_price, selling_price) {
  const actual = parseFloat(actual_price);
  const selling = parseFloat(selling_price);

  if (actual === 0) return 0;

  const discount = ((actual - selling) / actual) * 100;
  return discount < 1 ? discount.toFixed(2) : discount.toFixed(0);
}

export function formatDuration(duration) {
  const match = duration.match(/(\d+)N\/(\d+)D/i);
  if (!match) return duration; // return original if format doesn't match

  const nights = match[1];
  const days = match[2];

  return `${nights} Night${nights > 1 ? "s" : ""} / ${days} Day${
    days > 1 ? "s" : ""
  }`;
}

export function convertToShortDuration(duration) {
  // Matches patterns like "2 Nights / 3 Days" or "1 Night / 2 Days"
  const match = duration?.match(/(\d+)\s*Nights?\s*\/\s*(\d+)\s*Days?/i);
  if (!match) return duration;
  return `${match[1]}N/${match[2]}D`;
}

export const toTitleCase = (str) =>
  str
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
