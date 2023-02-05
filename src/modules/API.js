export const post = async (name, score) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4dIVkemOTTVg2fUdz/scores/',
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
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4dIVkemOTTVg2fUdz/scores/',
  );
  const data = await res.json();
  data.result.forEach((user) => {
    const html = `<li>${user.user}: ${user.score}</li>`;
    document.querySelector('ul').insertAdjacentHTML('beforeend', html);
  });
};
