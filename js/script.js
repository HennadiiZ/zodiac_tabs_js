

const tabs = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelector('.tabcontainer');
const tabContent = document.querySelectorAll('.tabcontent');

function hideTabContent(){
            tabContent.forEach((tab,i)=>{
                        tab.classList.add('hide');
                        tab.classList.remove('show', 'fade');
            });
        
            tabs.forEach((tab,i)=>{
                        tab.classList.remove('tabheader__item_active');
            });
};


function showTabContent(i=0){

    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');

    tabs[i].classList.add('tabheader__item_active');
};

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (e)=>{

    if(e.target && e.target.classList.contains('tabheader__item')){


        tabs.forEach((item,i)=>{
            if(item == e.target){ 
                hideTabContent();
                showTabContent(i); 
            }
        })
    }
})

