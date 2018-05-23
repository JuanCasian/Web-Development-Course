var scores = [98, 37, 87, 97, 100, 50, 61];

function aveScores (scores){
	var result = 0;
	for (var i = 0; i < scores.length ; i++ ){
		result = result + scores[i];
	}
	result = result/scores.length;
	
	console.log(Math.round(result));
}

aveScores(scores);