const menuBtn = $(".menu-btn");
const hamburger = $(".menu-btn-burger");
const nav = $(".nav");
const menuNav = $(".menu-nav")
const navItems = document.querySelectorAll(".menu-nav-item")



let showMenu = false;


function toggleMenu() {
    if  (!showMenu) {
        showMenu = true;
        hamburger.addClass("open");
        nav.addClass("open");
        menuNav.addClass("open");
        navItems.forEach(item => 
            item.classList.add("open"));    
            
    }   else {
        hamburger.removeClass("open");
        nav.removeClass("open");
        menuNav.removeClass("open");
        showMenu = false;
        navItems.forEach(item => 
            item.classList.remove("open"));  
    }
}


menuBtn.click(toggleMenu);

