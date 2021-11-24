import Mock from "mockjs";
import qqcode from "@/assets/qq.jpg"
import wxcode from "@/assets/weixin.jpg"
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img0.baidu.com/it/u=2792142371,3266411922&fm=26&fmt=auto",
    siteTitle: "DW自由者",
    github: "https://github.com/dawei-007",
    qq: "1278372834",
    qqcode: qqcode,
    wxcode: wxcode,
    weixin: "17671315574",
    mail: "1278372834@qq.com",
    icp: "黑ICP备17001719号",
    githubName: "dawei-007",
    favicon: "https://img0.baidu.com/it/u=2792142371,3266411922&fm=26&fmt=auto",
  },
});
