//检查登录状态
const loginState = {
    getUser:(name)=>{
      return JSON.parse(localStorage.getItem(name))
    },
    setUser:(name,data)=>{
      //localStorage.setItem(name, data);
      localStorage.setItem(name, JSON.stringify(data));
    },
    removeUser:(name)=>{
      localStorage.removeItem(name)
    }
  }


module.exports = {
  name: '木爷机器人',
  prefix: '木爷机器人',
  footerText: '木爷机器人 版权所有 © 2016-2017 由 云业务 支持',
  count:10,
  apiUrl:"http://139.224.14.220/api/",
  logo: './logo.png',
  loginState,
  openPages: ['/login'],
}
