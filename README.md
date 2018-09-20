# Aparter
A slide picture game. Based on React, Redux, Node.js, Express. 
独立开发的九宫格拼图网站，为喜欢动漫人物拼图的朋友提供一个娱乐减压的小空间。

## Installation && Run
* 提前安装好node.js与yarn	并保持网络链接。
* 进入项目根目录，运行 yarn install
* 进入client目录，运行 yarn install
* 在项目根目录，运行 yarn run dev。根据server端package.json的配置，concurrently插件能够使项目分别运行client与server端的编译器并发布项目。

## Documentation
### 数据表设计
我们设计了两个数据表：users与pics。users存储用户的个人信息，pics存储所有拼图素材信息。
```Javascript
const picSchema = new Schema({
  picName: String,
  played: { type: Number, default: 0 }
});

mongoose.model("pics", picSchema);

const userSchema = new Schema({
  userName: String,
  password: String,
  credit: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);
```
### 项目结构
项目分为client与server两个部分。Client部分都存在于client文件夹下。其余为server部分。
![Structure image](https://cl.ly/d3ade71d2e14/structure.png)

### 功能设计
#### 用户注册/登陆/登出
用户可以点击Login与Sign up进行登陆/注册操作，登陆后点击Logout进行登出操作。这部分操作详情不再赘述。

#### Gallery选择游戏素材
用户可以从我们提供的素材列表中选择自己喜欢的小姐姐进行拼图游戏。被选择的小姐姐图片上的按钮中会显示对号，未选择的为加号。
![Structure image](https://cl.ly/3371d7404c5b/gallery%20-%20%E5%89%AF%E6%9C%AC.png)


#### GameCenter进行游戏
用户选择好小姐姐后可以点击Play按钮开始进行游戏，我们会为用户进行图片的重新排列，为了让游戏比较简单，我们只为拼图顺序进行了小部分改动。拼图成功后会显示本局获得的credit，同时异步为用户的credit总成绩加分。
![Structure image](https://cl.ly/c02573fa5a1f/game_play.png)

#### RankList查看分数榜
这个页面显示总分数前十的用户，根据分数值倒序排列。
![Structure image](https://cl.ly/f9ddcf78340f/rank_list.png)
