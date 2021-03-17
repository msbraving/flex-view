let echartsData = {
  option_one: {
    type: "bar",
    xData: [
      "旅游行业",
      "教育培训",
      "游戏行业",
      "医疗行业",
      "电商行业",
      "社交行业",
      "金融行业",
    ],
    // seriesData: {
    // 	one: [200, 300, 300, 900, 1500, 1200, 600],
    // },
    seriesData: [
      { name: "行业人数", data: [200, 210, 220, 200, 210, 220, 190] },
    ],
  },
  option_two: {
    type: "line",
    xData: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    // seriesData: {
    // 	新增游客: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
    // 	新增粉丝: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    // },
    seriesData: [
      {
        name: "新增游客",
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      },
      {
        name: "新增粉丝",
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      },
    ],
  },
  option_three: {
    type: "pie",
    name: "年龄分布",
    xData: [],
    seriesData: [
      { value: 4, name: "20-29岁" },
      { value: 2, name: "30-39岁" },
      { value: 2, name: "40-49岁" },
      { value: 1, name: "50岁以上" },
    ],
  },
  option_four: {
    type: "bar",
    xData: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
    seriesData: [{ name: "相关技能", data: [702, 350, 610, 793, 664] }],
  },
  option_five: {
    type: "line",
    xData: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    seriesData: [
      {
        name: "播放量",
        data: [24, 40, 101, 134, 90, 230, 210, 30, 120, 230, 210, 60],
      },
      {
        name: "转发量",
        data: [40, 64, 191, 324, 190, 330, 40, 213, 180, 200, 180, 29],
      },
    ],
  },
  option_six: {
    type: "pie",
    xData: [],
    name: "地区分布",
    seriesData: [
      { value: 42, name: "广东" },
      { value: 26, name: "北京" },
      { value: 24, name: "山东" },
      { value: 25, name: "河北" },
      { value: 20, name: "江苏" },
      { value: 25, name: "浙江" },
      { value: 30, name: "深圳" },
    ],
  },
};
export default echartsData;
