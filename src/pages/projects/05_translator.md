---
layout: "../../layouts/ProjectsLayout.astro"
title: CBOW translator
image: /imgs/translator.webp
transition_image: translator_img
transition_title: translator_ttl
description: NLP model which translate words from english to spanish
github: https://github.com/alvarolarraya/Translator
cardNumber: 7
aiRelated: true
hasDedicatedPage: true
---
<h2 class="projectTitles">Index</h2>
<ul>
  <li> ⦿ <a href="#generalExplanation">What's all this about? 😶</a></li>
  <li> ⦿ <a href="#dataset">Dataset</a></li>
  <li> ⦿ <a href="#tokenization">Tokenization</a></li>
  <li> ⦿ <a href="#cbow">CBOW</a></li>
  <li> ⦿ <a href="#matrix">Translation matrix</a></li>
  <li> ⦿ <a href="#implementation">Implementation  👨🏻‍💻</a></li>
</ul>

<h2 id="generalExplanation">What's all this about? 😶</h2>

<div><p>A groupal university project I made with two collegues. The goal is to build a dictionary which translates words from Spanish to English.</p></div>

<h2 id="dataset">Dataset</h2>

<div><p>We collected 7 Harry Potter books both in English and Spanish, although we ended up studying only one of them due to the computational cost training with the 7 books would need.</p></div>

<h2 id="tokenization">Tokenization</h2>

<div>
  <p>We removed all the numbers, we changed the punctuation marks that denote the end of a sentence for a period, if there were several in a row we only put a period, and finally we removed everything that wasn't a letter or a period. Then we saved all the words as our tokens to have an English and Spanish vocabulary.</p>
</div>

<h2 id="cbow">CBOW</h2>

<div>
  <p>CBOW consists of predicting a word based on its context. To implement the CBOW method what we used a sliding window that goes through the sentences of our corpus. Keeping in mind that we work with sentences is important since it is the unit we operate with, each point delimits the end of a sentence and the beginning of the next one.</p>

  <p>Working with a sliding window implies that we will not always have context words for all the words, since for example the first word of the sentence does not have words that go before it and therefore cannot be a central word, the same happens with the last word of each sentence.</p>

  <p>We encoded the words with one hot encoding because if one word is 4 and another 5 doesn't mean they are more similar to each other than to 10. Also for the context words we add all the vectors and divide them by the number of words we use for the context. Now we have all the context's vectors and central word's vectors, so we can start predicting the central word based on the context with a neural network.</p>

  <p>We obtained word embeddings as the weights trained from the neural network.</p>
</div>

<h2 id="matrix">Translation matrix</h2>

<div>
  <p>Having calculated all the embedings we made a translation matrix such that multiplying an english embedding by this matrix results in a spanish embedding. Maybe the resulting spanish embedding doesn't exist so we calculated the nearer embedding with KNN. Saving each word an its embedding we have an English to Spanish translator</p>
</div>

<h2 id="implementation">Implementation  👨🏻‍💻</h2>

<div>
  <p>This models are made with  Python libraries such as <b>Pandas</b>, <b>Scikit Learn</b>, <b>Keras</b> or <b>NLTK</b> among others. To see the code firsthand click on the image at the top of the page.</p>
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