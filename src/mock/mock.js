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

const detailData = {
  title: "衡水中学，被外地人占领的高考工厂",
  content:"<img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3481764656,935382180&fm=26&gp=0.jpg' alt=''/><p><b>这篇文章可能是我最难写又最想写的一篇。</b>我不知道是不是所有人都和我一样，对于父亲，总是关注得很少，或者说，和父亲的关系远不如母亲。</p><p><b>父亲经常会开玩笑地对我抱怨,为啥每次回到家里，总是先找你妈?</b>对于这个问题，我还真有点难以回答。是习惯吧，可是为什么会有这样的习惯，从小到大，我都没有认真地思考过这个问题。</p><p><b>直到有了儿子岁岁，儿子总会对爱人表现得更加亲昵一些。</b>每次回到家里，只要看到爱人，儿子就会从沙发上欢快地蹦下来，跑到爱人的怀里。但如果只看到了我，就好像没啥反应，依然会坐在沙发上看电视。</p><p><b>我心里多少有点酸酸的感觉。</b>我会想到父亲，在我和母亲热烈得聊时，他会不会也有这种酸酸得感觉？</p><p><b>父亲今年已经六十多了，依然会跟着建筑队出去打工。</b>我曾多次给他说，我们的收入完全可以养得起家，就不要出去干活了，这么大年纪了，在家享享清福多好。可每次，父亲都会说，人一不劳动，这身体就跨了，没了精气神，老得也快。每次说到这个时候，母亲也会在一旁帮腔。对于他的这种关于劳动可以增强体质的说法，我还真的无力反驳。</p>"
}
//定义模拟接口只能接收post请求，定义返回的数据为data
Mock.mock('/get/getHomeList', 'post', data);
Mock.mock('/get/getInputList', 'post', inputData);
Mock.mock('/get/getMoreList', 'post', moreData);
Mock.mock('/get/getDetail', 'post', detailData);