
    document.getElementById("click-here").addEventListener("click", display);

function display(){
    document.getElementById("about-me").style.display="block";
    document.getElementById("skills").style.display="block";
    document.getElementById("education").style.display="block";
    document.getElementById("contact").style.display="block";
    document.getElementById("caption").style.animation="mymove 3s forwards";
};





let scroll = document.querySelector("button.scroll");

window.addEventListener("scroll", e =>{
    if(window.scrollY>500){
        scroll.classList.add("show");
    } else{
        scroll.classList.remove("show");
    }
});

scroll.addEventListener("click", e =>{
    if(scroll.classList.contains("show")){
        window.scrollTo({top:0, behavior:"smooth"});
    }
})



let aboutMe = document.querySelector("button.btn-about-me");

window.addEventListener("scroll", e =>{
    if(window.scrollY>300){
        aboutMe.classList.add("show");
    } else{
        aboutMe.classList.remove("show");
    }
});

aboutMe.addEventListener("click", e =>{
    if(aboutMe.classList.contains("show")){
        document.querySelector("#main-about-me").scrollIntoView({top:0, behavior:"smooth"});
    }
})


let skills = document.querySelector("button.btn-skills");

window.addEventListener("scroll", e =>{
    if(window.scrollY>300){
        skills.classList.add("show");
    } else{
        skills.classList.remove("show");
    }
});

skills.addEventListener("click", e =>{
    if(skills.classList.contains("show")){
        document.querySelector("#main-skills").scrollIntoView({top:0, behavior:"smooth"});
    }
})


let education = document.querySelector("button.btn-education");

window.addEventListener("scroll", e =>{
    if(window.scrollY>300){
        education.classList.add("show");
    } else{
        education.classList.remove("show");
    }
});

education.addEventListener("click", e =>{
    if(education.classList.contains("show")){
        document.querySelector("#main-education").scrollIntoView({top:0, behavior:"smooth"});
    }
})

let contact = document.querySelector("button.btn-contact");

window.addEventListener("scroll", e =>{
    if(window.scrollY>300){
        contact.classList.add("show");
    } else{
        contact.classList.remove("show");
    }
});

contact.addEventListener("click", e =>{
    if(contact.classList.contains("show")){
        document.querySelector("#main-contact").scrollIntoView({top:0, behavior:"smooth"});
    }
});















