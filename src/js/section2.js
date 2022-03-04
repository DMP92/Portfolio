import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Variables from './Variables';

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
