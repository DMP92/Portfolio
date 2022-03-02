// // TweenLite.to('.img', 1, {drawSVG: "40% 60%", delay: 0.5})
// gsap.from(".img", {duration:1,stagger: 0.1, drawSVG: 0});
// svg.from('.img', 2, {drawSVG:0, stroke: "white"})
// const sampleTL = gsap.timeline();

// sampleTL.to('.sample', 
// {
//     scrub: true,
//     x: "20px",
//     pin: true,
//     markers: true,
//     end: "+=200"
// })

// ScrollTrigger.create({
//     animation: sampleTL,
//     trigger: ".testPara",
//     pin: true,
//     markers: true,
//     start: "top 6%",
//     end: "+=1200"
// })

/**
 * Timeline
 */

// Header appear animation
// const tl = new TimelineMax({});

// tl.staggerFrom('span', .5, 
// {
//     y: "100%",
//     ease: 'Power4.easeOut',

// }, .15)


// /**
//  * Header Scroll Animations
//  */

// const headTl = gsap.timeline();

// headTl.to(".header", 3, {xPercent: 0})
//     .to(".blueSpan", 10,  {xPercent: - 100, opacity: 0})
//     .to(".whiteSpan", 10, {xPercent: 100, opacity: 0})
//     .to(".s1H1ButtonContainer", {opacity: 0});

// ScrollTrigger.create({
//     animation: headTl,
//     trigger: ".section1",
//     start: "top top",
//     scrub: true,
//     markers: true,
//     end: "center 18%",
//     duration: 10
// })