const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.titleize = function() {
  var string_array = this.split(' ');
  string_array = string_array.map(function(str) {
     return str.capitalize(); 
  });
  
  return string_array.join(' ');
}

const titleCased = () => {
  return tutorials.map(tutorial => tutorial.titleize())
}
