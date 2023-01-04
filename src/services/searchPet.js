const searchPet = async () => {
  // const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
  const url = 'https://dog.ceo/api/breeds/image/random/9';

  const response = await fetch(url);
  const data = await response.json();
  return data.message;
};

export default searchPet;