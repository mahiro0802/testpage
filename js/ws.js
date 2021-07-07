async function add(comment,name,id,item,itemimg,icon){
    var dd = document.getElementsByClassName("tw-comment-item")[0];
    var script = document.createElement("div");
    script.setAttribute("class", "tw-comment-item");
    script.setAttribute("data-type", "other");
    document.getElementById("sc").insertBefore(script,dd);
    
    var addicon = document.createElement("a");
    addicon.setAttribute("class","tw-comment-item-icon");
    addicon.setAttribute("href","https://twitcasting.tv/" + id);
    addicon.setAttribute("target","_blank");
    document.getElementsByClassName("tw-comment-item")[0].appendChild(addicon);
    
    var commentbody = document.createElement("div");
    commentbody.setAttribute("class","tw-comment-item-body");
    document.getElementsByClassName("tw-comment-item")[0].appendChild(commentbody);

    var imgicon = document.createElement("img");
    imgicon.setAttribute("class","");
    imgicon.setAttribute("src",icon);
    document.getElementsByClassName("tw-comment-item-icon")[0].appendChild(imgicon);

    var iteminfo = document.createElement("div");
    iteminfo.setAttribute("class","tw-comment-item-name-info");
    document.getElementsByClassName("tw-comment-item-body")[0].appendChild(iteminfo);

    var commentimg = document.createElement("div");
    commentimg.setAttribute("class","tw-comment-item-attachment");
    document.getElementsByClassName("tw-comment-item-body")[0].appendChild(commentimg);

    var now = new Date();
    var month = now.getMonth() + 1;
    var time = now.getFullYear() + "/" + month + "/" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var comehon = document.createElement("div");
    comehon.setAttribute("class","tw-item-comment");
    comehon.setAttribute("title",time);
    document.getElementsByClassName("tw-comment-item-body")[0].appendChild(comehon);
    document.getElementsByClassName("tw-item-comment")[0].innerHTML = comment;

    var timy = document.createElement("time");
    timy.setAttribute("class","tw-comment-item-date");
    timy.setAttribute("data-kind","relative");
    timy.setAttribute("data-lang","ja");
    timy.setAttribute("datetime",time);
    document.getElementsByClassName("tw-comment-item-body")[0].appendChild(timy);
    document.getElementsByClassName("tw-comment-item-date")[0].innerHTML = time;

    var wap = document.createElement("div");
    wap.setAttribute("class","tw-comment-item-name-wrapper");
    document.getElementsByClassName("tw-comment-item-name-info")[0].appendChild(wap);

    var namebody = document.createElement("div");
    namebody.setAttribute("class","tw-comment-item-name-body");
    document.getElementsByClassName("tw-comment-item-name-wrapper")[0].appendChild(namebody);

    var namee = document.createElement("a");
    namee.setAttribute("class","tw-comment-item-name");
    namee.setAttribute("href","https://twitcasting.tv/" + id);
    namee.setAttribute("target","_blank");
    document.getElementsByClassName("tw-comment-item-name-body")[0].appendChild(namee);
    document.getElementsByClassName("tw-comment-item-name")[0].innerHTML = name + "&nbsp;";

    var mizikamenospan = document.createElement("span");
    mizikamenospan.setAttribute("class","tw-comment-item-screen-id");
    document.getElementsByClassName("tw-comment-item-name-body")[0].appendChild(mizikamenospan);
    document.getElementsByClassName("tw-comment-item-screen-id")[0].innerHTML = "@" + id;

    var itmim = document.createElement("img");
    itmim.setAttribute("src",itemimg);
    document.getElementsByClassName("tw-comment-item-attachment")[0].appendChild(itmim);
}
function wsconect(url) { 
    var ws = new WebSocket(url + "&gift=1");
    ws.addEventListener("message",function (event){
        var par = JSON.parse(event.data);
        var check = document.getElementById("tea_baku").checked;
        if(check == 1){
            if(par[0].type == "gift"){
                if(par[0].item.name == "お茶爆50" || "お茶爆100" || "お茶爆500"){
                    add(par[0].message,par[0].sender.name,par[0].sender.screenName,par[0].item.name,par[0].item.image,par[0].sender.profileImage);
                }
            }
        }
        else{
            if(par[0].type == "gift"){
                add(par[0].message,par[0].sender.name,par[0].sender.screenName,par[0].item.name,par[0].item.image,par[0].sender.profileImage);
            }
        }
        
        
        //document.getElementById("wsstatus").innerHTML = "接続中";
    })
}

function par(){
    
}

/*window.onload = function(){
    wsconect();
}*/
