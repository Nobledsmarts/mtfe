$(document).ready(function () {
    $('.records').DataTable();
});

var triggerTabList = [].slice.call(document.querySelectorAll('#trade-options a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.tabs-container .tabs.active');
    const activeTabRects = activeTab.getBoundingClientRect();
    const activeTabWidth = activeTabRects.width;
    const leftPos = activeTabRects.left;
    const tabsContainer = document.querySelector(".tabs-container");
    const scrollWidth = tabsContainer.scrollWidth;

    // document.querySelector(".tabs-container").scrollWidth
    // const indicatorOffset = (leftPos + (activeTabWidth / 2)) - (indicatorWidth / 2);
    // 
    // console.log(leftPos + (activeTabWidth / 2))

    if(scrollWidth > (leftPos / 2)) {
        tabsContainer.scroll({
            top : 0,
            left : activeTabWidth,
            behavior : "smooth"
        })
    }

    

    // console.log("clientWidth", document.body.clientWidth);
    console.log("leftPos", leftPos);
    console.log("scrollWidth", scrollWidth);

    console.log((document.body.clientWidth - leftPos) > activeTabWidth);
})

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs-container .tabs");

    [... tabs].forEach((tab) => {
        tab.addEventListener("click", setActiveTab);
    })
    // ocument.querySelector(".tabs-container").scroll(0, 0);
});

function setActiveTab(event){
    const activeTab = event.currentTarget;
    const indicator = document.querySelector(".tab-indicator");
    // const {  width : indicatorWidth } = indicator.getBoundingClientRect();

    const { width : activeTabWidth } = activeTab.getBoundingClientRect();
    // const { x : activeTabXOffset, width : activeTabWidth } = activeTab.getBoundingClientRect();

    const activeTabXOffset = activeTab.offsetLeft
    // console.log("activeTabXOffset", activeTabXOffset);
    // console.log("activeTabWidth", activeTabWidth);
    // console.log("indicatorWidth", indicatorWidth);
    // console.log(rect);

    // const indicatorOffset = (activeTabXOffset + (activeTabWidth / 2)) - (indicatorWidth / 2);

    // console.log("indicatorOffset", indicatorOffset);

    // indicator.animate([
    //     {
    //         transform : `translateX(${indicatorOffset}px)`
    //     }
    // ], { duration : 200, fill : "forwards"});

    document.querySelector('.tabs-container .tabs.active').classList.remove("active");

    activeTab.classList.add("active");

    const tabsContainer = document.querySelector(".tabs-container");
    const scrollWidth = tabsContainer.scrollWidth;

    console.log(activeTab.getBoundingClientRect());
    console.log(scrollWidth);

    if((scrollWidth / 2) > (activeTabXOffset)) {
        tabsContainer.scroll({
            top : 0,
            left : -(activeTabXOffset + activeTabWidth),
            behavior : "smooth"
        })
    } else {
        tabsContainer.scroll({
            top : 0,
            left : (activeTabXOffset + activeTabWidth),
            behavior : "smooth"
        })
    }

    // [... document.querySelectorAll(".tabs-container .tabs")].forEach((tab) => {
    //     if(tab !== activeTab){
    //         tab.classList.remove('')
    //     }
    // });
    // alert(activeTab.textContent);
}