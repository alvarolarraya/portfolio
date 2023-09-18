---
layout: "../../layouts/ProjectsLayout.astro"
title: Wriggly warty witch
image: /imgs/demoBird.gif
transition_image: bird_img
transition_title: bird_ttl
description: A simple computer web game consisting of a battle between a bird and a witch
github: https://github.com/alvarolarraya/bird_game
cardNumber: 4
aiRelated: false
hasDedicatedPage: true
---
<h2 class="projectTitles">What's all this about? 🧙🏻‍♀️🆚🐦‍⬛</h2>

<div><p><b>Wriggly Warty Witch</b> is a computer web game. The goal is to kill the witch controlling a bird able to shoot syringes. Although be careful, in the process you will encounter some obstacles: blowing clouds and warts thrown by the witch. Picturesque? You're right, the topics were chosen randomly. The target was to mix: warts, syringes and the sky, this is the result.</p></div>


<h2 class="projectTitles">Controls</h2>

<div>
  <p id="list"> ⦿ The bird can <b>move</b> freely througout the whole screen using ←↑↓→ keys</p>

  <p id="list"> ⦿ Pressing or holding the space key you can <b>shoot</b> the syringes. The shooting action has cooldown time.</p>
</div>

<h2 class="projectTitles">Play it yourself 🫵</h2>

<div>
  <a id="playLink" href="https://fb55f3f8.bird-game.pages.dev/" target="_blank">
    🎮
  </a>
</div>


<h2 class="projectTitles">Implementation  👨🏻‍💻</h2>

<div>
  <p>This web game is coded in <b>JavaScript</b> as an <b>Object Oriented Program</b>. All the animations are made with canvas, inserting a new picture 60 times per second. Making it <b>resposive</b> to the player´s actions in real time, which are monitorized during the whole battle. To see the code firsthand click on the demo at the top of the web.</p>
</div>








<link href='https://fonts.googleapis.com/css?family=Caveat' rel='stylesheet'>
<style>
  .projectTitles{
    text-align: center;
    font-size: 6rem;
    display: block;
    margin: 0 auto;
    width: 70%;   
    line-height: 4rem; 
    font-family: "Caveat";
    padding-bottom:2vh;
    margin-bottom:4vh;
    border-bottom: 3px rgb(var(--accent)) dashed;
    margin-top:15vh;
  }
  p{
    text-align: center;
    font-size: 3rem;
    display: block;
    margin: 0 auto;
    width: 70%;   
    line-height: 4rem; 
    font-family: "Caveat";
    margin-top:2vh;
  }
  b{
    font-size: 4rem;
    background-color: #2E2E2E;
  }
  #playLink{
    text-align: center;
    font-size: 10rem;
    display: block;
    margin: 0 auto;
    width: 70%;   
    text-decoration: none;
    animation: hithere 2.5s infinite;
  }
  @keyframes hithere {
    30% { transform: scale(1.2); }
    40%, 60% { transform: rotate(-20deg) scale(1.2); }
    50% { transform: rotate(20deg) scale(1.2); }
    70% { transform: rotate(0deg) scale(1.2); }
    100% { transform: scale(1); }
  }
  #list{
    text-align: left;
    padding-left:10vw;
    padding-top:1vh;
  }
  @media only screen and (max-width: 1200px){
		th{
      font-size:2.5rem;
    }
    td{
      font-size:2rem;
    }
    .projectTitles{
      font-size:5rem;
      line-height:6rem;
    }
    li{
      padding-left:15vw;
    }
    ul{
      text-align: -webkit-center;
      font-size: 2.5rem;  
      line-height: 4rem; 
      font-family: "Caveat";
      margin-top:2vh;
      list-style-type: none;
    }
    .subList{
      padding-left:25vw;
    }
    p{
      font-size: 2.5rem;
      line-height: 4rem; 
    }
    b{
      font-size: 3rem;
      background-color: #2E2E2E;
    }
	}
  @media only screen and (max-width: 600px){
		th{
      font-size:1rem;
    }
    td{
      font-size:1rem;
    }
    .projectTitles{
      font-size:2rem;
      line-height:3rem;
    }
    li{
      padding-left:10vw;
    }
    ul{
      text-align: -webkit-center;
      font-size: 1rem;  
      line-height: 2rem; 
      font-family: "Caveat";
      margin-top:2vh;
      list-style-type: none;
    }
    .subList{
      padding-left:20vw;
    }
    p{
      font-size: 1rem;
      line-height: 2rem; 
    }
    b{
      font-size: 1.5rem;
      background-color: #2E2E2E;
    }
	}
</style>