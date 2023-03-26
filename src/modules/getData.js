const getData = async (url) => {
  const basicData = await fetch(url);
  const jsonFormat = basicData.json();
  return jsonFormat;
}

const mainAPI = getData('');
const secAPI = getData('');
const other = getData('');

export { mainAPI, secAPI, other };