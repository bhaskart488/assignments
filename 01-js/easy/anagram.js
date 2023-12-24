/*
	Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
	What's Anagram?
	- A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	let str11 = str1.toLowerCase();
	let str22 = str2.toLowerCase();
	if (str11.length === str22.length){
		for (let i = 0; i < str11.length; i++) {
			if (str22.includes(str11[i])) {
				continue;
			}
			else {
				return false;
			}
		}
	}
	else {
		return false;
	}

	return true;
	
}

module.exports = isAnagram;
