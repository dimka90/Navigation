const navigation=document.querySelector('.primary-navigation');
const btnToggle=document.querySelector('.btn-img');  


btnToggle.addEventListener("click",()=>{
    const visible=navigation.getAttribute('data-visible');
    const image=document.getElementById('harmburger-menu');
  
    console.log(visible);
    if (visible==="false"){
    
        navigation.setAttribute('data-visible',true);
        image.setAttribute('src','./images/download.jpeg');
    }
    else if(visible==="true"){
        navigation.setAttribute('data-visible',false);  
        image.setAttribute('src','./images/menu.png');
    }

});