var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

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
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `There was once a slave who was treated ${formData.adjective1} by his master. One day, he couldn’t take it anymore and ${formData.verb1} away to the forest to escape. There he chanced upon a lion who couldn’t ${formData.verb2} because of the ${formData.noun1} in its paw. Although he’s ${formData.adjective2}, the slave mustered his courage and took out the ${formData.noun1} in the lion’s paw. When the lion was finally free of the ${formData.noun1}, he ran into the forest and didn’t harm the slave. Sometime later, the slave was caught by his master along with some ${formData.noun2} in the forest. The master then ordered the slave to be thrown into the lion’s den. When the slave saw the lion, he recognized it as the same lion he helped in the forest. The slave was able to escape the den unharmed and he freed all the other animals.`
}
function generateStory2(formData){
  return `Twas a cold and wintery ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}}`
}
function generateStory3(formData){
  return `Twas a rainy and cold ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}}`
}
