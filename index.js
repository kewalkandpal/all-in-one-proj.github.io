
"use strict";

const noOfPara = document.querySelector(".noOfPara");
const btn = document.querySelector(".btn");
const showpPara = document.querySelector(".showpPara");

const data = [
    "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
    "kewal ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
    "navin ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
    "yogesh ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
    "kamal ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
    "kamal ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
    "kamal ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
    "kamal ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
    "kamal ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
    "kamal ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatibus tempora quaerat alias, labore ipsum dolore nam aliquam odio adipisci? alias, labore ipsum dolore nam aliquam odio adipisci?",
];

btn.addEventListener("click" , ()=>{
    let randomPara = Math.floor(Math.random() * data.length);
    let myNo = Number(noOfPara.value);
    // console.log(myNo);
    if(isNaN(myNo) || myNo <=0 || myNo >10){
        showpPara.innerHTML = `<p>${data[randomPara]}</p>`;
    }else{
        let valueOfPara = data.slice(0, myNo);
        // console.log(valueOfPara);
       valueOfPara = valueOfPara.map((eachValue)=>{
            return `<p>${eachValue}</p>`
       }).join("");
       showpPara.innerHTML = valueOfPara;
    }
});


/////////////////////// Slider //////////////////////

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

slides.forEach((slide,index)=>{
    slide.style.left = `${100 * index}%`
});
let count = 0;
prev.addEventListener("click",()=>{
    count--;
    slider(slides);
});
next.addEventListener("click",()=>{
    count++;
    slider();
});


prev.style.display = "none";

function slider(){
 
    if(count < slides.length -1){
        next.style.display = "block";
    }else{
        next.style.display = "none";
    }
    if(count > 0){
        prev.style.display="block";
    }else{
        prev.style.display="none";
    }

    slides.forEach((slide)=>{
        slide.style.transform =`translateX(-${count * 100}%)`;
    });
};


////////////////////////// Form Validation ///////////////////////

function validation(){

    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("re-password").value;
    var mobile = document.getElementById("mobile").value;
    var mail = document.getElementById("mail").value;

    if(user==""){
        setTimeout(()=>{
            document.getElementById("usermsg").innerHTML="please fill the username.";
        },100)
         setTimeout(()=>{
            document.getElementById("usermsg").innerHTML="";
        },2000)
        return false;
    }
    if(user.length <=2 || user.length >20){
             setTimeout(()=>{
                document.getElementById("usermsg").innerHTML="Name is invalid. ";
        },100)
         setTimeout(()=>{
            document.getElementById("usermsg").innerHTML="";
        },2000)
      
        return false;
    }
    if(!isNaN(user)){
        setTimeout(()=>{
            document.getElementById("usermsg").innerHTML="Name is invalid. ";
    },100)
    setTimeout(()=>{
        document.getElementById("usermsg").innerHTML="";
    },2000)
        return false;
    }

    if(password==""){
        setTimeout(()=>{
            document.getElementById("passmsg").innerHTML="please fill the password.";
    },100)
    setTimeout(()=>{
        document.getElementById("passmsg").innerHTML="";
    },2000)
       
        return false;
    }

    if(password.length < 5 || password.length >= 15){
        setTimeout(()=>{
            document.getElementById("passmsg").innerHTML="Password must be 5 characters.";
    },100)
    setTimeout(()=>{
        document.getElementById("passmsg").innerHTML="";
    },2000)
       
        return false;
    }
    if(repassword !== password){
        setTimeout(()=>{
            document.getElementById("repassmsg").innerHTML="Password not matching please re-enter.";
    },100)
    setTimeout(()=>{
        document.getElementById("repassmsg").innerHTML="";
    },2000)
       
        return false;
    }

    if(mobile==""){
        setTimeout(()=>{
            document.getElementById("mobmsg").innerHTML="please fill the phone number.";
    },100)
    setTimeout(()=>{
        document.getElementById("mobmsg").innerHTML="";
    },2000)
       
        return false;
    }

    if(mobile.length!=10){
        setTimeout(()=>{
            document.getElementById("mobmsg").innerHTML="invalid phone no.";
    },100)
    setTimeout(()=>{
        document.getElementById("mobmsg").innerHTML="";
    },2000)
        
        return false;
    }

    if(mail==""){
        setTimeout(()=>{
            document.getElementById("mailmsg").innerHTML="please fill the e-mail.";
    },100)
    setTimeout(()=>{
        document.getElementById("mailmsg").innerHTML="";
    },2000)
        
        return false;
    }
    if(mail.indexOf("@") <=0){
        setTimeout(()=>{
            document.getElementById("mailmsg").innerHTML="Invalid e-mail.";
    },100)
    setTimeout(()=>{
        document.getElementById("mailmsg").innerHTML="";
    },2000)
        
        return false;
    }
if(mail.charAt(mail.length -4)!="." && mail.charAt(mail.length-3)!="."){
    setTimeout(()=>{
        document.getElementById("mailmsg").innerHTML="Invalid e-mail.";
    },100)
    setTimeout(()=>{
        document.getElementById("mailmsg").innerHTML="";
    },2000)
       
        return false;
    }
}

