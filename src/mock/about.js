import Mock from "mockjs";
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F19%2F20170519180544_HzY2K.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639743231&t=62efe20ed5844a75212c93783e0c122c",
});
