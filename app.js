// app.js
App({
  // onLaunch() {
  //   // 展示本地存储能力
  //   const logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)

  //   // 登录
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //     }
  //   })
  // },
  // globalData: {
  //   userInfo: null
  // }

  onLaunch(){
    // 小程序启动时获取用户信息
    console.log('onLaunch');
  },
  onShow(){
    // 切页面回到小程序时触发
    console.log('onShow');
  },
  onHide(){
    // 切页面出去时触发
    console.log('onHide');
  },
  onError(err){
    // 
    console.log('onError');
    console.log(err);
  },
  onPageNotFound(err){
    // 找不到第一个入口页面触发
    console.log('onPageNotFound');
    console.log(err);
  }
})
