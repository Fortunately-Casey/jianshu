import Mock from 'mockjs';
const data = {
  topicList: [{
      id: 1,
      title: '社会热点',
      imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3065901643,571887663&fm=26&gp=0.jpg'
    },
    {
      id: 2,
      title: '社会热点',
      imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3065901643,571887663&fm=26&gp=0.jpg'
    }
  ],
  articleList: [{
      id: 1,
      title: "生活不需要忍受",
      desc: "一个人知道自己为什么而活，就可以忍受任何一种生活。——尼采初看到这句话觉得说得很对。可是，可但是，我们有时候，真的真的不知道为什么而活…… ...",
      imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1658603858,686533857&fm=26&gp=0.jpg"
    },
    {
      id: 2,
      title: "生活本该如此简单",
      desc: "一个人知道自己为什么而活，就可以忍受任何一种生活。——尼采初看到这句话觉得说得很对。可是，可但是，我们有时候，真的真的不知道为什么而活…… ...",
      imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1658603858,686533857&fm=26&gp=0.jpg"
    }
  ],
};
const inputData = [
  "高考",
  "区块链",
  "React",
  "三生三世",
  "崔永元",
  "vue",
  "小程序",
  "javascript",
  "大数据",
  "java",
  "Cookie",
  "SpringBoot",
  "六小龄童",
  "Arcgis",
  "FormData",
  "vue-cli",
  "路由",
  "状态管理",
  "云存储",
  "渐进增强",
  "显示隐藏",
  "周杰伦",
  "刘德华",
  "吴亦凡",
  "德玛西亚",
  "大保健",
  "就在这里",
  "无所谓",
  "无所畏惧",
  "重在参与",
  "东方不败",
  "无敌无敌",
  "localStorage"
]

const moreData = [{
    id: 1,
    title: "你要知道你为什么而活",
    desc: "一个人知道自己为什么而活，就可以忍受任何一种生活。——尼采初看到这句话觉得说得很对。可是，可但是，我们有时候，真的真的不知道为什么而活…… ...",
    imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1658603858,686533857&fm=26&gp=0.jpg"
  },
  {
    id: 2,
    title: "二十不惑，三十而已",
    desc: "一个人知道自己为什么而活，就可以忍受任何一种生活。——尼采初看到这句话觉得说得很对。可是，可但是，我们有时候，真的真的不知道为什么而活…… ...",
    imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1658603858,686533857&fm=26&gp=0.jpg"
  }
]
//定义模拟接口只能接收post请求，定义返回的数据为data
Mock.mock('/get/getHomeList', 'post', data);
Mock.mock('/get/getInputList', 'post', inputData);
Mock.mock('/get/getMoreList', 'post', moreData);