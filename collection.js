var productcontainer=document.getElementById("product")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i++)
    {
        var productname=productlist[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(entervalue)<0)
        {
            productlist[i].style.display="none"

        }
        else{
            productlist[i].style.display="display"
        }
    }
})