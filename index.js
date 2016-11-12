
window.onload = function() {
    document.getElementById('home').style.borderBottom = "2px solid white";

    
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
    

    project[0] = document.getElementById('ucc_img');
    project[1] = document.getElementById('webdesign_img');
    project[2] = document.getElementById('hameonham_img');
    project[3] = document.getElementById('ucc_img');
    project[4] = document.getElementById('ucc_img');
    project[5] = document.getElementById('ucc_img');
    project[6] = document.getElementById('java_img');

    var pro1 = document.getElementById('project_link1');
    var pro2 = document.getElementById('project_link2');
    

    li[0].onclick = function() {
        for (var i = 4; i >= 0; i--) {
            li[i].style.borderBottom = "none"
            category[i].style.display = "none"
            main[i].style.display="none"
            pro1.style.display="none"
            pro2.style.display="none"

        }
        category[0].style.display = "block"
        li[0].style.borderBottom = "2px solid white"
        main[0].style.display = 'block';

    };

    li[1].onclick = function() {
        for (var i = 4; i >= 0; i--) {
            li[i].style.borderBottom = "none"
            category[i].style.display = "none"
            main[i].style.display="none"
            pro1.style.display="none"
            pro2.style.display="none"
        }
        li[1].style.borderBottom = "2px solid white"
        category[1].style.display = "block"
        main[1].style.display = 'block';
    };

    li[2].onclick = function() {
        for (var i = 4; i >= 0; i--) {
            li[i].style.borderBottom = "none"
            category[i].style.display = "none"
            main[i].style.display="none"
            pro1.style.display="none"
            pro2.style.display="none"
        }
        li[2].style.borderBottom = "2px solid white"
        category[2].style.display = "block"
        main[2].style.display = 'block';
    };

    li[3].onclick = function() {
        for (var i = 4; i >= 0; i--) {
            li[i].style.borderBottom = "none"
            category[i].style.display = "none"
            main[i].style.display="none"
            pro1.style.display="none"
            pro2.style.display="none"
        }
        li[3].style.borderBottom = "2px solid white"
        category[3].style.display = "block"
        main[3].style.display = 'block';
    };

    li[4].onclick = function() {
        for (var i = 4; i >= 0; i--) {
            li[i].style.borderBottom = "none"
            category[i].style.display = "none"
            main[i].style.display="none"
            pro1.style.display="none"
            pro2.style.display="none"
        }
        li[4].style.borderBottom = "2px solid white"
        category[4].style.display = "block"
        main[4].style.display = 'block';
    };

    project[2].onclick = function(){
        pro1.style.display="block"
    }
    project[0].onclick = function(){
        pro2.style.display="block"
    }ㅜ
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.nav-main').css("background-color","#ec523f");
        } else {
           $('.nav-main').css("background-color","none");
        }
        });

};

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

