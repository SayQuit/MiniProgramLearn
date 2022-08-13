// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:''
  },
  handleitemChange(e){
    // console.log(e.detail);
    this.setData({
      id:e.detail
    })

  },


  onLoad(){
    // 初始化页面
    console.log('onLoad');
  },
  onShow(){
    console.log('PageonShow');
  },
  onReady(){
    console.log('onReady');
  },
  onHide(){
    console.log('onHide');
  },
  onUnload(){
    console.log('onUnload');
  },
  onPullDownRefresh(){
    console.log('onPullDownRefresh');
  },
  onReachBottom(){
    console.log('onReachBottom');
  },
  onShareAppMessage(){
    console.log('onShareAppMessage');
  },
  onPageScroll(){
    console.log('onPageScroll');
  },
  onResize(){
    console.log('onResize');
  },
  onTabItemTap(){
    console.log('onTabItemTap');
  }

  


})