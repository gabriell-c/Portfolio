const btnTop = document.getElementById("top")
const nav = document.getElementById("navbar")
const span = document.getElementById("spa")
const li = document.getElementById("li")
const li1 = document.getElementById("li1")
const li2 = document.getElementById("li2")
const li3 = document.getElementById("li3")
const li4 = document.getElementById("li4")
const proj1 = document.getElementById("proj1")
const proj2 = document.getElementById("proj2")
const proj3 = document.getElementById("proj3")
const proj4 = document.getElementById("proj4")
const proj5 = document.getElementById("proj5")
const proj6 = document.getElementById("proj6")
const hov1 = document.getElementById("hov1")
const hov2 = document.getElementById("hov2")
const hov3 = document.getElementById("hov3")
const hov4 = document.getElementById("hov4")
const hov5 = document.getElementById("hov5")
const hov6 = document.getElementById("hov6")
const erroricon1 = document.getElementById("errorIcon1")
const error1 = document.getElementById("error1")
const emailI = document.getElementById("emailI")
const erroricon2 = document.getElementById("errorIcon2")
const error2 = document.getElementById("error2")
const assuntoI = document.getElementById("assuntoI")
const erroricon3 = document.getElementById("errorIcon3")
const error3 = document.getElementById("error3")
const mensagemI = document.getElementById("mensagemI")
const erroricon4 = document.getElementById("errorIcon4")
const error4 = document.getElementById("error4")



const sec2 = document.getElementById("li")
const sec3 = document.getElementById("li1")
const sec4 = document.getElementById("li2")
const sec5 = document.getElementById("li3")
const sec6 = document.getElementById("li4")

const sec2M = document.getElementById("liS")
const sec3M = document.getElementById("li1S")
const sec4M = document.getElementById("li2S")
const sec5M = document.getElementById("li3S")
const sec6M = document.getElementById("li4S")


const navbarM = document.getElementById("navbarS")
const menu = document.getElementById("menuS")
const menuSair = document.getElementById("menuSair")


menu.addEventListener("click", ()=>{
    navbarM.style.top = "0";
})

menuSair.addEventListener("click", ()=>{
    navbarM.style.top = "-900px";
})

window.addEventListener("scroll", scrol)

function hov(){
    li.addEventListener("mouseover" , () =>{
        li.classList.add("liAfter")
    })
    li1.addEventListener("mouseover" , () =>{
        li1.classList.add("liAfter")
    })
    li2.addEventListener("mouseover" , () =>{
        li2.classList.add("liAfter")
    })
    li3.addEventListener("mouseover" , () =>{
        li3.classList.add("liAfter")
    })
    li4.addEventListener("mouseover" , () =>{
        li4.classList.add("liAfter")
    })
}

function out(){
    li.addEventListener("mouseover" , () =>{
        li.classList.remove("liAfter")
    })
    li1.addEventListener("mouseover" , () =>{
        li1.classList.remove("liAfter")
    })
    li2.addEventListener("mouseover" , () =>{
        li2.classList.remove("liAfter")
    })
    li3.addEventListener("mouseover" , () =>{
        li3.classList.remove("liAfter")
    })
    li4.addEventListener("mouseover" , () =>{
        li4.classList.remove("liAfter")
    })
}

proj1.addEventListener("mouseover", ()=>{
    hov1.style.top = "0%";
})
proj1.addEventListener("mouseout", ()=>{
    hov1.style.top = "100%";
})

//-----

proj2.addEventListener("mouseover", ()=>{
    hov2.style.top = "0%";
})
proj2.addEventListener("mouseout", ()=>{
    hov2.style.top = "100%";
})

//-----

proj3.addEventListener("mouseover", ()=>{
    hov3.style.top = "0%";
})
proj3.addEventListener("mouseout", ()=>{
    hov3.style.top = "100%";
})

//-----

proj4.addEventListener("mouseover", ()=>{
    hov4.style.top = "0%";
})
proj4.addEventListener("mouseout", ()=>{
    hov4.style.top = "100%";
})

//-----

proj5.addEventListener("mouseover", ()=>{
    hov5.style.top = "0%";
})
proj5.addEventListener("mouseout", ()=>{
    hov5.style.top = "100%";
})

//-----

proj6.addEventListener("mouseover", ()=>{
    hov6.style.top = "0%";
})
proj6.addEventListener("mouseout", ()=>{
    hov6.style.top = "100%";
})

//-----

btnTop.addEventListener("click", ()=>{
    scroll({
        top: top,
        behavior: "smooth"
    });
})

function scrol() {
    if (window.scrollY > 70) {
        nav.style.backgroundColor = "#6f00ff"
        span.style.color = "#eeeeee";
        btnTop.style.bottom = "5%"
        hov()
    }
    else {
        nav.style.backgroundColor = "transparent"
        span.style.color = "#6f00ff";
        btnTop.style.bottom = "-10%"
        out()
    }
}

