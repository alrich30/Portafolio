(function (){
  let navbar = document.querySelector('#navbar');
  let hamburger = document.querySelector('#boton-sandwich');
  let isNavBarOpen = false;

  
    
      hamburger.addEventListener('click',  () => {
      
        navbar.classList.toggle('open')
        
        if (navbar.classList.contains('open')) {
          isNavBarOpen = true;
          navbar.style.cssText = ' visibility : visible';
          hamburger.style.backgroundColor =  "#323333";
        } else {
          navbar.style.visibility = 'hidden';
          navbar.style.cssText = 'visibility : hidden';
          hamburger.style.backgroundColor =  "rgba(28, 60, 70, 0)";
        }
    })
    
    
  
  
  
})();

 