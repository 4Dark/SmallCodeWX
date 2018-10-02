//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items:[{name:'1',value:'选择1'},
      { name: '2', value: '选择2' },
      { name: '3', value: '选择3' }],
    iconSize:[20,30,40,50,60],
    imgUrls:[
      'pictures/1.jpg',
      'pictures/2.jpg',
      'pictures/3.jpg',
      'pictures/4.jpg',
      'pictures/5.jpg',
      'pictures/6.jpg'
    ],
    motto: 'Hello World',
    indicatorDots:false,
    cansee:true,
    nocansee:false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  changeIndicatorDots:function(e){
    debugger;
    this.setData({
      indicatorDots:!this.data.indicatorDots
    })
  },
  intervalChange:function(e){
    debugger;
    this.setData({
      interval:e.detail.value
    })
  }
  ,
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
