var element=document.getElementsByTagName("div");
var element1=element[0];
var div0=document.createElement("div");
var div1=document.createElement("div");
var div2=document.createElement("div");
var div3=document.createElement("div");
// div0.setAttribute("class","item" );
// div1.setAttribute("class","item" );
// div2.setAttribute("class","item" );
// div3.setAttribute("class","item" );
// element1.appendChild(div0);
// element1.appendChild(div1);
// element1.appendChild(div2);
// element1.appendChild(div3);

var div=new Array();
div[0]=div0;
div[1]=div1;
div[2]=div2;
div[3]=div3;
window.onload=function(){
for (let i = 0;i < 4;i++) {
    element1.appendChild(div[i]);
    div[i].setAttribute("class","item" );
    let node =document.createTextNode(countries[i].name);
    let h2=document.createElement("h2");
    div[i].appendChild(h2);
    h2.appendChild(node);
    let h3=document.createElement("h3");
    let node2 =document.createTextNode(countries[i].continent);
    div[i].appendChild(h3);
    h3.appendChild(node2);
    let ul=document.createElement("ul");
    div[i].appendChild(ul);
    let node3 = document.createTextNode("Cities");
    ul.appendChild(node3);
    for (let j = 0; j < countries[i].cities.length; j++) {
        let li=document.createElement("li");
        ul.appendChild(li);
        let node4 = document.createTextNode(countries[i].cities[j]);
        li.appendChild(node4);
    }
    ul.setAttribute("class","inner-box");
    let p2=document.createElement("ul");
    div[i].appendChild(p2);
    let li2 =document.createElement("li");
    let li3 =document.createElement("li");
    let node5 = document.createTextNode("Popular Photos");
    li2.appendChild(node5);
    for (let k =0;k <countries[i].photos.length;k++){
        let img=document.createElement("img");
        let src="images"+"/"+ countries[i].photos[k];
        img.setAttribute("src",src);
        img.setAttribute("class","photo");
        li3.appendChild(img)
    }
    p2.appendChild(li2);
    p2.appendChild(li3);
    p2.setAttribute("class","inner-box");
    let bt=document.createElement("button");
    bt.innerHTML="Visit";
    div[i].appendChild(bt);
}
}