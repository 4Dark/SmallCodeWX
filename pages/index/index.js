var i =0;
Page({
  data: {
    // text:"这是一个页面"
    array: ['Android', 'IOS', 'ReactNativ', 'WeChat', 'Web'],
    index: 0,
    time: '08:30',
    date: '2016-09-26',
    items: [{
        name: 'a',
        value: '1'
      },
      {
        name: 'b',
        value: '2',
        checked: 'true'
      },
      {
        name: 'c',
        value: '3'
      }
    ]
  },
  bindGetFocus: function(e) {
    console.log('get focous');
  },
  bindLostFocus: function(e) {
    console.log('lost focous');
  },
  bindLineChange:function(e){
    i=i+1;
    console.log(i);
  },
  switchChange: function(e) {
    console.log(e.detail.value);
  },

  radioChange: function(e) {
    console.log(e.detail.value)
  },
  /**
   * 监听普通picker选择器
   */
  listenerPickerSelected: function(e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
  },

  /**
   * 监听时间picker选择器
   */
  listenerTimePickerSelected: function(e) {
    //调用setData()重新绘制
    debugger;
    this.setData({
      time: e.detail.value,
    });
  },

  /**
   * 监听日期picker选择器
   */
  listenerDatePickerSelected: function(e) {
    this.setDate({
      date: e.detail.value
    })
  },

  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})