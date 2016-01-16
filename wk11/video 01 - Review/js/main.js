// 1. Display the length of all 5 variable types in the console
var str = "string"
var num = 2998
var boo = true
var arr = ["24", "what", "false"]
var obj = {
	length: "1 mile",
	height: "short"
}

console.log(str.length)
console.log(num.length)
console.log(str.length)
console.log(arr.length)
console.log(obj.length)


// 2. Reverse an array
console.log(arr.reverse())


// 3. Sort an array of numbers and an array of strings
console.log("sorted alphabetically: " + arr.sort())

var numberArray = [9, 33, 87, 140, 50]
console.log("sorting numbers: " + numberArray.sort())


// 4. Push a new item to the end of an array
numberArray.push(9999)
console.log(numberArray)


// 5. Remove the last item of an array using pop()
arr.pop()
console.log(arr)


// 6. Add a new index at the beginning of an array using unshift()
numberArray.unshift(1111)
console.log(numberArray)


// 7. Remove the last index at the beginning of an array using shift()
arr.shift()
console.log(arr)






