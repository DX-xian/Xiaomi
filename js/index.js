window.onload=function () {
    // 购物车
    let head_car=document.getElementsByClassName("head_car")[0];
    let shopping_meun=head_car.getElementsByClassName("shopping_meun")[0];
    // shopping_meun.style.display="none";
    head_car.onmouseenter=function () {
        // shopping_meun.style.display="block";
        shopping_meun.style.height="85px";
        shopping_meun.style.boxShadow=" 0 2px 10px rgba(0,0,0,0.15)";

    }
    head_car.onmouseleave=function () {
        // shopping_meun.style.display="none";
        shopping_meun.style.height=0;
        shopping_meun.style.boxShadow="none"


    }
    // 导航
    let search=document.getElementsByClassName("search")[0];
    let lis3=search.getElementsByTagName("li");
    let search_drop=search.getElementsByClassName("search_drop");
    for(let i=0;i<lis3.length-2;i++){
        lis3[i].onmouseenter=function () {
            search_drop[i].style.height="230px";
            search_drop[i].style.boxShadow=" 0 2px 10px rgba(0,0,0,0.15)";
        }
        lis3[i].onmouseleave=function () {
            search_drop[i].style.height="0";
            search_drop[i].style.boxShadow=" none";
        }
    }



    // banner
    let banner_nav=document.getElementsByClassName("banner_nav")[0];
    let lis=banner_nav.getElementsByTagName("li");
    let banner_drop=banner_nav.getElementsByClassName("banner_drop");
    for(let i=0;i<banner_drop.length;i++){

        lis[i].onmouseenter=function(){
            for(let j=0;j<banner_drop.length;j++){
                banner_drop[j].style.display="none";

            }
            banner_drop[i].style.display="block";
        };
        lis[i].onmouseleave=function(){
            banner_drop[i].style.display="none";
        }
    }

    // 导航
    // let search=document.getElementsByClassName("search")[0];
    // let lis2=search.getElementsByTagName("li");
    // let search_drop=search.getElementsByClassName("search_drop");
    // for(let i=0;i<lis2.length;i++){
    //
    //     lis2[i].onmouseenter=function () {
    //         // search_drop[i].style.display="block";
    //         // search_drop[i].style.boxShadow=" 0 5px 5px rgba(0,0,0,0.1)";
    //
    //     }
    //     lis2[i].onmouseleave=function () {
    //         // search_drop[i].style.display="none";
    //         // search_drop[i].style.boxShadow="none";
    //
    //     }
    // }

    // 家电
    function allof(num){

        let dapei_top_wenzi=document.getElementsByClassName("dapei_top_wenzi")[num];
        let span_jia=dapei_top_wenzi.getElementsByTagName("span");
        let jiadian=document.getElementsByClassName("jiadian")[num];
        let yingjian_bottomRight=jiadian.getElementsByClassName("yingjian_bottomRight");
        for(let i=0;i<span_jia.length;i++){
            yingjian_bottomRight[i].style.display="none";
            span_jia[i].onmouseenter=function () {

                for(let j=0;j<span_jia.length;j++){
                    yingjian_bottomRight[j].style.display="none";
                    span_jia[j].style.borderBottom="none";

                }
                yingjian_bottomRight[i].style.display="block";
                span_jia[i].style.borderBottom= "2px solid #FF6700";

            }
        }
        yingjian_bottomRight[0].style.display="block";
        // span_jia[.style.borderBottom= "2px solid #FF6700";

    }
    allof(0);
    allof(1);
    allof(2);
    allof(3)



};