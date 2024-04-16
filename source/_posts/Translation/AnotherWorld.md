---
title: 「翻译」异世界系·名仓编
date: 2024-03-09
updated: 2024-04-16
tags: [翻译,推理小说,长篇]
categories: [翻译,推理小说]
description: 本文为第58回梅菲斯特赏受赏作<a href="https://book.douban.com/subject/30257831/"><b>「異セカイ系」</b></a>的翻译。翻译仅供学习交流，禁止用于商业用途。
copyright: true
top_img: https://cv.bkmkn.kodansha.co.jp/9784065125557/9784065125557_w.jpg
cover: https://cv.bkmkn.kodansha.co.jp/9784065125557/9784065125557_w.jpg
copyright_author: CHJY
copyright_author_href: https://www.douban.com/people/CHJY2000/notes
copyright_url: https://www.HereisCHJY.blog/Translation/AnotherWorld
copyright_info: 原文版权归作者与出版社所有，翻译仅供学习交流，转载请注明出处，禁止用于商业用途。
---
<html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Shippori+Mincho+B1:wght@600&display=swap');
            p {
                text-align:justify;
            }
            b {
                color: Black;
            }
            p a {
                text-decoration: none;
                text-decoration-line: none;
                text-decoration-color: none;
                text-decoration-style: none;
            }
            .pextra {
                font-family: "STSong";
                font-size:14px;
                color: Black;
                padding-left:30px;
            }
            CENTER {
                font-size: 27PX;
                font-style: bold;
                font-family: 'Shippori Mincho B1', serif;
            }
            hr {
                border: none; /* 移除默认的边框样式 */
                border-top: 2.5px dashed #E3E3E3; /* 设置上边框为1像素的虚线，颜色为黑色 */
            }
            .centera{
                font-size: 22PX;
                text-align: center;
                font-weight: bold;
            }
            .containerab {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: AUTO;
                background-color: transparent;
             }
            .centerab{
                font-size: 16PX;
                writing-mode: vertical-rl;
                display: flex;        
                justify-content: center;
                align-items: center;
                font-family: 'STKaiti', serif;
                font-weight: bold;
            }
            .bg-grid {
                position: relative;
                height: auto;
                padding: 10px;
                padding-top: 30px;
                padding-left: 30px;
                padding-right: 30px;
                background-color: hsla(60, 100%, 95%, 0.2);
                background-image: linear-gradient(#FFF9D4 1px, transparent 0), linear-gradient(90deg, #FFFFFF 1px, transparent 0);
                background-size: 21px 21px, 21px 21px;
                background-position: center;
                font-family: 'Ma Shan Zheng';
                font-size:18PX;
                border: .0px solid rgba(0, 0, 0,.05);
                box-sizing: border-box;
                box-shadow: 10px 10px 7.5px rgba(0, 0, 0,.1);
                text-align:justify;
            }
            .bg-grid:before {
                top: 0;
                width: 10px;
            }
            .bg-grid:after {
                top: 26px;
                width: 28px;
                border-radius: 50%;
            }
            .bg-blank {
                position: relative;
                height: auto;
                padding: 10px;
                padding-top: 20px;
                padding-left: 30px;
                padding-right: 30px;
                background-color: white;
                background-image: white;
                background-size: 21px 21px, 21px 21px;
                background-position: center;
                font-family: 'Ma Shan Zheng', cursive;
                font-size:18px;
                border: .25px solid rgba(0, 0, 0,.05);
                box-sizing: border-box;
                box-shadow: 10px 10px 15px rgba(0, 0, 0,.1);
                text-align:justify;
            }
            .bg-blank:before {
                top: 0;
                width: 30px;
            }
            .bg-blank:after {
                top: 26px;
                width: 50px;
                border-radius: 50%;
            }
            .dots {
                background-image: radial-gradient(.15em .15em at center center,black,black 50%,transparent);
                background-position: bottom right;
                background-repeat: repeat-x; 
                background-size: 1em 0.3em;
                padding-bottom: .4em; 
            }
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: AUTO;
                background-color: transparent;
                border: .01px solid rgba(0, 0, 0,.05);
                box-sizing: border-box;
                box-shadow: 10px 10px 7.5px rgba(0, 0, 0,.1);
                padding-bottom:0px;
                padding-top:15px;
             }
            .content {
                display: flex;
            }
            .image {
                flex: 0.4;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-left: 15px;
                margin-right: 15px;
                margin-top: -12px;
            }
            .text {
                flex: 1.2;
                padding: 10px;
                margin-right: 20px;
                text-align:justify;
            }
            .title {
                order:-1;
                display: flex;
                MARGIN-TOP:5PX;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                font-size: 18px; 
            }
            .tooltip {
                position: relative;
                display: inline-block;
            }
            .tooltip .tooltiptext {
                visibility: hidden;
                min-width:320PX;
                max-width: 500px;
                background-color: #17242C;
                color: #fff;
                font-family: "STSong";
                text-align: justify;
                font-size: 13px;
                border-radius: 10px;
                padding: 5px 15px;
                position: absolute;
                z-index: 3;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%); /* 使用transform来居中 */
                opacity: 0.5;
                transition: opacity 0.3s;
            }
            .tooltip .tooltiptext::after {
                content: " ";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: 0px;
                border-width: 5px;
                border-style: solid;
                border-color: #17242C transparent transparent transparent;
                transform: translateX(-50%);
            }
            .tooltip:hover .tooltiptext {
                visibility: visible;
                opacity: 0.9;
            }
            @media screen and (max-width: 1000px) {
                .content {
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                }
                .image {
                    order:1;
                    flex:1;
                    margin: 0;
                }
                .text {
                    order:2;
                    flex:1;
                    margin: 0;
                }
                .tooltip .tooltiptext {
                    display: none;
                }
                .tooltip .tooltiptext::after {
                    display: none;
                }              
        </style>
    </head>
<body>


<center> 『異セカイ系』（名倉編・2018）</center>

<HR>

<BR>

> 本文为第58回梅菲斯特赏受赏作<a href="https://book.douban.com/subject/30257831/">「異セカイ系」</a>的翻译。原文版权归作者与出版社所有，翻译仅供学习交流，转载请注明出处，禁止用于商业用途。


<BR>

# 第1章 异世界

<HR>

## 第1话 写小说吧在网上

<br>

哦吼

<br>

好可爱

<br>

超级赞啊这句台词！ 什么情况。好可爱。好可爱。这个好可爱。

<br>

哦吼！ 超赞啊！ 这个展开！ 难道咱真的是天才？ 这一话绝对会爆的。回收前一话的伏笔再来一个咚————！ 再就是这句台词。伤感得恰到好处。超级赞。

<br>

不愧是咱 ——————————————— 完稿提交砰。

好嘞本周份大功告成！

这次真不赖。点赞数肯定会蹭蹭蹭上去。吼吼。真不愧是。咱。

心急如焚地点击浏览器的“刷新”键。F5也按一下。刷新。《<ruby>卧龙转生<rt>がりょうてんせい</rt></ruby>》最新话界面。但。毫无反应。嗯毕竟是深夜。没招了。没招了。……果然还是再按一次F5啪！有评论了！果然！<ruby>帕拉黎<rt>パラリ</rt></ruby>佬还是这么快！给他的评论点个赞。真是感恩不尽。

<br>

哈—— 睡了睡了。之后的明天再写。呼。被窝超舒服。嗯。然后明天是……啊完了。明天要打工。啊啊。不想去啊。做不来啊。对咱来说。打工什么的。做不到啊。完全做不到啊。佐布岛啊<a href="#footnote1-1" id="context1-1" class="tooltip"><sup>[1]</sup><span class="tooltiptext">原文为「絶対むり。むりすぎ。フリスビー。」フリスビー（直译是飞盘）和むりすぎ发音类似。</span></a>。哈—— 好困好困。上次面包厂那位因为咱迟到了就把倒垃圾的活儿推给咱的大叔可真是。明明咱对气味很敏感啊真的是。

<br>
<br>

<center><div style="background:linear-gradient(to left,#FFFFFF,#e3e3e3,#FFFFFF);height:1px;"></div></center>

<br>
<br>

“哥哥！早上了哦！”

<br>

唔
早上了啊……。唔———。唔唔—————。不行—— 困死了——。睡了。

<br>

“哥哥！早上了哦！”

<br>

唔唔。

这样啊。早上了啊。知道了。起来了。不行好困——。再睡会。

“哥哥！早上了哦！”

<br>

啊啊……

再不起的话就寄了。几点了。8点10分。这就起。行了行了。

哈——。这个闹铃要不别用了吧。嗯。不用了。要是因此讨厌<ruby>妹子<rt>いもこ</rt></ruby>酱的话就太智障了。这就把手机闹铃从《女未满男以上》的女主妹子酱那句“哥哥！早上了哦！”换成默认铃声。所谓的幸福早晨压根就不存在吧。

噼里啪啦地刷牙洗脸进客厅把涂了蛋黄酱的面包片塞烤面包机里。看着电视发着呆<b>叮——</b>。还挺好听。刚刚的<b>叮——</b>。哦。看起来好好吃<b>叮——</b>好好吃。酥酥脆脆超好吃<b>叮——</b>。

离开家走啊走啊脑子里依然不断回响着<b>叮——</b><b>叮——</b><b>叮——</b>本来忧郁得不得了的时间也不知怎地有些愉快<b>叮——</b>。<b>叮——</b>谢谢啦<b>叮——</b>。

一边让<b>叮——</b>在头脑中回响，一边在因夏日阳光而一闪一闪发着光的城市中。看着走着。

<br>

哈啊。好烦啊。打工。

接着当家里蹲的话就废了。咱知道的。但咱这个人。说到底就不适合劳动。

劳动就要和人打交道。咱又是个社恐？做不到呢。熟人或家人。姑且罢了。要怎么和第一次见面的人或者外面的人打交道才好。搞不懂。

哈—— 真想成为小说家。小说家的话有点人格缺陷似乎也没关系。应该吧。不行吗？

前阵子在小说投稿网站“White Novel”上挤进排行榜前十的时候还以为马上就有人联系咱出道了还欢天喜地的呢。联络。完全没来呢。不行吗——。第10名。诶，但是。不牛吗？ 第10名。咱真的超努力了呢—— 啊。公交站。总算到了。巴士君呢……5分钟后。哈——。好烦啊。果然<b>从现在开始你的人生将发生巨大变化。</b>

<br>

回头看。

一个人都没有。

哈？

什么鬼啊刚刚。

谁啊？ 雌雄莫辨的。中性声音。在耳边低语。对吧？ 刚刚的。是？

啥啊？ 谁啊？

啥意思啊？

的确。家里蹲去打工。人生将发生改变。可不就是嘛。但。在耳边低语后消失。这种事？

公交来了。

啥情况啊。搞不懂。

无。所谓了。滴滴——。上了车拿纸条<a href="#footnote1-2" id="context1-2" class="tooltip"><sup>[2]</sup><span class="tooltiptext">指的是日本公交车的整理券。</span></a>。难道街上真有人在别人耳边轻声细语四处游走吗？不懂了。嗯。想点别的。《卧龙转生》。嗯嗯。昨天写的部分真不赖。<ruby>伊芙喵<rt>イヴにゃん</rt></ruby>的可爱度是200%。500%？ 无所谓啦。啊——真的好喜欢。天使般的温柔和恶魔般的谋略完美共存的咱的女神。伊芙喵。光是想想伊芙喵就能获得治愈。只有在想着伊芙喵的这一瞬间才能忘却这糟糕透顶的现实──……到了吗。呜哇一下子就被拖回现实了……。哈啊，嗯。大叔先下。嗯。害。240日元。多谢啦司机大哥──啊不说出来的话是届不到的。

<BR>
<BR>

“嗯？你说了什么吗？”

“啊。那个……从今天起<ruby>请多多指教噜<rt>お願いしまっす</rt></ruby>。” 噜是什么鬼啊。

"啊啊。多多指教。我这就教你做法。"

帽子口罩手套全副武装的前辈拿起盘子放上寿司饭。

社恐的咱做不来接客业。完全不行。不行到鼠掉。不行得要命<a href="#footnote1-3" id="context1-3" class="tooltip"><sup>[3]</sup><span class="tooltiptext">原文为「無理<ruby>崎心中<rt>さきしんじゅう</rt></ruby>。無理やし死んじゃう。」無理崎心中（直译是在无理岬殉情）和無理やし死んじゃう发音相似。</span></a>。所以咱是后厨。在回转寿司连锁店的厨房工作。但。又不行了……啊不可以不可以。现在想这些干啥。赶紧干活赶紧干活。从今天起咱可就是寿司握制机器了！ 啊。寿司饭是机器做的来着。那咱就是寿司放料机器了呢……。

<BR>
<BR>

“好。现在可以休息了”

“啊。是。十分感谢……”

太好啦—— 终于能歇着了。好累——。真心累。不行了。完全。运动不足呢。长年的家里蹲生活搞得我体力值归零了。呜呼—— 已经开始困了。

啊。午休的话可以吃东西吧？ 肯定可以吧。否则是什么黑心公司啊。会死人的。虽然咱死不了。附近有便利店吗？ 完全不知道。这一片的地理。出去找便利店又回来晚了的话会被骂的吧。可别吧。问问吗？周围的人。但现在休息的只有内个。某某前辈吧。金发的。做不到啊绝对。哈人。还在抽烟。哈人。

不过那个某某前辈手速真的好快啊。可不是奇怪的意思哦。话说咱这是在跟谁解释呢。做寿司时的胳膊。像龙珠一样胳膊肘以下都消失了<a href="#footnote1-4" id="context1-4" class="tooltip"><sup>[4]</sup><span class="tooltiptext">指的是龙珠里断臂的孙悟饭。</span></a>。好惨哦。把胳膊改造成回转寿司专用型了吗？多么可悲的改造人哦。

“那个。” 嗯？ “你怎么称呼来着？”

回头一看是那位轻吐灰烟又笑容满面的手臂改造人某某前辈。“啊。那个……” 哇。靠近一瞅个子好高！ 长得也好漂亮！金色的短发轻盈飘逸。啊傻叉吗我。“我叫sh、sh、神”

“shshshen？ 什么身？”

“是神……写作神明的神读作shén”

“啊是神明大人的神？ 哇。牛的。真有啊。这个名字”

“啊哈。诶嘿。谢谢。就酱……嘿嘿” 好恶心啊。咱。

“在下<ruby>田中<rt>たなか</rt></ruby>。请多指教～”

哇。手。握手。

“啊。请多关照。拜托您噜” 又来啊。噜。啊话说手指好纤细！ 女孩子的手是这样的吗？ 好细！

“啊对了—— 我看你从刚才开始就一直在盯着墙呢。” 被注意到了。那不肯定。傻叉。咱真是傻叉。“不用吃午饭吗？会撑不住哦？ ”

<br>

是个好人啊。

<br>

“那个。诶呀。就是说” 但该咋说啊？ 因为社恐所以不敢问附近有没有店铺吗？太弱智了吧这货。虽然是咱自己。得想个借口。但只能想到啊和诶呀。越来越恶心了。咱。“那个。嘿嘿。把干饭这事忘了。啊哈”

“把吃饭这事忘了？”她惊讶到烟头差点掉下。“好险。啊烫！” 真掉了。

然后。那个。嘿嘿。从我的口胡中隐约察觉到什么的田中小姐。跟我说了附近便利店的位置。真是个大好人呐。因为金发和抽烟就觉得她哈人实在是万分抱歉。虽说咱其实现在依然有一丢丢恐惧……。

<br>
<br>

“哈啊<small>啊啊啊</small>好累<small>啊啊啊</small>”

真的好累。没在说谎。真心的。累到鼠掉。累得要命<a href="#footnote1-5" id="context1-5" class="tooltip"><sup>[5]</sup><span class="tooltiptext">与注释[3]类似，原文为「疲れ崎心中。疲れたし死んじゃう。」</span></a>。这是什么流行语吗。还是My Boom啊。不管了。一瘫在床上。“哎呀又穿着外衣躺着！ 弄得全是灰。手洗了吗？”这种来自妈妈的老妈絮絮念就传到了耳朵里。搞得咱赶紧脱下外衣赶到洗手台。真是个。咋说呢。无可救药的家伙啊。咱。哈啊。

再次瘫在床上。纯白的天花板。总感觉。

好空虚啊。

天花板也好。咱也好。

到底在做什么呢。咱。

本以为会有所改变的。打工的话。至少家里蹲毕业了。毫无疑问进步了。所以。隐隐约约地。期待着自己在往前走。

但是。

怎么说呢。

或许不该这么想吧。

普普通通。呢。

我到底在期待什么呢？这不肯定的吗。普普通通。大家都普通地干着活。就是为了变得这样“普通”才工作着。

但就这啊。就是这样啊。

工作。打工。咱觉得是好事。这样爸爸妈妈都会高兴。家里蹲毕业了嘛。

但那就意味着变得“普通”。终于从负分归零。“安全”了。“正常”了。这样才终于站到了起跑线上。但大家都在走向更光明的未来。为了赶上他们就更努力地追求“普通”吧！　什么的。

是不是不该这么想啊？

但这哪有趣了？

咋说呢。本应该更。有趣的吧。人生。咱还是个小孩的时候。会期待在某天突然变成。正义的伙伴啊超能力者啊。虽然知道。那种事情怎么可能。但那时觉得就算没有超能力也是特别的人类。要走上特殊的人生之路。但现在。随处可见的家里蹲。以及更随处可见的。以变得“正常”为唯一目标的。人生。

到底想要做什么呢。咱。

<br>

不懂了。

咱有的只有小说。

但连小说家也成不了。

一无是处。一事无成。一无所有。

<br>

哈——。

务必让咱。

活在。别处吧。

不是这里的别处。不存在这种空虚。而是。而是有着。活着的意义啊。理由啊。这种东西？的某个地方。不存在吧。都是小说里才有的事……啊。对了。我正在写的《卧龙转生》的世界。如果是那的话。哈哈。蠢死了。但好想活在那啊。如果是那样的世界就算是咱也……不行？ 的吧。算了。嗯。感觉已经。无所谓了。好空虚。空虚得

想死。虽然没什么悲伤的也没什么痛苦的。正因为没什么缘由。正因为什么都没有。已经够了。啪——地死

<br>

“那个~……您还好吗？”

“嗯？ 啊啊。没关……”

<br>

哈？

<br>

咋回事啊？

“啊！我还想着是谁呢，原来是<ruby>榊铭大人<rt>カミサマ</rt></ruby>啊！ 真是的~ 您这是跑哪去啦？ 人家可是担心死了哦？”

“哈？”

啥？ 咋回事啊？

什么情况。这个事态。

这草原啥情况。为啥咱家的床突然变草原了啊。什么诅咒吗。正能量诅咒吗。怎么回事这种让人心情大好的正能量诅咒。这可真不赖呢。

这天空啥情况。好蓝！ 屋顶消失了啊。我是已经逝世了吗。好可怜。发生啥了。怎么……。不对。比起这个。

<br>

“？” 微微侧着头的猫耳少女。“怎么了吗？ 榊铭大人”

雾水

一头雾水。但至少。有2~3件事我是知道的。为什么凝视着这边的猫耳少女会称呼我为榊铭大人。这孩子是谁。

这孩子的名字是<ruby>伊凡娜・喵尔凯特・妮玛妮姆<rt>イヴァナ・ニャルキャット・ニマニム</rt></ruby>，简称<ruby>伊芙<rt>イヴ</rt></ruby>。爱称<ruby>伊芙喵<rt>イヴにゃん</rt></ruby>。她是猫人族小国<ruby>玛塔塔比<rt>マタタビ</rt></ruby>的公主兼《卧龙转生》女主即我创造的角色。而咱的脸肯定也和真正的咱有着云泥之别是个超级大帅哥兼转生为本应灭绝的龙人种的现代日本高中生同时还是固有魔法「<ruby>Cry-∞<rt>Create</rt></ruby>」的持有者<ruby>卡缪・萨玛埃尔・拉凡多斯迈尔<rt>カミュ・サマエル・ラファンドスマイル</rt></ruby>通称<ruby>榊铭大人<rt>カミサマ</rt></ruby>而这家伙现在变成了咱。

也就是说咱

<BR>
<BR>

现在。到了

<BR>

咱写的——啊是正在写的——小说的世界里

<br>
<br>
<center><div style="background:linear-gradient(to left,#FFFFFF,#e3e3e3,#FFFFFF);height:1px;"></div></center>
<br>
<br>

不对。

不对。不对。不对。

现在。到了

不是吧。

什么情况。

现在。到了

什么的

啥情况啊~

好俗套哦~

好俗套的展开。

想着“想去不是这里的别处”就异世界转生什么的。不其实咱还挺喜欢异世界厕纸的哦？ 但得再稍微有点内啥吧。新意。新意新意再有点新意呀。

嗯。算啦。我又不知道某人在以什么方式考虑啥。事已至此无所谓啦。再怎么蠢睁眼看到的现实也

话说。

等一下。喂。

等等等等等等。

如果是做梦的话可别醒来了。

不要。别醒过来。拜托了。真格的。

就是这个。

这样就行。

“榊铭大人？” 咱现在是。榊铭大人。

晴朗的天空和碧绿的草原。流动的云朵和神兽巴哈姆特。草的清香随风起舞。跳跃的Q弹史莱姆群。风中嬉戏的妖精的表情。偷偷朝这边看的猫耳美少女。

咱。在。咱自己写的小说世界里。

咱是榊铭大人。巧妙运用物质创造的固有魔法「<ruby>Cry-∞<rt>Create</rt></ruby>」和异能战斗漫画・小说里的知识以战略取胜横扫敌人呀敌人呀敌人呀的不折不扣<ruby>龙傲天系圣父<rt>俺ＴＵＥＥＥ系不殺系</rt></ruby>男主<a href="#footnote1-6" id="context1-6" class="tooltip"><sup>[6]</sup><span class="tooltiptext">「俺TUEEE」=おれつえええ，是日本网络用语，直译为“我超强”，专指主角实力强劲大杀四方的一类作品<br>「不殺」则是指在异世界等虚构世界观的作品中，不会杀害敌人的主角。</span></a>。

约好最后要成为这个世界的救世主的正统主人公。

彻底与。那个未来一片灰暗的家里蹲和靠打零工过活的垃圾中的垃圾人生永别啦！ HaHa！虽然还是有一丢丢留恋的！

“反、反派笑容……。榊、榊铭大人。又在打什么坏主意……”

笑容逐渐凝固又警惕地后退几步的伊芙喵。好可爱。什么情况。激萌。太可爱了吧？ 完美。与想象完全一致。不已经超越了。就像插画大神绘梨奈老师的画一样。猫猫部分的毛毛一根一根都超级逼真闪闪发光完全命中了咱的心巴！ 好诶！ 啊！ 不行了。要晕倒了。好可爱。又可爱又逼真。超级真实。等等好近！ 啥情况啊这个距离。诶。什么。这抑制不住的感情是怎么回事？不得了了。怎么会。“贼拉可爱……”

“<ruby>哈喵<rt>はにゃん</rt></ruby>！？ 您。您在说什么啊榊铭大人？”

“<b>没。<ruby>咱啥都妹说<rt>なんも</rt></ruby>。</b>”

“咱啥都妹说？”

啊。岔劈了。“不是。我是说没有任何异常。伊芙。”

“……您真的没事吗？”

好险。榊铭大人可不是关西腔。但是为啥脱口而出的是关西腔呢。明明小学五年级搬到这边之后除了内心戏以外用的都是普通话来着……算了算了。

“那伊芙喵”

“是的喵——喵？”

“啊。不是。伊芙。”

“是……是的喵！”　突然被叫做“伊芙喵”而掩饰不住困惑的伊芙喵贼拉可爱——现在不是说这个的时候啊喂。

“现在是几月几号？”

首先要搞清楚现在是在作品中的哪一部分。

“是A3957年G0863日来着……”

……对哦。

我瞎编的。意义不明的立法。我可真傻叉。当时在想啥呢。啥意思呢？ 说明一下看看。做不到吧。解释不了的东西就别写了。大傻叉。……罢了。

“魔王军攻过来了吗？”

“mó wáng jūn？ 那是什么呀？”

魔王军还没来。换言之仍在序章。还剩一大堆事件没触发。

啊。对了。对呀！等着我的未来。闪闪发光的未来咱都是知道的。全部。毕竟是咱写的。那个。也就是说。沉浸式体验？对吧？这什么情况。

也太棒了吧！

虽然有点在意在这个世界里挂掉之后会如何啊能不能回到原来的世界啊……后者其实无所谓。比起那种世界还是这里好。不言而喻。

然后这个世界的作者——是咱。但肯定有某个召唤我来到这里的人吧？ 毕竟，果然区区一个家里蹲就能转生未免太过随意了。也就是说犯人另有其人？ 毫无头绪。咱经常见到的人也就只有老妈了……果然不可能吧。我家孩子是个宅宅家里蹲这可如何是好呢对了把他扔进异世界吧！ 哪有这样的父母啊！ 放养也得有个度吧<a href="#footnote1-7" id="context1-7" class="tooltip"><sup>[7]</sup><span class="tooltiptext">原文是「可愛い子に旅させ過ぎやろ！」而「かわいい子には旅をさせよ」指的是不要溺爱孩子，而要让他们多去体会世间的艰辛。</span></a>！

就在咱想着有的没的时。无事可做的伊芙喵无聊地摆弄着脚边的草。永远看不腻的可爱度。暂且按下不表。“往回走吧” “<ruby>好的喵<rt>はいですにゃん</rt></ruby>！” 笑颜。

<br>

然后陷入绝望。

一切都太迟了。

<br>

<div class="pextra">
    <p id="footnote1-1">[1] 原文为「絶対むり。むりすぎ。フリスビー。」フリスビー（直译是飞盘）和むりすぎ发音类似。<a href="#context1-1">↩</a><p>
    <p id="footnote1-2">[2] 指的是日本公交车的整理券。<a href="#context1-2">↩</a><p>
    <p id="footnote1-3">[3] 原文为「無理<ruby>崎心中<rt>さきしんじゅう</rt></ruby>。無理やし死んじゃう。」無理崎心中（直译是在无理岬殉情）和無理やし死んじゃう发音相似。<a href="#context1-3">↩</a><p>
    <p id="footnote1-4">[4] 指的是龙珠里断臂的孙悟饭。<a href="#context1-4">↩</a><p>
    <p id="footnote1-5">[5] 与注释[3]类似，原文为「疲れ崎心中。疲れたし死んじゃう。」<a href="#context1-5">↩</a><p>
    <p id="footnote1-6">[6] 「俺TUEEE」=おれつえええ，是日本网络用语，直译为“我超强”，专指主角实力强劲大杀四方的一类作品。<br>「不殺」则是指在异世界等虚构世界观的作品中，不会杀害敌人的主角。<a href="#context1-6">↩</a><p>
    <p id="footnote1-7">[7] 原文是「可愛い子に旅させ過ぎやろ！」而「かわいい子には旅をさせよ」指的是不要溺爱孩子，而要让他们多去体会世间的艰辛。<a href="#context1-7">↩</a><p>
</div>

<br>

## 第2话 可别被迷之黑暗吞进去啊
<HR>

不过，这到底是咋回事啊。

逼真到不像话了……

真是太逼真了……捏一捏小草甚至能看到纤维和斑点。这分辨率。肯定不是游戏吧……？

远远看到的史莱姆也和野生动物无异。而伊芙喵──身旁的她正疑惑地歪着头微笑着可爱得不得了──白皙的手指虽然像梦一样软乎乎的但确实能够触摸到而“哇！ 哇！ 哇……啊！”地红着脸把手指缩了回去的伊芙喵。不行。太太太太太可爱了！！！ 不。总之能够触摸到动作也没有违和感。果然这是。现实？吧。果然是吧。那这样的话。嗯……。

<br>

心

<br>

存在吗？ 比如说眼前的伊芙喵？

光是思考这些事情本身就让咱感到几分罪恶感。但搞不懂啊。这孩子的身体里也有着和咱一样的“心”的存在吗？ 还是说和游戏角色一样没有心呢？ 搞不懂。但之前的。现实似乎也没搞明白。好像是哲学僵尸<a href="#footnote2-1" id="context2-1" class="tooltip"><sup>[1]</sup><span class="tooltiptext">哲学僵尸(Philosophical zombie) 是精神哲学上的假设存在物。假设这个世界上存在一种人，外观与物理组成都与一般人类无异，但是他没有意识经验、感质或感情。举例而言，哲学僵尸在撞上尖锐物品时，在外在上与一般正常人类相同，可以看到他的皮肤出现伤口，测量他的神经讯号，也可以测量到疼痛讯号的出现，会出现疼痛的表情，发出叫声，会向其他人表示自己正在疼痛。但是他的内在心灵中，没有疼痛的意识。</span></a>来着？ 咱瞎说的。

不过。算了。吧。

这个主题倒是不赖啦。换咱来写的话也会把这当成中心思想。仿生人恋人有没有心之类的？ 但咱可是。能平平无奇地和纸片人谈恋爱的二次元土著世代呢。这已经算是默认前提了吧？ 没必要一个一个纠结。

想这些也没用。不知道就不知道吧。人类同样也是一种不知道有没有心的生物。咱已经决定在这个世界活下去了。哪怕伊芙喵没有心也无妨。只要咱认为她有就足够了。这简直小菜一碟。和在那个世界生存下来相比。

哦。

看到了。城堡。

哇哦……好大！ 是！ 城堡！ 城堡什么的咱还是第一次见。走的越近就越觉得壮观啊……。然后是围绕城堡的城下町。城门也好大！ 话说。哇哦。咱明明在小说里只是一笔带过。进到这个世界里一看可真是不得了的情报量。级别完全不一样啊。排列着的房屋。水桶。史莱姆。晾晒的衣物。飞扬的尘土。喧闹声。还有香气。人在此生活着。平凡地生活着。哦。市场。奇怪的蔬菜和水果堆成了小山。这颜色！ 要么是蓝色要么是紫色！ 看起来不太好吃呢……但是香气不错。嗯。哦哦。武器店！ 第一次看到！ 武器店！ 虽然是理所当然的！ 哇那个流星锤是什么鬼啊。不得了。要是被那个打到的话。咱就完蛋了。彻底完蛋。杀气腾腾的。哇好可怕。虽然是理所当然的。哪怕是自己写的也能感受到文化冲击啊。真是

<br>

让人咋招

<br>

嘛？

真是让人咋招嘛？什么鬼。京都腔？ 咱正陷入沉思的时候有个少年嗒嗒嗒嗒地跑了过来还传来了“喂！你这个小偷！等等！”的阴沉喊声。啊哈。这回事啊。

有了有了。真的有这种事！咱摸了一下口袋。嗯。没了。虽然咱也不知道原本有没有。但钱包没了。被偷走了。

吼吼。真有趣。感觉很奇妙呢。简直就是预知未来嘛。之后的展开咱也了然于心。首先那个冷面大叔会抓住男孩。看吧抓住了。然后咱要追上去。好的追上了。“发生什么事了？”咱要听一下。“啊。又是这个家伙。这个小偷——”’冷面大叔回答。同时他意识到我就是救了伊芙喵公主的榊铭大人然后说道“啊是榊铭大人。”好的他说了。然后我再问“您要怎么处理这孩子。”“谁知道。反正这家伙肯定掏不出钱。”冷面大叔青筋暴起地瞪着男孩而男孩也不甘示弱地回瞪着。同时狼吞虎咽地嚼着偷来的水果。吼吼。“必须得让他长长记性让他不敢再犯。”“原来如此。”伊芙喵看着我。一脸担心。不用担心。之后我就会把大叔笼络过来。被偷的钱包也会物归原主。而小男孩因为误会再来找咱的时候就略施小计打听他的情况得知他有一位病重的姐姐也知道了他与穷凶极恶的房产商之间的争执再三下五除二地解决。嗯。还是记得的。虽然是很早以前的故事了。和《卧龙转生》第三话一模一样嘛。吼吼。嗯？

说起来“榊铭大人？” “嗯？” “那个” “先冷静一下”　这个。放着不管的话又会如何？　“不。但是……”　如果这个时候我不说“这个商品我买了”会怎样？

剧情展开会改变吗？从我写好的剧情中偏离出去？唔。说不定这也挺有趣的。病重的姐姐可以通过其他路径得救。这个任务也不是必需项。咋招？试一试？不管它？我看向小男孩的脸。正瞪着咱。

<br>

……

…………

………………

因为咱没能把原本的“这个商品我买了”那句台词说出口还一直盯着小男孩的脸搞得现场氛围有点尴尬但我选择无视这一切继续盯着小男孩。当怒目而视的小男孩开始焦虑不安无所适从而我依然沉默不语时


<img src="https://s2.loli.net/2024/04/16/oPQdy5U1TSXeOuC.jpg" alt="黑球1号.jpeg"></a>

<img src="https://s2.loli.net/2024/04/16/HopBcl9XOKU1de5.jpg" alt="黑球2号.jpeg"></a>

<BR>
<BR>

<img src="https://s2.loli.net/2024/04/16/TUcqS9yhCXzLIsa.jpg" alt="黑球3号.jpeg"></a>

糟了！

<br>

咱一边把小男孩从突如其来的黑暗中拽出来一边说着“这个商品我买了！”

黑暗消散了。

不行不行不行！ 心脏砰砰砰直跳！ 哈人！ 刚刚那是啥啊啥啊啥啊！ 纯黑色的大洞。像是要把小男孩和大叔吞进去一样……！呜哇呜哇呜哇呜哇！

这样啊。

这么一回事啊。

如果无视咱所写的故事情节。角色们。就会被黑暗吞噬吗。

怎么回事？

搞不懂。可恶。现在还在发抖。

总之。就此打住。决不能再草率行事了。

真是太吓人了。

<br>
<br>

之后咱干净利落地赶跑了那个缺德地产商完成了任务。

看着病重的姐姐重新绽放笑容。咱的心中却留下了挥之不去的阴影。

<br>

<div class="pextra">
    <p id="footnote2-1">[1] 哲学僵尸(Philosophical zombie) 是精神哲学上的假设存在物。假设这个世界上存在一种人，外观与物理组成都与一般人类无异，但是他没有意识经验、感质或感情。举例而言，哲学僵尸在撞上尖锐物品时，在外在上与一般正常人类相同，可以看到他的皮肤出现伤口，测量他的神经讯号，也可以测量到疼痛讯号的出现，会出现疼痛的表情，发出叫声，会向其他人表示自己正在疼痛。但是他的内在心灵中，没有疼痛的意识。<a href="#context2-1">↩</a><p>
</div>

<br>

## 第3话 理想的日常今天也一定是
<HR>

<HR>