const searchDog = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random/9';

  const response = await fetch(url);
  const data = await response.json();
  return data.message;
};

const searchCat = async () => {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=9';

  const response = await fetch(url);
  const data = await response.json();
  const catImgs = data.map((item) => (item.url));
  catImgs.pop();
  return catImgs;
};

export { searchDog, searchCat };
