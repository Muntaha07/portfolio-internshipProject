// ScrollTrigger
function show(){
  gsap.registerPlugin();
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();}
  
  show()





let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}


// gsp 

    function loader() {
      var time = gsap.timeline();
      time.to("#loader #box", {
        top: "50%",
        duration: 0,
      });
      time.from("#loader .circle", {
        y: -500,
        duration: 2,
        ease: "bounce.out",
        stagger: 0.07,
        opacity: 0,
      });
      time.to("#loader", {
        height: 0,
        duration: 1,
        ease: Expo.easeInOut,
        // delay: 1,
        opacity: 0,
      });
      time.from(".logo , .navbar a", {
        y: -100,
    opacity: 0,
    delay: -1,
    duration: 0.9,
    stagger: 0.1,
     
      })

      time.from(".social ,.home-img,.home-text,home-text", {
        x: -100,
        opacity: 0,
        duration: 0.9,
        stagger: 0.3,
      })
    }
    loader();

   
   

      let t2 = gsap.timeline() 
      t2.from(".about-img",{

        x: -50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.3,
        scrollTrigger: {
          trigger: (".about-img"),
          scroller: ("body"),
          start: "top 80%",
          
          scrub:3,
        },
        
      })
      t2.from(".heading,.about-text",{

        x: 100,
        opacity: 0,
        duration: 0.9,
        stagger: 0.3,
        scrollTrigger: {
          trigger: (".heading,.about-text"),
          scroller: ("body"),
          start: "top 90%",
          pin: true,
          scrub:3,
        },
        
      })
      t2.from(".skills",{

        x: 100,
        duration: 0.9,
        stagger: 0.3,
        scrollTrigger: {
          trigger: (".skills"),
          scroller: ("body"),
          start: "top 80%",
          scrub:5,
          
        },
        
      })
      // *******************************************************
      // MUNTAHA MAJEED FRONTEND DEVELOPMENT  LeARNER
     
     
      