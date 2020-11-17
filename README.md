# byCanlendar使用方法
* 首先下载压缩包，将压缩包解压
## 由于项目样式是用colorui写的，所以需要先配置colorui
* 将colorui文件夹放入与pages同级的文件夹，在app.js添加以下代码

```javascript
//app.js
@import './colorui/icon.wxss';
@import './colorui/main.wxss';
@import './colorui/animation.wxss';
```
##  日历并没有组件化，而是需要使用include引入页面
* 在你需要使用日历的page新建名为calendar文件夹，并将calendar.wxml放入文件夹
* 在你需要使用日历的page文件将calendar.js与你当前js放入同级文件夹
* 因为是使用include引入，所以日历的逻辑是由引入日历的page中的js控制
* 将now.js替代为你的当前page里的js文件，你可以复制粘贴代码进去

```javascript
//需要使用日历的wxml文件
<include src="./detail/calendar.wxml"></include>
//引入后你的文件结构为
//now{
//	calendar.wxml
//	now.wxml
//	now.wxss
//	now.js
//	now.json
//	calendar{
//		calendar.js
//		}
// now为你当前页面的文件夹名称和page名称
```
* 每一个日期都有today,event,date三个属性值，分别对应该日期是否为今天，该日期的事件，该日期是几号
# 注意事项
* 之所以使用include的方式引入，首先是因为轮播图的高度如果使用小程序组件时没有办法获取的，也就无法实现高度自适应的日历功能
* 你可以更好的用当前的js去控制日历的功能，我只封装了最基础的日历获取时间功能

# 开发日志
* 当前正在加入日历下方显示日程信息
* 以及争取制作出优质的组件化版本
* 制作无需依赖colorui版本
# 作者联系方式
* 手机号码：18316996303
* 邮箱：2228586315@qq.com
* 感觉不错就点个小星星把！


