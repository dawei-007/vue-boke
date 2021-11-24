import Mock from "mockjs";
import aboutdata from "@/assets/about.png"
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: aboutdata,
});
