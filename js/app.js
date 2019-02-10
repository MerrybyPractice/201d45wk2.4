'use strict';

/*Still need:

  add var and counter for tracking true answers then alert that tells the user how they did.

  functioning for and while loops

Stretch:

  customized answers for loop starting around 170 depending on which cats name they pick (could make 2 arrays at answer[13] or answer [13] and answer [14])

  Write user answers to page, under the corresponding question. Possibly have questions appear on page as they are asked? Given the structure of this I am not sure where to start - good weekend project.

  improve CSS

  possibly clean up all questions into a loop format?

  move all strings into the array - significantly improve readability.

  */

//user answers pushed here
let user_answer = [

];
//multi-dimensional array, holds all potential answers for these questions
let answer = [
  ['y', 'yes', 'ya','i do', 'ye', 'yee', 'yaa', 'why yes, i do', 'affirmative', 'mmhmm', 'yes, mx'],
  ['n', 'no', 'nope', 'i do not', 'nyop', 'yeet', 'as a matter of fact, i do not', 'negaitve', 'no, mx'],
  ['That dosent seem like the kind of answer I asked for...','Hmmmm....I\'m not sure what your saying...','Are you sure you really want to be talking to me?', 'We should get drinks some time! When works for you?', 'Are you sure you really want to be talking to me?'],
  ['Question 1', 'Hello! What is your name?'],
  ['Question 2', ' Do you know if I like the Horror genre or not?'],
  ['Question 3', 'Have we ever discussed books?'],
  ['Question 4', 'Can you tell me a bit about yourself?'],
  ['Question 5', 'Do you like comics?'],
  ['Question 6', 'Do you think I like art?'],
  ['Question 7', 'What is your favorite style of art?'],
  ['Question 8', 'What do you like to drink?'],
  ['Question 9', 'We should get drinks! When are you avaliable?'],
  ['Question 10', 'How Many Cats do I have?', ['2', 'two'], '1', 'one', '3', 'three'],
  ['Question 11', 'What is one of the names I might call my cat(s)?','salem', 'bynx', 'thackerina bynx', 'sir. salem whitton', 'sir. whitton', 'thackerina ballerina', 'bynxi','bug', 'menace','little man'],
  ['Question 12', ' it sounds like we might know each other. Can you tell me a bit about yourself?'],
];
//Question Asked flags
var affirmed_name_flag = false;
var horror_flag = false;
var book_flag = false;
var art_flag = false;
var drink_flag = false;
var get_to_know_flag = false;
var like_comic_flag = false;
var cat_flag = false;
var number_flag = false;

//Function List

