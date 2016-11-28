const axios = require('axios');

let regions = {
  'region1': '#js-region-1',
  'region2': '#js-region-2',
  'region3': '#js-region-3',
  'region4': '#js-region-4',
  'region5': '#js-region-5',
}

async function resolveInitialData() {
  try {
    let gists = await axios.get('https://api.github.com/gists/public');
    // now you can write this like syncronous code!
    console.log(gists.data);
  } catch (e) {
    // promise was rejected and we can handle errors with try/catch!
  }
}

export default {
  regions,
  resolveInitialData
}
