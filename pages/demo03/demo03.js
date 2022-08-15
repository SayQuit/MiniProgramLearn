// pages/demo03/demo03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: '',
    fruit: [{
        id: 0,
        name: 'apple',
        isCheck: false
      },
      {
        id: 1,
        name: 'banana',
        isCheck: false
      },
      {
        id: 2,
        name: 'grape',
        isCheck: false
      }
    ]
  },
  handleChange(e) {

    this.setData({
      gender: e.detail.value
    })
  },
  handleFruit(e) {
    // console.log(e.detail);
    // console.log(e.detail);
    var l = this.data.fruit.length;
    for (var j = 0; j < l; j++) {
      // {console.log(this.data.fruit);
      //  this.data.fruit[j].isCheck=false;
      var f = 'fruit[' + j + '].isCheck'
      this.setData({
        [f]: false
      })
      //  this.data.fruit[j].name='111'

    }
    // console.log(this.data.fruit);
    for (var i = 0; i < l; i++) {
      // console.log(e.detail);
      for (var j = 0; j < e.detail.value.length; j++) {
        // console.log(e.detail.value[j]);
        if (this.data.fruit[i].name == e.detail.value[j]) {
          var f = 'fruit[' + i + '].isCheck'
          this.setData({
            [f]: true
          })
        }
      }

    }
    console.log(this.data.fruit);

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})