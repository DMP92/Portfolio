import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Variables from './Variables';

/**
 * Options
 */
 gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);


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
