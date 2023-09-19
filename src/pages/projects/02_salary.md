---
layout: "../../layouts/ProjectsLayout.astro"
title: Salary's range classification
image: /imgs/salary.webp
transition_image: salary_img
transition_title: salary_ttl
description: This project's goal is to showcase some data mining skills
github: https://github.com/alvarolarraya/SalaryPredictor
cardNumber: 3
aiRelated: true
hasDedicatedPage: true
---
<h2 class="h2MdTitles" class="projectTitles">Index</h2>
<ul>
  <li> ⦿ <a href="#generalExplanation">What's all this about? 😶</a></li>
  <li> ⦿ <a href="#dataset">Dataset</a></li>
  <li> ⦿ <a href="#missingValues">Imputation of missing values</a></li>
  <li> ⦿ <a href="#categorical2Nominal">Categorical to nominal</a></li>
  <li> ⦿ <a href="#outliers">Outliers</a></li>
  <li> ⦿ <a href="#correlations">Variable correlations</a></li>
  <li> ⦿ <a href="#pca">PCA</a></li>
  <li> ⦿ <a href="#instanceSelection">Instance selection</a></li>
  <li> ⦿ <a href="#unbalanced">Unbalanced problem</a></li>
  <li> ⦿ <a href="#influence">Variables influence</a></li>
  <li> ⦿ <a href="#implementation">Implementation  👨🏻‍💻</a></li>
</ul>

<h2 class="h2MdTitles" id="generalExplanation">What's all this about? 😶</h2>

<div><p>A groupal university project I made with a collegue. We have chosen a binary classification problem in which we have to predict whether the annual salary of a person in the USA is greater than 50 thousand or not.</p></div>

<h2 class="h2MdTitles" id="dataset">Dataset</h2>

<div><p>We obtained the <a href="https://sci2s.ugr.es/keel/dataset.php?cod=192" target="__blank">dataset</a> from KEEL and chose it because it has a large number of examples, attributes, and missing values, allowing us to apply various data mining and EDA techniques. The data came as a '.dat' so we removed the header and converted it to csv format.</p></div>

<h2 class="h2MdTitles" id="missingValues">Imputation of missing values</h2>

<div>
  <p>We replaced categorical missing values by the mode and by the mean in the case of numerical variables</p>
</div>

<h2 class="h2MdTitles" id="categorical2Nominal">Categorical to nominal</h2>

<div>
  <p>We applied two different methods: output-based for those variables with less than six values and ordinal for the others. The output-based method is better due to the fact that it takes into account the class and category of the example, yet it is more expensive than the ordinal method, so in case of having more possible values we are interested in a faster method.</p>
</div>

<h2 class="h2MdTitles" id="outliers">Outliers</h2>

<div>
  <p>Using the mean-std outlier detection method: any record with a value in the numeric field that is greater than the upper boundary, or less than the lower boundary, is an outlier. The boundary is calculated adding the mean and the standard deviation multiplied by an hyperparameter named k. We also used IQR but didn't work as well.</p>
  <div class="centerImgDiv">
    <img id="outliersImg" class="comparisonImg" src="/imgs/outliers.webp">
  </div>
</div>

<h2 class="h2MdTitles" id="correlations">Variable correlations</h2>

<div>
  <p>Having duplicated data is a problem: we can have inconsistencies or make the model focus on some tribial aspect when it comes to classifying the person. In case our variables aren't the best we want to improve them, so we did an EDA.</p>
  <div class="centerImgDiv">
    <img class="comparisonImg" src="/imgs/correlations.webp">
  </div>
  <p>Each cell represents the level of correlation variables have. Red and purple represent that the correlation is high: red meaning they are directly proportional and purple indirectly. It can be seen that variables 6 and 11 are indirectly strongly correlated. So we proceeded to select the best posible variables.</p>
</div>

<h2 class="h2MdTitles" id="pca">PCA</h2>

<div>
  <p>To work with less percentage of data but the same of information we applied Principal Component Analysis</p>
</div>

<h2 class="h2MdTitles" id="instanceSelection">Instance selection</h2>

<div>
  <p>We had way too many examples to train and we were overfitting so we tried some resampling methods. The Random Mutation Hill-Climbing algorithm is a direct search technique mostly used in discrete domains. It repeats the process of randomly selecting a neighbour of a best-so-far solution and accepts the neighbour if it is better than or equal to it. Using RMHC we were able to improve our test accuracy, therefore the model generalization, with 90% less of training instances.</p>
  <p>Before RMHC:</p>
  <div class="centerImgDiv">
    <img class="comparisonImg" src="/imgs/beforeUS.webp">
  </div>
  <p>After RMHC:</p>
  <div class="centerImgDiv">
    <img class="comparisonImg" src="/imgs/afterUS.webp">
  </div>
  <p>Obviously the test examples remained intact, but it is evident the reduction in the number of training instances which are far from the decision border, thus don't affect positively the learning.</p>
</div>

<h2 class="h2MdTitles" id="unbalanced">Unbalanced problem</h2>

<div>
  <p>Looking at the confusion matrix we realized the data is unbalanced, since there are many more class zero examples than class one. We have 3032 examples with salary below the threshold and 875 above it. Applying various undersampling methods we settled on NCL, which allowed us to improve the geometric mean from 72.24% to 80.06% and removing 810 (26.72%) class zero training examples</p>
  <div class="centerImgDiv">
    <img id="unbalancedImg" class="comparisonImg" src="/imgs/unbalanced.webp">
  </div>
  <p>Before NCL:</p>
  <div class="centerImgDiv">
    <img class="comparisonImg" src="/imgs/beforeNCL.webp">
  </div>
  <p>After NCL:</p>
  <div class="centerImgDiv">
    <img class="comparisonImg" src="/imgs/afterNCL.webp">
  </div>
  <p>Obviously the test examples remained intact, but it is evident the reduction in the number of class zero training instances at the decision border.</p>
</div>

<h2 class="h2MdTitles" id="influence">Variables influence</h2>

<div>
  <p>Having our final model trained we wanted to understand how it reasons. To do that we calculated the shap values of each variable, which tell us how important is a variable in order to predict that an instance belongs to class zero or one. Coloured in pink we see the variables that affect positively to predict the class and in blue the ones that affect negatively.</p>
  <p>Influence to predict class zero :</p>
  <div class="centerImgDiv">
    <img class="shapValues" src="/imgs/zeroShap.webp">
  </div>
  <p>Influence to predict class one :</p>
  <div class="centerImgDiv">
    <img class="shapValues" src="/imgs/oneShap.webp">
  </div>
  <p>Obviously the test examples remained intact, but it is evident the reduction in the number of class zero training instances at the decision border.</p>
</div>

<h2 class="h2MdTitles" id="implementation">Implementation  👨🏻‍💻</h2>

<div>
  <p>We used <b>Scikit Learn</b>, <b>Pandas</b>, <b>Shap</b>, <b>Category Encoders</b> among other Python libraries in this project. To see the code firsthand click on the image at the top of the page.</p>
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
    background-color:white;
  }
  #outliersImg{
    width:70vw;
  }
  #unbalancedImg{
    background-color:white;
    width:70vw;
  }
  .shapValues{
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