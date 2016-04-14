function gameClick(){
  var userName = prompt('Hi! What is your name?');
  console.log('The user said their name was ' + userName);
  var game = alert('Hi ' + userName + ', you seem like a fun human! Wanna play a super fun game?');

  var questionBank = ['Question 1 of 7: \rOk, ' + userName + ', Yes or No: I was raised by wolves?', 'Question 2 of 7: \rI\'m allergic to jalapenos?', 'Question 3 of 7: \rI am a descendent of Abraham Lincoln?', 'Question 4 of 7: \rI have a pet chameleon?', 'Question 5 of 7:\rI\'m a phenomenal dancer?'];
  var commentaryYes = ['Turns out, no, I was raised by real people.\r\rOk, here comes the next question!', 'Ha! I am not! Some like it hot, and I am that some!\r\rAlright here\'s the next one!', 'I cannot lie, I am not related to the Vampire Slayer.\r\rHow about another question?!', 'I wish! My landlord doesn\'t allow awesome!\r\rHere comes the next question!'];
  var commentaryNo = ['That\'s right! I was raised by real people!\r\rOk, here comes the next question!', 'Correct ' + userName + '! And thank goodness! Nachos wouldn\'t be the same!\r\rAlright here\'s the next one!', 'Lucky guess? You got it ' + userName + '!\r\rHow about another question?!', 'You\'re so good at this game ' + userName + '!\rAlas my home is not that exciting...\r\rHere comes the next question!', 'Too true. Too true.', 'That\'s not a number! Let\'s try that again!'];
  var favColor = ['blue', 'red', 'purple'];
  var q = 0;

//Questions 1-5
  for (x = 0; x < questionBank.length; x++) {
    var response = prompt(questionBank[x]);
    console.log('The user says ' + response);
    if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes'){
      alert(commentaryYes[x]);
    } else{
      alert(commentaryNo[x]);
      q += 1;
    }
  }
//Question 6
  var y = 0;
  while (y < 3){
    y ++;
    var response = prompt('Question 6 of 7:\rCan you guess my favorite number!\r\r(I\'ll give you four tries! Hint: It\'s between 1-10)');
    console.log('The user says ' + response);
    if(parseInt(response) < 7){
      alert('Too low!');
    } else if(response > 7){
      alert('Too high!');
    } else if (isNaN(response)){
      alert('That\'s not a number!');
    } else{
      y = 3;
      q += 1;
      alert('That\'s right! ' + response + ' is my favorite number!\r\rAre you ready for the last question? I bet you are!');
    }
  }
//Question 7
  var z = 0;
  while (z < 5){
    z ++;
    var response = prompt('Question 7 of 7:\rCan you guess one of my favorite colors?\r\rThis time I\'ll give you six tries.');
    console.log('The user says ' + response);
    if (response.toLowerCase() == favColor[0] || response.toLowerCase() == favColor[1] || response.toLowerCase() == favColor[2]){
      z = 5;
      q += 1;
      alert('That\'s right!, ' + response + ' is one of my favorite colors!\r\rThat was the last one! Let\'s see how you did!');
    } else {
      alert('Try again!');
    }
  }
  alert('Way to go!  You got ' + q + ' out of 7 questions correct!\r\rThat\'s ' + parseInt(q / 7 * 100) + '%!');
} 
