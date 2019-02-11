'use strict';

/*Still need:

  further function functionality


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
  ['Question 1', 'Hello! What is your name?', 'Your Name Here.','Asked for a name, result: '],
  ['Question 2', ' Do you know if I like the Horror genre or not?', 'Spot on! I enjoy most forms of it immensly, but most of all I love reading horror novels and comic books.','Well, I do. And let me tell you, Vampires are the best! I also like fictional spider based monsters (but not the real ones!), and stories that play on our existential fears.'],
  ['Question 3', 'Have we ever discussed books?'],
  ['Question 4', 'Can you tell me a bit about yourself?'],
  ['Question 5', 'Do you like comics?', 'What is your favorite comic?', 'Asked user what their favorite comic was ', '? Not everyone does, thats why I asked. Well, it has been lovely talking to you! I would love to talk more about',' sometime.',],
  ['Question 6', 'Do you think I like art?'],
  ['Question 7', 'What is your favorite style of art?', 'Style of Art, like Impressionism, Pop Surrealism, Found Object, ect.', 'Well ', ' I quite enjoy ', ' myself! Fancy that.', ],
  ['Question 8', 'What do you like to drink?','A fluid that is safe for human consumption, like coffee or gin.','I wonder if there are any ',' artists that use ',' as a medium. Do you know of any, ','? Neither do I.'],
  ['Question 9', 'We should get drinks! When are you avaliable?', 'Oh, Wow! ', '? That is awesome! I hope they put out more soon!', ' Well, ',' you seem really cool.', 'Asked user when they would be avaliable for drinks, returned:'],
  ['Question 10', 'How Many Cats do I have?', ['2', 'two'], '1', 'one', '3', 'three','A number, like 1, 2, 3, 90000, ect.', 'That is correct! I have ','! It took you ',' tries to guess that.','Oh man, thats way more cats than I have. But you know, that is the dream.','I have more than that! I really like cats.'],
  ['Question 11', 'What is one of the names I might call my cat(s)?',['salem', 'bynx', 'thackerina bynx', 'sir. salem whitton', 'sir. whitton', 'thackerina ballerina', 'bynxi','bug', 'menace','little man'], 'A good thing to call a cat, like Oliver, Simba, Luna, Cutie-Pie, My Little Nusiance, ect.',' is the name they chose', 'How did you know I call, ','? It only took you ',' tries! I also call them ','Thats an awful thing to say! Who would call their cat that? Not me, thats for sure!', ', '],
  ['Question 12', ' it sounds like we might know each other. Can you tell me a bit about yourself?'],
  ['Yes or No.', 'Asked: ', 'result: ','Oh! Also, you got','questions correct. Not that I was keeping track or anything.']
];

//Question Asked flags

var affirmed_name_flag = false;
var horror_flag = false;
var book_flag = false;
var art_flag = false;
var art_type_flag = false;
var drink_flag = false;
var get_to_know_flag = false;
var like_comic_flag = false;
var comic_flag = false;
var date_flag = false;
var cat_flag = false;
var number_flag = false;
var counter_flag = 0;
var affirmed_name = ' ';

var flags_array = [
  affirmed_name_flag, horror_flag, book_flag, art_flag, art_type_flag, drink_flag, get_to_know_flag, like_comic_flag, comic_flag, date_flag, cat_flag, number_flag, counter_flag, affirmed_name
];

//Function List

//This is the basic function that runs all of my questions.

function question( row, column, affirmed_name, row_prompt, column_prompt, input){
  var input = prompt(affirmed_name +' '+answer[row][column], answer[row_prompt][column_prompt]);
  console.log(answer[15][1] +answer[row][column]+answer[15][2]+input);

  user_answer.push(input);
  return input;

}

//This is the function that adds to my score counter

function score(correct_array, user_answer){
  if (correct_array.includes(user_answer.toLowerCase())){
    counter_flag++;
  }
}

//Name Question: will create the affirmed_name variable

function whats_your_name(){
  affirmed_name = prompt(answer[3][1], answer[3][2]);
  affirmed_name_flag = true;
  console.log(answer[3]+ affirmed_name);
  user_answer.push(affirmed_name);
  return affirmed_name;
}

//auxillary question function: this runs aux functions for questions that require them - such as control flow flags, and colsole.logs

function question_aux(index, logging_what){
  flags_array[index]= true;
  console.log(logging_what);
}

/* switchcase boolean function - sets a vairalbe as a boolean so that my switch cases can work off of them. This effictively checks if they answered a previously asked question correctly and helps direct their answer based on that */

function run_switch_case(row, declared_variable){
  return answer[row].includes(declared_variable.toLowerCase());

}



////////////////////////////////////////////////////////
/* End set up for arrays, flags, and functions. Begin logic that runs program */

/*Ask the User their name using the whats_your_name function, store answer in the affirmed_name variable, push answer to the user_answer array, and log in console.*/

whats_your_name();

