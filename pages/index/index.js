var i =0;
Page({
  data: {
    markers:[{
      latitude: 23.099995,
      longitude:110.404056,
      name:'xk',
      desc:'xk'
    }]
    ,
    // text:"这是一个页面"
    array: [
      { mode: 'scaleToFill', text:'scaleToFill'},
      { mode: 'aspectFit', text: 'aspectFit' },
      { mode: 'aspectFill', text: 'aspectFill' }


    ],
    src:'pictures/1.jpg',
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
  audioPlay:function(e){
    this.audioUsr.play();
  },
  audioPausea:function(e){
    this.audioUsr.pause();
  },
  audioseek30:function(e){
    this.audioUsr.seek(30)
  },


  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function() {
    this.audioUsr = wx.createAudioContext('myAudio');
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