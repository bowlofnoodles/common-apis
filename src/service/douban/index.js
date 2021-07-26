const cheerio = require('cheerio');
const axios = require('axios');
const { COMMON_SPIDER_HEADERS } = require('@/common/constants');
const { filterHTML } = require('@/common/utils');

const getTopMovie = async (start = 0) => {
  const url = `https://movie.douban.com/top250?start=${start}`;
  const html = await axios.get(url, { headers: COMMON_SPIDER_HEADERS });
  const $ = cheerio.load(html && html.data);
  if (!$) throw new Error('UnRecorded Error');
  const line = $('#wrapper #content .grid_view .item');
  const transformComment = str => Number(str.slice(0, -3));
  const transformLine = (node, i) => {
    const rank = $('.pic em', node);
    const picAffair = $('.pic a img', node);
    const affair = $('.pic a', node);
    const star = $('.info .star .rating_num', node);
    const comment = $('.info .star span:last-child', node);
    const quote = $('.info .bd .quote', node);
    const desc = $('.info p:first-child', node);
    const title = $('.info .hd a', node);
    return {
      rank: Number(rank.text()),
      picUrl: picAffair.attr('src'),
      url: affair.attr('href'),
      star: Number(star.text()),
      comment: transformComment(comment.text()),
      title: filterHTML(title.html()),
      desc: filterHTML(desc.html()),
      quote: quote.text()
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
  getTopMovie
};
