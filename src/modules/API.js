export const post = async (name, score) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/njDIFRtr79tRGbjsvOxH/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    },
  );
};
export const get = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/njDIFRtr79tRGbjsvOxH/scores/',
  );
  const data = await res.json();
  data.result.forEach((user) => {
    const html = `<li>${user.user}: ${user.score}</li>`;
    document.querySelector('ul').insertAdjacentHTML('beforeend', html);
  });
};
