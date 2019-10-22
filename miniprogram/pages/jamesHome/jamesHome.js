// miniprogram/pages/jamesHome/jamesHome.js
const app = getApp()
Page({
  methodGotUserInfo: function(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
  changeName: function(e) {
    let aaa = app.globalData.i18n.name
    console.log(`【主页】`, aaa)
    // sent data change to view
    this.setData({
      name: aaa
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    name: 'FFF'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const accountInfo = wx.getAccountInfoSync();
    console.log('生命周期函数--监听页面加载', accountInfo) // 小程序 appId
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})