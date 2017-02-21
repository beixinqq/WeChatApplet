// pages/detail/detail.js
Page({
  data:{
    hidden:false,
    text:''
  },
  onLoad:function(options){
    var _this=this;
     console.log(options);
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.lry&songid='+options.id,
      success: function(res){
        // success
        var data='';
        console.log(res);
        if(res.data.error_code){
          data='搜索不到歌词'
        }else{
          data=res.data.lrcContent;
        }
        setTimeout(function(){
          _this.setData({
              hidden:true,
              text:data
          });
        },2000);
      }
    //lrcContent  lrcContent
    })
  }
})