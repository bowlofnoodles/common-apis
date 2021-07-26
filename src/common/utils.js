const generateError = (message, status = 500) => {
  return {
    status,
    message,
  };
};

const generateSuccess = (data, status = 200) => {
  return {
    status,
    data
  };
};

/**
 * 
 * @param {number} num 一共有多少个数
 * @param {number} start 开始的数字，默认为0
 * @param {number} rate 相隔两个数字的差，默认为1
 * @returns {Array[number]}
 */
const generateArray = (num, start = 0, rate = 1) => {
  return Array(num).fill().map((_, index) => index + start + (rate - 1) * index);
};

/**
 * 
 * @param {string} str 包含html标签的字符串
 * @returns 过滤掉空格 &nbsp; html标签，返回纯粹的文本信息
 */
const filterHTML = str => {
  const reg = /<[^<>]+>|\s+|&nbsp;/g;
  str = str.replace(reg, '');
  return str;
};

module.exports = {
  generateError,
  generateSuccess,
  generateArray,
  filterHTML
};
