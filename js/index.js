window.onload=function () {
    // 购物车
    let head_car = document.getElementsByClassName("head_car")[0];
    let shopping_meun = head_car.getElementsByClassName("shopping_meun")[0];
    // shopping_meun.style.display="none";
    head_car.onmouseenter = function () {
        // shopping_meun.style.display="block";
        shopping_meun.style.height = "85px";
        shopping_meun.style.boxShadow = " 0 2px 10px rgba(0,0,0,0.15)";

    }
    head_car.onmouseleave = function () {
        // shopping_meun.style.display="none";
        shopping_meun.style.height = 0;
        shopping_meun.style.boxShadow = "none"


    }
    // 导航
    let search = document.getElementsByClassName("search")[0];
    let lis3 = search.getElementsByTagName("li");
    let search_drop = search.getElementsByClassName("search_drop");
    for (let i = 0; i < lis3.length - 2; i++) {
        lis3[i].onmouseenter = function () {
            search_drop[i].style.height = "230px";
            search_drop[i].style.boxShadow = " 0 2px 10px rgba(0,0,0,0.15)";
        }
        lis3[i].onmouseleave = function () {
            search_drop[i].style.height = "0";
            search_drop[i].style.boxShadow = " none";
        }
    }


    // banner
    let banner_nav = document.getElementsByClassName("banner_nav")[0];
    let lis = banner_nav.getElementsByTagName("li");
    let banner_drop = banner_nav.getElementsByClassName("banner_drop");
    for (let i = 0; i < banner_drop.length; i++) {

        lis[i].onmouseenter = function () {
            for (let j = 0; j < banner_drop.length; j++) {
                banner_drop[j].style.display = "none";

            }
            banner_drop[i].style.display = "block";
        };
        lis[i].onmouseleave = function () {
            banner_drop[i].style.display = "none";
        }
    }

    // 家电
    function allof(num) {

        let dapei_top_wenzi = document.getElementsByClassName("dapei_top_wenzi")[num];
        let span_jia = dapei_top_wenzi.getElementsByTagName("span");
        let jiadian = document.getElementsByClassName("jiadian")[num];
        let yingjian_bottomRight = jiadian.getElementsByClassName("yingjian_bottomRight");
        span_jia[0].style.borderBottom = "2px solid #FF6700";

        for (let i = 0; i < span_jia.length; i++) {
            yingjian_bottomRight[i].style.display = "none";

            span_jia[i].onmouseenter = function () {

                for (let j = 0; j < span_jia.length; j++) {
                    yingjian_bottomRight[j].style.display = "none";
                    span_jia[j].style.borderBottom = "none";

                }
                yingjian_bottomRight[i].style.display = "block";
                span_jia[i].style.borderBottom = "2px solid #FF6700";

            }
        }
        yingjian_bottomRight[0].style.display = "block";
        // span_jia[.style.borderBottom= "2px solid #FF6700";

    }

    allof(0);
    allof(1);
    allof(2);
    allof(3)

    // 轮播图
    // let banner = document.getElementById("banner")
    // let banner_img = document.getElementsByClassName("banner_img")[0];
    // let img = banner_img.getElementsByTagName("img");
    // let forword = banner.getElementsByClassName("banner_btn")[1];
    // let back = banner.getElementsByClassName("banner_btn")[0];
    // let yuanniu=banner_img.getElementsByClassName("yuanniu");
    // // console.log(forword,back);
    // // console.log(yuanniu);
    // // console.log(img);
    // let num = 0;
    // let fn = function () {
    //     for (var i = 0; i < img.length; i++) {
    //         img[i].style.zIndex = "5";
    //
    //     }
    //     img[num].style.zIndex = "10";
    //     num++;
    //     if (num == 5) {
    //         num = 0;
    //     }
    //
    // }
    //
    // let t = setInterval(fn, 1500);
    //
    // banner_img.onmouseenter = function () {
    //     clearInterval(t)
    // }
    // banner_img.onmouseleave = function () {
    //     t = setInterval(fn, 1500);
    //
    // }
    //
    // // forword.onclick=function () {
    // //     for (var i=0;i<img.length;i++){
    // //         img[i].style.zIndex="5";
    // //
    // //     }
    // //     num++;
    // //     if(num==5){
    // //         num=0;
    // //
    // //     }
    // //     img[num].style.zIndex="10";
    // //
    // //
    // // }
    // // back.onclick=function () {
    // //     for (var i=0;i<img.length;i++){
    // //         img[i].style.zIndex="5";
    // //
    // //     }
    // //     num--;
    // //     if(num<0){
    // //         num=4;
    // //     }
    // //     img[num].style.zIndex="10";
    // //
    // //
    // // }
    // //
    //
    //
    // function move() {
    //     for (var i = 0; i < img.length; i++) {
    //         img[i].style.zIndex = "5";
    //
    //     }
    //     num++;
    //     if (num == 5) {
    //         num = 0;
    //
    //     }
    //     img[num].style.zIndex = "10";
    // }
    //
    // function move1() {
    //     for (var i = 0; i < img.length; i++) {
    //         img[i].style.zIndex = "5";
    //
    //     }
    //     num--;
    //     if (num < 0) {
    //         num = 4;
    //     }
    //     img[num].style.zIndex = "10";
    // }
    //
    // forword.onclick = move;
    // back.onclick = move1;
    //
    // // yuanniu[0].style.backgroundColor="#F28484"
    // for(let i=0;i<img.length;i++){
    //
    //
    //     yuanniu[i].onclick=function () {
    //         for (var j = 0; j < img.length; j++) {
    //             img[j].style.zIndex = "5";
    //
    //
    //         }
    //
    //         // yuanniu[i].className="hot"
    //         img[i].style.zIndex="10";
    //     }
    //     num=i;
    // }


    // 轮播图2

    let banner=document.querySelector("#banner");
    let banner_img=banner.querySelector(".banner_img");
    let img=banner_img.querySelectorAll("img");
    let yuanniu=document.querySelectorAll(".yuanniu");
    let banner_btn=document.querySelectorAll(".banner_btn");
    // console.log(banner_btn[0]);
    let flag=true;

    let now=0;
    let next=0;
    let widths=1226;
    let fn=function () {
        next++;
        if(next==img.length){
            next=0;
        }
        img[next].style.left=widths+"px";
        animate(img[now],{left:-widths});
        animate(img[next],{left:0});

        yuanniu[next].classList.add("hot");
        yuanniu[now].classList.remove("hot")
        now=next;

    }
    let t3=setInterval(fn,2500);

    banner_img.onmouseenter = function () {
        clearInterval(t3);
    }
    banner_img.onmouseleave = function () {
        t3= setInterval(fn, 2500);

    }




    function move() {
            next--;
            if(next<0){
                next=img.length-1;
            }
            img[next].style.left=-widths+"px";
            animate(img[now],{left:widths});
            animate(img[next],{left:0},function () {
                flag=true;
            });

            yuanniu[next].classList.add("hot");
            yuanniu[now].classList.remove("hot")
            now=next;

    }
    function move1() {
        next++;
        if(next>img.length-1){
            next=0;
        }
        img[next].style.left=widths+"px";
        animate(img[now],{left:-widths});
        animate(img[next],{left:0},function () {
            flag=true;
        });

        yuanniu[next].classList.add("hot");
        yuanniu[now].classList.remove("hot");
        now=next;

    }


    banner_btn[0].onclick=function(){
        if(flag==false){
            return;
        }
        // if(next==0){
        //     return;
        // }
        flag=false;
        move();
    }

    banner_btn[1].onclick=function(){
        if(flag==false){
            return;
        }
        // if(next==img.length-1){
        //     return;
        // }
        flag=false;
        move1();
    }
    // banner_btn[0].onclick=move;
    // banner_btn[1].onclick=move1;



    yuanniu.forEach(function (Element,index) {
        Element.onclick=function () {
            if(now==index){
                return;
            }
            if(now>index){
                img[index].style.left=-widths+"px";
                animate(img[now],{left:widths});
                animate(img[index],{left:0});
                yuanniu[index].classList.add("hot");
                yuanniu[now].classList.remove("hot")
                now=next=index;
            }
            if(now<index){
                img[index].style.left=widths+"px";
                animate(img[now],{left:-widths});
                animate(img[index],{left:0});
                yuanniu[index].classList.add("hot");
                yuanniu[now].classList.remove("hot");
                now=next=index;
            }
        }

    })







    // 内容
    function neirong(num) {
        let neirong_main=document.getElementsByClassName("neirong_main")[num];
        let neirong_tihuan=neirong_main.querySelectorAll(".neirong_tihuan");
        let weinituijian_btn=neirong_main.querySelectorAll(".weinituijian_btn");
        let neirong_center=neirong_main.querySelector(".neirong_center");
        let div=neirong_center.querySelectorAll("div")
        // console.log(div);

        let flag1=true;

        let now1=0;
        let next1=0;
        let wid=294;



        weinituijian_btn[0].onclick=function(){
            if(flag1==false){
                return;
            }
            if(next==0){
                return
            }
            flag1=false;
            con_move1();
        }

        weinituijian_btn[1].onclick=function(){
            if(flag1==false){
                return;
            }
            if(next==neirong_tihuan.length-1){
                return
            }
            flag1=false;
            con_move();
        }

        function con_move() {
            next1++;
            if(next1==neirong_tihuan.length){
                next1=0;
            }
            neirong_tihuan[next1].style.left=wid+"px";
            animate(neirong_tihuan[now1],{left:-wid});
            animate(neirong_tihuan[next1],{left:0},function () {
                flag1=true;
            });
            div[next1].className=("neirong_yuanniu");
            div[now1].className=("neirong_bianshen");
            now1=next1
        }
        function con_move1() {
            next1--;
            if(next1<0){
                next1=neirong_tihuan.length-1;
            }
            neirong_tihuan[next1].style.left=-wid+"px";
            animate(neirong_tihuan[now1],{left:wid});
            animate(neirong_tihuan[next1],{left:0},function () {
                flag1=true;
            });
            div[next1].className="neirong_yuanniu";
            div[now1].className="neirong_bianshen";
            now1=next1

        }




        // weinituijian_btn[0].onclick=con_move1;
        // weinituijian_btn[1].onclick=con_move;

        div.forEach(function (element,index) {
            element.onclick=function () {
                if(now1==index){
                    return;
                }
                if(now1>index){
                    neirong_tihuan[index].style.left=-wid+"px";
                    animate(neirong_tihuan[now1],{left:wid}) ;
                    animate(neirong_tihuan[index],{left:0});
                    div[index].className="neirong_yuanniu";
                    div[now1].className="neirong_bianshen";
                    now1=next1=index;

                }
                if(now1<index){
                    neirong_tihuan[index].style.left=wid+"px";
                    animate(neirong_tihuan[now1],{left:-wid}) ;
                    animate(neirong_tihuan[index],{left:0});
                    div[index].className="neirong_yuanniu";
                    div[now1].className="neirong_bianshen";
                    now1=next1=index;
                }
            }
        })
    }

    neirong(0);
    neirong(1);
    neirong(2);
    neirong(3);


    // 小米闪购

    let shan=document.querySelector(".shan");
    let shangou=shan.querySelector(".shangou");
    let star_btn=document.querySelector(".star_btn");
    let div2=star_btn.querySelectorAll("div")
    console.log(div2);

    let time=0;
    let xnum=parseInt(getComputedStyle(shangou,null).width)/3;
    console.log(xnum);
    div2[1].onclick=function () {
        time++;
        if(time==3){
            time=2;
        }
        shangou.style.transform = "translateX("+(-xnum*time)+"px)";
    }
    div2[0].onclick=function () {
        time--;
        if(time<0){
            time=0;
        }
        shangou.style.transform = "translateX("+(-xnum*time)+"px)";
    }

}


