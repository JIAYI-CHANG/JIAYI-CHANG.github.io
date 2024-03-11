---
title: 「翻译」叙述性诡计短篇集·似鸟鸡
date: 2024-03-11
tags: [翻译,推理小说,短篇]
categories: [翻译,推理小说]
description: 本文为<a href="https://book.douban.com/subject/30299990/">「叙述トリック短編集」</a>中部分作品的翻译。原文版权归作者与出版社所有，翻译仅供学习交流，禁止用于商业用途。
copyright: true
top_img: https://m.media-amazon.com/images/I/81HSCLhLCEL._SL1500_.jpg
cover: https://m.media-amazon.com/images/I/81HSCLhLCEL._SL1500_.jpg
copyright_author: CHJY
copyright_author_href: https://www.douban.com/people/CHJY2000/notes
copyright_url: https://www.HereisCHJY.blog/Translation/UnreliableNarrator
copyright_info: 原文版权归作者与出版社所有，翻译仅供学习交流，转载请注明出处，禁止用于商业用途。
---
<script>
document.addEventListener("DOMContentLoaded", function() {
    var link = document.getElementById("myLink");
    var tooltip = document.getElementById("tooltip");

    link.addEventListener("click", function(e) {
        e.preventDefault();
        if(tooltip.style.display === "none") {
            tooltip.style.display = "block";
        } else {
            tooltip.style.display = "none";
        }
    });
});
</script>
<html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Shippori+Mincho+B1:wght@600&display=swap');
            p {
                text-align:justify;
            }
            p a {
                text-decoration: none;
                text-decoration-line: none;
                text-decoration-color: none;
                text-decoration-style: none;
            }
            .pextra {
                font-family: "STSong";
                color: Black;
                text-align:justify;
            }
            .pextra2 {
                color: Black;
                text-align:justify;
                padding-left: 30px;
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
            .hhr {
                border: none; /* 移除默认的边框样式 */
                border-bottom: 2.5px dashed #E3E3E3; /* 设置上边框为1像素的虚线，颜色为黑色 */
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
                min-width:350PX;
                max-width: 500px;
                background-color: #17242C;
                color: #fff;
                font-family: "STSong";
                text-align: center;
                font-size: 13px;
                border-radius: 10px;
                padding: 5px 15px;
                position: absolute;
                z-index: 1;
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
                    position: fixed;
                    top: 30%;
                    left: 50%;
                    min-height:75PX;
                }
                .tooltip .tooltiptext::after {
                    display: none;
                }           
        </style>
    </head>
<body>

<center> 『叙述トリック短編集』（似鳥鶏・2018）</center>

<HR>

<BR>

> 本文为<a href="https://book.douban.com/subject/30299990/">「叙述トリック短編集」</a>中部分作品的翻译。原文版权归作者与出版社所有，翻译仅供学习交流，禁止用于商业用途。

<BR>

<div class="container">
    <div class="title">
        <P><a href="https://book.douban.com/subject/10809297/"><b>内容简介</b></a></P>
    </div>
    <div class="content">
        <div class="image">
            <img src="https://m.media-amazon.com/images/I/712acjY36OL._SL1424_.jpg" height=260px alt="叙述性诡计短篇集封面">
        </div>
        <div class="text">
            <p>
             本文为《叙述性诡计短篇集》中的部分作品，已有「<b>2 背靠背的恋人</b><a href="https://www.jianshu.com/p/c0780af53a72"><b>(上)</b></a><a href="https://www.jianshu.com/p/7346a4291fb5"><b> (下)</b></a>」・「<a href="https://www.douban.com/note/784163293/"><b>3 被关起来的三人和两人</b></a>」两篇民翻。<br><br> 如无特殊说明，本文中的注释均为<b>作者注</b>。</p>
            <br>
        </div>
    </div>
</div>


<BR>
<BR>

## 1 好好冲厕所之神
<HR>


<hr>

《好好冲厕所之神》翻译中…… 预计3月22日更新。