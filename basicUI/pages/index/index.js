//采用require的方式引用外部模块文件并用common来接受这个对象
var common = require("../../common.js");
var app;//声明一个变量app然后在onload对它进行一个获取
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    show:true,
    radio:true,
    flag:false,
    a:5,
    b:6,
    c:2,
    person:{
      "name":"黄利峰",
      "age":28
    },
    arrayObj:['数组',20],
    color:1,
    array: ["第一条数据", "第二条数据","第三条数据"],
    arrayObject:[
      {
        "name":"黄利峰",
        "age":29,
        "like":"basketBall"
      }
    ],
    diyTempObj:{
      "index":1,
      "msg":"hi,myDiyTemplate",
      "time":"2017-11-26"
    },
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    checkBoxItems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    selIndex:0,
    pickerArray_sel:['中国', '美国', '韩国', '英国', '俄罗斯'],
    time:"17:25",
    date:"2017-11-25",
    indexSheng:0,
    indexShi:0,
    arraySheng:['河南省','山东省'],
    arrayShi:[
      ['濮阳市','郑州市','安阳市'],
      ['青岛市','聊城市']
    ],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    names: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  audioPlay: function () {


  },
  myTap:function(e){
    console.log(e);
    console.log("我用myTap的方法点击了下");
    console.log(e.target.dataset.name);
    console.log(e.target.dataset.myAge);
  },
  checkSexChange:function(e){
    console.log(e.detail.value)
  },
  checkboxChange:function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
  },
  myInputFunc:function(e){
    console.log(e.detail.value);
  },
  myInputFuncFocus:function(e){
    console.log(e.detail.value);
  },
  myInputFuncBlur:function(e){
    console.log(e.detail.value);
  },
  myInputFuncConfirm:function(e){
    console.log(e.detail.value);
  },
  myPicker_sel:function(e){
    console.log(e.detail.value);
    this.setData({
      selIndex:e.detail.value
    });
  },
  myPickerTime:function(e){
    this.setData({time:e.detail.value});
  },
  myPickerDate:function(e){
    this.setData({date:e.detail.value});
  },
  selProv:function(e){
    this.setData({ indexSheng:e.detail.value});
  },
  selCity:function(e){
    this.setData({indexShi:e.detail.value});
  },
  myRadioChange:function(e){
    console.log(e.detail.value);
  },
  mySliderChange:function(e){
    console.log(e.detail.value);
  },
  mySwitchChange:function(){
    console.log(e.detail.value);
  },
  myTextArea:function(e){
    console.log(e.detail.value);
  },
  myFormSubmit:function(e){
    console.log(e.detail.value);
  },
  audioPlay:function(){
    this.audioCtx.play();
  },
  audioPause:function(){
    this.audioCtx.pause();
  },
  audio29:function(){
    this.audioCtx.seek(29);
  },
  audioStart:function(){
    this.audioCtx.seek(0);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app = getApp();//获取在appjs中定义的app对象

    this.setData({
      "name":"你好",
      "version": app.globalData.version,
      "appName":app.globalData.appName
    });
    //调用全局函数下的自定义方法
    app.test();
    //调用require模块引用的方法接口
    common.myFunc();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
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