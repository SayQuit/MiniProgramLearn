// pages/demo02/demo02.js
Page({
  data: {
    num:0,
    richtext:''

  },
  add(e){
    // console.log(e.currentTarget.dataset.operation);
    var n=e.currentTarget.dataset.operation
    this.setData({      
      num:this.data.num+n
    })
  },
  handInput(e){

    var k=Number(e.detail.value)
    this.setData({
      num:k
    })
  }
})