
(function () {

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos;
    let isFixed = false;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {

        updatePos();
    
        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight + 'px;';
            isFixed = true;
    
        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);

})()

/*(function (){
    
    let menu = document.querySelector('#menu');
    let main = document.querySelector('main');
    let navbar = document.querySelector('#navbar');
    let menuHeigth = menu.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - menuHeigth;
    let windowsPos;

    function updatePos(){
        windowsPos = window.scrollY;
        
    }

    function onScroll(){
        
        updatePos();

        if (windowsPos >= breakpoint){
            menu.style.cssText = 'position: fixed';
            navbar.style.cssText = 'position: fixed';
            menu.classList.add('menu-fixed');
            navbar.classList.add('navbar-fixed');
            main.style.cssText = 'margin-top: ' + menuHeigth + 'px';
        }
        else if(windowsPos < breakpoint){
            menu.style.cssText = 'position: relative';
            navbar.style.cssText = 'position: absolute';
            menu.classList.remove('menu-fixed');
            navbar.classList.remove('navbar-fixed');
            /*main.style.cssText = 'margin-top: ' + 0;
        }
    }
    document.addEventListener('scroll', onScroll);

})()*/