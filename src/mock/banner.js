import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F19%2F20170519180544_HzY2K.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639743231&t=62efe20ed5844a75212c93783e0c122c",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F19%2F20170519180544_HzY2K.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639743231&t=62efe20ed5844a75212c93783e0c122c",
      title: "无能为力",
      description: "这世上所有的不利状况都是当事者能力不足",
    },
    {
      id: "2",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fab9f787ddccce27b2a8e856633eb16e133e84059.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639743261&t=3d483c34ad67855106fb677e58d6bd1d",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fab9f787ddccce27b2a8e856633eb16e133e84059.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639743261&t=3d483c34ad67855106fb677e58d6bd1d",
      title: "错位时空",
      description: "错的不是我，而是这个世界",
    },
    {
      id: "3",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F14%2F20150314114816_RrZSn.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639743443&t=e2dce9445d11fdcc5a61df69b88ad7da",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F14%2F20150314114816_RrZSn.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639743443&t=e2dce9445d11fdcc5a61df69b88ad7da",
      title: "重新开始",
      description: "我已经不想当那个无能为力的自己",
    },
  ],
});
