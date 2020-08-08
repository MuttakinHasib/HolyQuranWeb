export const getLocalStorageData = provider =>
  JSON.parse(localStorage.getItem(provider));
