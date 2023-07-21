
// regex = ^[A-Z][a-z]*$ ==> site name
// URL =    var expression =/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
// if (ex.test(count.site))
//{ console.log("tamam")}
//else
//{console.log("invalid site")}

var N =document.getElementById("nameSite");
var U =document.getElementById("siteURL");


var count ;
if(localStorage.getItem("mystorge")==null){
    count=[];
}
else{
    count=JSON.parse(localStorage.getItem("mystorge"))
    displaySites()
}
function addsite()
{
    var oneSite={
        name:N.value,
        site:U.value,  
    }
    count.push(oneSite);
    localStorage.setItem("mystorge",JSON.stringify(count));
    displaySites()
    clear()
}
function clear()
{
    N.value="";
    U.value="";
}
function displaySites(){
    var container=``;
    for(var i=0; i<count.length; i++)
    {
        container+=`<tr>
            <td>${i}</td>
            <td>${count[i].name}</td>
            <td>
            <button class="btn btn-outline-warning" id = "myButton" onclick="Visitsites(${i})"><i class="fa-regular fa-eye"></i> Visit</button>
            </td>
            <td>
            <button class="btn btn-outline-danger" onclick="deletesites(${i})">Delete</button>
            </td>
        </tr>`
        
    }
    document.getElementById("tBody").innerHTML=container;

}
function deletesites(Index){
    count.splice(Index,1)
    displaySites();
    localStorage.setItem("mystorge",JSON.stringify(count));
}


function Visitsites(Index) 
{
    var url = count[Index].site;
    console.log(url);
    window.open(url,`_blank`);
    //عندي هنا مشكله بردو 
}

function checkS()
{
    var oneSite=
    {
        name:N.value,
        site:U.value,  
    }
    

    count[currentIndex] =  oneSite;
}  
// function Visitsites(x) {
//   x.addeventlistener("click",function (eInfo) 
//   {
//    var b = eInfo.target(URL);
//     console.log(b);
//   })  
// }
// -------------
// var x= function oo (pp) 
// {
//     console.log(pp);
// }
 
//    x.addeventlistener("click",function (eInfo) 
//   {
//    var b = eInfo.target(href);
//     console.log(b)
//   }
//    )

// function Visitsites(event) {
//     var v = event.this();
//     console.log(v);
//     window.open("https://www.example.com", "_blank");
//   }
  
//   document.getElementById("myButton").addEventListener("click", Visitsites);
///////////////////////////////==========>>>>>>>>>>>>>>>>>>>>>>>>>
//هو دا يبشمهندسه
// var exprN =/regex = ^[A-Z][a-z]*$/
// var exprS =/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
// if (exprN.test(count.name) && exprS.test(count.site))
// {
//     console.log("tamam")
//     addEventListener("click",function() 
//     {
//         N.style.boxShadow ="green";
//         addsite();
        
//     })
// }
// else
// {
//     console.log("invalid site")  
//     addEventListener("click",function() 
//     {
//         N.style.boxShadow ="red" ;
//     })
// }




