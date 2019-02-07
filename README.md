# 201d45wk2.4
Want to get a drink? 

  That is the fundimental question this app is asking. I wanted to get to know a little bit about the user, and then encourage them to offer a date and time to get a drink. 


  When at one point during the writing of my yes/no questions, my code was a mess of branching if/elseif statements. I couldnt keep them straight, but I also didnt want to give up the neat user experience that allowed for slightly different questions depending on their response. 

  Fortunatly, a stroll through the documentation for a couple of the things we had discussed in class brought me to the arrays page of MDN. There I found this: 
    
    console.log(array1.includes(2));
  
  I decided to play with it a bit, and found the key to this whole app: 
    
    if(answer.includes(book.toLowerCase())){

    }
  After that it was mostly tidying up, a bit of HTML here, a bit of CSS there, and viola! 

  When transitioning from 2 arrays to one multidimensional array, I referred to two different sources - both MDN and Javascript.info. On MDN, the most useful page for multidimensional array syntax was acutally Indexed Collections, however Javascript.info's feature that allows you to open a plunker window and play around with a snip of code was intrigal to my understanding fully how they work. 

Enjoy! 

ps. we should get a drink! 
pps. my partner is a python dev. In this house, we use snake_case. 

  Javascript.info Arrays: 
  https://javascript.info/array

  MDN Arrays: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

  MDN Indexed Collections: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections 
