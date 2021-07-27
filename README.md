# common-apis

一些通用的node api，部分接口使用的前端在线例子：[每日一看](https://daily.bowlofnoodles.top)

## 开发

### shell

+ clone仓库到本地

```
git clone git@github.com:bowlofnoodles/common-apis.git
```

+ 启动

``` bash
npm install
npm run dev
# visit http://localhost:627
```

也可以尝试一下gitpod在线打开（就是可能机子不好的话有点慢）：[gitpod在线地址](https://gitpod.io/#https://github.com/bowlofnoodles/common-apis)



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

> 点击url，可以查看获取结果。因为是~~部署在heroku上，所以有点慢...~~，现在部署在阿里云上了，好多了...
### 微博相关

#### [/weibo/hot_spot](https://api.bowlofnoodles.top/common/weibo/hot_spot)

获取微博热搜

+ 返回结构说明：

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| iconText | 话题火爆程度描述 | string | - |
| rank | 排序 | number | 'top' | - |
| title | 标题 | string | - |
| view | 已看人数 | number | - |
| src | 详情链接 | string | - |

### 豆瓣相关

#### [/douban/top_250](https://api.bowlofnoodles.top/common/douban/top_250?start=0)

获取豆瓣电影top250

+ 参数说明：

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| start | 起始数 | number | 0 |

> 由于没找到豆瓣的每页数量的参数是啥，所以默认每页都是25条，start参数为起始数。

+ 返回结构说明：

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| rank | 排名 | number | - |
| picUrl | 海报图片 | string | - |
| url | 详情链接 | string | - |
| star | 豆瓣评分 | number | - |
| comment | 评价人数 | number | - |
| title | 标题 | string | - |
| desc | 描述 | string | - |
| quote | 简述 | string | - |