//control flow to ensure the affrimed_name variable has been assigned
if(affirmed_name_flag){


  /*this for loop checks answer[12][1] to see if the user input 2 or two. If they did it shuold break and tell them how many tries it took to guess, if they did not it should return a custom statement based on high or low.*/

  //asks how many cats I have, user can answer 2 or two

  for(var guesses = 1; guesses < 5; guesses++){
    var user_cats = question (12,1, affirmed_name, 12, 7);
    var cat_array = answer[12][2];
    for( var c=0; c < cat_array.length; c++){
      if (user_cats === cat_array[c]){
        alert(answer[12][8]+cat_array[c]+answer[12][9]+guesses+answer[12][10]);
        score(answer[12][1], user_cats);
        question_aux(11, user_cats);
        console.log(flags_array[11]);

      }
    }
    if(user_cats > 2){
      alert(answer[12][11]);

    }else if(user_cats < 2){
      alert(answer[12][12]);
    }
    if(flags_array[11]){
      break;
    }
  }

  console.log(user_cats);



  /*this for loop iterates through answer[13][2] until it determines if the user entered one of my cats names. */

  for (var tries=1; tries< 7; tries++){
    console.log(tries);
    var user_cat_name = question (13, 1, affirmed_name, 13, 3);
    console.log (user_cat_name.toLowerCase(), answer[13][4]);
    var cat_name_array = answer[13][2];
    console.log(cat_name_array);
    for(var n=0; n<cat_name_array.length; n++){

      if (user_cat_name.toLowerCase() === cat_name_array[n]){
        question_aux(10, user_cat_name);

        score(answer[13][2], user_cat_name);
        console.log(counter_flag);
      }
    }
    if (flags_array[10]){

      alert(answer[13][5]+user_cat_name+answer[13][9]+user_cat_name+answer[13][6]+tries+answer[13][7]+cat_name_array);
      break;

    } if (!flags_array[10]){
      alert(answer[13][8]);
    }
  }

  console.log(user_cat_name);

  //1.Y/N - leads into the switch statement below

  //1. Do I like Horror?
  var horror = question(4, 1, affirmed_name, 15,0);
  console.log('----');
  console.log(horror);
  console.log('----');
  question_aux(1, horror);

  //score counter, marking tracking if they answered horror correctly

  score(answer[0], horror);
  console.log(counter_flag);
  console.log(flags_array[1]);
  //control flow, checks if the horror variable has been assigned

  if (flags_array[1]){

    //establishes like_horror as an boolean of if horror is in answer
    var like_horror = run_switch_case(0, horror);
    console.log(like_horror);


    // begining of the horror question switch statement
    switch (like_horror) {

    //2.Y/N - This should run if horror is in answer[0].
    case true:
      alert(answer[4][2]);
      var book = question(5, 1, affirmed_name, 15, 0);
      question_aux(2, book);
      break;

      //3.Y/N - This should run if horror is in answer[1].
    case false:
      alert(answer[4][3]);
      var like_art= question(6, 1, affirmed_name,15, 0);

      question_aux(3, like_art);

      score(answer[0], like_art);
      console.log(score);
      break;

      //This should run if they answer in a way other than yes or no.
    default:
      alert(answer[2][0]);
      break;
    }
  }

  /*flag checking if books q has been asked yet. If the books question Has not been asked, I do not want to ask this switch case. */

  if(flags_array[2]){

    /* establishes like_books as an boolean of books in in answer. */

    var like_books = run_switch_case(0, book);

    //Begining of 2nd switch statement
    switch(like_books){

    //4.Y/N - This should run if they answer yes to having discussed books.
    case true:

      var get_to_know = question(14, 1, affirmed_name, 15,0);

      question_aux(6, get_to_know);

      break;

      //5. Y/N - This should run if they answer no to having disucssed books.
    case false:

      var like_comic = question(7, 1, affirmed_name, 15,0);

      question_aux(7, like_comic);

      break;

    default:
      alert(answer[2][1]);
      break;
    }
  }



  //checks to see if the user has been asked if they likes comic's yet.

  if(flags_array[7]){

    var comic_book = run_switch_case(0, like_comic);

    switch(comic_book){

    case true:
      var comic = prompt(answer[7][2]);
      question_aux(8, comic);
      user_answer.push(comic);

      if (!flags_array[9]){
        var avil_date = prompt (answer[11][2]+comic+answer[11][3]+answer[11][4]+affirmed_name+answer[11][4]+ answer[2][3]);

        question_aux(9, avil_date);

        user_answer.push(avil_date);
      }
      break;

    case false:

      if(!flags_array[9]){
        var avil_date = prompt (like_comic+answer[7][4]+user_cat_name+answer[7][5]+ answer[2][3]);

        question_aux(9, avil_date);
      }
      break;

    default:
      alert( answer[2][4]);
      break;
    }
  }

  if (flags_array[3] || flags_array[6]){
    var art = question (9, 1, affirmed_name, 9, 2);

    question_aux(4, art);

      
    alert(answer[9][3]+affirmed_name+answer[9][4]+art+answer[9][5]);

  }
  if (flags_array[4]){
    var drink = question (10, 1, affirmed_name, 10, 2);

    question_aux(5, drink);
    console.log(flags_array[5]);
  }
  if (flags_array[5]){
 
    alert(answer[10][3]+art+answer[10][4]+drink+answer[10][5]+affirmed_name+answer[10][6]);
  }
}
alert(answer[15][3]+counter_flag+answer[15][4]);

