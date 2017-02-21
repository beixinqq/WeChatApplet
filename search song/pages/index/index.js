//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    listDisplay:false,
    songs:[]
  },
  inputValue:function(e){
    var val=e.detail.value;
    console.log(val);
    if(val){
      this.setData({listDisplay:true});
    }else{
      this.setData({listDisplay:false});
    }

    var _this=this;
    console.log('this:'+this);
    //API
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query='+val,

      success: function(res){
        // success
        console.log(res);
        _this.setData({songs:res.data.song});
      }
    })
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
