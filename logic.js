var isOpen =false;
 mobileMenu=document.getElementById('menu-mobile-hambuger');
 menuDesktop=document.getElementById('menu-desktop');
 
function myFunction()
{
    if(isOpen===false)
    {
        menuDesktop.style.overflow='visible';
        isOpen=true;
    }
    else{
        menuDesktop.style.overflow='hidden';
        isOpen=false;
    }
    

}

