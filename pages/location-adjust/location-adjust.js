import formatLocation from "/service/format-location.js";
Page({
  data: {
    scale: 14,
    longitude: 120.131441,
    latitude: 30.279383,
    markers: [
      {
        iconPath: "/assets/images/location.png",
        id: 10,
        latitude: 30.279383,
        longitude: 120.131441,
        width: 38,
        height: 38
      }
    ],
    // 控制
    controls: [
      {
        id: 5,
        iconPath: "/assets/images/fix_location.png",
        position: {
          left: 0,
          top: 300 - 50,
          width: 38,
          height: 38
        },
        clickable: true
      }
    ]
  },

  onReady(e) {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext("map");
    my.canIUse("my.createMapContext");
  },

  getCenterLocation() {
    this.mapCtx.getCenterLocation(function(res) {
      console.log(res.longitude);
      console.log(res.latitude);
    });
  },

  moveToLocation() {
    this.mapCtx.moveToLocation();
  },

  regionchange(e) {
    console.log("regionchange", e);
    // 开启optimize模式后，无需再做此处理，请看optimize属性当说明。
    // 注意：如果缩小或者放大了地图比例尺以后，请在 onRegionChange 函数中重新设置 data 的
    // scale 值，否则会出现拖动地图区域后，重新加载导致地图比例尺又变回缩放前的大小。
    if (e.type === "end") {
      this.setData({
        scale: e.scale
      });
    }
  },

  controltap(e) {
    var _this = this;
    console.log("control tap", e);
    my.getLocation({
      success(res) {
        my.hideLoading();
        console.log(res);
        let { longitude, latitude } = formatLocation(
          res.longitude,
          res.latitude
        );
        _this.setData({
          hasLocation: true,
          longitude,
          latitude
        });
      },
      fail() {
        my.hideLoading();
        my.alert({ title: "定位失败" });
      }
    });
  },

  tap() {
    console.log("tap:");
  },

  changeScale() {
    this.setData({
      scale: 8
    });
  },

  changeCenter() {
    this.setData({
      longitude: 113.32452,
      latitude: 23.199994,
      includePoints: [
        {
          latitude: 23.199994,
          longitude: 113.32452
        }
      ]
    });
  },
  //支持地图不接受手势事件, isGestureEnable为1 表示支持，为0表示不支持
  gestureEnable() {
    this.mapCtx.gestureEnable({ isGestureEnable: 1 });
  },
  //地图是否显示比例尺, showsScale 为1表示显示，为0表示不显示
  showsScale() {
    this.mapCtx.showsScale({ isShowsScale: 1 });
  },
  //地图是否显示指南针, showsCompass 为1表示显示，为0表示不显示
  showsCompass() {
    this.mapCtx.showsCompass({ isShowsCompass: 1 });
  },
  changeMarkers() {
    this.setData({
      markers: [
        {
          iconPath: "/assets/images/location.png",
          id: 10,
          latitude: 21.21229,
          longitude: 113.32452,
          width: 50,
          height: 50
        }
      ],
      includePoints: [
        {
          latitude: 21.21229,
          longitude: 113.32452
        }
      ]
    });
  }
});
