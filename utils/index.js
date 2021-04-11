export const SortContentByParams = (content = [], params) => {
  try {
    return content.sort((a, b) => a[params].localeCompare(b[params]));
  } catch (err) {
    return [];
  }
};

export const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
