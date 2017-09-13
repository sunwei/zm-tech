import Config from '../../etc/config'
var util = require('../../utils/util.js');

const App = getApp()

Page({
  data: {
    showTopTips: false,
    content: "",
    errorMessage: "提示消息"
  },
  onLoad() {
    this.userInfo = App.WxService.getStorageSync('userinfo')
  },
  onShareAppMessage: function () {
    var self = this
    return {
      title: `名片 - 仲谋科技`,
      path: '/pages/comment/index',
      complete: function (res) {
        if (res.errMsg === 'shareAppMessage:ok') {
        }
      },
      fail: function (res) {
      }
    }
  },
  showTopTips: function(){
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function(){
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  bindContentChange: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  bindPublish: function (e) {
    if (this.data.content === undefined || this.data.content === "") {
      this.setData({
        errorMessage: "消息不能为空！"
      });
      this.showTopTips()
      return
    }

    var self = this;
    wx.showToast({
      title: '消息发布中',
      icon: 'loading',
      duration: 5000
    });

    App.updateJsonFile({
      "type": 'message',
      "avatar_url": this.userInfo.avatarUrl,
      "loginname": this.userInfo.nickName + '@' + this.userInfo.city,
      "content": this.data.content,
      "title": `系统消息：您的留言己收到，${Config.starName}会认真读取，谢谢！`
    }, function () {
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 3000
      });

      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2];
      prevPage.syncData()

      wx.navigateBack({
        delta: 1
      })
    })

  }
});