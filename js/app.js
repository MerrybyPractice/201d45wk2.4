'use strict';

//multi-dimensional array, holds all potential answers for these questions

let answer = [
  ['y', 'yes', 'ya','i do', 'ye', 'yee', 'yaa', 'why yes, i do', 'affirmative', 'mmhmm', 'yes, mx'], 
  ['n', 'no', 'nope', 'i do not', 'nyop', 'yeet', 'as a matter of fact, i do not', 'negaitve', 'no, mx'], 
  ['That dosent seem like the kind of answer I asked for...','Hmmmm....I\'m not sure what your saying...','Are you sure you really want to be talking to me?', 'We should get '+drink+'s some time! When works for you?', 'Are you sure you really want to be talking to me?']
  ['Question 1', 'Hello! What is your name?'],
  ['Question 2', ' Do you know if I like the Horror genre or not?'], 
  ['Question 3', 'Have we ever discussed books?'], 
  ['Question 4', 'Can you tell me a bit about yourself?'], 
  ['Question 5', 'Do you like comics?'], 
  ['Question 6', 'Do you think I like art?'], 
  ['Question 7', 'What is your favorite style of art?'], 
  ['Question 8', 'What do you like to drink?'], 
  ['Question 9', 'We should get drinks! When are you avaliable?'], 
  ['Question 10', '2', 'two', '1', 'one', '3', 'three'], 
  ['Question 11'], 
  ['Question 12'],  
]; 

//Ask the User their name, store in console.
var affirmed_name = prompt('Hello! What is your name?', 'Your Name Here');
console.log('Asked for a name, result:'+affirmed_name);
answer.push(affirmed_name); 

//1.Y/N - leads into the switch statement below
var horror = prompt(affirmed_name+' Do you know if I like the Horror genre or not?', 'Yes or No');
console.log('Asked if user knew if I liked Horror or not, result:'+ horror);
answer.push(horror); 

// begining of the horror question switch statement 
switch (horror.toLowerCase()) {

    //2.Y/N - This should run if they answer yes to knowing if I like horror.
  case answer[0]:
  var book = prompt('Spot on! I enjoy most forms of it immensly, but most of all I love reading horror novels and comic books. '+affirmed_name+' have we ever discussed books?', 'Yes or No');
  console.log('Asked if user and I had ever discussed books, result:'+ book);
  answer.push(book);
  break;

    //3.Y/N - This should run if they answer no to knowing if I like horror.
  case answer[1]: 
  var like_art = prompt ('Well, I do. And let me tell you, Vampires are the best! I also like fictional spider based monsters (but not the real ones!), and stories that play on our existential fears. Do you think I like art?', 'Yes or No');
  console.log('Asked if the user thought I liked art, result: '+like_art); 
  answer.push(like_art);
  break;

  //This should run if they answer in a way other than yes or no. 
  default: 
  alert(answer[2, 0]); 
  break; 
}

//Begining of 2nd switch statement 
switch (book.toLowerCase()){ 

  //4.Y/N - This should run if they answer yes to having discussed books. 
  case answer[0]: 
  var get_to_know = prompt('Wow '+affirmed_name+' it sounds like we might know each other. Can you tell me a bit about yourself?','Yes or No'); 
  console.log('Asked if I could get to know user:'+get_to_know); 
  answer.push(get_to_know); 
  break; 

  //5. Y/N - This should run if they answer no to having disucssed books. 
  case answer[1]
  var like_comic = prompt ('Do you like comics?', 'Yes or No');
  console.log('Asked if user likes comics or not, result:'+ like_comic); 
  answer.push(like_comic); 
  break; 

  default: 
  alert(answer[2, 1]); 
  break; 
} 

//These next two questions are looking for strings
var art = prompt(' What is your favorite style of art?', 'Type it here!');
console.log('Asked for users favorite style of art, result:'+art);
alert('Well '+affirmed_name+' I quite enjoy '+art+' myself! Fancy that.');
answer.push(art); 


var drink = prompt(affirmed_name+', what do you like to drink?');
console.log('Asked what user likes to drink, result:'+drink);
alert('I wonder if there are any '+art+' artists that use '+drink+' as a medium. Do you know of any, '+affirmed_name+'? Neither do I.');
answer.push(drink); 

switch(like_comic.toLowerCase ()){

  case answer [0]:
  var comic = prompt('What is your favorite comic?'); 
  console.log('Asked user what their favorite comic was '+ comic); 
  answer.push(comic); 
  var avil_date = prompt ('Oh, Wow! '+comic+'? That is awesome! Woundn\'t it be cool if an issue was done in '+art+' style? Well, '+affirmed_name+' you seem really cool.'+ answer[2, 3]); 
  console.log('Asked user when they would be avaliable for drinks, returned:'+avil_date');
  answer.push(avil_date);
  break; 

  case answer [1]:
  alert (like_comic+'? Not everyone does, thats why I asked. Well, it has been lovely talking to you! I would love to talk more about'+art+'sometime.'+ answer[2,3]); 

  default: 
  alert( answer[2, 4]);
}

//loop 1 - How many cats to I have? (ref answers [])
//loop 2 
