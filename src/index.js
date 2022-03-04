import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from './THREE.js';
import { NoToneMapping } from 'three';
import menu from './menu.js';


const section1 = document.querySelector('.canvas');
const sect = {
    ele: section1,
    win: window,
    doc: document,
};

const body = document.body;

/**
 * Options
 */
gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);

/**
 * Onload animations
 */
window.addEventListener('load', () => 
{
    body.classList.add('stop-scroll');
    // Header slide in
    gsap.fromTo(".section1", 
    {
        x: "-100%",
        
    },
    {
        x: "0%",
        duration: 1,
        ease: "power4.out",
    });

    // Header buttons fade in
    gsap.fromTo('.sect1CTAContainer',
    {
        opacity: "0%"
    },
    {
        opacity: "100%",
        delay: 2.35
    })

    // Hamburger slide in
    gsap.fromTo('.botLine', 
    {
        x: '-100px'
    },
    {
        x: "0%",
        delay: 2.55,
        ease: 'power4.out'
    })

    gsap.fromTo('.midLine', 
    {
        x: '-100px'
    },
    {
        x: "0%",
        delay: 2.75,
        ease: 'power4.out'
    })

    gsap.fromTo('.topLine', 
    {
        x: '-100px'
    },
    {
        x: "0%",
        delay: 3,
        ease: 'power4.out',
    })

    
    // const pageLoadTL = gsap.timeline({
    //     onStart: console.log('start'),
    //     onComplete: allowScroll
    // });

    // pageLoadTL
    //     .to('.section1', { x: '0%', duration: 1, ease: "power4.out" })
    //     .to('.sect1CTAContainer', { opacity: '100%', delay: 2.35 })
    //     .to('botLine', { x: '0%', delay: 2.55, ease: 'power4.out' })
    //     .to('midLine', { x: '0%', delay: 2.75, ease: 'power4.out' })
    //     .to('topLine', { x: '0%', delay: 3, ease: 'power4.out' })

})


// /**
//  * Mouseover animations
// */

/**
 * S1 header text animation
 */

// H1 animation
const h1 = document.querySelectorAll('h1');
const h1TL = gsap.timeline(),
mySplitTexts = new SplitText(h1, { type: "words, chars" }),
charss = mySplitTexts.chars;

gsap.set(h1, { perspective: 800 });

h1TL.from(charss, {
    delay: 1,
    duration: .3,
    opacity: 0,
    scale: 1,
    y: 80,
    transformOrigin: "0%, 50% -30",
    ease: Power4.easeOut,
    stagger: .02
})

window.addEventListener('resize', () =>
{
    console.log(window.innerWidth);
})

// Sub header animation
const h2 = document.querySelector('.header2');
const h2TL = gsap.fromTo('.header2',
{
    opacity: 0,
    x: '-50%',
}, 
{
    opacity: 1,
    x: '0%',
    delay: 2,
});

/**
 * Section 2 animations
*/

// Section 2 Header pop in
const sect1Header = gsap.timeline(),
mySplitText = new SplitText(".testPara", { type: "words, chars" }),
chars = mySplitText.chars;
gsap.set('.testPara', { perspective: 800 });
gsap.to('.testPara', { color: 'black' })

// Flip header in
sect1Header.from(chars, {
    duration: 1,
    opacity: 0,
    scale: 1,
    y: 80,
    rotationX: 180,
    transformOrigin: "0%, 50% -30",
    ease: "back",
    stagger: .05,
})

// ST for header flip in
ScrollTrigger.create({
    animation: sect1Header,
    trigger: ".testPara",
    start: "top 15%",
    pin: true,
    end: "+=8000",
    toggleActions: "play restart resume none",
})


// Change Section2 background color to #2a2a2e on scroll
const bgColor = gsap.timeline();
bgColor.to('.section2', {
    backgroundColor: '#2a2a2e',
})
.to('.testPara', 
{
    color: 'white',
})



// const slides = gsap.utils.toArray('.slide');
// const slidesTL = gsap.timeline();
// slidesTL.from('.slide1', { xPercent: -100 })
//     .from('.slide2', { xPercent: -100 })
//     .from('.slide3', { xPercent: -100 })

// ScrollTrigger.create({
//     animation: slidesTL,
//     trigger: ".section2",
//     start: "bottom 6%",
//     pin: true,
//     scrub: true,
//     anticipatePin: 1,
//     snap: 1 / (slides.length - 1) * 0.6,
//     markers: true,
//     end: "+= 4000"
// })

   
// ST for bgcolor + header color change
ScrollTrigger.create({
    animation: bgColor,
    trigger: '.section2',
    scrub: true,
    start: "center center",
    end: "bottom bottom",
    markers: true,
});

const sec2HeadWhite = gsap.timeline();
sec2HeadWhite.fromTo('.testPara',
{
    color: 'white',
},
{
    color: 'black'
})

ScrollTrigger.create({
    animation: sec2HeadWhite,
    trigger: '.section2',
    scrub: true,
    start: "bottom 22%",
    end: "bottom 6%",
})



// const h2Grey = gsap.timeline();
// h2Grey.to('.testPara', 
// {
//     color: '#626264',
//     scrub: true,
// });

// ScrollTrigger.create({
//     animation: h2Grey,
//     trigger: '.section1',
//     start: "bottom top",
//     scrub: true,
//     end: "+= 40px"
// })

// Change testPara color to orange
// const h2Black = gsap.timeline();

// h2Black.to('.testPara',
// {
//     color: 'black',
//     scrub: true,
// })

// ScrollTrigger.create({
//     animation: h2Black,
//     trigger: '.section2',
//     start: "bottom top",
//     end: '+= 200px',
//     ease: 'bounce.out',
//     scrub: true,
// })

// Animate SVG path
const svg = gsap.timeline();
svg.fromTo('.cls-1', {drawSVG: "0%"}, {drawSVG: "100%"});

ScrollTrigger.create({
    animation: svg,
    trigger: '.cls-1',
    scrub: true,
    
    start: "top center",
    end: "+=2000px", 
})

// const smallImg = gsap.timeline().fromTo('.smallImg', 
// {
//     x: "-= 100%",
// },
// {
//     duration: 2,
//     ease: Power0.easeInOut(),
//     x: "-55%",
// })

// ScrollTrigger.create({
//     animation: smallImg,
//     trigger: ".testSection",
//     start: "top center",
//     scrub: false,
//     pin: true,
//     end: "+=400px"
// })
// const butt = document.querySelector('.testButton');

// butt.addEventListener('click', () =>
// {
//     console.log('works')
// })

console.log('hey')