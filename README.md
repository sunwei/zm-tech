# 0成本发布《仲谋科技》微信官方小程序 - 仲谋科技 孙•仲谋™

> 实际运行截图如下

<div align=center>

![首页](assets/images/preview/home.PNG) 
![留言](assets/images/preview/card.PNG)
 
</div>

<div align=center>

![分享](assets/images/preview/call.PNG) 
![预约](assets/images/preview/appointment.PNG)
 
</div>

## 如何运行源码

* 需要下载微信官方小程序模拟器。[下载地址](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)
* 下载源码，用官方工具创建空AppID项目，可本地查看
* 配置后台
    1. 注册[知晓云](https://cloud.minapp.com/)账号
    2. 在知晓云创建应用并授权小程序
    3. 按知晓云配置说明在[腾讯公众平台](https://mp.weixin.qq.com)设置后台: `设置 -》开发设置 -》服务器域名`
    3. 在知晓云应用中分别添加数据表star, events表，并添加自定义字段如下所示(注：创建表时会默认生成一些系统自用字段，不用理会):
        * star: ***[nick_name, mobile_phone, description]<string>*** 
        ![star table fields](assets/images/preview/star_table.png)
        * events: ***[type, content, mobile_phone, avatar_url, username, title, last_reply_at]<string>***
        ![events table fields](assets/images/preview/events_table.png)
    4. 打开小程序定制配置文件 `/etc/config.js` , 进行自定义:
    ![config.js](assets/images/preview/config.png)
    


## 当前状态：目前已经提交，正在审核中

<div align=center>

![home](assets/images/preview/states.png) 
 
</div>

# 合作

如果你也想拥有自己的小程序，欢迎联系我们。


[![The official website](https://img.shields.io/badge/Official_Website-仲谋科技-brightgreen.svg)](https://www.sunzhongmou.com)
[![微博](https://img.shields.io/badge/Weibo-仲谋科技-brightgreen.svg)](http://weibo.com/zmtech)
[![Tweet](https://img.shields.io/badge/Tweet-仲谋科技-brightgreen.svg)](https://twitter.com/szm_tech)
[![NPM](https://img.shields.io/badge/NPM-仲谋科技-brightgreen.svg)](https://www.npmjs.com/~sunzhongmou)
[![GitHub](https://img.shields.io/badge/GitHub-仲谋科技-brightgreen.svg)](https://github.com/sunzhongmou)
[![简书](https://img.shields.io/badge/简书-仲谋科技-brightgreen.svg)](http://www.jianshu.com/u/e41dcab0d8ce)
[![Youtube](https://img.shields.io/badge/Youtube-仲谋科技-brightgreen.svg)](https://www.youtube.com/channel/UCtEfD4Ut7_0Btqx2Kw104VA)
[![优酷](https://img.shields.io/badge/优酷-仲谋科技-brightgreen.svg)](http://i.youku.com/ihakula?spm=a2hzp.8244740.0.0)
