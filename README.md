# common-apis

一些通用的node api

## 来源
+ 爬虫html
+ 爬虫api
+ 调用别人现成接口（做规整和调整自己想要的数据）

## 返回结构说明

+ 正常

``` json
{
  "status": 200, // 正确都是200
  "data" "[]" // 接口返回数据
}
```

+ 错误

``` json
{
  "status": 500, // 错误代码
  "message" "错误"  // 错误信息
}
```

## API

> 点击url，可以查看获取结果。因为是部署在heroku上，所以有点慢...
### 微博相关

+ [/weibo/hot_spot](http://bowlofnoodles-common-apis.herokuapp.com/weibo/hot_spot): 获取微博热搜

### 豆瓣相关

...