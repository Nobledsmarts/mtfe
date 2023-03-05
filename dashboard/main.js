const inviteFriends = document.querySelector(".invite-friends");
const ModalshareButton = document.querySelector(".share-referral-button");
const transactionMode = document.querySelector(".transaction-mode");
const transactionModeBoxes = document.querySelectorAll("input[name='transaction-mode']");

transactionModeBoxes.length && [... transactionModeBoxes].forEach((transactionMode) => {
    transactionMode.addEventListener("change", (e) => {
        swal({
            title: "Success",
            text: "Transaction mode has been changed to " + e.currentTarget.value,
            icon: "success",
            button: "dismiss",
        });
    });
})

transactionMode?.addEventListener("click", () => {
    let transactionModeModal = new bootstrap.Modal(document.querySelector("#transaction-mode-modal"), {
        keyboard: false
      });
      
      
    transactionModeModal.show();
});

let referralLink;

if(window.ClipboardJS){
    referralLink = new ClipboardJS('.copy-referral-link');

    referralLink.on('success', function(e) {
        swal({
            title: "Copied",
            text: "Referral link copied to clipboard",
            icon: "success",
            button: "dismiss",
        });
        e.clearSelection();
    });
}


ModalshareButton?.addEventListener("click", async () => {
    const shareData = {
        title: 'MTFE',
        text: 'Get started with mtfe trading platform!',
        url: window.location.href
      }
    try {
        await navigator.share(shareData)
        console.log('shared successfully');
    } catch (err) {
        console.log(`Error: ${err}`);
    }
});


inviteFriends?.addEventListener("click", () => {
    
    let inviteModal = new bootstrap.Modal(document.querySelector('#invite-modal'), {
        keyboard: false
      });
      
      
    inviteModal.show();
});

$(document).ready(function () {
    $('.records').DataTable();
    $('#records').DataTable();
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