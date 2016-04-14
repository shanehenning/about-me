var i = 0;
function gameClick(){

  var userName = prompt('Hi! What is your name?');
  console.log('The user said their name was ' + userName);
  var game = alert('Hi ' + userName + ', you seem like a fun human! Wanna play a super fun game?');
  console.log('The user says ' + game);

  var questionBank = ['Question 1 of 5: \rOk, ' + userName + ', Yes or No: I was raised by wolves?', 'Question 2 of 5: \rI\'m allergic to jalapenos?', 'Question 3 of 5: \rI am a descendent of Abraham Lincoln?', 'Question 4 of 5: \rI have a pet chameleon?', 'Last Question!\rThis one\'s worth 3x\'s as many points as the others!\r\rI\'m a phenomenal dancer?', 'Guess my favorite number!\r\r(Hint: It\'s between 1-10)'];
  var commentaryYes = ['Turns out, no, I was raised by real people.\r\rOk, here comes the next question!', 'Ha! I am not! Some like it hot, and I am that some!\r\rAlright here\'s the next one!', 'I cannot lie, I am not related to the Vampire Slayer.\r\rHow about another question?!', 'I wish! My landlord doesn\'t allow awesome!\r\rReady for the last question? I bet you are!', 'My whiteness prohibits any dancing skill.'];
  var commentaryNo = ['That\'s right! I was raised by real people!\r\rOk, here comes the next question!', 'Correct ' + userName + '! And thank goodness! Nachos wouldn\'t be the same!\r\rAlright here\'s the next one!', 'Lucky guess? You got it ' + userName + '!\r\rHow about another question?!', 'You\'re so good at this game ' + userName + '!\rAlas my home is not that exciting...\r\rReady for the last question? I bet you are!', 'Too true. Too true.', 'That\'s not a number! Let\'s try that again!'];
  for (i = 0; i < questionBank.length; i++) {
    var response = prompt(questionBank[i]);
    console.log('The user says ' + response);
    if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes'){
      alert(commentaryYes[i]);
    } else{
      alert(commentaryNo[i]);
    }
  }

  while (i < 3){
    var response = prompt('hi');
    i ++;
    if(response === 4){
      alert('You did it!');
      break;
    } else if (response.isNaN()){
      alert(commentaryNo[6]);
    } else if(response < 4){
      alert('Too low!');
    } else if(response > 4){
      alert('Too high!');
    }
    else{
      alert('Try again!');
    }
  }
  // alert('You did it!\rThat took about as long as the DMV.\rWay to power through!');

}
()
