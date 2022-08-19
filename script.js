const btnTop = document.getElementById("top")
const nav = document.getElementById("navbar")
const span = document.getElementById("spa")
const proj1 = document.getElementById("proj1")
const proj2 = document.getElementById("proj2")
const proj3 = document.getElementById("proj3")
const proj4 = document.getElementById("proj4")
const proj5 = document.getElementById("proj5")
const proj6 = document.getElementById("proj6")
const proj7 = document.getElementById("proj7")
const proj8 = document.getElementById("proj8")
const proj9 = document.getElementById("proj9")
const proj10 = document.getElementById("proj10")
const proj11 = document.getElementById("proj11")
const proj12 = document.getElementById("proj12")
const proj13 = document.getElementById("proj13")
const hov1 = document.getElementById("hov1")
const hov2 = document.getElementById("hov2")
const hov3 = document.getElementById("hov3")
const hov4 = document.getElementById("hov4")
const hov5 = document.getElementById("hov5")
const hov6 = document.getElementById("hov6")
const hov7 = document.getElementById("hov7")
const hov8 = document.getElementById("hov8")
const hov9 = document.getElementById("hov9")
const hov10 = document.getElementById("hov10")
const hov11 = document.getElementById("hov11")
const hov12 = document.getElementById("hov12")
const hov13 = document.getElementById("hov13")
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

proj7.addEventListener("mouseover", ()=>{
    hov7.style.top = "0%";
})
proj7.addEventListener("mouseout", ()=>{
    hov7.style.top = "100%";
})

//-----

proj8.addEventListener("mouseover", ()=>{
    hov8.style.top = "0%";
})
proj8.addEventListener("mouseout", ()=>{
    hov8.style.top = "100%";
})

//-----

proj9.addEventListener("mouseover", ()=>{
    hov9.style.top = "0%";
})
proj9.addEventListener("mouseout", ()=>{
    hov9.style.top = "100%";
})

//-----

proj10.addEventListener("mouseover", ()=>{
    hov10.style.top = "0%";
})
proj10.addEventListener("mouseout", ()=>{
    hov10.style.top = "100%";
})

//-----

proj11.addEventListener("mouseover", ()=>{
    hov11.style.top = "0%";
})
proj11.addEventListener("mouseout", ()=>{
    hov11.style.top = "100%";
})

//-----

proj12.addEventListener("mouseover", ()=>{
    hov12.style.top = "0%";
})
proj12.addEventListener("mouseout", ()=>{
    hov12.style.top = "100%";
})

//-----

proj13.addEventListener("mouseover", ()=>{
    hov13.style.top = "0%";
})
proj13.addEventListener("mouseout", ()=>{
    hov13.style.top = "100%";
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
    }else {
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
    delay: 3000,
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
    }else{
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
    }else{
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
    }else{
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
    }else{
        mensagemI.style.border = "solid 3px #6f00ff";
        mensagemI.style.boxShadow = "0 0 10px #6f00ffab";
        error4.style.display = "none";
        erroricon4.style.display = "none";
    }
}