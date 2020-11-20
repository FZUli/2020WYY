Page({
  // 页面的初始数据
  data: {
    inputShowed: false,  //初始文本框不显示内容
    menuitems: [
      {  text1:"孩子在为谁玩",text2:"动物寓言",image:"/image/pro_logo.png"},
      {  text1:"做永远成长的苹果树",text2:"成长寓言",image:"/image/pro_logo1.png"},
      {  text1:"把一张纸叠51次",text2:"规划寓言",image:"/image/pro_logo2.png"},
      {  text1:"小猫逃开影子的招数",text2:"逃避寓言",image:"/image/pro_logo3.png"},
      {  text1:"人生的规划",text2:"规划寓言",image:"/image/pro_logo4.png"}
     
    ]
  },
  // 使文本框进入可编辑状态
  showInput: function () {
    this.setData({
      inputShowed: true   //设置文本框可以输入内容
    });
  },
  // 取消搜索
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  }
  

});
