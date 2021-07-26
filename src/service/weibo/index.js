const cheerio = require('cheerio');
const axios = require('axios');
const { COMMON_SPIDER_HEADERS } = require('@/common/constants');

const getHotSpot = async () => {
  const url = 'https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr=6';
  const html = await axios.get(url, { headers: COMMON_SPIDER_HEADERS });
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
      rank: i > 0 ? Number(rank.text()) : 'top',
      title: affair.text(),
      view: Number(view.text()),
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
