$(function(){

//菜单栏
   var fel=$(".feilei")
   var dn=$(".full-down")
   for(var i=0;i<fel.length;i++){
    fel[i].index=i;
    fel[i].onmouseover=function(){
      dn[this.index].style.display="block"
    }
     fel[i].onmouseout=function(){
      dn[this.index].style.display="none"
    }
   }
//top
    var span=$(".head-left-1")[0];
    var location=$(".location")[0];
    var bai=$(".bai")[0];
    span.onmouseover=function(){
        location.style.display="block";
        bai.style.display="block";
    }
    span.onmouseout=function(){
        location.style.display="none";
        bai.style.display="none";
    }

var top2=$(".head-right-3")[0];
var flow2=$(".flow2")[0];
var flows=$(".wx-box")[0]
top2.onmouseover=function(){
  flow2.style.display="block";
  flows.style.display="block";
}
top2.onmouseout=function(){
  flow2.style.display="none";
  flows.style.display="none";
}

var top3=$(".head-right-31")[0];
var flow3=$(".wx-box")[0]
top3.onmouseover=function(){
  flow3.style.display="block";
}
top3.onmouseout=function(){
  flow3.style.display="none";
}


 //banner 
  var boss4 = $(".banner")[0]
  var box = $(".banner-box")[0]; 
  var imgs = $(".banimg");
  var circle = $(".circle");
  var n = 0;
  var right = $(".right")[0]; 
  var left = $(".left")[0]; 
   var t=setInterval(move,1000);
  function move(type){
      if(type=="l"){
        n--
      if(n<0){
        n=imgs.length-1
      }
     
    }else{
      n++
      if(n>=imgs.length){
      n=0
     }
      
    }
    
    for( var i=0;i<imgs.length;i++){
      imgs[i].style.display="none";//
      circle[i].style.background="#ccc";//
      }
      imgs[n].style.display="block";//
     circle[n].style.background="red"; //
    } 
     box.onmouseover=function(){
           clearInterval(t);
    }
      box.onmouseout=function(){
           t=setInterval(move,1000);
    }
   for(var i=0;i<circle.length;i++){
      circle[i].index=i;
      circle[i].onclick=function(){
          for(var i=0;i<circle.length;i++){
            circle[i].style.background="#ccc";
            imgs[i].style.display="none";
            }
            circle[this.index].style.background="red";
            imgs[this.index].style.display="block";
            n=this.index;
        }
    }
    boss4.onmouseover=function(){
        left.style.display="block";
        right.style.display="block";
    }
    boss4.onmouseout=function(){
        left.style.display="none";
        right.style.display="none";
    }
    right.onclick=function(){
      move("r");
    }
    left.onclick=function(){
      move("l");
    }

     //天天特价轮播
    var ddr=$(".day-r")[0];
    var sd=$(".day-right1");
    var sdt=setInterval(moves,1000);
    var j=0;
    function moves(){
        j++;
        if(j>=sd.length-1){
            j=0;
        }
        animate(ddr,{top:-j*141},300);
    }
          

   //今日推荐
    var today=$(".tuijian-right")[0];
    var dk=$(".tuijian-box")[0];
    var xk=$(".tuijian-right-box");
    var today2=$(".tuijian-right-box")[0];
    var left2=$(".tuijian-right-left")[0];
    var right2=$(".tuijian-right-right")[0];
    var w=parseInt(getStyle(today2,"width"));
    var n2=0;
        var flag2=true;
        function move2(){
          if(!flag2){
            return;
          }
          flag2=false;
            n2++;
            if(n2>=xk.length){
              n2=0;
            }
            animate(dk,{left:-n2*w},800,function(){
              flag2=true;
            });
        }
        function move3(){
          if(!flag2){
            return;
          }
          flag2=false; 
            n2--;
            if(n2<0){
              n2=xk.length-1;
            }
            animate(dk,{left:-n2*w},800,function(){
              flag2=true;
            });
        }
        today.onmouseover=function(){
        left2.style.display="block";
        right2.style.display="block";
        }
        today.onmouseout=function(){
        left2.style.display="none";
        right2.style.display="none";
        }
        left2.onclick=function(){
          move2();
        }
        right2.onclick=function(){
          move3();
        }
//1f
  var box1 = $(".oneF-bottom-imgs")[0]; 
  var boss5 =$(".oneF-bottom-img-2")[0]
  var imgsone = $(".oneF-bottom-imgs-2");
  var dian1 = $(".oneF-dian");
  var m = 0;
  var next1 = 0;
  var right1 = $(".one-right")[0]; 
  var left1 = $(".one-left")[0]; 
  var width=parseInt(getStyle(imgsone[m],"width"))
  var t1 = setInterval(jin, 2000) 

    function jin() {
      next1 = m + 1;
      if (next1>= imgsone.length) {
        next1 = 0
      }
      for (var i = 0; i < imgsone.length; i++) {
        dian1[i].style.background = "#3E3E3E"
      }
      imgsone[m].style.left=0;
      imgsone[next1].style.left = width + "px";
      animate(imgsone[m], {left: -width}, 800)
      animate(imgsone[next1], {left: 0}, 800)
      dian1[next1].style.background = "#B61B1F"
      m= next1;
    }

    function jin1() {
      next1 = m + 1;
      if (next1 >= imgsone.length) {
        next1 = 0
      };
      for (var i = 0; i < imgsone.length; i++) {
        dian1[i].style.background = "#3E3E3E"
      }
      dian1[next1].style.background = "red"
      imgsone[next1].style.left = -width + "px";
      animate(imgsone[m], {left: width}, 800)
      animate(imgsone[next1], {left: 0}, 800)
      m= next1;
    }

    for (var i = 0; i < imgsone.length; i++) {
      dian1[i].index=i;
      dian1[i].onclick=function() {
        if (this.index==m) {
          return;
        }else if (this.index>m) {
          for (var i = 0; i < imgsone.length; i++) {
            dian1[i].style.background="#3E3E3E"
          }
          imgsone[this.index].style.left=width+"px";
          animate(imgsone[m],{left:-width},800)
          animate(imgsone[this.index],{left:0},800)
          dian1[this.index].style.background="#B61B1F";
          m=this.index;
          next=this.index;
        }else if (this.index<m) {
          for (var i = 0; i < imgsone.length; i++) {
            dian1[i].style.background="#3E3E3E"
          }
          imgsone[this.index].style.left=-width+"px";
          animate(imgsone[m],{left:width},800)
          animate(imgsone[this.index],{left:0},800)
          dian1[this.index].style.background="#B61B1F";
          m=this.index;
          next1=this.index;
        };
        
      }
    };
  $(".oneF-bottom-img-2")[0].onmouseover = function() {
    clearInterval(t1);
  }
  $(".oneF-bottom-img-2")[0].onmouseout = function() {
    t1 = setInterval(jin, 2000);
  }
  boss5.onmouseover=function(){
    left1.style.display="block";
    right1.style.display="block";
 }
  boss5.onmouseout=function(){
    left1.style.display="none";
    right1.style.display="none";
  }
  right1.onclick = function() {
    jin1()
  }
  left1.onclick = function() {
    jin()
  }


//3f
var obj=$(".threeF-middle1-1");
 for(var i=0;i<obj.length;i++){
    lunbo(obj[i]);
 }
 function lunbo(obj){
  var box2= $(".threeF-middle1-imgs1",obj); 
  var imgsthree = $(".threeF-middle1-imgs",obj);
  var dian2 = $(".threeF-dian",obj);
  var m1 = 0;
  var next2 = 0;
  var right3 = $(".three-right",obj)[0]; 
  var left3 = $(".three-left",obj)[0]; 
  var boss3=$(".threeF-middle1-1")[0];
  var width=parseInt(getStyle(imgsthree[m1],"width"))
  var t2 = setInterval(jin2, 1000) 
    function jin2() {
      next2 = m1 + 1;
      if (next2>= imgsthree.length) {
        next2 = 0
      }
      for (var i = 0; i < imgsthree.length; i++) {
        dian2[i].style.background = "#3E3E3E"
      }
      imgsthree[m1].style.left=0;
      imgsthree[next2].style.left = width + "px";
      animate(imgsthree[m1], {left: -width}, 800)
      animate(imgsthree[next2], {left: 0}, 800)
      dian2[next2].style.background = "#B61B1F"
      m1= next2;
    }
    function jin3() {
      next2 = m1 + 1;
      if (next2 >= imgsthree.length) {
        next2 = 0
      };
      for (var i = 0; i <imgsthree.length; i++) {
        dian2[i].style.background = "#3E3E3E"
      }
      dian2[next2].style.background = "red"
      imgsthree[next2].style.left = -width + "px";
      animate(imgsthree[m1], {left: width}, 800)
      animate(imgsthree[next2], {left: 0}, 800)
      m1= next2;
    }

    for (var i = 0; i < imgsthree.length; i++) {
      dian2[i].index=i;
      dian2[i].onclick=function() {
        if (this.index==m1) {
          return;
        }else if (this.index>m1) {
          for (var i = 0; i < imgsthree.length; i++) {
            dian2[i].style.background="#3E3E3E"
          }
          imgsthree[this.index].style.left=width+"px";
          animate(imgsthree[m1],{left:-width},800)
          animate(imgsthree[this.index],{left:0},800)
          dian2[this.index].style.background="#B61B1F";
          m1=this.index;
          next2=this.index;
        }else if (this.index<m1) {
          for (var i = 0; i < imgsthree.length; i++) {
            dian2[i].style.background="#3E3E3E"
          }
          imgsthree[this.index].style.left=-width+"px";
          animate(imgsthree[m1],{left:width},800)
          animate(imgsthree[this.index],{left:0},800)
          dian2[this.index].style.background="#B61B1F";
          m1=this.index;
          next2=this.index;
        };
        
      }
    };
  $(".threeF-middle1-1")[0].onmouseover = function() {
    clearInterval(t2);
  }
  $(".threeF-middle1-1")[0].onmouseout = function() {
    t2 = setInterval(jin2, 1000);
  }
  obj.onmouseover=function(){
    left3.style.display="block";
    right3.style.display="block";
  }
  obj.onmouseout=function(){
    left3.style.display="none";
    right3.style.display="none";
  }
  right3.onclick = function() {
    jin3()
  }
  left3.onclick = function() {
    jin3()
  }

 }

//6F 

    var obj6=$(".sixF-middle-2");
        for(var i=0;i<obj6.length;i++){
            lunbo6(obj6[i]);
        }
    function lunbo6(obj){
        var boss6=obj;
        var tus6=$(".sixF-middle2-1",obj);
        var dians6=$(".sixF-dian",obj);
        var left6=$(".six-left",obj)[0];
        var right6=$(".six-right",obj)[0];
        var w6=obj.offsetWidth;
        var t6=setInterval(dong6,3000);
        var n6=0;
        var next6=0;
        var flag6=true;
        function dong6(){
            if(!flag6){
                return;
            }
            flag6=false;
            next6=n6+1;
            if(next6>=tus6.length){
                next6=0;
            }
            for(var i=0;i<tus6.length;i++){
                dians6[i].style.background="#3E3E3E";
            }
            dians6[next6].style.background="#B61B1F";
            tus6[next6].style.left=w6+"px";
            tus6[next6].style.zIndex=1;
            animate(tus6[n6],{left:-w6},500);
            animate(tus6[next6],{left:0},500,function(){
                flag6=true;
            });
            n6=next6;
        }
        function dong7(){
            if(!flag6){
                return;
            }
            flag6=false;
            next6=n6-1;
            if(next6<0){
                next6=tus6.length-1;
            }
            for(var i=0;i<tus6.length;i++){
                dians6[i].style.background="#3E3E3E";
            }
            dians6[next6].style.background="#B61B1F";
            tus6[next6].style.left=-w6+"px";
            animate(tus6[n6],{left:w6},500);
            animate(tus6[next6],{left:0},500,function(){
                flag6=true;
            });
            n6=next6;
        }
        for(var i=0;i<dians6.length;i++){
            dians6[i].index=i;
            dians6[i].onmouseover=function(){
                if(this.index>n6){
                    for(var i=0;i<tus6.length;i++){
                    dians6[i].style.background="#3E3E3E";
                }
                dians6[this.index].style.background="#B61B1F";
                tus6[this.index].style.left=w6+"px";
                tus6[this.index].style.zIndex=1;
                animate(tus6[n6],{left:-w6},500);
                animate(tus6[this.index],{left:0},500,function(){
                    flag6=true;
                });
                n6=this.index;
                }else if(this.index<n6){
                    for(var i=0;i<tus6.length;i++){
                    dians6[i].style.background="#3E3E3E";
                }
                dians6[this.index].style.background="#B61B1F";
                tus6[this.index].style.left=-w6+"px";
                animate(tus6[n6],{left:w6},500);
                animate(tus6[this.index],{left:0},500,function(){
                    flag6=true;
                });
                n6=this.index;
                }
            }
        }
        boss6.onmouseover=function(){
            clearInterval(t6);
            left6.style.display="block";
            right6.style.display="block";
        }
        boss6.onmouseout=function(){
            t6=setInterval(dong6,3000);
            left6.style.display="none";
            right6.style.display="none";
        }
        left6.onclick=function(){
            dong7();
        }
        right6.onclick=function(){
            dong6();
        }
    }





  //10F
  var box5 = $(".tenF-middle2-1box")[0];
  var boss2 = $(".tenF-middle2-1") [0]
  var imgsten = $(".tenF-middle2-1img");
  var dian5 = $(".ten-dian");
  var m5 = 0;
  var next5 = 0;
  var right5 = $(".ten-right")[0]; 
  var left5 = $(".ten-left")[0]; 
  var width=parseInt(getStyle(imgsten[m5],"width"))
  var t5 = setInterval(jin9, 1000) 

    function jin9() {
      next5 = m5 + 1;
      if (next5>= imgsten.length) {
        next5 = 0
      }
      for (var i = 0; i < imgsten.length; i++) {
        dian5[i].style.background = "#3E3E3E"
      }
      imgsten[m5].style.left=0;
      imgsten[next5].style.left = width + "px";
      animate(imgsten[m5], {left: -width}, 800)
      animate(imgsten[next5], {left: 0}, 800)
      dian5[next5].style.background = "#B61B1F"
      m5= next5;
    }

    function jin10() {
      next5 = m5 + 1;
      if (next5 >= imgsten.length) {
        next5 = 0
      };
      for (var i = 0; i <imgsten.length; i++) {
        dian5[i].style.background = "#3E3E3E"
      }
      dian5[next5].style.background = "red"
      imgsten[next5].style.left = -width + "px";
      animate(imgsten[m5], {left: width}, 800)
      animate(imgsten[next5], {left: 0}, 800)
      m5= next5;
    }

    for (var i = 0; i < imgsten.length; i++) {
      dian5[i].index=i;
      dian5[i].onclick=function() {
        if (this.index==m5) {
          return;
        }else if (this.index>m5) {
          for (var i = 0; i < imgsten.length; i++) {
            dian5[i].style.background="#3E3E3E"
          }
          imgsten[this.index].style.left=width+"px";
          animate(imgsten[m5],{left:-width},800)
          animate(imgsten[this.index],{left:0},800)
          dian5[this.index].style.background="#B61B1F";
          m5=this.index;
          next5=this.index;
        }else if (this.index<m5) {
          for (var i = 0; i < imgsten.length; i++) {
            dian5[i].style.background="#3E3E3E"
          }
          imgsten[this.index].style.left=-width+"px";
          animate(imgsten[m5],{left:width},800)
          animate(imgsten[this.index],{left:0},800)
          dian5[this.index].style.background="#B61B1F";
          m5=this.index;
          next5=this.index;
        };
        
      }
    };
  $(".tenF-middle2-1")[0].onmouseover = function() {
    clearInterval(t5);
  }
  $(".tenF-middle2-1")[0].onmouseout = function() {
    t5 = setInterval(jin9, 1000);
  }
  boss2.onmouseover=function(){
    left5.style.display="block";
    right5.style.display="block";
  }
  boss2.onmouseout=function(){
    left5.style.display="none";
    right5.style.display="none";
  }
  right5.onclick = function() {
    jin10()
  }
  left5.onclick = function() {
    jin9()
  }

 //11F
// var obj=$(".eleveF-middle1-1");
//  for(var i=0;i<obj.length;i++){
//     lunbo(obj[i]);
//  }
//  function lunbo(obj){
//   var box11= $(".eleveF-middle1-1box",obj)[0]; 
//   var imgs11 = $(".eleveF-middle1-1img",obj)[0];
//   var dian11 = $(".eleveF-dian",obj);
//   var m11 = 0;
//   var next11 = 0;
//   var right11 = $(".eleve-right",obj)[0]; 
//   var left11 = $(".eleve-left",obj)[0]; 
//   var width=parseInt(getStyle(imgs11[m11],"width"))
//   var t11= setInterval(jin11, 1000) 
//     function jin11() {
//       next11 = m11 + 1;
//       if (next11>= imgs11.length) {
//         next11 = 0
//       }
//       for (var i = 0; i < imgs11.length; i++) {
//         dian11[i].style.background = "#3E3E3E"
//       }
//       imgs11[m11].style.left=0;
//       imgs11[next11].style.left = width + "px";
//       animate(imgs11[m11], {left: -width}, 800)
//       animate(imgs11[next11], {left: 0}, 800)
//       dian11[next11].style.background = "#B61B1F"
//       m11= next11;
//     }
//     function jin11() {
//       next11 = m11 + 1;
//       if (next11 >= imgs11.length) {
//         next11 = 0
//       };
//       for (var i = 0; i <imgs11.length; i++) {
//         dian11[i].style.background = "#3E3E3E"
//       }
//       dian11[next11].style.background = "red"
//       imgs11[next11].style.left = -width + "px";
//       animate(imgs11[m11], {left: width}, 800)
//       animate(imgs11[next11], {left: 0}, 800)
//       m11= next11;
//     }

//     for (var i = 0; i < imgs11.length; i++) {
//       dian11[i].index=i;
//       dian11[i].onclick=function() {
//         if (this.index==m11) {
//           return;
//         }else if (this.index>m11) {
//           for (var i = 0; i < imgs11.length; i++) {
//             dian11[i].style.background="#3E3E3E"
//           }
//           imgs11[this.index].style.left=width+"px";
//           animate(imgs11[m11],{left:-width},800)
//           animate(imgs11[this.index],{left:0},800)
//           dian11[this.index].style.background="#B61B1F";
//           m11=this.index;
//           next11=this.index;
//         }else if (this.index<m11) {
//           for (var i = 0; i < imgs11.length; i++) {
//             dian11[i].style.background="#3E3E3E"
//           }
//           imgs11[this.index].style.left=-width+"px";
//           animate(imgs11[m11],{left:width},800)
//           animate(imgs11[this.index],{left:0},800)
//           dian11[this.index].style.background="#B61B1F";
//           m11=this.index;
//           next11=this.index;
//         };
        
//       }
//     };
//   $(".eleveF-middle1-1")[0].onmouseover = function() {
//     clearInterval(t11);
//   }
//   $(".eleveF-middle1-1")[0].onmouseout = function() {
//     t11 = setInterval(jin11, 1000);
//   }
//   obj.onmouseover=function(){
//     left11.style.display="block";
//     right11.style.display="block";
//   }
//   obj.onmouseout=function(){
//     left11.style.display="none";
//     right11.style.display="none";
//   }
//   right11.onclick = function() {
//     jin11()
//   }
//   left11.onclick = function() {
//     jin11()
//   }

//  }





     // 楼层跳转
     var bo=$(".box-lou")[0];//获取所需元素
        var floor=$(".floor");
        var lis=$(".lis");
        var cw=document.documentElement.clientWidth;//获得浏览器窗口的高度和宽度
        var ch=document.documentElement.clientHeight;
        var bh=bo.offsetHeight;//获得bo的实际高度
        var sign=true;
        var shuju=["服饰","美妆","手机","家电","数码","运动","家居","母婴","食品","图书","服务"];
        bo.style.top=(ch-bh)/2+"px";//给固定定位的top赋值
        for(var i=0;i<lis.length;i++){
          lis[i].index=i;
          lis[i].onclick=function(){//点击楼层时
                var floor=$(".floor");
                sign=false;
            var top=floor[this.index].offsetTop;//获取该楼层到浏览器的高度
                animate(document.body,{scrollTop:top},300,function(){
                    sign=true;
                });//将这个高度给滚动条
            animate(document.documentElement,{scrollTop:top},300,function(){
                    sign=true;
                });//将这个高度给滚动条
            for(var i=0;i<lis.length;i++){
              lis[i].innerHTML=i+1+"F";
              lis[i].style.color="#666";
            }
            lis[this.index].style.color="#C81623";
                lis[this.index].style.background="#fff";
                lis[this.index].innerHTML=shuju[this.index];

          }
        }
        // for(var i=0;i<lis.length;i++){
        //     lis[i].index=i;
        //     lis[i].onmouseover=function(){
        //         lis[this.index].style.background="#C81623";
        //         lis[this.index].style.color="#fff";
        //         lis[this.index].innerHTML=shuju[this.index];
        //     }
        //     lis[i].onmouseout=function(){
        //         var floor=$(".floor");
        //         var top=floor[this.index].offsetTop;
        //         if(top==document.body.scrollTop||(top-document.body.scrollTop<=320&&top-document.body.scrollTop>=0)){
        //             lis[this.index].style.background="#fff";
        //             lis[this.index].style.color="#C81623";
        //         }else if(document.body.scrollTop-top<=350&&document.body.scrollTop-top>=0){
        //             lis[this.index].style.background="#fff";
        //             lis[this.index].style.color="#C81623";
        //         }else{
        //             lis[this.index].style.background="#fff";
        //             lis[this.index].style.color="#666";
        //             lis[this.index].innerHTML=this.index+1+"F";
        //         } 
        //     }
        // }
        var flag=true;
        var flag1=true;
        window.onscroll=function(){//滚动事件
            if(!sign){
                return;
            }
            var floor=$(".floor");
            var shuju=["服饰","美妆","手机","家电","数码","运动","家居","母婴","食品","图书","服务"];
          var obj=document.documentElement.scrollTop? document.documentElement:document.body;
          for(var i=0;i<floor.length;i++){
            if(obj.scrollTop>=floor[i].offsetTop-ch+100){//滚动条值大于等于窗口值加楼层到body的值时 该楼层出现
                    for(var j=0;j<lis.length;j++){
                        lis[j].innerHTML=j+1+"F";
                  lis[j].style.color="#666";
                    }
                    lis[i].innerHTML=shuju[i];
                lis[i].style.color="#C81623";
                    // var imgs=$("img",floor[i]);
                    // for(var j=0;j<imgs.length;j++){
                    //     var aa=imgs[j].getAttribute("aa");
                    //     imgs[j].src=aa;
                    // }
            }
          }
          if(obj.scrollTop>=floor[0].offsetTop-ch+100){//第一楼开始出现
            if(flag){
              flag=false;//关掉动画
              animate(bo,{opacity:1},500,function(){//执行动画 楼层显现
                flag1=true;//消失的开关开启
              });
            }  
            }else{
              if(flag1){//没有到达一楼时
              flag1=false;//消失的动画关闭
              animate(bo,{opacity:0},500,function(){//执行动画 楼层消失
                flag=true;//显现的开关开启
              });
            }  
            }
        }



});



