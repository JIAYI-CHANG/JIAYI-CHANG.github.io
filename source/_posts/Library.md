---
title: 推理小说
tags: [阅读,摸鱼]
categories: [书影音,图书馆]
copyright: false
---
> 每月1号更新。点击书名可以跳转链接喔！(◍•ᴗ•◍)~❤

<br>

想添加一个搜索栏，看看能否实现优化、

## 我的推荐

<html>
    <head>
        <style>
            .box{
                flex: 1;
                overflow: hidden;
                transition: .5s;
                margin: 10px 10px;
                box-shadow: 5px 5px 5px rgba(0, 0, 0, .1);
                border-radius: 7.5px;
                border: 0px solid transparent;
                background-color: #fff;
            }
            .container{
                /* 相对定位 */
                position: relative;
                /* 弹性布局 横向排列 允许换行 */
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
            }
            .container .box{
                position: relative;
                width: 25%;
                height: 25vmin;
                /* 溢出隐藏 */
                overflow: hidden;
                /* 动画过渡 */
                transition: 0.5s;
            }
            /* 鼠标移入，盒子变大 */
            .container .box:hover{
                transform: scale(1.25);
                box-shadow: 5px 5px 5px rgba(0,0,0,0.25);
                z-index: 1;
            }
            .container .box .img-box{
                /* 绝对定位 */
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
            /* 渐变遮罩（白色——透明） 默认隐藏 */
            .container .box .img-box::before{
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(to top, white,rgba(255, 255, 255, .1));
                z-index: 1;
                opacity: 0;
                transition: 0.5s;
            }
            /* 鼠标移入，渐变遮罩显示 */
            .container .box:hover .img-box::before{
                opacity: 1;
            }
            .container .box .img-box img{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                /* 保持原有尺寸比例，裁切长边 */
                object-fit: cover;
            }
            .container .box .text-box{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                padding: 20px;
                /* 弹性布局 元素位于容器的结尾 */
                display: flex;
                align-items: flex-end;
                color: #000;
                z-index: 2;
            }
            .container .box .text-box h3{
                font-size: 18px;
                margin-bottom: 10px;
                /* 默认移出可视范围 */
                transform: translateY(200px);
                transition: 0.5s;
            }
            .container .box:hover .text-box h3{
                /* 鼠标移入，移入可视范围 */
                transform: translateY(0);
                /* 设置动画延迟时间 */
                transition-delay: 0.1s;
            }
            .container .box .text-box p{
                font-size: 12px;
                line-height: 20px;
                /* 默认移出可视范围 */
                transform: translateY(200px);
                transition: 0.5s;
            }
            .container .box:hover .text-box p{
                /* 鼠标移入，移入可视范围 */
                transform: translateY(0);
                /* 设置动画延迟时间 */
                transition-delay: 0.4s;
            }
            table th{
                color:#000000;
                border-color:transparent;
                text-align:center;
            }
            table td{
                color:#000000;
                border-color:transparent;
                text-align:center;
            }
            table tr:nth-child(odd) {
                background-color: rgba(227,227,227,.1);
            }
            table td:first-child {
                text-align:left;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s34005071.jpg">
                </div>
                <div class="text-box">
                    <div>
                        <h3><a href="https://book.douban.com/subject/35572977/">再见，妖精</a></h3>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s34367437.jpg">
                </div>
                <div class="text-box">
                    <div>
                        <h3>镜之孤城</h3>
                        <p>对不登校的孩子有着细腻的心理描写</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s28775794.jpg">
                </div>
                <div class="text-box">
                    <div>
                        <h3>乔巴</h3>
                        <p>托尼托尼·乔巴，日本漫画《航海王》及其衍生作品中的角色。</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s4540915.jpg" alt="奇想，天动">
                </div>
                <div class="text-box">
                    <div>
                        <h3><a href="https://book.douban.com/subject/23780806/">奇想，天动</a></h3>
                        <p>弗兰奇（原名：卡特·弗兰姆）是日本漫画《航海王》及其衍生作品中的角色。</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s26344659.jpg" alt="东方快车谋杀案">
                </div>
                <div class="text-box">
                    <div>
                        <h3><a href="https://book.douban.com/subject/23780806/">奇想，天动</a></h3>
                        <p>弗兰奇（原名：卡特·弗兰姆）是日本漫画《航海王》及其衍生作品中的角色。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s34005071.jpg">
                </div>
                <div class="text-box">
                    <div>
                        <h3><a href="https://book.douban.com/subject/35572977/">再见，妖精</a></h3>
                        <p>娜美，日本漫画《航海王》及衍生作品中的女主角，草帽一伙的航海士，人称“小贼猫”。</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s34367437.jpg">
                </div>
                <div class="text-box">
                    <div>
                        <h3>镜之孤城</h3>
                        <p>乌索普，日本漫画《海贼王》及其衍生作品中的男性角色。草帽一伙狙击手，被称作“GOD·乌索普”。</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s28775794.jpg">
                </div>
                <div class="text-box">
                    <div>
                        <h3>乔巴</h3>
                        <p>托尼托尼·乔巴，日本漫画《航海王》及其衍生作品中的角色。乔巴是草帽一伙的船医，吃了人人果实的驯鹿，可用蓝波球进行八段变形。</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s4540915.jpg" alt="奇想，天动">
                </div>
                <div class="text-box">
                    <div>
                        <h3><a href="https://book.douban.com/subject/23780806/">奇想，天动</a></h3>
                        <p>弗兰奇（原名：卡特·弗兰姆）是日本漫画《航海王》及其衍生作品中的角色。草帽一伙船匠，性格豪放，喜欢唱歌，跳奇怪的舞，下身喜欢只穿一条短裤。身为改造人的弗兰奇，藏着各种兵器。</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src="https://img2.doubanio.com/view/subject/l/public/s4540915.jpg" alt="奇想，天动">
                </div>
                <div class="text-box">
                    <div>
                        <h3><a href="https://book.douban.com/subject/23780806/">奇想，天动</a></h3>
                        <p>弗兰奇（原名：卡特·弗兰姆）是日本漫画《航海王》及其衍生作品中的角色。草帽一伙船匠，性格豪放，喜欢唱歌，跳奇怪的舞，下身喜欢只穿一条短裤。身为改造人的弗兰奇，藏着各种兵器。</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>


## 阅读列表

| 已阅读(37)                                                        | 作者       | 分类    | 标签             | 日期      |
| -------------------------------------------------------------- | -------- | ----- | -------------- | ------- |
| [刀与伞](https://book.douban.com/subject/36187796/)               | 伊吹亚门     | 日本 推理 | 短篇 历史 民俗       | 2023年5月 |
| [溶于雾中](https://book.douban.com/subject/36194208/)              | 笹泽左保     | 日本 推理 | 社会 诡计          | 2023年5月 |
| [岛和我们](https://book.douban.com/subject/26277997/)              | 辻村深月     | 日本 其他 | 校园 治愈 文学       | 2023年5月 |
| [有翼之暗](https://book.douban.com/subject/25892396/)              | 麻耶雄嵩     | 日本 推理 | 反转 炫学          | 2023年4月 |
| [时间停止的校园](https://book.douban.com/subject/26613047/)           | 辻村深月     | 日本 悬疑 | 设定 社会 孤岛 治愈 文学 | 2023年4月 |
| [镜之孤城](https://book.douban.com/subject/34907839/)              | 辻村深月     | 日本 悬疑 | 文学 社会 治愈 诡计 设定 | 2023年4月 |
| [能面杀人事件](https://book.douban.com/subject/10746421/)            | 高木彬光     | 日本 推理 | 反转 诡计 社会 古典    | 2023年4月 |
| [名侦探原田亘](https://book.douban.com/subject/34894616/)            | 白井智之     | 日本 推理 | 短篇 设定          | 2023年4月 |
| [再见，妖精](https://book.douban.com/subject/35572977/)             | 米泽穗信     | 日本 推理 | 短篇 日常 历史 民俗 旅情 | 2023年4月 |
| [终点站杀人事件](https://book.douban.com/subject/36044212/)           | 西村京太郎    | 日本 推理 | 旅情 诡计          | 2023年4月 |
| [宵待草夜情](https://book.douban.com/subject/26367367/)             | 连城三纪彦    | 日本 悬疑 | 短篇 历史 文学       | 2023年4月 |
| [黑暗坡食人树](https://book.douban.com/subject/23780809/)            | 岛田庄司     | 日本 推理 | 恐怖 历史 社会 旅情    | 2023年3月 |
| [一朵桔梗花](https://book.douban.com/subject/5269222/)              | 连城三纪彦    | 日本 推理 | 短篇 文学 历史 民俗    | 2023年3月 |
| [古书堂事件手帖：栞子与她的奇异宾客](https://book.douban.com/subject/24358626/) | 三上延      | 日本 推理 | 短篇 日常 轻小说      | 2023年3月 |
| [为青年设立的读书俱乐部](https://book.douban.com/subject/35378878/)       | 樱庭一树     | 日本 其他 | 短篇 社会 校园 日常    | 2023年3月 |
| [乐园是侦探不在的地方](https://book.douban.com/subject/35919827/)        | 斜线堂有纪    | 日本 推理 | 设定 孤岛 情节 社会    | 2023年3月 |
| [透明人潜入密室](https://book.douban.com/subject/35875586/)           | 阿津川辰海    | 日本 推理 | 短篇 设定 社会       | 2023年3月 |
| [折断的龙骨](https://book.douban.com/subject/27621482/)             | 米泽穗信     | 日本 推理 | 设定 情节 历史 文学    | 2023年3月 |
| [出云传说7／8杀人事件](https://book.douban.com/subject/20002789/)       | 岛田庄司     | 日本 推理 | 旅情 民俗 恐怖 情节    | 2023年2月 |
| [寝台特急1／60秒障碍](https://book.douban.com/subject/11501895/)       | 岛田庄司     | 日本 推理 | 旅情 恐怖 情节       | 2023年2月 |
| [19年间谋杀小叙](https://book.douban.com/subject/30237176)           | 那多       | 中国 悬疑 | 社会 情节 文学       | 2023年2月 |
| [凶人馆谜案](https://book.douban.com/subject/36032438/)             | 今村昌弘     | 日本 推理 | 设定 孤岛 情节       | 2023年2月 |
| [寻狗事务所](https://book.douban.com/subject/6434440/)              | 米泽穗信     | 日本 推理 | 日常 历史 民俗 幽默    | 2023年2月 |
| [华丽人生](https://book.douban.com/subject/35602671/)              | 伊坂幸太郎    | 日本 其他 | 社会 治愈 幽默       | 2023年1月 |
| [无人生还](https://book.douban.com/subject/24859822/)              | 阿加莎·克里斯蒂 | 欧美 推理 | 古典 孤岛 反转       | 2023年1月 |
| [奇想，天动](https://book.douban.com/subject/23780806/)             | 岛田庄司     | 日本 推理 | 社会 历史 民俗 旅情    | 2023年1月 |
| [北方夕鹤2／3杀人事件](https://book.douban.com/subject/20468727/)       | 岛田庄司     | 日本 推理 | 诡计 旅情 民俗       | 2023年1月 |
| [东方快车谋杀案](https://book.douban.com/subject/24153048/)           | 阿加莎·克里斯蒂 | 欧美 推理 | 古典             | 2023年1月 |
| [异邦骑士](https://book.douban.com/subject/11501902/)              | 岛田庄司     | 日本 推理 | 反转 诡计          | 2023年1月 |
| [黑猫馆事件](https://book.douban.com/subject/26771722/)             | 绫辻行人     | 日本 推理 | 诡计 反转          | 2023年1月 |
| [人偶馆事件](https://book.douban.com/subject/26771724/)             | 绫辻行人     | 日本 悬疑 | 诡计             | 2023年1月 |
| [复写](https://book.douban.com/subject/35217600/)                | 法条遥      | 日本 悬疑 | 设定 校园          | 2023年1月 |
| [时空旅行者的沙漏](https://book.douban.com/subject/35430467/)          | 方丈贵惠     | 日本 推理 | 设定 孤岛 诡计       | 2023年1月 |
| [迟来的翅膀](https://book.douban.com/subject/27070071/)             | 米泽穗信     | 日本 推理 | 日常 短篇 幽默 校园    | 2023年1月 |
| [两人距离的概算](https://book.douban.com/subject/25885612/)           | 米泽穗信     | 日本 推理 | 日常 短篇 幽默 校园    | 2023年1月 |
| [德尔塔的悲剧](https://book.douban.com/subject/36075911/)            | 浦贺和宏     | 日本 悬疑 | 诡计             | 2023年1月 |
| [绕远路的雏人偶](https://book.douban.com/subject/25808629/)           | 米泽穗信     | 日本 推理 | 日常 短篇 校园       | 2023年1月 |


未完待续 ✌🏻

<br>
