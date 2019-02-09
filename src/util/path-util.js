function urlToList(value) {
  const urlList = value.split('/').filter(i => i);
  return urlList.map((urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`);
}

export {
  urlToList
};
