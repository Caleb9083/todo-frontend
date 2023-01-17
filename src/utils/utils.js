export const formatCategory = (category) => {
  const s = category.split("-").join(" ");
  const capitalized = s.replace(s.charAt(0), s.charAt(0).toUpperCase());
  return capitalized;
};

export const getToken = () => {
  if (sessionStorage.getItem("token") !== null) {
    return sessionStorage.getItem("token");
  }
  return "The Null Token";
};
