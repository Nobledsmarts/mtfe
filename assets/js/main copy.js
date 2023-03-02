const menuBtn = document.querySelector(".meun-btn");
const menuList = document.querySelectorAll(".top_navli li");

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
    
    if(menuLink) {

        // console.log(menuLink);
        ["mouseenter"].forEach((evnt) => {
            menuList.addEventListener(evnt, (e) => {
                [... document.querySelectorAll(".header-topNav-link")]
                .forEach((link) => link.classList.remove("active"));

                menuLink = e.currentTarget.querySelector(".header-topNav-link");
                // menuLink.classList.remove("active");

                const action = evnt == "mouseenter" ? "add" : "remove";
                const height = evnt  == "mouseenter" ? "398px" : "58px";

                [... document.querySelectorAll(".header-topNav-link")].forEach((link) => {
                   
                    if(link != menuLink) {
                        link.classList.remove("active");
                        menuList.querySelector(".header-topNav-con").classList.remove("opend")
                    } else {
                        
                        link.classList.add("active");
                        menuList.querySelector(".header-topNav-con").classList.add("opend");
                        console.log(menuList.querySelector(".header-topNav-con"));

                    }
                });

                menuLink.classList[action]("active");

                menuList.querySelector(".header-topNav-con").classList[action]("opend");
                document.querySelector(".header-nav").style.height = height;
            });
        })

    // menuLink.addEventListener("mouseenter", (e) => {
    //     e.currentTarget.classList.add("active");
    //     menuList.querySelector(".header-topNav-con").classList.add("opend");
    //     document.querySelector(".header-nav").style.height = "398px";
    // });

    // menuLink.addEventListener("mouseleave", (e) => {
    //     e.currentTarget.classList.remove("active")
    //     menuList.querySelector(".header-topNav-con").classList.remove("opend");
    //     document.querySelector(".header-nav").style.height = "58px";

    // });

    }
})

document.querySelector(".jt_close_icon").addEventListener("click", (e) => {
    document.querySelector(".TrumpBiden_div").classList.remove("TrumpBiden_div_open");
    e.currentTarget.style.display = "none";
    document.querySelector(".jt_open_icon").style.display = "";
});

document.querySelector(".jt_open_icon").addEventListener("click", (e) => {
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
