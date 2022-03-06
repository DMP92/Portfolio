import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Variables from './Variables';

gsap.registerPlugin(ScrollTrigger);

/**
 * Section 2 animations
*/

// Section 2 H2 pop in
const sect1Header = gsap.timeline(),
mySplitText = new SplitText(".testPara", { type: "words, chars" }),
chars = mySplitText.chars;
gsap.set('.testPara', { perspective: 800 });
gsap.to('.testPara', { color: 'black', opacity: 1 })

// Flip H2 in
sect1Header.from(chars, {
    duration: 1,
    opacity: 0,
    scale: 1,
    y: 100,
    rotationX: 180,
    transformOrigin: "0%, 50% -30",
    ease: "back",
    stagger: .05,
})

// ST for H2 flip in
ScrollTrigger.create({
    animation: sect1Header,
    trigger: ".testPara",
    pin: true,
    toggleActions: "play restart resume none",
    start: "top 15%",
    end: "+=8000",
    onEnter: () => console.log('1')
})

// Change Section2 background color to #2a2a2e on scroll
const changeBackgroundToBlack = gsap.timeline();
changeBackgroundToBlack.to('.section2', {
    backgroundColor: '#2a2a2e',
})
.fromTo('.testPara', 
{
    color: 'black',
},
{
    color: 'white',
})
.fromTo(document.body,
    {
        backgroundColor: 'white'
    },
    {
        backgroundColor: '#2a2a2e'
    })

// ST for bgcolor + header color change
ScrollTrigger.create({
    animation: changeBackgroundToBlack,
    trigger: '.section2',
    scrub: true,
    start: "center center",
    end: "bottom bottom",
    markers: true,
    onEnter: () => console.log('2')
});



// /**
//  * Section 2 onScroll animations
//  */

// Slider elements
const allSlides = gsap.utils.toArray('.slide');

gsap.to(allSlides,
    {
        xPercent: -100 * (allSlides.length - 1),
        ease: "none",
        scrollTrigger: 
        {
            trigger: ".slide-container",
            start: "bottom bottom",
            pin: true,
            scrub: 1,
            snap: 1 / (allSlides.length - 1),
            anticipatePin: 1,
            end: () => "+=" + document.querySelector(".section2").offsetWidth,
        }
    })
    
gsap.fromTo('.testPara',
    {
        xPercent: 0,
        opacity: 1,
    },
    {
        xPercent: -400,
        opacity: 0,
        scrollTrigger:
        {
            trigger: ".slide-container",
            start: "bottom bottom",
            pin: true,
            scrub: 1,
            end: `+=${document.querySelector(".section2").offsetWidth}`
        }
    })
    
gsap.fromTo(document.body,
{
    backgroundColor: '#2a2a2e',
},
{
    backgroundColor: 'white',
    scrollTrigger:
    {
        trigger: '.slide3',
        start: "center top",
        end: "+=500",
        scrub: true
    }
})