const cheerio = require('cheerio');
const axios = require('axios');

const getHotSpot = async () => {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
  };
  const url = 'https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr=6';
  const html = await axios.get(url, { headers });
  const $ = cheerio.load(html && html.data);
  if (!$) throw new Error('UnRecorded Error');
  const line = $('#pl_top_realtimehot tbody tr');
  const transformSrc = src => src && src.includes('http') ? src : `https://s.weibo.com/${src}`;
  const transformLine = (node, i) => {
    const rank = $('td.td-01.ranktop', node);
    const affair = $('td.td-02 a', node);
    const view = $('td.td-02 span', node);
    const icon = $('td.td-03 i', node);
    return {
      iconText: icon.text(),
      rank: i > 0 ? rank.text() : 'top',
      title: affair.text(),
      view: view.text(),
      src: transformSrc(affair.attr('href'))
    };
  };
  const result = [];
  for (let i = 0; i < line.length; i ++) {
    const item = transformLine(line[i], i);
    result.push(item);
  }
  return result;
};

module.exports = {
  getHotSpot
};
