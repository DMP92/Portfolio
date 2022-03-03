import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from './THREE.js';

const section1 = document.querySelector('.canvas');
const sect = {
    ele: section1,
    win: window,
    doc: document,
};


/**
 * Options
 */
gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);

/**
 * Onload animations
 */
window.addEventListener('load', () => 
{
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
        ease: 'power4.out'
    })
})


/**
 * Mouseover animations
*/

// Buttons
const button0 = document.querySelector('.button0');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

// onMouseOver
button0.addEventListener('mouseover', () =>
{
    gsap.to(".animate0",
    {
        width: "150px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        duration: .3,
        ease: "bounce.out"
    })

    gsap.to(".button0", { color: '#2a2a2e', duration: .5 });
    // console.log(getComputedStyle(button1))
})

button1.addEventListener('mouseover', () =>
{
    gsap.to(".animate1",
    {
        width: "150px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        duration: .3,
        ease: "bounce.out"
    })

    gsap.to(".button1", { color: '#2a2a2e', duration: .5 });
    // console.log(getComputedStyle(button1))
})

button2.addEventListener('mouseover', () =>
{
    gsap.to(".animate2",
    {
        justifySelf: 'start',
        width: "100%",
        duration: .3,
    })
    // console.log(getComputedStyle(button1))
})

button3.addEventListener('mouseover', () =>
{
    gsap.to(".animate3",
    {
        width: "100%",
        duration: .3,
    })
})

/**
 * Mouseout animations
 */

button0.addEventListener('mouseout', () => 
{
    gsap.to('.animate0',
        {
            width: "0px",
            duration: .3,
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
        })

    gsap.to(".button0", { color: '#386F86', duration: .5 });

})

button1.addEventListener('mouseout', () => 
{
    gsap.to('.animate1',
        {
            width: "0px",
            duration: .3,
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
        })

    gsap.to(".button1", { color: '#386F86', duration: .5 });

})

button2.addEventListener('mouseout', () => 
{
    gsap.to('.animate2',
        {
            justifySelf: 'end',
            width: "0%",
            duration: .3,

        })
})

button3.addEventListener('mouseout', () => 
{
    gsap.to('.animate3',
        {
            width: "0%",
            duration: .3,
            justifySelf: 'right',
        })
});

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

// Section 2 H2 animation
const tx = gsap.timeline(),
mySplitText = new SplitText(".testPara", { type: "words, chars" }),
chars = mySplitText.chars;

gsap.set('.testPara', { perspective: 800 });

tx.from(chars, {
    duration: 1,
    opacity: 0,
    scale: 1,
    y: 80,
    rotationX: 180,
    transformOrigin: "0%, 50% -30",
    ease: "back",
    stagger: .05,
}).to('.testPara',
{
        content: 'RAGE',
        pin: true,
        end: "+=10000",
})

ScrollTrigger.create({
    animation: tx,
    trigger: ".testPara",
    start: "top 15%",
    pin: true,
    end: "+=8000",
    toggleActions: "play restart resume none"
})

// Test for git

// Change body background color onScroll
const body = document.body;
const colorTL = gsap.timeline();

colorTL.to('.section2',
    {
        color: 'white',
        backgroundColor: '#2a2a2e',
    })
    .to('.testPara',
    {
        color: '#626264',
        scrub: true,
    }).add(() => 
    {
        console.log('freak yeah')
    }).add(() => {
        console.log(Math.PI * .03)
    });

ScrollTrigger.create({
    animation: colorTL,
    trigger: '.section1',
    scrub: true,
    
    start: "bottom top",
    end: "+=100",
});

const s2Head = gsap.timeline();

s2Head.to('.testPara',
{
    color: 'orange',
    scrub: true,
})

ScrollTrigger.create({
    animation: s2Head,
    trigger: '.section2',
    start: "bottom top",
    end: '+= 200px',
    ease: 'bounce.out',
    scrub: true,
})

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

const smallImg = gsap.timeline().fromTo('.smallImg', 
{
    x: "-= 100%",
},
{
    duration: 2,
    ease: Power0.easeInOut(),
    x: "-55%",
})

ScrollTrigger.create({
    animation: smallImg,
    trigger: ".testSection",
    start: "top center",
    scrub: false,
    pin: true,
    end: "+=400px"
})
