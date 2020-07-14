import { print } from 'graphql';
import fetch from 'node-fetch';
import { QUERY } from '../__tests__/query.js';
import LiftAssertions from '../assertions/LiftAssertions';
import TrailAssertions from '../assertions/TrailAssertions';

async function skiResorts(fn) {
  const variables = {
    lift: "panorama",
    trail: "grandma"
  }
  const payload = JSON.stringify({ query: print(QUERY), variables });
  const url = 'https://snowtooth.moonhighway.com/';
  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
  };
  const result = await fetch(url, opts);
  const response = await result.json();
  const lift = new LiftAssertions(response);
  const trail = new TrailAssertions(response);

  await fn({ lift, trail });
}

export default {
  skiResorts,
};
