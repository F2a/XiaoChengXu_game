// pages/game/game.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: ['石头','剪刀','布'],
    random: '石头',
    select: '',
    time: 150,
    delay: 1000,
    txt: 'start',
    modelTxt: '',
    modelVisibel: false,
  },
  select: function(e) {
    clearInterval(this.timer);
    this.setData({ select: e.currentTarget.dataset.val });
    this.setData({ txt: 'start' });
  },
  numTimer: function() {
    let num = 0;
    this.timer = setInterval(() => {
      if(++num>2)
        num = 0;
      const random = this.data.array[num];
      // console.log(Math.floor(Math.random() * 3))
      this.setData({ random, txt: 'stop', modelVisibel: false });
    }, this.data.time)
  },
  start: function() {
    if (!this.data.select){
      wx.showToast({
        title: '请先选中你将展示的手势',
        icon: 'none'
      })
    }else{
      this.numTimer();
      this.setData({ txt: 'stop' });
    }
  },
  end: function () {
    const num = this.data.array[Math.floor(Math.random() * 3)];
    this.setData({ random: num, txt: 'start', modelVisibel: true });
    if (num === this.data.select) {
      this.setData({ modelTxt: 'You Win!' });
    } else {
      this.setData({ modelTxt: 'You Lost!' });
    }
    clearInterval(this.timer);
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
    clearInterval(this.timer);  
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