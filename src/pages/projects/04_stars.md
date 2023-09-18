---
layout: "../../layouts/ProjectsLayout.astro"
title: Star's rating predictor
image: /imgs/stars.webp
transition_image: stars_img
transition_title: stars_ttl
description: NLP predictor based on Amazon's products comments
github: https://github.com/alvarolarraya/RatingPredictorBasedOnCommentaries
cardNumber: 5
aiRelated: true
hasDedicatedPage: true
---
<h2 class="projectTitles">Index</h2>
<ul>
  <li> ⦿ <a href="#generalExplanation">What's all this about? 😶</a></li>
  <li> ⦿ <a href="#scraping">Web scraping</a></li>
  <li> ⦿ <a href="#tokenization">Tokenization</a></li>
  <li> ⦿ <a href="#stemming">Stemming</a></li>
  <li> ⦿ <a href="#bagOfWords">Bag of words</a></li>
  <li> ⦿ <a href="#tfidf">TF-IDF</a></li>
  <li> ⦿ <a href="#model">Regression model</a></li>
  <li> ⦿ <a href="#implementation">Implementation  👨🏻‍💻</a></li>
</ul>

<h2 id="generalExplanation">What's all this about? 😶</h2>

<div><p>A groupal university project I made with a collegue. It consists of predicting Amazon book ratings from 0 to 5 stars based on comments. We could select the dataset we wanted joining every Amazon's book comments and ratings.</p></div>

<h2 id="scraping">Web scraping</h2>

<div>
  <p>To have the dataset ready to use we had first to generate it. Using Beautiful Soup we went through all the pages saving the stars and the comments.</p>
  <div class="centerImgDiv">
    <img class="webScrappingImg" src="/imgs/commentsScrapping.webp">
  </div>
  <div class="centerImgDiv">
    <img class="webScrappingImg" src="/imgs/starsScrapping.webp">
  </div>
  <div class="centerImgDiv">
    <img class="webScrappingImg" src="/imgs/nextPageScrapping.webp">
  </div>
  <p>To make sure we browsed all the pages the next page button had to be disactivated.</p>
</div>

<h2 id="tokenization">Tokenization</h2>

<div>
  <p>The first step was to tokenize the comments, in our case we chose to use words as tokens and removed everything that isn't a word such as emojis or symbols.</p>
</div>

<h2 id="stemming">Stemming</h2>

<div>
  <p>The process of reducing a word to its word stem that affixes to suffixes and prefixes or the roots.</p>
  <div class="centerImgDiv">
    <img id="stemmingImg" src="/imgs/stemming.webp">
  </div>
  <p>This causes similar words to be stored as the same root, which reduces the dimensionality of the problem and helps us to improve the model since words with similar roots usually give us similar information.</p>
</div>

<h2 id="bagOfWords">Bag of words</h2>

<div>
  <p>Before obtaining the word frequency table we thought that it would be a good idea to eliminate words that are used very frequently in Spanish and that do not really provide important information for later classification, that is why we have used "stop words", thus reducing the dataset considerably without losing relevant information.</p>

  <p>Once this is done, we have gone on to obtain our corpus and our frequency table.</p>
</div>

<h2 id="tfidf">TF-IDF</h2>

<div>
  <p>We have complemented the bag of words by applying TF-IDF, which is a process that assigns weights to each word in the text. Unlike the standard bag of words which only sees how many times the word appears in the text. TF-IDF gives more importance to those words that appear a lot within the same text and are rarely found in other texts.</p>
</div>

<h2 id="model">Regression model</h2>

<div>
  <p>We tried several models, the one that worked best for us is logistic regression with balanced weights for each class. What this does is to give more weight to minority classes. So we avoid that in case of doubt it predicts 5 stars. In addition, we applied logistic regression in conjunction with OVA (One Versus All) because it is a multiclass problem. We obtained a final 63.13% of test accuracy.</p>
</div>

<h2 id="implementation">Implementation  👨🏻‍💻</h2>

<div>
  <p>This models are made with  Python libraries such as <b>Beautiful Soup</b>, <b>Scikit Learn</b>, <b>Re</b> and <b>NLTK</b>. To see the code firsthand click on the image at the top of the page.</p>
</div>






<link href='https://fonts.googleapis.com/css?family=Caveat' rel='stylesheet'>
<style>
  h2{
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
  .centerImgDiv{
    display: flex;
    justify-content: center;
  }
  .webScrappingImg{
    width:70vw;
    margin: 5vw;
    border-radius: 0.6rem;
    background-color:white;
  }
  #stemmingImg{
    width:30vw;
    margin: 5vw;
    border-radius: 0.6rem;
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