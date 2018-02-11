function palindrome(){
	var maximal = 0;
	for(var a = 100; a < 1000; a++){
		for(var b = 100; b < 1000; b++){
			var x = (a * b).toString();
			var y = reverse(x);
			if(x == y){
				x = parseInt(x);
				if(x > maximal){
					maximal = x;
				}
			}
		}
	}
	return maximal;
}

function reverse(s){
    return s.split("").reverse().join("");
}

module.exports = palindrome();



