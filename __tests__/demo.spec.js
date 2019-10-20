import fetch from 'node-fetch';
import { print } from 'graphql';
import { COMMON_QUERY } from './query';
it('Should return value for demo!!', async () => {
  const payload = JSON.stringify({ query: print(COMMON_QUERY) });
  const url = 'https://snowtooth.moonhighway.com/';
  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload
  };
  const result = await fetch(url, opts);
  const parse = await result.json();
  console.log(parse);
});