/////////////////////// Css Property /////////////////////


let counting = 1;
let countLetter = 65;

const counter = (type)=>{
    if(type === "increment" && counting < 26 ){
        counting++;
        countLetter++;
    }
    else if(type === "decrement" && counting > 1){
        counting--;
        countLetter--;
    }
    displayCount();
    countAlfa();
    displaProperties();
};

const displayCount = ()=>{
    document.querySelector('.count').innerHTML =  addZero(counting);
};

const countAlfa = ()=>{
    document.querySelector(".alfa").innerHTML = String.fromCharCode(countLetter);
};
const addZero = (count)=>{
    if(count < 10){
       return "0" + count;
    }else{
        return count;
    }
};


let cssProperty = Object.getOwnPropertyNames(document.body.style);

String.prototype.getProperty = function(){
    let propertyName = "";
 this.split("").forEach((curval)=>{
     if(curval.match(/[A-Z]/g)){
        propertyName+= "-" + curval.toLowerCase();
     }
     else{
         propertyName+= curval;
     }
 });
 return propertyName;
};

cssProperty = cssProperty.map((curVal)=> curVal.getProperty());

const displaProperties = ()=>{
    const filterAlfa = cssProperty.filter((curvalue)=>{
        return curvalue.startsWith(String.fromCharCode(countLetter).toLowerCase());
    })
    let text = '';
    filterAlfa.map((curvalue)=>{
        text+= `<p>${curvalue}</p>`;
    })
    document.querySelector(".showProperty").innerHTML = text;
};

window.onload = ()=>{
    counter();
};


//////////////////////// Filter Food /////////////////////

const menuData = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMD3Q42LEWpaiHiat0Me36Xg5RlsfRH65sw&usqp=CAU",
        name: "Apple",
        category: "fruit",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://c4.wallpaperflare.com/wallpaper/537/587/711/fruits-pomegranate-free-images-wallpaper-preview.jpg",
        name: "Pomegranate",
        category: "fruit",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://png.pngitem.com/pimgs/s/55-552214_fruits-banana-png-transparent-png.png",
        name: "Banana",
        category: "fruit",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://www.kindpng.com/picc/m/241-2418809_-orange-bowl-orange-fruit-fruits-and-vegetables.png",
        name: "Orange",
        category: "fruit",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://images.all-free-download.com/images/graphicthumb/vegetable_still_life_05_hd_picture_167404.jpg",
        name: "Panner",
        category: "vegitable",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://picjumbo.com/wp-content/uploads/fresh-amp-colorful-fruits-and-vegetables-2210x1473.jpg",
        name: "Palak",
        category: "vegitable",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://thumbs.dreamstime.com/z/vegetables-1430407.jpg",
        name: "Pee",
        category: "vegitable",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://media.istockphoto.com/photos/healthy-mango-smoothie-picture-id1056675358?k=6&m=1056675358&s=612x612&w=0&h=eD-SyB62LrSsCW4fX3wgV2tMsnMYx2rXvOKpHFsILw8=",
        name: "Mango Shack",
        category: "Shack",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://vegandollhouse.com/images/mint-milkshake/milkshake-with-sprinkles.jpg",
        name: "Banana Shack",
        category: "Shack",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2021-03/Shake.jpg?itok=c8CrCCjv",
        name: "Apple Shack",
        category: "Shack",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://amiraspantry.com/wp-content/uploads/2019/03/easy-fruit-salad-recipe-III.jpg",
        name: "Mix Shack",
        category: "Shack",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
    {
        image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
        name: "Strawberry Shack",
        category: "Shack",
        about: "Lorem, ipsum dolor sit amet con adipisicing elit. Magni, iusto volup. Quidem esse corrupti reprehenderit autem, voluptates nisi dicta tenetur?"
    },
];

const menuItem = document.querySelector(".menuItem");
const btns = document.querySelectorAll(".btns");

window.addEventListener("DOMContentLoaded" , ()=>{
    generateFood(menuData);
});