//This is the basic function that runs all of my questions.
function question( row, column, affirmed_name, box_text){
  var input = prompt(affirmed_name +' '+answer[row][column], box_text);
  console.log('Asked,' +answer[row][column]+input);
  user_answer.push(input);
  return input;
}
// //Ask the User their name, store in console.
var affirmed_name = prompt('Hello! What is your name?', 'Your Name Here');
affirmed_name_flag = true;
console.log('Asked for a name, result:'+affirmed_name);
user_answer.push(affirmed_name);
if(affirmed_name_flag){

  //1.Y/N - leads into the switch statement below

  //1. Do I like Horror?
  var horror = question(4, 1, affirmed_name, 'Yes or No');
  horror_flag = true;
  console.log(horror);

  //checks if the horror question has been asked

  if (horror_flag){

    // establishes like_horror as an boolean of if horror is in answer
    var like_horror = answer[0].includes(horror.toLowerCase());

    // begining of the horror question switch statement
    switch (like_horror) {

    //2.Y/N - This should run if horror is in answer[0].
    case true:
      alert('Spot on! I enjoy most forms of it immensly, but most of all I love reading horror novels and comic books.');
      var book = question(5, 1, affirmed_name, 'Yes or No');
      console.log(book);
      book_flag = true;
      break;

      //3.Y/N - This should run if horror is in answer[1].
    case false:
      alert('Well, I do. And let me tell you, Vampires are the best! I also like fictional spider based monsters (but not the real ones!), and stories that play on our existential fears.');
      var like_art= question(6, 1, affirmed_name, 'Yes or No');
      console.log(like_art);
      art_flag = true;
      break;

      //This should run if they answer in a way other than yes or no.
    default:
      alert('That dosent seem like the kind of answer I asked for...');
      break;
    }
  }

  /*flag checking if books q has been asked yet. If the books question Has not been asked, I do not want to ask this switch case. */

  if(book_flag){

    /* establishes like_books as an boolean of books in in answer. Currently returns undefined - I believe this is a variable scope issue. Working on a fix, sleep took precidence. */

    var like_books = answer[0].includes(book.toLowerCase());

    //Begining of 2nd switch statement
    switch(like_books){

    //4.Y/N - This should run if they answer yes to having discussed books.
    case true:

      var get_to_know = question(14, 1, affirmed_name, 'Yes or No');
      console.log(get_to_know);
      get_to_know_flag = true;
      break;

      //5. Y/N - This should run if they answer no to having disucssed books.
    case false:

      var like_comic = question(7, 1, affirmed_name, 'Yes or No');
      console.log(like_comic);
      like_comic_flag = true;
      break;

    default:
      alert(answer[2][1]);
      break;
    }
  }



  //checks to see if the user has been asked if they likes comic's yet.

  if(like_comic_flag){

    /*establishes a boolean for comic_book in answer. Currently returns undefined - I believe this is a variable scope issue. Working on a fix, sleep took precidence. */

    var comic_book = answer[0].includes(like_comic.toLowerCase());

    switch(comic_book){

    case true:
      var comic = prompt('What is your favorite comic?');
      console.log('Asked user what their favorite comic was '+ comic);
      user_answer.push(comic);

      var avil_date = prompt ('Oh, Wow! '+comic+'? That is awesome! Woundn\'t it be cool if an issue was done in '+art+' style? Well, '+affirmed_name+' you seem really cool.'+ answer[2][3]);
      console.log('Asked user when they would be avaliable for drinks, returned:'+avil_date);
      user_answer.push(avil_date);
      break;

    case false:
      alert (like_comic+'? Not everyone does, thats why I asked. Well, it has been lovely talking to you! I would love to talk more about'+art+'sometime.'+ answer[2][3]);
      break;

    default:
      alert( answer[2][4]);
      break;
    }
  }
  /*this for loop should check answer[12][1] and see if the user input 2 or two. If they did it shuold break and tell them how many tries it took to guess, if they did not it should return a custom statement based on hi or low. It is a work in progress.
//These next two questions are looking for strings*/

  if (art_flag){
    var art = question (9, 1, affirmed_name, 'Style of Art, like Impressionism, Pop Surrealism, Found Object, ect.');
    art_flag = true;
    alert('Well '+affirmed_name+' I quite enjoy '+art+' myself! Fancy that.');
    console.log(art);
  }

  if (art_flag){
    var drink = question (10, 1, affirmed_name, 'A fluid that is safe for human consumption, like coffee or gin.');
    drink_flag = true;
    if (drink_flag){
      alert('I wonder if there are any '+art+' artists that use '+drink+' as a medium. Do you know of any, '+affirmed_name+'? Neither do I.');
      console.log(drink);
    }
  }
  //asks how many cats I have, user can answer 2 or two

  for(var guesses = 1; guesses < 5; guesses++){
    var user_cats = question (12,1, affirmed_name, 'A number, like 1, 2, 3, 90000, ect.');
    var cat_array = answer[12][2];
    for( var c=0; c < cat_array.length; c++){
      if (user_cats === cat_array[c]){
        alert('That is correct! I have '+cat_array[c]+'! It took you '+guesses+' tries to guess that.');
        number_flag = true;
      }
    }
    if(user_cats > 2){
      alert('Oh man, thats way more cats than I have. But you know, that is the dream.');

    }else if(user_cats < 2){
      alert('I have more than that! I really like cats.');
    }
    if(number_flag){
      break;
    }
  }

  console.log(user_cats);



  /*this while loop should iterate through answer[13] until it determines if the user entered one of my cats names. Currently, it does not.

-1 The last Q about cats is in an infinite loop.  Have a look at the if else structure.  Is that last else, where you increment e++, necessary?  .
*/

  // eslint-disable-next-line no-debugger
  debugger;
  do {
    for (var o=0; o<answer[13].length; o++){
      console.log(o);
      var user_cat_name = question (13, 1, affirmed_name, 'A good thing to call a cat, like Oliver, Simba, Luna, Cutie-Pie, My Little Nusiance, ect.');
      console.log (user_cat_name);
      if (user_cat_name === answer[13][o].toLowerCase){
        cat_flag=true;
        console.log(cat_flag);
      }
      if (cat_flag){
        alert('How did you know I call, '+user_cat_name+' '+user_cat_name+'? It only took you x tries! I also call them'+answer[13].slice(2-11));
        break;
      }
    }
  }while (!cat_flag);

  console.log(user_cat_name);


//stretch: alternate text for guessing salem vs bynx
}
