document.addEventListener('DOMContentLoaded', function() {
  const generateJokeBtn = document.getElementById('generateJokeBtn');
  const generateGifBtn = document.getElementById('generateGifBtn');
  const generateStickerBtn = document.getElementById('generateStickerBtn');
  const contentContainer = document.getElementById('contentContainer');

  generateJokeBtn.addEventListener('click', function() {
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then(response => response.json())
      .then(data => {
        let joke = '';
        if (data.type === 'single') {
          joke = data.joke;
        } else if (data.type === 'twopart') {
          joke = `${data.setup}<br>${data.delivery}`;
        }

        displayContent(joke);
      })
      .catch(error => {
        displayContent('Failed to fetch joke.');
        console.error(error);
      });
  });

  generateGifBtn.addEventListener('click', function() {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=tePj0DSpbDmWSuBvoXD2WYzkrN3yZ4b6&tag=funny conversation')
      .then(response => response.json())
      .then(data => {
        const gifUrl = data.data.images.original.url;
        displayContent(`<img src="${gifUrl}" alt="Random GIF">`);
      })
      .catch(error => {
        displayContent('Failed to fetch GIF.');
        console.error(error);
      });
  });

  generateStickerBtn.addEventListener('click', function() {
    fetch('https://api.giphy.com/v1/stickers/random?api_key=tePj0DSpbDmWSuBvoXD2WYzkrN3yZ4b6&tag=bollywood')
      .then(response => response.json())
      .then(data => {
        const stickerUrl = data.data.images.original.url;
        displayContent(`<img src="${stickerUrl}" alt="Random Sticker">`);
      })
      .catch(error => {
        displayContent('Failed to fetch sticker.');
        console.error(error);
      });
  });

  function displayContent(content) {
    contentContainer.innerHTML = content;
  }
});
