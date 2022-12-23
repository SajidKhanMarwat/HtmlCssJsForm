const display = document.querySelector("#imgDisp");
const input = document.querySelector("#Imginput");
let img = document.querySelector("img");
let btn = document.getElementById('up');
let btn2 = document.getElementById('del');

btn.addEventListener("click", () => {
    let reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.addEventListener("load", () => {
        display.innerHTML = `<img src=${reader.result} id = "noIMG" alt=''/>`;
    });
});
btn2.addEventListener("click", () => {
    document.getElementById("noIMG").src = "images/no_image.png";
})
    


var out1 = document.getElementById("fname")
var out2 = document.getElementById("lname")
var out3 = document.getElementById("birthday")
var out4 = document.getElementById("country")
var out5 = document.getElementById("district")
var out6 = document.getElementById("inumber")
var out7 = document.getElementById("fathername")
var out8 = document.getElementById("religion")
var out9 = document.getElementById("province")

const btn3 = document.getElementById('btn');
let hide1 = document.getElementById('1st');
let show1 = document.getElementById('2nd');


function AddRow()
{
    if(out1.value=="")
    {
        alert("Fill all reqiured fields!")
    }
    else if(out2.value=="")
    {
        alert("Fill all reqiured fields!")
    }
    else if(out3.value=="")
    {
        alert("Fill all reqiured fields!")
    }
    else if(out4.value=="")
    {
        alert("Fill all reqiured fields!")
    }
    else if(out5.value=="")
    {
        alert("Fill all reqiured fields!")
    }
    else if(out6.value=="")
    {
        alert("Fill all reqiured fields!")
    }
    else if(out7.value=="")
    {
        alert("Fill all reqiured fields!")
    }
    else if(out8.value=="")
    {
        alert("Fill all reqiured fields!")
    }
    else if(out9.value=="")
    {
        alert("Fill all reqiured fields!")
    }
    else
    {
        hide1.style.display = 'none';
        show1.style.display = 'block';
    
        document.getElementById("fnD").innerHTML = out1.value;
        document.getElementById("lnD").innerHTML = out2.value;
        document.getElementById("dbD").innerHTML = out3.value;
        document.getElementById("cD").innerHTML = out4.value;
        document.getElementById("dD").innerHTML = out5.value;
        document.getElementById("iD").innerHTML = out6.value;
        document.getElementById("fathernD").innerHTML = out7.value;
        document.getElementById("rD").innerHTML = out8.value;
        document.getElementById("pD").innerHTML = out9.value;
    }
   
   
}

btn3.addEventListener("click", AddRow);
