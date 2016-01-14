var questions = [ 
	{
		question: "what's 2 + 2?",
		answer: 4
	},
	{
		question: "How many planets are in our solar system?",
		answer: 8
	},
	{
		question: "What's 10 / 5?",
		answer: 2
	},
	{
		question: "How many cups are in a pint?",
		answer: 4
	},
	{
		question: "How many weeks are in a year?",
		answer: 52
	},
	{
		question: "Yes, or No: Should you always be coding?",
		answer: "yes"
	},
	{
		question: "How long is Codify Academy's Front End Dev Course?",
		answer: 16
	},
	{
		question: "How many Musketeers are there?",
		answer: 3
	},
	{
		question: "How many legs do insects have?",
		answer: 6
	},
	{
		question: "How many inches in a foot",
		answer: 12
	}

]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}








