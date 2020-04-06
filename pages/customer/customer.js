const itemsMine = [
  {
    thumbContent: "未激活", extraText: "邬顶立 负责", briefList: [
      { className: "color-big-title text-xl font-bold", style: "", text: "宁波第一医院-系统测试" },
      { className: "", style: "", text: "测试内容1" },
      { className: "radius-2 w-1-2 color-green", style: "", text: "医药机构" }
    ]
  },

]
const itemsShare = [
  {
    thumbContent: "未激活", extraText: " 李丽 负责", briefList: [
      { className: "color-big-title text-xl font-bold", style: "", text: "宁波第一医院-系统测试" },
      { className: "", style: "", text: "测试内容1" },
      { className: "radius-2 w-1-2 color-green", style: "", text: "医药机构" }
    ]
  },
  {
    thumbContent: "未激活", extraText: "李丽 负责", briefList: [
      { className: "color-big-title text-xl font-bold", style: "", text: "宁波第二医院-系统测试" },
      { className: "", style: "", text: "测试内容2" },
      { className: "radius-2 w-1-2 color-green", style: "", text: "医美机构" }
    ]
  },
  {
    thumbContent: "未激活", extraText: "李丽 负责", briefList: [
      { className: "color-big-title text-xl font-bold", style: "", text: "宁波第三医院-系统测试" },
      { className: "", style: "", text: "测试内容3" },
      { className: "radius-2 w-1-2 color-green", style: "", text: "胃药机构" }
    ]
  },
]
const itemsAll = [
  {
    thumbContent: "未激活", extraText: " 陈世明 负责", briefList: [
      { className: "color-big-title text-xl font-bold", style: "", text: "宁波第一医院-系统测试" },
      { className: "", style: "", text: "测试内容1" },
      { className: "radius-2 w-1-2 color-green", style: "", text: "医药机构" }
    ]
  },
  {
    thumbContent: "未激活", extraText: "陈世明 负责", briefList: [
      { className: "color-big-title text-xl font-bold", style: "", text: "宁波第二医院-系统测试" },
      { className: "", style: "", text: "测试内容2" },
      { className: "radius-2 w-1-2 color-green", style: "", text: "医美机构" }
    ]
  },
  {
    thumbContent: "未激活", extraText: "陈世明 负责", briefList: [
      { className: "color-big-title text-xl font-bold", style: "", text: "宁波第三医院-系统测试" },
      { className: "", style: "", text: "测试内容3" },
      { className: "radius-2 w-1-2 color-green", style: "", text: "胃药机构" }
    ]
  },
]
const itemsFree = [
]
const custCate = [itemsMine, itemsShare, itemsAll, itemsFree]
Page({
  data: {
    tabs: [
      "我负责的", "共享给我的", "全公司的", "无人负责的"
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
});
