Page({

  /**
   * 页面的初始数据
   */
  data: {
    //文字 图片的混排 定义成一个大的数组
    content : new Array(
      {
        cate : "text",
        content:"新闻详情......."
      },
      {
        cate : "img",
        src:　"http://cms-bucket.nosdn.127.net/a91d30b33b9c4bfa941224ca04bae01d20170206172629.jpeg"
      },
      {
        cate : "text",
        content: "那天，工间休息，一位男工友对我说，他认识好几个我的老乡，一个比一个帅气，都是玉树临风，美比潘安。\n可他们的老婆，却一个比一个平庸，有的甚至有点丑"
      },
      {
        cate :　"img",
        src: "http://cms-bucket.nosdn.127.net/0c14b6b308b448f7b928f0c55bc94aec20161230193822.jpeg"
      }
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options为页面跳转所带来的参数
    wx.setNavigationBarTitle({//设置导航栏标题
      title: '新闻标题',
    })
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