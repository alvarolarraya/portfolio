---
layout: "../../layouts/ProjectsLayout.astro"
title: Final college course project
image: /imgs/tfg.webp
transition_image: tfg_img
transition_title: tfg_ttl
description: A research on simple techniques to improve a CNN applied to FER2013
github: https://github.com/alvarolarraya/FinalCollegeCourseProject
cardNumber: 1
aiRelated: true
hasDedicatedPage: true
---
<h2 class="projectTitles">Index</h2>
<ul>
  <li> ⦿ <a href="#generalExplanation">What's all this about? 😶</a></li>
  <li> ⦿ <a href="#techniques">Techniques analyzed</a></li>
  <li> ⦿ <a href="#dataset">Dataset</a></li>
  <li> ⦿ <a href="#baseModel">Choosing the base model</a></li>
    <li class="subList"> ⦾ <a href="#transferLearning">Transfer Learning</a></li>
    <li class="subList"> ⦾ <a href="#fineTuning">Fine tuning</a></li>
    <li class="subList"> ⦾ <a href="#custom">Customized CNN</a></li>
    <li class="subList"> ⦾ <a href="#baseResults">Comparing base results</a></li>
  <li> ⦿ <a href="#dataAugmentation">Data augmentation</a></li>
  <li> ⦿ <a href="#labelSmoothing">Label smoothing</a></li>
  <li> ⦿ <a href="#tta">Test time augmentation</a></li>
  <li> ⦿ <a href="#implementation">Implementation  👨🏻‍💻</a></li>
</ul>

<h2 id="generalExplanation">What's all this about? 😶</h2>

<div><p><b>FER 2013</b> (Face Emotion Recognition) is a dataset that offers the possibility to study a vast number of facial expressions and predict the emotion they are feeling. This project's goal is to analyze the influence of certain machine learning and computer vision techniques.</p><br><p>Starting by creating a very simple <b>CNN</b> which classifies each picture and then applying little changes that almost doesn't mutate the model's structure, yet provide a considerable improvement in the classificator understanding of the problem.</p></div>

<h2 id="techniques">Techniques analyzed</h2>

<ul>
  <li> ⦿ Transfer learning</li>
  <li> ⦿ Fine tuning</li>
  <li> ⦿ Data augmentation</li>
  <li> ⦿ Label smoothing</li>
  <li> ⦿ Test time augmentation</li>
</ul>

<h2 id="dataset">Dataset</h2>

<div>
  <p>All the images are 48x48, in grayscale, the faces are centered similarly and there are seven classes: angry, disgust, fear, happy, sad, surprise and neutral. 28708 examples are to train and 7178 to test.</p>
  <p>As you can see in the sample emotions are ambiguous due to the fact that a face can be classified as more than one emotion and still be correct. Have we got better labels, the model would be much more accurate. To solve this problem I have used besides FER 2013 labels FER 2013+ ones, whom have been made by 10 persons each one voting a class.</p>
  <img src="/imgs/fer+.webp">
  <p>Moreover, some pictures aren't faces, so in FER 2013+ labels we have additional classes that help us clean the dataset. In conclusion, I have worked with two different labels to see how the model and the techniques adapt to these different situations.</p>
  
  <p>Furthermore it's an unbalanced problem:</p>
  <img src="/imgs/data_barplot.webp">
</div>

<h2 id="baseModel">Choosing the base model</h2>

<div>
  <p>The perfect model must be fast to do as many experiments as possible and at the same time to have an acceptable precision in its classification. So I tried different configurations</p>
</div>

<h3 id="transferLearning">Transfer learning</h2>

<div>
  <p>The first model decided to train is actually one already pre-trained with external images not included in the dataset we are working with. As the core of the network, the part that extracts features from the images, I chose ResNet 50. It is a residual network with 48 convolutional layers, a MaxPool layer, and an AveragePool layer. They are called residual networks because they stack residual blocks.</p>

  <p>To adapt the ResNet 50 to our case, I have used transfer learning, which is a technique for transferring knowledge that works for one problem to another problem. The application has been to provide a new head to the ResNet and train both the head and the connections with the ResNet.</p>

  <p>I have opted for the simplest possible head to see where we start from: a dense layer with as many neurons as there are classes, which is 7.</p>
