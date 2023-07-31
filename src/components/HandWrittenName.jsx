import { motion } from "framer-motion"
import './HandWrittenName.css';

const draw = {
    hidden: { 
        opacity:0,
        pathLength:0
    },
    visible: (i) => { 
        const delay = 1+i;
        return {
            pathLength: 1,
            opacity:1,
            transition:{
                pathLength: {delay,type:"spring",duration:30},
                opacity:{delay,duration:10},
            },
        };
    },
};
export default function HandWrittenName() {
    return (
        <motion.div>
            <motion.svg class="handWritten" version="1.0" xmlns="http://www.w3.org/2000/motion.svg" width="100%" height="248" viewBox="0 0 764 186" stroke="black" fill="rgb(var(--accent))">
                <motion.path 
                    variants={draw}
                    initial="hidden"
                    animate="visible"
                    d="M95.1 32c-6.3 4.7-8.1 6.5-8.1 8.4 0 5.7 5.4 3.6 18.3-6.9 2.2-1.9 2.2-5.2-.2-6.4-1.5-.8-3.3.1-10 4.9zM79.5 54.2c-.8 1.8-3.5 9.1-6.1 16.3-4.9 13.8-13.4 32.8-16 35.6-.9 1-1.4 3-1.2 5.1.2 2.7.8 3.4 2.8 3.6 2.3.3 3-.5 6-6.8 3.2-6.7 3.6-7.1 6-6.3 1.4.4 6.7.8 11.9.8h9.3l2.4 4.5c1.3 2.5 2.3 5.2 2.4 6.1 0 2.2 6.2 5 8.3 3.7 2.4-1.3 2.1-4.1-.7-7.5-3.7-4.5-5.8-9.3-5.2-11.9.5-1.7 0-2.7-1.7-3.9-3.8-2.5-10.7-25-10.7-35 0-2.8-.5-5.6-1.2-6.3-2.2-2.2-4.8-1.3-6.3 2zM82 73.7c.1 1 1.6 6.2 3.4 11.5l3.3 9.8h-7.1c-3.9 0-7.6-.4-8.2-.8-.8-.5.1-3.6 2.7-10.2 2.1-5.2 3.9-10.1 3.9-10.8 0-1.9 2-1.4 2 .5zM116 54c-1.2.7-1.5 3.8-1.6 15.7-.1 8.1-.9 19.5-1.8 25.2-2.6 16.8-2.2 20.2 2.5 22.6 3 1.6 14.2 1.9 23.4.7 4.7-.7 5-.9 5-3.7v-3l-12.2.4c-10 .2-12.4 0-12.8-1.1-.3-.8.3-8.3 1.5-16.7 2.5-18.9 2.7-35.7.4-38.9-1.7-2.4-2.2-2.6-4.4-1.2zM250.6 54.9c-.3.5-.8 13.3-1 28.5-.4 27-.4 27.6 1.6 28.7 3.6 1.9 5.2-1 5.6-10.1.2-4.4.7-8 1.1-8 1.1 0 8.7 8.2 11.5 12.4 1.4 2.1 2.6 5.3 2.6 7 0 5.4 4.8 7.8 7 3.5 2.3-4.3-1.6-13.4-9.2-21.5-5.1-5.5-5.2-5.7-.3-6.8 11.4-2.7 17.7-13.5 13.1-22.4-4.5-8.8-13.4-9.5-21.2-1.7l-4.4 4.4v-6.2c0-3.6-.5-6.8-1.2-7.5-1.4-1.4-4.4-1.6-5.2-.3zM275 68c4.9 4.9 1 11-8.7 13.9-3.7 1.1-6.8 1.9-7 1.7-.6-.5 2.8-7.9 5.3-11.5 2.1-3.2 5.7-6 7.7-6.1.4 0 1.6.9 2.7 2zM309.4 59.8c-7.3 5.3-13.2 16.3-15.4 28.6-2.5 14.6-.2 27.1 6.1 33.2 2.7 2.6 3.7 2.9 9.7 2.9 5.1 0 7.8-.6 11.1-2.3 10.6-5.6 19.1-15.2 22.2-25.3 3.3-10.7 2.1-18.2-4.3-25.4-4.1-4.7-10.9-8.5-15.1-8.5-1.8 0-3-.8-3.9-2.8-1.9-3.8-5.4-4-10.4-.4zm20.9 13.6c5.7 4.3 7.2 7.3 7.1 14.1-.1 4.4-.8 7.4-2.7 11.1-5.6 11.1-19.2 20.6-26.6 18.8-6.7-1.7-9.4-11.7-7.1-26.2 1.6-10.2 4.2-16.2 7-16.2 1.2 0 3.6-1.2 5.3-2.6 2.7-2.3 3.8-2.6 8.2-2.2 3.6.3 6.2 1.3 8.8 3.2zM411.6 59.5c-1.6 1.7-2.3 5.7-3 19-.3 6.4-1.5 12.4-4 20.7-4.1 13.5-4.4 16.3-1.7 17.8 4.5 2.4 36 .4 39-2.5.8-.8 1-2.1.6-3.5-.7-2.1-1.1-2.2-6.4-1.6-12.8 1.5-27.1 1.9-27.1.8 0-.6.5-2.3 1-3.7 2.8-7.5 5.2-19.2 6-29.6.4-6.4 1.4-12.5 2.1-13.6.7-1.1.9-2.8.6-3.7-.8-2-5.1-2.1-7.1-.1zM152.3 60.7c-.4 1 .8 6 3 12.3 2 5.8 5 16.2 6.8 23.1 3.3 13.7 5.5 18.3 9.4 20.1 5.6 2.5 9.2-2.9 17.5-26.7 6.1-17.3 7.5-20.5 9.4-20.5 1.8 0 2.7-2.6 2-5.6-.6-2.5-4.3-4.2-6.4-2.9-1.9 1.2-6.7 11.9-12 27-5.9 17-7.8 21.1-9 19.9-.5-.5-2.5-7.2-4.4-14.9-2-7.7-5.1-18.3-6.9-23.5-3-8.6-3.6-9.5-6-9.8-1.9-.2-2.9.2-3.4 1.5zM220.3 63.8c-5.4.8-17.1 18.8-22.2 33.9-2.7 7.9-2.8 14.9-.3 16.2 2.9 1.5 5.2-.5 5.3-4.7 0-2 .5-5.2 1.2-7l1.2-3.3 10.8-.4c8.9-.4 10.7-.2 10.7 1 0 4.3 2.4 11.6 4.1 12.5 4.3 2.3 9.3-4.8 5.4-7.6-1.3-1-2.1-4.1-3.1-12.6-2.9-24.1-5.3-29.2-13.1-28zm3.6 13.5c.5 2.8 1.3 7.1 1.6 9.4l.7 4.3h-7.9c-4.4 0-8.3-.3-8.6-.6-1.6-1.7 10.4-20.1 12.3-18.9.5.3 1.3 2.9 1.9 5.8zM464.9 67.7c-7 7.7-19.3 35.4-18.7 42.1.3 3.4.6 3.7 3.3 3.7 2.7 0 3-.4 3.7-4.3 1-5.8 2.9-9.6 5.2-10 1-.2 4.2-.1 7.1.3l5.2.6 1.2 5.4c1.1 5.1 4.8 10.5 7.1 10.5 1.5 0 5-3.8 5-5.5 0-.8-1.1-2.2-2.4-3-2.8-1.8-4.2-8.2-5.1-23-.9-13.7-1.5-17.3-3.1-19-2.5-2.4-4.9-1.8-8.5 2.2zm4.3 17 .4 7.3h-4.8c-2.6 0-4.8-.5-4.8-1 0-1.2 4.5-10.3 6.9-13.9 1.8-2.9 1.8-2.8 2.3 7.6zM499.4 66.1c-1.7 1.9-1.9 4.3-2.4 25.3-.3 12.7-.2 23.9.3 24.8 1 2.4 4.4 2.3 5.7-.1.5-1.1 1-4.7 1-8v-6l7.8 4.3c7.4 4.1 8.6 5.4 11.1 11.8 1.2 3.1 4.1 3.7 6 1.4 1.7-2-.2-8.6-3.4-12.4-1.3-1.6-5.6-4.6-9.5-6.6-5.7-3-7-4.2-7-6.1 0-3.5 4.1-6.1 15.1-9.5 8.6-2.7 10-3.4 10.5-5.6 1.3-5.3-6.1-11-17.4-13.5-4.7-1.1-5.9-1.1-8.2.3-2.5 1.4-2.8 1.4-3.9-.3-1.5-2.5-3.3-2.4-5.7.2zm7.7 8.9c1.4.8 2.3.6 3.9-1 1.9-1.9 2-1.9 8.5.1 3.6 1.1 6.5 2.2 6.5 2.4 0 .2-2.6 1.2-5.7 2.1-7 2-11 3.9-14 6.7l-2.3 2 .1-7.9c0-4.3.3-7.3.6-6.6.2.7 1.3 1.7 2.4 2.2zM642.5 70.7c-2.7 2.7-1.5 10.5 3 20.2 2.1 4.5 4.8 8.9 5.8 9.6 1.9 1.3 1.9 1.4-.3 5.2-1.3 2.1-3 4.6-3.7 5.5-2.1 2.4-1.3 6.2 1.3 6.6 3.1.4 6.9-4.6 12.5-16.3 6.9-14.4 10.3-25.2 9-28.2-1.9-4.3-9.3-1.9-7.6 2.4.6 1.8-5.3 19.3-6.6 19.3-1.6 0-7.3-14.8-7.4-19 0-6.9-2.4-9-6-5.3zM542.4 72.5c-1.4 2.2-1.5 3-.4 5 1 1.9 1.1 6.3.4 20.4-1 19.6-.7 22.4 1.9 22.9 2.8.6 4.7-1.7 4.7-5.7 0-6.3.8-6.6 9.2-2.8 7 3.2 11.8 7.4 11.8 10.3 0 2 3.2 3.4 5.3 2.3 2.3-1.3 2.1-4.3-.5-9-2.4-4.3-7-7.7-14-10.3-4.6-1.8-4.7-1.9-3.1-4.3.9-1.3 5.1-4 9.5-6.1 5.7-2.6 8-4.3 8.4-5.9 2.5-9.9-12.4-20.4-23.1-16.3-2 .8-2.9.6-4.5-1-2.6-2.6-3.6-2.5-5.6.5zm21.3 8.5c1.7 1 3.6 2.7 4.2 3.8.8 1.6.2 2.2-5.5 4.6-3.5 1.6-7.5 4.1-8.8 5.7-1.4 1.6-2.8 2.9-3.1 2.9-.6 0 0-5.9 1.1-12.1.7-3.5 4-6.9 6.7-6.9 1.2 0 3.6.9 5.4 2zM692.4 73.9c-3.5 2.1-7.7 8.2-15.9 22.9-6.7 12.1-9 18.5-7.4 21.4 1.8 3.3 5.2 1.9 6.6-2.7.7-2.2 2.3-5.9 3.5-8.3l2.3-4.2 7.2-.2c4-.1 8.1-.2 9.1-.2 1.4-.1 1.8 1.2 2.5 8.3.4 4.7 1.4 9.5 2.2 10.8 1.7 2.5 5.4 3 7.3 1.1 1.7-1.7 1.5-6.5-.4-7.6-1.3-.7-1.9-4.2-3-16.6-1.6-18.2-2.6-22.9-5.7-25.1-2.8-2-4.5-1.9-8.3.4zm6 14.8.7 6.3h-13.3l2.7-4.8c3.8-6.4 7.7-10.6 8.6-9 .3.7.9 4.1 1.3 7.5zM605.2 74.2c-3 1.5-10.5 12.8-17.5 26.5-6.2 12.1-7.1 16.7-3.8 19.7 4 3.6 10.3-.3 6.7-4.2-1.7-1.9-1.7-2.2.4-6.1 1.8-3.6 2.3-4 4-3.1 1 .5 5.2 1 9.3 1h7.5l.7 5.2c1 7 2 9.5 4.5 10.8 4.2 2.3 7.8-2.3 4.6-5.9-.8-.9-1.7-4.1-2.1-7.2-.5-4.4-.4-5.8.9-6.8 2.2-1.8 2-3.7-.4-5.4-1.5-1-2.4-3.6-3.5-9.9-1.8-10.6-2.8-13.4-5.4-14.7-2.4-1.3-2.9-1.3-5.9.1zm4.4 17c.8 4.4 1.1 8.5.8 8.9-.9 1.5-12.4 1.1-13-.5-.8-2 9.1-18.4 10.4-17.2.3.4 1.1 4.3 1.8 8.8z"/>
            </motion.svg>
            <motion.svg class="handWritten" version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="144" viewBox="0 0 138 108" stroke="black" fill="rgb(var(--accent))">
                <motion.path
                    variants={draw}
                    initial="hidden"
                    animate="visible" 
                    d="M43.4 16.5c-2.1 2.1-2.5 3.2-2 5.8 1.2 6.2 6.2 8.2 10.2 4.2 2.1-2.1 2.5-3.2 2-5.8-1.2-6.2-6.2-8.2-10.2-4.2zM80 17c-3.3 3.3-2.4 7.2 2.1 9.5 3.8 2 7.2 1.9 9.2-.3 3-3.3 1.9-7.5-2.4-9.7-3.8-2-6.5-1.9-8.9.5zM30.6 51.6c-3.5 3.4-1.1 10.8 5.9 18.3C45.8 79.9 55.6 84 69.6 84c14.3 0 24.3-4.5 32.7-14.7 8.2-10 9.1-13.7 4.2-16.9-3.5-2.3-5.9-1-10.9 5.4-8.1 10.5-12.2 13-23.5 13.9-12.9 1.1-26-5.6-30.3-15.6-1.2-2.5-2.6-4.9-3.2-5.3-1.9-1.3-6.4-.9-8 .8z"/>
            </motion.svg>
        </motion.div>
    )
}
