function myfunction(){
    document.getElementById("myDropdown").classList.toggle("dropdown-show");
}

window.onclick = function(event){
    if (!event.target.matches('.dropdown')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i< dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('dropdown-show')){
                openDropdown.classList.remove('dropdown-show');
            }
        }
    }
}