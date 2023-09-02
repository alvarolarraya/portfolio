---
layout: "../../layouts/ProjectsLayout.astro"
title: School website
image: /imgs/siw.webp
transition_image: schoolWebsite_img
transition_title: schoolWebsite_ttl
description: My first website developed in group consuming the Microsoft API
github: https://github.com/alvarolarraya/SchoolWebsiteMicrosoftAPI
cardNumber: 24
---







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
  }
  p{
    text-align: center;
    font-size: 3rem;
    display: block;
    margin: 0 auto;
    width: 70%;   
    line-height: 4rem; 
    font-family: "Caveat";
  }
  b{
    font-size: 4rem;
    background-color: #2E2E2E;
  }
  div{
    margin-bottom:15vh;
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
</style>