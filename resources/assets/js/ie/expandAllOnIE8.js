var html=document.getElementsByTagName("html"),ie8=html[0].className.indexOf("ie8")!==-1;if(ie8)for(var ficheItemContactToCollapse=document.querySelectorAll(".fiche-item-content.collapse"),counter=0;counter<ficheItemContactToCollapse.length;counter++){var classFiche=ficheItemContactToCollapse[counter].getAttribute("class");console.log(classFiche),ficheItemContactToCollapse[counter].setAttribute("class",classFiche+"in")}