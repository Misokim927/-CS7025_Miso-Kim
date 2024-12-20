let images = [
  'https://bandzoogle.com/files/4963/bzblog-how-to-promote-an-album-12-essential-strategies-main.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3NALM3bCFeJhuqEQXXxpr0wUpdUnLURQiA&s',
  'https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2021-02-music-album-h.avif',
];

let getRandomImage = function () {
  let randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

document
  .getElementById('changeImageButton')
  .addEventListener('click', function () {
    let imgElement = document.getElementById('randomImage');
    imgElement.src = getRandomImage();
  });

document.getElementById('randomImage').src = getRandomImage();