</div>

<h3 id="fineTuning">Fine tuning</h3>

<div>
  <p>Consisting of unfreezing the final phase of the base. In other words, we also train the last layers of the base with our data. This allows for better integration with the customized head we use and, therefore, makes the network's knowledge more specific to the particular problem. This technique offers much better results than just embedding the head as before.</p>

  <p>However, it requires many more resources because a network as the 50-layer ResNet has many parameters to train, even only training the final part of the base the demand increases significantly and, as a result, the training time also increases.</p>

  <p>I would have preferred to use the fine-tuned 50-layer ResNet throughout all the tests I conducted, but it was not feasible owing to time constraints. The tests would have taken too long, and the goal of this work is to compare differences in models before and after using the techniques mentioned above.</p>

  <p>If we only decide to train the head from the previous chapter, which is the simplest approach, we have approximately fourteen thousand parameters to train. With fine-tuning, we can unfreeze layers to the extent that we have around twenty-three and a half million parameters.</p>
</div>

<h3 id="custom">Customized CNN</h2>

<div>
  <p>In machine learning, the speed and the number of training iterations are crucial factors. To expedite the experiments, I have created a model with significantly fewer parameters than the ResNet50.</p>

  <p>This model, in addition to having almost four and a half million trainable parameters, which are several million fewer parameters, is designed to be trained on 48x48 images, which are processed much more quickly. Therefore, the processing times with this new model are significantly shorter.</p>
</div>

<div>
  <p>The perfect model must be fast to do as many experiments as possible and at the same time to have an acceptable precision in its classification. So I tried different configurations</p>
</div>

<h3 id="baseResults">Comparing base results</h2>

<div>
  <table>
    <thead>
      <tr>
        <th id="titleTable" colspan="6">Test accuracy</th>
      </tr>
      <tr>
        <th colspan="2">Transfer learning</th>
        <th colspan="2">Fine tuning</th>
        <th colspan="2">Custom</th>
      </tr>
      <tr>
        <th>FER</th>
        <th>FER+</th>
        <th>FER</th>
        <th>FER+</th>
        <th>FER</th>
        <th>FER+</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>54.68%</td>
        <td>72.93%</td>
        <td>42.1%</td>
        <td>82.02%</td>
        <td>51.78%</td>
        <td>78.1%</td>
      </tr>
    </tbody>
  </table>
  <p>All models are trained for 30 epochs, except for the fine-tuned model because it takes too long. Therefore, we will work with the custom model since it is faster than the fine tuned and more accurate than the transfer learning one.</p>
</div>

<h2 id="dataAugmentation">Data augmentation</h2>

<div> 
  <p>The more examples our model sees, the better. But what can we do if we've already used the entire dataset? Data augmentation addresses this issue. It's a technique, as the name suggests, for adding new examples.</p>

  <p>More or less, because in reality, we take the examples we've already used and apply small changes to make the network think they are new images without having to invest more time and money in expanding the dataset.We make the model generalize better, allowing us to train more epochs making falling into overfitting less likely, ultimately resulting in a better final model.</p>

  <p>However, we can't apply just any changes they have to make sense for the specific problem, else we'll achieve the opposite of what we intend.</p>

  <p>Some of the most common transformations include rotations, horizontal flips, vertical flips, changes in contrast, changes in brightness, horizontal translation, vertical translation, edge cropping, among others.</p>

  <p>This are the results I have obtained:</p>

  <table>
    <thead>
      <tr>
        <th id="titleTable" colspan="4">Test accuracy FER</th>
      </tr>
      <tr>
        <th>horizontal flip</th>
        <th>shear range=5</th>
        <th>horizontal flip and shear range=5</th>
        <th>horizontal flip and shear range=10</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>59.6%</td>
        <td>60.67%</td>
        <td>57.47%</td>
        <td>58.89%</td>
      </tr>
    </tbody>
  </table>

  <table>
    <thead>
      <tr>
        <th id="titleTable" colspan="4">Test accuracy FER</th>
      </tr>
      <tr>
        <th>horizontal flip and shear range=5</th>
        <th>horizontal flip and shear range=10</th>
        <th>horizontal flip, shear range=5 and brightness_range=(0.1,0.2)</th>
        <th>horizontal flip, shear range=5 and vertical flip</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>82.83%</td>
        <td>82.69%</td>
        <td>36.39%</td>
        <td>81.35%</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="labelSmoothing">Label smoothing</h2>

