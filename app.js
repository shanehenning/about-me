var userName = prompt('Hi! What is your name?');
console.log('The user said their name was ' + userName);
alert('Hi ' + userName + ', you seem like a fun human! Wanna play a super fun game?');

function wolves(){
  var userWolves = prompt('Question 1 of 5: \rOk, ' + userName + ', Yes or No: I was raised by wolves?');
  console.log('The user says ' + userWolves);
  if (userWolves.toLowerCase() === 'y' || userWolves.toLowerCase() === 'yes'){
    alert('Turns out, no, I was raised by real people.\r\rOk, here comes the next question!');
  } else if(userWolves === 'n' || userWolves === 'no'){
    alert('That\'s right! I was raised by real people!\r\rOk, here comes the next question!');
  } else{
    alert('That\'s not how you play! You have to answer either yes or no!');
    wolves();
  }
};
wolves();

function jalapeno(){
  var userJalapeno = prompt('Question 2 of 5: \rI\'m allergic to jalapenos?');
  console.log('The user says ' + userJalapeno);
  if (userJalapeno.toLowerCase() === 'y' || userJalapeno.toLowerCase() === 'yes'){
    alert('Ha! I am not! Some like it hot, and I am that some!\r\rAlright here\'s the next one!');
  } else if(userJalapeno === 'n' || userJalapeno === 'no'){
    alert('Correct ' + userName + '! And thank goodness! Nachos wouldn\'t be the same!\r\rAlright here\'s the next one!');
  } else{
    alert('That\'s not how you play! You have to answer either yes or no!');
    jalapeno();
  }
};
jalapeno();

function descendent(){
  var userDescendent = prompt('Question 3 of 5: \rI am a descendent of Abraham Lincoln?');
  console.log('The user says ' + userDescendent);
  if (userDescendent.toLowerCase() === 'y' || userDescendent.toLowerCase() === 'yes'){
    alert('I cannot lie, I am not related to the Vampire Slayer.\r\rHow about another question?!');
  } else if(userDescendent === 'n' || userDescendent === 'no'){
    alert('Lucky guess? You got it ' + userName + '!\r\rHow about another question?!');
  } else{
    alert('That\'s not how you play! You have to answer either yes or no!');
    descendent();
  }
};
descendent();

function chameleon(){
  var userChameleon = prompt('Question 4 of 5: \rI have a pet chameleon?');
  console.log('The user says ' + userChameleon);
  if (userChameleon.toLowerCase() === 'y' || userChameleon.toLowerCase() === 'yes'){
    alert('I wish! My landlord doesn\'t allow awesome!\r\rReady for the last question? I bet you are!');
  } else if(userChameleon === 'n' || userChameleon === 'no'){
    alert('You\'re so good at this game ' + userName + '!\rAlas my home is not that exciting...\r\rReady for the last question? I bet you are!');
  } else{
    alert('That\'s not how you play! You have to answer either yes or no!');
    chameleon();
  }
};
chameleon();

function dance(){
  var userDance = prompt('Last Question!\rThis one\'s worth 3x\'s as many points as the others!\r\rI\'m a phenomenal dancer?');
  console.log('The user says ' + userDance);
  if (userDance.toLowerCase() === 'y' || userDance.toLowerCase() === 'yes'){
    alert('My whiteness prohibits any dancing skill.');
  } else if(userDance === 'n' || userDance === 'no'){
    alert('Too true. Too true.');
  } else{
    alert('That\'s not how you play! You have to answer either yes or no!');
    dance();
  }
};
dance();
alert('You did it!\rThat took about as long as the SAT\'s.\rWay to power through!');