function generateFood(menuData){
    let data = menuData.map((val)=>{
        return `
        <div class="content">
        <div class="image">
            <img src=${val.image} alt="">
        </div>
        <div class="aboutImage">
             <p>${val.name}</p>
            <p>${val.about}</p>
        </div>
        </div>   
        `;
});
    data = data.join("");
    menuItem.innerHTML = data;
};

btns.forEach((btn)=>{
    btn.addEventListener("click" ,(e)=>{
        let mycategory = e.currentTarget.dataset.id;
        // console.log(mycategory);
        let allFood = menuData.filter((food)=>{
            // console.log(food.category);
            if(food.category === mycategory){
                // console.log(food);
                return food;
            }
        });
        // console.log(allFood);
        if(mycategory === "all"){
            generateFood(menuData);
        }
        else{
            generateFood(allFood);
        }
    });
});


////////////////////////// To-Do-List ////////////////////

const form = document.getElementById("fom");
const input = document.getElementById("input");
const todosul = document.getElementById("list");

const getItem = JSON.parse(localStorage.getItem("storedata"));
if(getItem){
    getItem.forEach(todo =>{
        addTodo(todo);
    });    
}

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    addTodo();
});
function addTodo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }
        
    if(todoText){
        const todoEl = document.createElement("li");
        if(todo && todo.cut){
            todoEl.classList.add("cut");
        }
       
        todoEl.innerText = todoText;
        todoEl.addEventListener("click" , ()=>{
            todoEl.classList.toggle("cut");
            updateLs();
        });
        todoEl.addEventListener("dblclick" , (e)=>{
            todoEl.remove();
            updateLs();
        });
        todosul.appendChild(todoEl);
        input.value = "";
        updateLs();
    }
    }
  

function updateLs(){
    const getli = document.querySelectorAll("li");
    const todos = [];
    getli.forEach(getliEl =>{
        todos.push({
            text: getliEl.innerText,
            completed: getliEl.classList.contains("cut"),
            
        });
    });
    localStorage.setItem("storedata" , JSON.stringify(todos));
}

////////////////////// Review ///////////////////////

const data2 = [
    {
        name: "Neha",
        job: "Designer",
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur neque esse alias."
    },
    {
        name: "Cat",
        job: "UI Designer",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur neque esse alias. amet consectetur adipisicing elit"
    },
    {
        name: "Sara",
        job: "UX Designer",
        image: "https://image.shutterstock.com/image-photo/outdoors-portrait-beautiful-young-girl-260nw-613990049.jpg",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur neque esse alias. Lorem ipsum dolor sit"
    },

];
const myimg = document.getElementById("myimg");
const userName = document.getElementById("userName");
const userJob = document.getElementById("userJob");
const userMsg = document.getElementById("userMsg");
const incre = document.getElementById("incre");
const decre = document.getElementById("decre");
const randomUser = document.getElementById("randomUser");

let cunt = 0;
window.addEventListener("DOMContentLoaded", () => {
    FetchData();
});
// FetchData();
function FetchData(){
    let value = data2[cunt];
    myimg.src = value.image;
    userName.innerText = value.name;
    userJob.innerText = value.job;
    userMsg.innerText = value.msg;  
};
incre.addEventListener("click" , ()=>{
    cunt++;
    if(cunt > data2.length - 1){
        cunt = 0;
    }
    FetchData();
});
decre.addEventListener("click" , ()=>{
    cunt--;
    if(cunt < 0){
       cunt = data2.length - 1;
    }
    FetchData();
});
randomUser.addEventListener("click" , ()=>{
    cunt = Math.floor(Math.random()*data2.length);
    FetchData();
});


///////////////////// Accordien ////////////////////

const title = document.querySelectorAll(".title");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
title.forEach((btn)=>{
    btn.addEventListener("click" , (e)=>{
        let findbtn = e.currentTarget.classList;
        if(findbtn.contains("listone")){
            a.classList.toggle("active");
        }
        else if(findbtn.contains("listtwo")){
            b.classList.toggle("active");
        }
        else if(findbtn.contains("listthree")){
            c.classList.toggle("active");
        }
    });
});

///////////////// Bottom To Top ///////////////

const btnToTop = document.querySelector(".btnToTop");

window.addEventListener("scroll",()=>{
    let getTop = window.scrollY;
    if(getTop > 200){
        btnToTop.style.display = "block";
    }else{
        btnToTop.style.display = "none";
    }
});

const toTop = ()=>{
   document.scrollTop = 0;
   document.documentElement.scrollTop = 0;
};