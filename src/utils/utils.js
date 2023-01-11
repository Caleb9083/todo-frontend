export const formatCategory = (category) => {
  const s = category.split("-").join(" ");
  const capitalized = s.replace(s.charAt(0), s.charAt(0).toUpperCase());
  return capitalized;
};
