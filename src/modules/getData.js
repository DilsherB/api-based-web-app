const getData = async (url) => {
  try {
    const basicData = await fetch(url);
    if(!basicData.ok) new Error(`HTTP error! status: ${basicData.status}`);
    return basicData.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default getData;