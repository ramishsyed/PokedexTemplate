function hideType2(){
    var type2Box=document.getElementsByClassName("typecolor2")[0];
    var type2Text=document.getElementsByClassName("type2")[0];
    var type2=document.getElementsByClassName("typebox2")[0];
    type2Box.style.display = "none";
    type2Text.style.display="none";
    type2.style.display="none";
}

function showType2(){
    var type2Box=document.getElementsByClassName("typecolor2")[0];
    var type2Text=document.getElementsByClassName("type2")[0];
    var type2=document.getElementsByClassName("typebox2")[0];
    type2Box.style.display = "block";
    type2Text.style.display="block";
    type2.style.display="block";
}

function changeName(){
    var newText = document.getElementById("newName").value;
    var oldText = document.getElementById("pokemon-name");
    oldText.innerHTML=newText.toString();
}

function changeDesc(){
    var newText = document.getElementById("newDesc").value;
    var oldText = document.getElementById("description");
    oldText.innerHTML=newText.toString();
}

function changeNo(){
    var newText = document.getElementById("newNo").value;
    var oldText = document.getElementById("no");
    oldText.innerHTML=newText.toString();
}

function changeWt(){
    var newText = document.getElementById("newWt").value;
    var oldText = document.getElementById("wt");
    oldText.innerHTML=newText.toString();
}

function changeHt(){
    var newText = document.getElementById("newHt").value;
    var oldText = document.getElementById("ht");
    oldText.innerHTML=newText.toString();
}

function changeDexDesc(){
    var newText = document.getElementById("newDexDesc").value;
    var oldText = document.getElementById("dexdescription");
    oldText.innerHTML=newText.toString();
}

function changeType1(){
    var newText = document.getElementById("newtype1").value;
    var oldText = document.getElementById("type1");
    oldText.innerHTML=newText.toString();
}

function changeType2(){
    var newText = document.getElementById("newtype2").value;
    var oldText = document.getElementById("type2");
    oldText.innerHTML=newText.toString();
}

function changeColor(i){
    var type1 = document.getElementById("typecolor1")
    if (i=="grass"){
        type1.style.backgroundColor = "#7AC74C";
    }
    if (i=="fire"){
        type1.style.backgroundColor = "#EE8130";
    }
    if (i=="water"){
        type1.style.backgroundColor = "#6390F0";
    }
    if (i=="normal"){
        type1.style.backgroundColor = "#A8A77A";
    }
    if (i=="electric"){
        type1.style.backgroundColor = "#F7D02C";
    }
    if (i=="ice"){
        type1.style.backgroundColor = "#96D9D6";
    }
    if (i=="fighting"){
        type1.style.backgroundColor = "#C22E28";
    }
    if (i=="poison"){
        type1.style.backgroundColor = "#A33EA1";
    }
    if (i=="ground"){
        type1.style.backgroundColor = "#E2BF65";
    }
    if (i=="flying"){
        type1.style.backgroundColor = "#A98FF3";
    }
    if (i=="psychic"){
        type1.style.backgroundColor = "#F95587";
    }
    if (i=="bug"){
        type1.style.backgroundColor = "#A6B91A";
    }
    if (i=="rock"){
        type1.style.backgroundColor = "#B6A136";
    }
    if (i=="ghost"){
        type1.style.backgroundColor = "#735797";
    }
    if (i=="dragon"){
        type1.style.backgroundColor = "#6F35FC";
    }
    if (i=="dark"){
        type1.style.backgroundColor = "#705746";
    }
    if (i=="steel"){
        type1.style.backgroundColor = "#B7B7CE";
    }
    if (i=="fairy"){
        type1.style.backgroundColor = "#D685AD";
    }

}

function changeColor2(i){
    var type2 = document.getElementById("typecolor2")
    if (i=="grass"){
        type2.style.backgroundColor = "#7AC74C";
    }
    if (i=="fire"){
        type2.style.backgroundColor = "#EE8230";
    }
    if (i=="water"){
        type2.style.backgroundColor = "#6390F0";
    }
    if (i=="normal"){
        type2.style.backgroundColor = "#A8A77A";
    }
    if (i=="electric"){
        type2.style.backgroundColor = "#F7D02C";
    }
    if (i=="ice"){
        type2.style.backgroundColor = "#96D9D6";
    }
    if (i=="fighting"){
        type2.style.backgroundColor = "#C22E28";
    }
    if (i=="poison"){
        type2.style.backgroundColor = "#A33EA2";
    }
    if (i=="ground"){
        type2.style.backgroundColor = "#E2BF65";
    }
    if (i=="flying"){
        type2.style.backgroundColor = "#A98FF3";
    }
    if (i=="psychic"){
        type2.style.backgroundColor = "#F95587";
    }
    if (i=="bug"){
        type2.style.backgroundColor = "#A6B92A";
    }
    if (i=="rock"){
        type2.style.backgroundColor = "#B6A236";
    }
    if (i=="ghost"){
        type2.style.backgroundColor = "#735797";
    }
    if (i=="dragon"){
        type2.style.backgroundColor = "#6F35FC";
    }
    if (i=="dark"){
        type2.style.backgroundColor = "#705746";
    }
    if (i=="steel"){
        type2.style.backgroundColor = "#B7B7CE";
    }
    if (i=="fairy"){
        type2.style.backgroundColor = "#D685AD";
    }

    
}
