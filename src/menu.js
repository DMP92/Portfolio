import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

const hamburger = document.querySelector('.hamburger');
const topLine = document.querySelector('.topLine');
const midLine = document.querySelector('.midLine');
const botLine = document.querySelector('.botLine');

const menu = document.querySelector('.menuModal');
const menuStatus = getComputedStyle(menu).display;
let menuClosed = true;

const body = document.body;

window.addEventListener('load', () => 
{
    setTimeout(() => 
    {
        if(menuClosed)
        {
            body.classList.remove('stop-scroll');
        }    
    }, 3000);

})

// Hamburger menu logic
hamburger.addEventListener('click', () => 
{
    if(menuClosed)
    {
        // Set menu to open
        menuClosed = false;

        // Prevent page scroll
        body.classList.add('stop-scroll')

        // Open menu
        menu.classList.add('visible');
        setTimeout(() => 
        {
            menu.classList.add('open');
        }, 500);

        setTimeout(() => 
        {
            showLinks();
        }, 830)
    }
    else 
    {
        // Set menu to closed
        menuClosed = true;

        // Close menu
        setTimeout(() => 
        {
            menu.classList.remove('open');
            console.log(menu)
        }, 500);

        setTimeout(() => {
            menu.classList.remove('visible');

            // Allow page scroll
            body.classList.remove('stop-scroll')

            // Hide menu links
            hideLinks();
        }, 1500)
    }
})

// Hide menu links
const hideLinks = () =>
{
    gsap.to('.menuLink', { opacity: 0, duration: 0, y: '100px' })
}

hideLinks();

// Show menu links
const showLinks = () => 
{
    gsap.to(
        '.menuLink', 
        { 
            opacity: 1, 
            duration: 1, 
            y: '0px', 
            ease: 'Elastic.easeOut'
        })
}