let icon = document.querySelector(".nav_items .icon"),
    nav_item = document.querySelector(".nav_items ul")
icon.addEventListener("click" , ()=>{
  console.log("good")
  nav_item.classList.toggle("active")
})
    




let nav_item_active = document.querySelectorAll(".nav_item li ")
    
nav_item_active.forEach((e)=>{
    e.addEventListener("click",()=>{
        remove()
        e.classList.add("active")
    })
})

function remove(){
  nav_item_active.forEach((e)=>{
        e.classList.remove("active")
    })
}










let slidingDiv = document.querySelector(".slidingDiv"),
    faPlus = document.querySelectorAll(".fa-plus"),
    faXmark = document.querySelectorAll(".fa-xmark");
    slidin_items = document.querySelectorAll(".slidin_items");
    

    faPlus.forEach((e)=>{
      e.addEventListener("click" ,()=>{
        removedf()
        slidingDiv.classList.add("slidingDiv_acitve")
        let cliant = document.querySelector(e.dataset.client);
        cliant.classList.add("sli_active")
        
      })
    })

    faXmark.forEach((e)=>{
      e.addEventListener("click" ,()=>{
        slidingDiv.classList.remove("slidingDiv_acitve")
      })
    })

    function removedf(){
      slidin_items.forEach((x)=>{
      x.classList.remove("sli_active")
      })
    }










    let about_us = document.querySelector(".about_us"),
    about_us_item=document.querySelectorAll(".about_us_item span");
    let header= document.querySelector(".header"),
    triangle= document.querySelectorAll(".triangle"),
    scale= document.querySelectorAll(".about .about_items .about_item");
    let topbuttom = document.getElementById("top")



    function fixdNav(){
        if(window.scrollY >=about_us.offsetTop -300 ){
          about_us_item.forEach(e => {
              e.style.width=e.dataset.wid;
          });
      }else{
        about_us_item.forEach(e => {
          e.style.width="0";
      });
      }
    }
    
    function header_active(){
      if(window.scrollY >= 100 ){
        header.classList.add("header_active")
      }else if (window.scrollY < 100) {
        header.classList.remove("header_active")
      }
    }
    topbuttom.onclick= function(){
      window.scrollTo({
        top : 0 ,
      }) 
    }
    function funtop(){
      if(window.scrollY >= 300 ){
        topbuttom.style.display="block";
      }else {
        topbuttom.style.display="none";
      }
    }


    function triangle_active(){
      triangle.forEach(e => {
        if(window.pageYOffset >= e.offsetTop - 1000){
          e.classList.add("triangle_active")
        }else{
          e.classList.remove("triangle_active")
        }
    });
    }
    function active_scale(){
      scale.forEach(e => {
        if(window.pageYOffset >= e.offsetTop - 500){
          e.classList.add("active_scale")
        }else{
          e.classList.remove("active_scale")
        }
    });
    }




    window.addEventListener("scroll",()=>{
      fixdNav()
      header_active()
      triangle_active()
      active_scale()
      funtop()
    })   











    let switcher = document.querySelectorAll(".switcher li") ,
    gallery=document.querySelectorAll(".gallery li");


    switcher.forEach((li)=>{
        li.addEventListener("click",removeactive )
        li.addEventListener("click",imgdelet  )

    })


    function removeactive(){
        switcher.forEach((li)=>{
            li.classList.remove("active")
            this.classList.add("active")
            
        })
    }


    function imgdelet(){
        gallery.forEach((img)=>{
            img.classList.remove("imgactive");
        })
        setTimeout(() => {
            document.querySelectorAll(this.dataset.cart).forEach((el)=>{
                el.classList.add("imgactive");
            })
        }, 1);


    }















    
    var swiper_two = new Swiper(".swiper_two", {
      slidesPerView: 5,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      // loopFillGroupWithBlank: true,
      // pagination: {
      // el: ".swiper-pagination",
      // clickable: false,
      // },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          // when window width is >= 320px
          220: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          320: {
              slidesPerView: 2,
              spaceBetween: 10
          },
          // when window width is >= 480px
          480: {
              slidesPerView: 3,
              spaceBetween: 10
          },
          // when window width is >= 640px
          740: {
              slidesPerView: 4,
              spaceBetween: 20
          },
          800: {
              slidesPerView: 5,
              spaceBetween: 20
          }
      }
  });





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 600,
  parallax: true,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
