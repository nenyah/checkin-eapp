App({
  onLaunch(options) {
    console.log("App Launch", options);
    console.log("SDKVersion", my.SDKVersion);
    // console.log("getSystemInfoSync", my.getSystemInfoSync());
  },
  onShow() {
    // this.globalData.sysInfo = my.getSystemInfoSync();
  },
  onHide() {
    console.log("App Hide");
  },
  globalData: {
    sysInfo: {}
  }
});
