let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*我是一名前端新人
*接下来我要加样式了
*我要加的样式是
*首先我需要准备一个div
*/
#div1{
    border:1px solid red;
    width:300px;
    height:300px;
}
/*接下来我要把div变成八卦图
*看好了
*首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px gray; /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
    border:none;
}
/*
*八卦图是阴阳两部分形成
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
下面画两个神秘的小球*/
#div1::before{
    width:150px;
    height:150px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width:150px;
    height:150px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    }
/*body{
    color:red
*/};`;

// 版本一，用setInterval
// let n = 1;
// demo.innerHTML = n;
// setInterval(() => {
//   n = n + 1;
//   demo.innerHTML = n;
// }, 3000);

//版本二，会出现换行处有'<'的现象
// string = string.replace(/\n/g, "<br>"); //js中的所有换行变成html中的换行，用<br>替代\n
// let n = 0;
// demo.innerHTML = string.substring(0, n);
// let step = () => {
//   setTimeout(() => {
//     n = n + 1;
//     demo.innerHTML = string.substring(0, n); //显示字符串的子字符串从下标0-n显示
//     //自由控制什么时候结束
//     if (n < string.length) {
//       step();
//     } else {
//     }
//   }, 500);
// };

let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>"; //如果是回车就把\n换成《br》
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n]; //否则照搬string的内容显示
    }

    html.innerHTML = string2; //显示字符串的子字符串从下标0-n显示
    style.innerHTML = string.substring(0, n); //这个生效好神奇，直接用string中的css生效
    window.scrollTo(0, 10000);
    html.scrollTo(0, 10000);
    n = n + 1;

    //自由控制什么时候结束
    if (n < string.length) {
      step();
    }
  }, 0);
};
step();