const swiper = new Swiper('.swiper.tec', {
    autoplay: {
    delay: 4000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: true,
    centeredSlidesBounds: true,
    
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 60,
        }
    }
});





const swiper2 = new Swiper('.swiper.cert', {
    autoplay: {
    delay: 4000,
    },
    loop: true,
    grabCursor: true,
    spaceBetween: 20,


    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

nameI.addEventListener("blur", ()=>{
    chkN()
})

emailI.addEventListener("blur", ()=>{
    chkE()
})

assuntoI.addEventListener("blur", ()=>{
    chkA()
})

mensagemI.addEventListener("blur", ()=>{
    chkM()
})

const chkN=() =>{
    if(nameI.value == ""){
        nameI.style.border = "solid 3px #ff0026";
        nameI.style.boxShadow = "0 0 10px #ff002670";
        error1.style.display = "block";
        erroricon1.style.display = "block";
        error1.style.color = "#ff0026";
        error1.style.textShadow = "#ff002650";
        erroricon1.style.color = "#ff0026";
        erroricon1.style.textShadow = "#ff002650";
    }
    else{
        nameI.style.border = "solid 3px #6f00ff";
        nameI.style.boxShadow = "0 0 10px #6f00ffab";
        error1.style.display = "none";
        erroricon1.style.display = "none";
    }
}

const chkE=()=>{
    if(emailI.value == ""){
        emailI.style.border = "solid 3px #ff0026";
        emailI.style.boxShadow = "0 0 10px #ff002670";
        error2.style.display = "block";
        erroricon2.style.display = "block";
        error2.style.color = "#ff0026";
        error2.style.textShadow = "#ff002650";
        erroricon2.style.color = "#ff0026";
        erroricon2.style.textShadow = "#ff002650";
    }
    else{
        emailI.style.border = "solid 3px #6f00ff";
        emailI.style.boxShadow = "0 0 10px #6f00ffab";
        error2.style.display = "none";
        erroricon2.style.display = "none";
    }
}

const chkA=()=>{
    if(assuntoI.value == ""){
        assuntoI.style.border = "solid 3px #ff0026";
        assuntoI.style.boxShadow = "0 0 10px #ff002670";
        error3.style.display = "block";
        erroricon3.style.display = "block";
        error3.style.color = "#ff0026";
        error3.style.textShadow = "#ff002650";
        erroricon3.style.color = "#ff0026";
        erroricon3.style.textShadow = "#ff002650";
    }
    else{
        assuntoI.style.border = "solid 3px #6f00ff";
        assuntoI.style.boxShadow = "0 0 10px #6f00ffab";
        error3.style.display = "none";
        erroricon3.style.display = "none";
    }
}

const chkM=()=>{
    if(mensagemI.value == ""){
        mensagemI.style.border = "solid 3px #ff0026";
        mensagemI.style.boxShadow = "0 0 10px #ff002670";
        error4.style.display = "block";
        erroricon4.style.display = "block";
        error4.style.color = "#ff0026";
        error4.style.textShadow = "#ff002650";
        erroricon4.style.color = "#ff0026";
        erroricon4.style.textShadow = "#ff002650";
    }
    else{
        mensagemI.style.border = "solid 3px #6f00ff";
        mensagemI.style.boxShadow = "0 0 10px #6f00ffab";
        error4.style.display = "none";
        erroricon4.style.display = "none";
    }
}

sec2.addEventListener("click", () =>{
    scroll({
        top: 600,
        behavior: "smooth"
    });
})

sec3.addEventListener("click", () =>{
    scroll({
        top: 1230,
        behavior: "smooth"
    });
})

sec4.addEventListener("click", () =>{
    scroll({
        top: 2080,
        behavior: "smooth"
    });
})

sec5.addEventListener("click", () =>{
    scroll({
        top: 4410,
        behavior: "smooth"
    });
})

sec6.addEventListener("click", () =>{
    scroll({
        top: 5350,
        behavior: "smooth"
    });
})






sec2M.addEventListener("click", () =>{
    scroll({
        top: 640,
        behavior: "smooth"
    });
    navbarM.style.top = "-900px";
})

sec3M.addEventListener("click", () =>{
    scroll({
        top: 1640,
        behavior: "smooth"
    });
    navbarM.style.top = "-900px";
})

sec4M.addEventListener("click", () =>{
    scroll({
        top: 2380,
        behavior: "smooth"
    });
    navbarM.style.top = "-900px";
})

sec5M.addEventListener("click", () =>{
    scroll({
        top: 6650,
        behavior: "smooth"
    });
    navbarM.style.top = "-900px";
})

sec6M.addEventListener("click", () =>{
    scroll({
        top: 7070,
        behavior: "smooth"
    });
    navbarM.style.top = "-900px";
})