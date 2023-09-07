---
layout: "../../layouts/ProjectsLayout.astro"
title: Crypto wallet
image: /imgs/bitcoin.webp
transition_image: cryptoWallet_img
transition_title: cryptoWallet_ttl
description: Laravel API
github: https://github.com/IvanSolaDelgado/crypto-wallet
cardNumber: 16
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
</style>