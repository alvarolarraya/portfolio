
import './ScrollArrow.css';
import React from 'react';

export default function ScrollArrow({up,down}) {
    if(document.documentElement.scrollTop == 0){
        document.documentElement.dataset.scroll = "0";
    }
    else{
        document.documentElement.dataset.scroll = window.scrollY;
    }
    document.addEventListener('scroll', () => {
        document.documentElement.dataset.scroll = window.scrollY;
    });
    return (
        <>
        <a href={down}>
            <lord-icon
                id="downArrow"
                src="https://cdn.lordicon.com/albqovim.json"
                trigger="loop"
                delay="100"
                colors="primary:#ff5050">
            </lord-icon>
        </a>

        <a href={up}>
            <lord-icon
                id="upArrow"
                src="https://cdn.lordicon.com/xdakhdsq.json"
                trigger="hover"
                colors="primary:#ff5050">
            </lord-icon>
        </a>
        </>
    )
}