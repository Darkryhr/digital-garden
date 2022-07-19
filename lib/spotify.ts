const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// AQAmMNh3L5QOjPaiC_D-jJgtu_UUxz6QJxqUsqLIEpowKZLxO0z5mA50TKRyobBmOdTn91yDb2qt-8pBC5zaXult2ZnSfVwr5Y35g2Y0XOkf_86lJj9aAoMnKMMSlPInE3ZevIb4TLCdCFNn0ONN1M85iybJk9qvCScuO47-vaSo15RdTpcZ5bfL__F93o5P-mnF6VaiGIx5mYpFzySQ6RYP9L94
