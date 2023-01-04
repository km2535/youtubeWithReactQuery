export const mostPopularVideoList = async () => {
  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

export const searchResult = async (q) => {
  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&key=${process.env.REACT_APP_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data);
};

export const videoDetail = async (q) => {
  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${q}&key=${process.env.REACT_APP_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data);
};

export const relatedResult = async (q) => {
  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${q}&type=video&key=${process.env.REACT_APP_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data);
};
