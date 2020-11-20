Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      '../imgs/001.jpg',
      '../imgs/002.jpg',
      '../imgs/003.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentData : 0,

  },  

  /**
   * 组件的方法列表
   */
  methods: {
    bindchange:function(e){
      const that  = this;
      that.setData({
        currentData: e.detail.current
      })
    },
    //点击切换，滑块index赋值
    checkCurrent:function(e){
      const that = this;
      if (that.data.currentData === e.target.dataset.current){
          return false;
      }else{
        that.setData({
          currentData: e.target.dataset.current
        })
      }
    },
    getUserInfo: function() {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },

    jumppage:function() {
      //let pos = e.currentTarget.dataset.pos;//获取下标值
      //let type = this.data.shortcutList[pos].type;//获取type值
      wx.navigateTo({
        url: '../xljcs/xljcs',
      })
      
    }
  },

   /***增加组件 */
   onTapAdd:function(e){
    var temp=this.data.obj;
    temp.push(this.data.obj.length);
    this.setData({
      obj:temp
    })
  },
  /***** 删除最后一个组件，也可以修改删除指定组件*/
  onTapDel:function(e){
    var temp = this.data.obj;
    temp.pop(this.data.obj.length);
    this.setData({
      obj: temp
    })
  },
  
})


