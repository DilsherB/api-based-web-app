const getData = async (url) => {
  const basicData = await fetch(url);
  const jsonFormat = await basicData.json();
  return jsonFormat;
}

const mainAPI = getData('https://api.tvmaze.com/search/shows?q=girls');
const secAPI = getData('');
const other = getData('');
console.log(mainAPI)
export { mainAPI, secAPI, other };