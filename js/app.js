'use strict';

//Ask the User their name, store in console.  
var affirmed_name = prompt('Hello! What is your name?'); 
console.log('Asked for a name, result:'+name); 

//Q1. kicks off the if/else statement below. 
var horror = prompt(affirmed_name+'Do you know if I like the Horror genra or not?', 'Yes or No'); 
console.log('Asked if user knew if I liked Horror or not, result:'+ horror)

//Q2.If the user answered that they knew I liked horror, this runs. 

if(horror === 'y'.toLowerCase){
  var book = prompt('Spot on! I enjoy most forms of it immensly, but most of all I love reading horror novels and comic books. '+name+' have we ever discussed books?', 'Yes or No')
  console.log('Asked if user and I had ever discussed books, result:'+book); 
  var book = prompt('Spot on! I enjoy most forms of it immensly, but most of all I love reading horror novels and comic books. '+name+' have we ever discussed books?', 'Yes or No'); 
  console.log('Asked if user and I had ever discussed books, result:'+book); 
  //Q3.y
  if (book === 'y'.toLowerCase){
      var get_to_know =('Wow,'+affirmed_name+' it sounds like we might know each other. Can you tell me a bit about yourself?')
      console.log('Asked if I could get to know user:'+ get_to_know); 
//Q3.yes
  }else if(book === 'yes'.toLowerCase){
      var get_to_know =('Wow,'+affirmed_name+' it sounds like we might know each other. Can you tell me a bit about yourself?')
      console.log('Asked if I could get to know user:'+ get_to_know); 
//Q3.n
  }else if( book === 'n'.toLowerCase){
//Q3.no
  }else if(book === 'no'.toLowerCase)

//Q2.2 
}else if(horror ==='yes'.toLowerCase){
    var book = prompt('Spot on! I enjoy most forms of it immensly, but most of all I love reading horror novels and comic books. '+name+' have we ever discussed books?', 'Yes or No'); 
    console.log('Asked if user and I had ever discussed books, result:'+book); 
    //Q3.y.2 
    if (book === 'y'.toLowerCase){
        var get_to_know =('Wow,'+affirmed_name+' it sounds like we might know each other. Can you tell me a bit about yourself?')
        console.log('Asked if I could get to know user:'+ get_to_know); 
    //Q3.yes.2
    }else if(book === 'yes'.toLowerCase){
        var get_to_know =('Wow,'+affirmed_name+' it sounds like we might know each other. Can you tell me a bit about yourself?')
        console.log('Asked if I could get to know user:'+ get_to_know); 
    //Q3.n.2
    }else if( book === 'n'.toLowerCase){
    //Q3.no.2
    }else if(book === 'no'.toLowerCase)


    

//Q4.If the user answered that they did not know if I liked horror, this runs. 
}else if(horror ==='n'.tolowercase){
    var likeart = prompt('Well, I do. And let me tell you, Vampires are the best! I also like fictional spider based monsters (but not the real ones!), and stories that play on our extensial fears. Do you think I like art?', 'Yes or No'); 
    console.log('Asked if the user thought I liked art, result: '+likeart);
}else if(horror === 'no'.tolowercase){
    var likeart = prompt('Well, I do. And let me tell you, Vampires are the best! I also like fictional spider based monsters (but not the real ones!), and stories that play on our extensial fears. Do you think I like art?', 'Yes or No'); 
    console.log('Asked if the user thought I liked art, result: '+likeart);
}
    
        
    //Q4. if user answered book question n, they are directed here
  } else {
    //book n
  }

  //Q5. If the user answered that they did not know if I liked horror, this runs.
}else{
   
}

var art = prompt(' What is your favorite style of art?', 'Type it here!'); 
console.log('Asked for users favorite style of art, result:'+art); 
alert('Well'+affirmed_name+'I quite enjoy'+art+' myself! Fancy that.'); 

var drink = prompt (name+', what do you like to drink?'); 
console.log('Asked what user likes to drink, result:'+drink); 
alert('I wonder if there are any '+art+' artists that use '+drink+' as a medium. Do you know of any, '+name+'Neither do I.'); 

var like_comic = prompt ('Do you like comics?', 'Yes or No'); 
console.log('Asked if user likes comics or not, result:'+ like_comic); 

if (like_comic === 'y'){
  var comic = prompt('Oh? Whats your favorite comic?'); 
  console.log('Asked user what their favorite comic was'+comic);
  var avil_date = prompt('Oh, Wow! '+comic+'? That is awesome! Woundn\'t it be cool if an issue was done in '+art+' style? Well, '+affirmed_name+' you seem really cool. We should get '+drink+'s some time! When works for you?'); 
  console.log('Asked user when they would be avaliable for drinks, returned:'+avil_date); 
}else{
  // like comic N
}


// drops in at art 


//Y/N question 5 - q2 n, Well..... let me tell you abit about what I like! drops in at comics.  
//var answer = prompt ()
//console.log 
