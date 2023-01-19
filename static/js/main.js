// Menu Manager
localStorage.setItem('menuPos',1);//Session Storage to track if the menu is up or down.

/*
 * Menu Function - No @Params taken
 * Function is only active when Navbar icon is clicked.
 * Function checks status of Navbar icon and Menu text then applies the oppsitie to it. Open to closed and vise versa.
 * Local storage uses global variable menuPos to track the position of the menu.
*/

document.menu=function(){
    let navbar = document.getElementsByClassName('menu-container')
    if (navbar[0].classList.contains('active')){
        navbar[0].classList.remove('active')
        localStorage.setItem('menuPos',1);
    }else{
        navbar[0].classList.add('active')
        localStorage.setItem('menuPos',0);
    }
}