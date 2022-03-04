import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default class Variables
{
    constructor()
    {
        this.body = document.body;
        

    }

    returnBody()
    {
        return this.body;
    }
}