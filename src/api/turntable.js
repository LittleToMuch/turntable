// import yellow from '../assets/pictures/yellow.jpg';
import black from '../assets/pictures/black.jpg';
import pink from '../assets/pictures/pink.jpg';
import red from '../assets/pictures/red.jpg';
import flower from '../assets/pictures/flower.jpg';
import birthday from '../assets/pictures/birthday.jpg';
import samoye2 from '../assets/pictures/samoye2.png';
export default {
  tp_id: 1,
  logo: '',
  rule: '<ol><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">请“点击抽奖”进行转盘抽奖，奖品奖券通过二维码进行领取；<br></span></li><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">单个用户仅可领取一次；<br></span></li><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">本次活动保留最终解释权。</span><br></li></ol>', // 活动说明
  awaken_img: '', // 唤醒图
  lottery: [
    {
      location: 1, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: red, // 转盘上的图片
      result_img: red, // 中奖结果图片
      rate: 10, // 中奖概率 1-100
      title: '要上班😭，吃醋',
      message: '抱抱'
    },
    {
      location: 2, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: black, // 转盘上的图片
      result_img: black, // 中奖结果图片
      rate: 10, // 中奖概率 1-100
      title: '要上班😭，吃醋',
      message: '抱抱'
    },
    {
      location: 3, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: pink, // 转盘上的图片
      result_img: pink, // 中奖结果图片
      rate: 10, // 中奖概率 1-100
      title: '要上班😭，吃醋',
      message: '抱抱'
    },
    {
      location: 4, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: samoye2, // 转盘上的图片
      result_img: samoye2, // 中奖结果图片
      rate: 50, // 中奖概率 1-100
      title: '宝贝要休息，么么哒',
      message: '要听话奥🌹'
    },
    {
      location: 5, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: flower, // 转盘上的图片
      result_img: flower, // 中奖结果图片
      rate: 10, // 中奖概率 1-100
      title: '要上班😭，吃醋',
      message: '抱抱'
    },
    {
      location: 6, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: birthday, // 转盘上的图片
      result_img: birthday, // 中奖结果图片
      rate: 10, // 中奖概率 1-100
      title: '要上班😭，吃醋',
      message: '抱抱'
    },
  ],
};
