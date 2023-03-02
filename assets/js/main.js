const menuBtn = document.querySelector(".meun-btn");
const menuList = document.querySelectorAll(".top_navli li");
const collapseItems = document.querySelectorAll(".el-collapse-item");

[...collapseItems].forEach((collapseItem) => {
    collapseItem.addEventListener("click", (e) => {
        const targetElm = e.currentTarget;

        const isActive  = targetElm.classList.contains("is-active");
        const action = isActive ? "remove" : "add";
   
        targetElm.classList[action]("is-active");
        targetElm.querySelector(".el-collapse-item__header").classList[action]("is-active");
        targetElm.querySelector(".el-collapse-item__arrow").classList[action]("is-active");

        // el-collapse-item__arrow el-icon-arrow-right is-active
        targetElm.querySelector(".el-collapse-item__wrap").style = isActive ? "display : none" : "";
        
       
    })
})

document.querySelector(".scroll_top_btn_click").addEventListener("click", () => {
    window.scrollTo({ top : 0, behavior : "smooth"});
});

window.addEventListener("DOMContentLoaded", () => {
    AOS && AOS.init();
});

window.addEventListener("scroll", () => {
    const {y : bodyScrollOffset} = document.body.getBoundingClientRect();
    const headerNav =  document.querySelector(".header-nav");
    const {height : navHeight} = headerNav.getBoundingClientRect();
    const action =  navHeight > Math.abs(bodyScrollOffset) ? "add" : "remove";

    return headerNav.classList[action]("indexStyle");
});


[... menuList].forEach((menuList) => {
    let menuLink = menuList.querySelector(".header-topNav-link");
   
    if(menuLink){
        menuList.addEventListener("mouseover", (e) => {
            menuLink = e.currentTarget.querySelector(".header-topNav-link");
            
            // alert("mm");
            let menuLinks = document.querySelectorAll(".header-topNav-link");

            [... document.querySelectorAll(".header-topNav-con")].forEach((el) => {
                el.classList.remove("opend");
            });
            [... document.querySelectorAll(".header-topNav-link")].forEach((mLink) => {
                return mLink == menuLink ? mLink.classList.add("active") : mLink.classList.remove("active");
            });
            menuLink.nextElementSibling.classList.add("opend");
            document.querySelector(".header-nav").style.height = "398px";
        });

        const leaveEvent = () => {
            menuLink.nextElementSibling.classList.remove("opend");
            document.querySelector(".header-nav").style.height = "58px";
        }
        
        document.querySelector(".header-nav").addEventListener("mouseleave", () => {
            leaveEvent();
        });
        // menuList.addEventListener("mouseleave", (e) => {
        //     alert("uppp");
        //     menuLink = e.currentTarget.querySelector(".header-topNav-link");
            
        //     // alert("mm");
        //     let menuLinks = document.querySelectorAll(".header-topNav-link");

        //     // [... document.querySelectorAll(".header-topNav-con")].forEach((el) => {
        //     //     el.classList.remove("opend");
        //     // });
        //     // [... document.querySelectorAll(".header-topNav-link")].forEach((mLink) => {
        //     //     return mLink == menuLink ? mLink.classList.add("active") : mLink.classList.remove("active");
        //     // });
        //     menuLink.nextElementSibling.classList.remove("opend");
        //     document.querySelector(".header-nav").style.height = "58px";
        // });
        // console.log(menuLink);
    }
})

document.querySelector(".jt_close_icon")?.addEventListener("click", (e) => {
    document.querySelector(".TrumpBiden_div").classList.remove("TrumpBiden_div_open");
    e.currentTarget.style.display = "none";
    document.querySelector(".jt_open_icon").style.display = "";
});

document.querySelector(".jt_open_icon")?.addEventListener("click", (e) => {
    document.querySelector(".TrumpBiden_div").classList.add("TrumpBiden_div_open");
    e.currentTarget.style.display = "none";
    document.querySelector(".jt_close_icon").style.display = "";
});


// document.querySelector(".m-menu").style.height

menuBtn.addEventListener("click", () => {
    const menu = document.querySelector(".m-menu");
    const menuBtn = document.querySelector(".meun-btn");

    const hamburgerLines = [... menuBtn.querySelector(".css-570oto.epdric71").children];

    // menu.classList.toggle("active")

    if(menu.classList.contains("active")){

        // menu.animate([{
        //     height : "0px"
        // }], { duration : 1000, fill : "forwards" });

        menu.classList.remove("active");

        menuBtn.querySelector(".css-570oto.epdric71").style.height = "18px";
        console.log(menuBtn.children);

        hamburgerLines.forEach((hamburgerLine) => {
            hamburgerLine.classList.remove("css-1harwl7");
            hamburgerLine.classList.add("css-who1rx");

        })
        
    } else {
        hamburgerLines.forEach((hamburgerLine) => {
            hamburgerLine.classList.remove("css-who1rx");
            hamburgerLine.classList.add("css-1harwl7");
          

        })
        // menu.animate([{
        //     height : "auto"
        // }], { duration : 1000, fill : "forwards" });
       
        // menu.style.height = "auto";
        menu.classList.add("active");

        menuBtn.querySelector(".css-570oto.epdric71").style.height = "3px";
    }
});
