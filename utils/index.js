export const SortContentByParams = (content=[], params) => {
  try {
    return content.sort((a,b) => a[params].localeCompare(b[params]))
  } catch(err) {
    return [];
  }
};
