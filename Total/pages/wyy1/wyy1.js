//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    msg: '欢迎来到Antidote',
    motto: '欢迎使用',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../wyy2/wyy2'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
     
    } 
    else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      } 
    } else {
      /*wx.reLaunch({
        url: '/pages/index/index',
      })*/
      // 在没有 open-type=getUserInfo 版本的兼容处理
     wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          wx.reLaunch({
            url: '/pages/index/index',
          })
          /*this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })*/
        }
      })
    }
  },
  jumppage:function(){
    wx.navigateTo({
      url: '/pages/wyy1/wyy1',
    })
  },
  jumppage1:function(){
    wx.navigateTo({
      url: '/pages/wyy2/wyy2',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

