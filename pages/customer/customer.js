Page({
  data: {
    tabs: [
      "我负责的", "共享给我的", "全公司的", "无人负责的"
    ],
    activeIndex: 0,
  },
  onLoad() { },
  methods: [

  ],
  onItemTap(e) {
    console.log(e)
    this.setData({
      activeIndex: e
    })
  },
});
