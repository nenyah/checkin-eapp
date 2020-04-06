const itemsMine = [
  {
    thumbContent: "未激活", extraText: "邬顶立 负责", mainTitle: "宁波第一医院-系统测试"
  },

]
const itemsShare = [
  {
    thumbContent: "未激活", extraText: " 李丽 负责", mainTitle: "宁波第一医院-系统测试"
  },
  {
    thumbContent: "未激活", extraText: "李丽 负责", mainTitle: "宁波第二医院-系统测试"
  },
  {
    thumbContent: "未激活", extraText: "李丽 负责", mainTitle: "宁波第三医院-系统测试"
  },
]
const itemsAll = [
  {
    thumbContent: "未激活", extraText: " 陈世明 负责", mainTitle: "宁波第一医院-系统测试"
  },
  {
    thumbContent: "未激活", extraText: "陈世明 负责", mainTitle: "宁波第二医院-系统测试"
  },
  {
    thumbContent: "未激活", extraText: "陈世明 负责", mainTitle: "宁波第三医院-系统测试"
  },
]
const itemsFree = [
]
const custCate = [itemsMine, itemsShare, itemsAll, itemsFree]
Page({
  data: {
    tabs: [
      {
        title: '我负责的',
        subTitle: '',
        number: '0',
      },
      {
        title: '共享给我的',
        subTitle: '',
        number: '1',
      },
      {
        title: '全公司的',
        subTitle: '',
        number: '2',
      },
      {
        title: '无人负责的',
        subTitle: '',
        number: '3',
      },
    ],
    activeIndex: 0,
    items: itemsMine,
    numClients: 0,

  },
  onLoad() {
    // console.log(custCate, this.data.activeIndex)
    let numClients = custCate[this.data.activeIndex].length
    this.setData({
      numClients
    })
  },
  methods: [

  ],
  onItemTap(e) {
    console.log(e)
    const activeIndex = e
    const items = custCate[e]
    const numClients = items.length
    this.setData({
      activeIndex,
      items,
      numClients
    })
  },
  handleTabClick({ index, tabsName }) {
    const items = custCate[index]
    const numClients = items.length
    this.setData({
      [tabsName]: index,
      items,
      numClients
    });
  },
  handleTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },

});
