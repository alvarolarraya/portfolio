---
layout: "../../layouts/ProjectsLayout.astro"
title: Final college course project
image: /imgs/tfg.webp
transition_image: tfg_img
transition_title: tfg_ttl
description: A research on simple techniques to improve a CNN applied to FER2013
github: https://github.com/alvarolarraya/FinalCollegeCourseProject
cardNumber: 1
---
<h2 class="projectTitles">What's all this about? 😶</h2>

<div><p><b>FER 2013</b> (Face Emotion Recognition) is a dataset that offers the possibility to study a vast number of facial expressions and predict the emotion they are feeling. This project's goal is to analyze the influence of certain machine learning and computer vision techniques.</p><br><p>Starting by create a very simple <b>CNN</b> which classifies each picture and then apply little changes that almost doesn't mutate the model's structure, yet provide a considerable improvement in the classificator understanding of the problem.</p></div>

<h2 class="projectTitles">Techniques analyzed</h2>

<div id="list">
  <p id="list"> ⦿ Transfer learning</p>
  <p id="list"> ⦿ Fine tuning</p>
  <p id="list"> ⦿ Data augmentation</p>
  <p id="list"> ⦿ Label smoothing</p>
  <p id="list"> ⦿ Test time augmentation</p>
</div>

<h2 class="projectTitles">Dataset</h2>

<div>
  <p>All the images are 48x48, in grayscale, the faces are centered similarly and there are seven classes: angry, disgust, fear, happy, sad, surprise and neutral. 28708 examples are to train and 7178 to test.</p>
  <p>As you can see in the sample emotions are ambiguous due to the fact that a face can be classified as more than one emotion and still be correct. Have we got better labels, the model would be much more accurate. To solve this problem I have used besides FER 2013 labels FER 2013+ ones, whom have been made by 10 persons each one voting a class.</p>
  <p>Moreover, some pictures aren't faces, so in FER 2013+ labels we have additional classes that help us clean the dataset. In conclusion, I have worked with two different labels to see how the model and the techniques adapt to these different situations.</p>
  <p>Furthermore it's an unbalanced problem:</p>
  <img src="/imgs/data_barplot.webp">
</div>

<h2 class="projectTitles">Choosing the base model</h2>

<div>
  <p>The perfect model must be fast to do as many experiments as possible and at the same time to have an acceptable precision in its classification. So I tried different configurations</p>
</div>

<h2 class="projectTitles">Implementation  👨🏻‍💻</h2>

<div>
  <p>This models are made with <b>TensorFlow</b>. To see the code firsthand click on the demo at the top of the web.</p>
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
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:2vh;
    width: 75vw;
  }
</style>