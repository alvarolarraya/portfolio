---
layout: "../../layouts/ProjectsLayout.astro"
title: Coin's value classification
image: /imgs/coins.webp
transition_image: coins_img
transition_title: coins_ttl
description: Using computer vision skills
github: https://github.com/alvarolarraya/CoinClassification
cardNumber: 2
aiRelated: true
hasDedicatedPage: true
---
<h2 class="h2MdTitles">Index</h2>
<ul>
  <li> ⦿ <a href="#generalExplanation">What's all this about? 😶</a></li>
  <li> ⦿ <a href="#dataset">Dataset</a></li>
  <li> ⦿ <a href="#approaches">Preprocessing approaches</a></li>
    <li class="subList"> ⦾ <a href="#hog">HOG</a></li>
    <li class="subList"> ⦾ <a href="#adaptativeEq">Adaptative equalization</a></li>
    <li class="subList"> ⦾ <a href="#kmeans">K-means</a></li>
    <li class="subList"> ⦾ <a href="#edgeEnhancement">Edge enhancement</a></li>
    <li class="subList"> ⦾ <a href="#mathematicalMorfology">Mathematical morfology</a></li>
  <li> ⦿ <a href="#svm">Model structure</a></li>
  <li> ⦿ <a href="#implementation">Implementation  👨🏻‍💻</a></li>
</ul>

<h2 class="h2MdTitles" id="generalExplanation">What's all this about? 😶</h2>

<div><p>A groupal university project I made with a collegue. The main goal is the development, training, and validation of a system for detecting and <b>classifying coins</b>. We took part in this <a href="https://www.kaggle.com/competitions/vision-artificial-upna2021-clasificacion-monedas" target="_blank">kaggle competition</a>. There are <b>8 different classes</b>: 1 cént, 2 cents, 5 cents, 10 cens, 20 cens, 50 cens, 1 euro and 2 euros</p></div>

<h2 class="h2MdTitles" id="dataset">Dataset</h2>

<div><p>We had <b>1291</b> coin's pictures <b>to train</b> and <b>964 to test</b> our model. All the photos are <b>150x150</b> with <b>salt and pepper noise</b>.</p></div>

<h2 id="approaches" class="h2MdTitles">Preprocessing approaches</h2>

<ul>
  <li> ⦿ HOG</li>
  <li> ⦿ Adaptative equalization</li>
  <li> ⦿ Kmeans</li>
  <li> ⦿ Edge enhancement</li>
  <li> ⦿ Mathematical morphology</li>
</ul>

<h3 id="hog">HOG</h3>

<div>
  <p><b>Histogram of Oriented Gradients</b> is a feature extraction technique. From an image we obtain a series of vectors that help us to identify which is the most common pattern of shapes in each area of the image.</p>
  <img id="hogScheme" src="/imgs/hogScheme.webp">
  <div class="centerImgDiv">
    <img class="coinsImages" src="/imgs/50cents.webp">
    <img class="coinsImages" src="/imgs/hog.webp">
  </div>
</div>

<h3 id="adaptativeEq">Adaptative equalization</h3>

<div>
  <p>To increase the dynamic range and since the image is not equally illuminated in all areas, we decided to use adaptive equalization.</p>
  <div class="centerImgDiv">
    <img class="comparisonImg" src="/imgs/adaptativeEq.webp">
  </div>
</div>

<h3 id="kmeans">K-means</h3>

<div>
  <p>As the HOG feature extractor focused much more than we would like on the background we decided remove the background and give it the coin color.</p>
  <div class="centerImgDiv">
    <img class="comparisonImg" src="/imgs/kmeans.webp">
  </div>
</div>

<h3 id="edgeEnhancement">Edge enhancement</h3>

<div>
  <p>Although we ended up discounting this idea, because it didn't bring us the results we wanted, it was worth a try. It involves highlighting the borders for the model to identificate them more easily.</p>
  <div class="centerImgDiv">
    <img class="comparisonImg" src="/imgs/coins.webp">
  </div>
</div>

<h3 id="mathematicalMorfology">Mathematical morfology</h3>

<div>
  <p>Advanced morphological transformations using an erosion and dilation as basic operations. We also discarded this approach.</p>
  <div class="centerImgDiv">
    <img class="comparisonImg" src="/imgs/mathematicalMorfology.webp">
  </div>
</div>

<h2 class="h2MdTitles" id="svm">Model structure</h2>

<div>
  <p>Support Vector Machine better known as SVM is a supervised learning algorithm, the goal is to find a hyperplane that best separates two different classes of data points. We tried a variety of algorithms and SVMs was the one that worked best for us.</p>
  <div class="centerImgDiv">
    <img id="svmImg" class="comparisonImg" src="/imgs/svm.webp">
  </div>
</div>


<h2 class="h2MdTitles" id="implementation">Implementation  👨🏻‍💻</h2>

<div>
  <p>This models are made with <b>Scikit Learn</b> and <b>OpenCV</b>. To see the code firsthand click on the image at the top of the page.</p>
</div>








<link href='https://fonts.googleapis.com/css?family=Caveat' rel='stylesheet'>
<style>
  .h2MdTitles{
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
    margin-top:4vh;
  }
  b{
    font-size: 4rem;
    background-color: #2E2E2E;
  }
  li{
    text-align: left;
    padding-left:30vw;
    padding-top:1vh;
  }
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:2vh;
    width: 75vw;
  }
  ul{
    text-align: -webkit-center;
    font-size: 3rem;  
    line-height: 4rem; 
    font-family: "Caveat";
    margin-top:2vh;
    list-style-type: none;
  }
  a{
    color: rgb(var(--accent));
  }
  .subList{
    padding-left:40vw;
  }
  h3{
    text-align: center;
    font-size: 5rem;
    display: block;
    margin: 0 auto;
    width: 50%;   
    line-height: 4rem; 
    font-family: "Caveat";
    padding-bottom:2vh;
    margin-bottom:4vh;
    border-bottom: 3px #990000 dashed;
    margin-top:15vh;
  }
  table {
    margin-left:auto; 
    margin-right:auto;
    font-size: 3rem;
    line-height: 4rem; 
    font-family: "Caveat";
    margin-top:10vh;    
  }
  th,td{
    border: 2px solid #990000;
    text-align: -webkit-center;
    width:1%;
  }
  .emptyTableCell{
    border:0;
  }
  th{
    font-size: 4rem;
  }
  #titleTable{
    text-decoration:underline;
  }
  table{
    width:70vw;
  }
  #hogScheme{
    padding: 5vw;
    aspect-ratio: 16/9;
  }
  .coinsImages{
    width:20vw;
    border-radius: 0.6rem;
    display:inline;
    margin:5vw;
    background-position: center;
  }
  .centerImgDiv{
    display: flex;
    justify-content: center;
  }
  .comparisonImg{
    width:50vw;
    margin: 5vw;
    border-radius: 0.6rem;
  }
  #svmImg{
    background-color:white;
  }
  @media only screen and (max-width: 1200px){
		th{
      font-size:2.5rem;
    }
    td{
      font-size:2rem;
    }
    h2,h3{
      font-size:5rem;
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
    h2,h3{
      font-size:2rem;
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