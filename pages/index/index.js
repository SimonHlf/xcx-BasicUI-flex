Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 
      data对象下，首先去定义这个newsList,它应该是一个数组，所以是new Array,数组里面每一个数组的元素就是一条新闻的内容
    */
    newsList : new Array(
      /*{
        type : 1,
        "title":"test",
        "img":""
      }*/
      {
        type: '1',
        img: 'http://imgsize.ph.126.net/?imgurl=http://cms-bucket.nosdn.127.net/ef9aba504cfb40aea2ffb6a08c05ee3120170206072449.png_190x120x1x85.jpg',
        title: "惊艳 网友亲自设计诺基亚新旗舰渲染图",
        author: '晓龙'
      },
      {
        type: '2',
        img: [
          'http://imgsize.ph.126.net/?imgurl=http://cms-bucket.nosdn.127.net/64ec73b1991d455c9062e9d4613e2dce20170206133731.png_190x120x1x85.jpg',
          'http://imgsize.ph.126.net/?imgurl=http://cms-bucket.nosdn.127.net/d322f7c422034f40827b591ef67f17d720170206130925.jpeg_190x120x1x85.jpg',
          'http://imgsize.ph.126.net/?imgurl=http://cms-bucket.nosdn.127.net/afc4438fc3424a8f908bc25b39d7f41c20170206122050.jpeg_190x120x1x85.jpg'
        ],
        title: "不再是中国特供 疑似三星C5 Pro国际版现身",
        author: '科技新闻'
      },
      {
        type: '3',
        img: 'http://cms-bucket.nosdn.127.net/39114a8f04634d2cbd9888f2869b5e8120170125085034.jpeg',
        title: "华为P10价格配置全曝光：最高达5688元",
        author: '网易科技'
      }
    )
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