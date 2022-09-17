var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name? ")
console.log('Welcome ' + userName + " Are you a football fan")
console.log('+1 For Every Right Answer and -1 for Every Wrong Answer')
var ques1 = {
  question: 'Who won the CL last season? ',
  answer: 'real madrid'
}

var ques2 = {
  question: 'Youngest player to score a goal in world cup? ',
  answer: 'pele'
}

var ques3 = {
  question: 'Oldest player to score a goal in world cup? ',
  answer: 'roger milla'
}

var ques4 = {
  question: 'Who won the premier league last season?',
  answer: 'manchester city'
}

var ques5 = {
  question: 'Who won the LaLiga last season?',
  answer: 'real madrid'
}

var questionsArray = [ques1, ques2, ques3, ques4, ques5]

var highScorers = [
  {
    name: 'Ansh',
    score: 3
  },
  {
    name: 'Lakshay',
    score: 2
  },
  {
    name: 'Sanchit',
    score: 1
  }
]


var score = 0

function game(questions) {
  for (i = 0; i < questions.length; i++) {
    var currSet = questions[i];
    var currQues = readlineSync.question(currSet.question);
    var currAns = currSet.answer
    if (currQues.toLowerCase() === currAns) {
      console.log('You guessed it right!')
      score += 1
    } else {
      console.log('Wrong! the current answer is ' + currAns)
      score -= 1
    }
  }
  console.log('Your final score: ' + score)
  return score
}

const player_score = game(questionsArray);
var player = {
  name: userName,
  score: player_score
}

// scores
var first = highScorers[0];
var second = highScorers[1];
var third = highScorers[2];

if (player_score > first.score) {
  third = second;
  second = first;
  first = player;
}

else if (player_score > second.score) {
  third = second;
  second = player;
}

else if (player_score >= third.score) {
  third = player;
}

console.log('Top Three Scorers Are:');
console.log(`${first.name} : ${first.score}`);
console.log(`${second.name} : ${second.score}`);
console.log(`${third.name} : ${third.score}`);