<div> 
  <p>One of the major problems with this dataset is the ambiguity of the classes to which the images belong, as we rarely have emotions that belong solely and exclusively to one of the classes we have. That's why it's logical to consider using label smoothing. To recap: label smoothing allows us to prevent the model from being overly confident in its predictions, which is precisely what we want.</p>

  <p>Decided, let's use label smoothing, but what do we use? As with many hyperparameters in machine learning, one of the easiest ways to choose a good value is to experiment with several options.</p>

  <table>
    <thead>
    <tr>
        <th id="titleTable" colspan="2">FER</th>
      </tr>
      <tr>
        <th>ε</th>
        <th>Test accuracy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0.1</td>
        <td>57.15%</td>
      </tr>
      <tr>
        <td>0.2</td>
        <td>58.94%</td>
      </tr>
      <tr>
        <td>0.3</td>
        <td>56.91%</td>
      </tr>
    </tbody>
  </table>

  <table>
    <thead>
    <tr>
        <th id="titleTable" colspan="2">FER+</th>
      </tr>
      <tr>
        <th>ε</th>
        <th>Test accuracy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0.1</td>
        <td>82.02%</td>
      </tr>
      <tr>
        <td>0.2</td>
        <td>83.41%</td>
      </tr>
      <tr>
        <td>0.3</td>
        <td>82.74%</td>
      </tr>
      <tr>
        <td>0.4</td>
        <td>84.07%</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="tta">Test time augmentation</h2>

<div> 
  <p>Building on the previous concept that allows us to train a better model, we can make mistakes on somewhat ambiguous images. Humans tend to make mistakes as well, and one way to avoid this is by forming committees of people to provide their perspective. What's better than a good model? Multiple good models.</p>

  <p>To emulate this reasoning, what we can do is, for each image we need to classify, apply the same transformations that we used during training, but in this case during the prediction phase, once the model is already in production.</p>

  <p>To do this, we take the incoming image and predict, in addition to the original, all its transformations independently. Then, we aggregate those results, and from there, we obtain a more reliable class than we would have predicted by simply assigning a class to the original image.</p>

  <p>There are several ways to aggregate the predictions, with the most common being to take the average of the probabilities obtained for each image.</p>

  <table>
    <thead>
    <tr>
        <th id="titleTable" colspan="2">FER</th>
      </tr>
      <tr>
        <th>Examples generated for each test picture</th>
        <th>Test accuracy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3</td>
        <td>59.57%</td>
      </tr>
      <tr>
        <td>10</td>
        <td>59.7%</td>
      </tr>
      <tr>
        <td>15</td>
        <td>59.99%</td>
      </tr>
      <tr>
        <td>20</td>
        <td>59.71%</td>
      </tr>
    </tbody>
  </table>

  <table>
    <thead>
    <tr>
        <th id="titleTable" colspan="2">FER+</th>
      </tr>
      <tr>
        <th>Examples generated for each test picture</th>
        <th>Test accuracy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3</td>
        <td>84.98%</td>
      </tr>
      <tr>
        <td>5</td>
        <td>85.17%</td>
      </tr>
      <tr>
        <td>10</td>
        <td>84.84%</td>
      </tr>
      <tr>
        <td>20</td>
        <td>85.27%</td>
      </tr>
      <tr>
        <td>25</td>
        <td>85.32%</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="implementation">Implementation  👨🏻‍💻</h2>

<div>
  <p>This models are made with <b>TensorFlow Keras</b>. To see the code firsthand click on the image at the top of the page.</p>
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