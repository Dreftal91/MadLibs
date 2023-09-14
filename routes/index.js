var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/story', function(req,res){
  let body = req.body;
  let newStory =  getStory(body);
  res.render('story',{
    newStory: newStory,
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode()
  });
})

router.post('/story', function(req, res, next) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  })
});

module.exports = router;

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else if (formData.storyChoice === "Random") {
    return randomStory(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `In a quaint, ${formData.adjective1} town, there lived a ${formData.noun1} named Luna. Luna's ${formData.adjective2} emerald eyes held secrets ${formData.verb1} by the moon itself. Every night, she would prowl the streets, and the townsfolk would watch in awe as she ${formData.verb2} gracefully through the moonlit alleys. Luna's enigmatic presence added a touch of magic to the town, leaving everyone enchanted by her ${formData.adjective1} allure.One evening, Luna encountered a ${formData.adjective2} ${formData.noun2} left unattended near a park bench. Its chrome handlebars glistened in the moonlight, and Luna couldn't resist investigating. She approached the ${formData.noun2} and ${formData.verb1} a secret into the night, then ${formData.verb2} around it as if casting a spell. To the astonishment of the townsfolk who witnessed the spectacle, the ${formData.noun2} began to levitate, floating in the air with a ${formData.adjective1}, ethereal glow. Luna's nightly adventures became legendary in the town, where the ${formData.adjective1} ${formData.noun1} and the ${formData.adjective2} ${formData.noun2} created a sense of wonder and enchantment.`
}
function generateStory2(formData){
  return `Tommy's ${formData.noun2} was unlike any other in the neighborhood. Its ${formData.adjective2} chrome handlebars caught the sunlight in the most dazzling way. His friends were always in awe of his two-wheeled wonder, and they often ${formData.verb1} about how cool it looked. Tommy loved to pedal through the park, feeling the wind in his hair as he ${formData.verb2} his ${formData.noun2} along the winding trails. One sunny day, while Tommy was on his ${formData.noun2} adventure, he stumbled upon a ${formData.adjective1} ${formData.noun1} with emerald eyes that seemed to hold ${formData.verb1} secrets. The ${formData.noun1} ${formData.verb2} gracefully among the wildflowers, creating an enchanting scene that Tommy could hardly believe. The ${formData.adjective1} ${formData.noun1} and the ${formData.adjective2} ${formData.noun2} formed an unexpected friendship, and from that day on, they explored the world together, bringing magic and sparkle to every corner of their lives.`
}
function generateStory3(formData){
  return `In a hidden, ${formData.adjective1} garden, there was a ${formData.noun1} named Luna. Luna's eyes sparkled like emeralds, and they held secrets ${formData.verb1} by the night itself. Every evening, she would find a secluded spot and dance under the moonlight, her movements as ${formData.adjective1} as the secrets she carried. Luna's enigmatic presence added a touch of magic to the garden, where the flowers seemed to sway to the rhythm of her ${formData.adjective1} dance.One night, as Luna ${formData.verb2} gracefully, she heard a soft, ${formData.adjective2} sound approaching. It was a ${formData.noun2}, its handlebars gleaming in the moonlight. The ${formData.noun2}'s presence added an unexpected charm to the garden. Luna ${formData.verb1} a welcome to the ${formData.noun2}, and they ${formData.verb2} together under the shimmering stars. The ${formData.adjective1} whisper of Luna and the ${formData.adjective2} dance of the ${formData.noun2} blended seamlessly, creating a harmonious and magical experience in the garden.`
}

function generateRandomHexCode() {
  let hexCode = "#"
  while (hexCode.length < 7) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}

function randomStory(formData){
  let answers = [1, 2, 3];
  let choice = Math.floor(Math.random()*answers.length);
  if (choice === 1) {
    return generateStory1(formData)
  } else if (choice === 2) {
    return generateStory2(formData)
  } else {
    return generateStory3(formData)
  }
}