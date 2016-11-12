window.onload = function() {
    
    var pro1 = document.getElementById('project_link1');
    var pro2 = document.getElementById('project_link2');

    var li =[];
    li[0] = document.getElementById('home');
    li[1] = document.getElementById('profile');
    li[2] = document.getElementById('project');
    li[3] = document.getElementById('experience');
    li[4] = document.getElementById('portfolio');

    document.getElementById('home').style.borderBottom = "2px solid white";

    document.getElementById('hameonham_img').onclick = function(){
        pro1.style.display="block"
    }
    document.getElementById('ucc_img').onclick = function(){
        pro2.style.display="block"
    }
    
    li[1].onclick = setting(1);
    
    
};


function setting(num) {

    var pro1 = document.getElementById('project_link1');
    var pro2 = document.getElementById('project_link2');

    var li =[], category = [],main = [], project = [];
    li[0] = document.getElementById('home');
    li[1] = document.getElementById('profile');
    li[2] = document.getElementById('project');
    li[3] = document.getElementById('experience');
    li[4] = document.getElementById('portfolio');

    category[0] = document.getElementById('home_title');
    category[1] = document.getElementById('profile_title');
    category[2] = document.getElementById('project_title');
    category[3] = document.getElementById('experience_title');
    category[4] = document.getElementById('portfolio_title');

    main[0] = document.getElementById('home_main');
    main[1] = document.getElementById('profile_main');
    main[2] = document.getElementById('project_main');
    main[3] = document.getElementById('experience_main');
    main[4] = document.getElementById('portfolio_main');


    project[1] = document.getElementById('webdesign_img');
    project[2] = document.getElementById('hameonham_img');
    project[3] = document.getElementById('ucc_img');
    project[4] = document.getElementById('ucc_img');
    project[5] = document.getElementById('ucc_img');
    project[6] = document.getElementById('java_img');

    

    for (var i = 4; i >= 0; i--) {
        li[i].style.borderBottom = "none"
        category[i].style.display = "none"
        main[i].style.display="none"
        pro1.style.display="none"
        pro2.style.display="none"
    }
    li[num-1].style.borderBottom = "2px solid white"
    category[num-1].style.display = "block"
    main[num-1].style.display = 'inline-block';
};

function oncheck1(){
    setting(1);

}
function oncheck2(){
    setting(2);
}
function oncheck3(){
    setting(3);
}
function oncheck4(){
    setting(4);
}
function oncheck5(){
    setting(5);
}

function godrive() {
     window.open("https://drive.google.com/file/d/0B_gNZ96B1Ds1Wmh4ZXhkdlhnZ2M/view?usp=sharing", "newWin");
};
function golink() {
     alert("개발 준비중입니다");
     //window.open("http://45.32.253.24/cck_youtube/index.php", "newWin");
};

$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        $('.nav-main').css("background-color","#ec523f");
    } else {
       $('.nav-main').css("background-color","none");
    }
});



/*
$('project_img_div').ready(function(){

  if ($(window).width()>=1123) {
            alert("1123보다 큼!");
            $('project_img_div').css("float","none");
        } else{
            alert("1123보다 작음");
            $('project_img_div').css("float","left");
    }
})
*/

