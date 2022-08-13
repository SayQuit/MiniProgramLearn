// component/component1/component1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    d:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nav:[
      {
        id:'0',
        name:'要闻',
        active:true
      },
      {
        id:'1',
        name:'推荐',
        active:false
      },
      {
        id:'2',
        name:'原创',
        active:false
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickNav(e){
      // console.log(e.currentTarget.dataset.nav)
      this.triggerEvent("sdkjgv",e.currentTarget.dataset.nav)
      for(var i=0;i<this.data.nav.length;i++)
      {
        var f = 'nav[' + i + '].active'
          this.setData({
            [f]: false
      })
      }
      var f = 'nav[' + e.currentTarget.dataset.nav + '].active'
          this.setData({
            [f]: true
      })


    }
  }
})
