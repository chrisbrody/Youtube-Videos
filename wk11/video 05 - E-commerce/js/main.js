function shirt(name, size, color, stock, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.stock = stock
	this.image = image
}

var shirtArray = new Array
 
var whiteTee   = new shirt('White Tee', 'Medium', 'white', 150, 'img/whitetee.png')
var blackTee   = new shirt('Black Tee', 'Medium', 'black', 50, 'img/blacktee.png')
var redTee     = new shirt('Red Tee', 'Medium', 'white', 150, 'img/redtee.png')
var blueTee    = new shirt('Blue Tee', 'Medium', 'white', 150, 'img/bluetee.png')
var greenTee   = new shirt('Green Tee', 'Medium', 'white', 150, 'img/greentee.png')
var yellowTee  = new shirt('Yellow Tee', 'Medium', 'white', 150, 'img/yellowtee.png')

shirtArray.push(whiteTee, blackTee, redTee, blueTee, greenTee, yellowTee)

for(var i = 0; i < shirtArray.length; i++) {
	var tName   = document.createTextNode(shirtArray[i].name),
		tSize   = document.createTextNode("Available size: " + shirtArray[i].size)
		tColor  = document.createTextNode("Color: " + shirtArray[i].color)
		tStock  = document.createTextNode("In stock: " + shirtArray[i].stock)
		tButton = document.createTextNode("Buy Now!")
		tImage  = shirtArray[i].image

	var newCol  = document.createElement('div'),
		newDiv  = document.createElement('div'),
		nameH1  = document.createElement('h1'),
		sizeH4  = document.createElement('h4'),
		colorH4 = document.createElement('h4'),
		stockH4 = document.createElement('h4'),
		buyNow  = document.createElement('button'),
		image   = document.createElement('img')

	nameH1.appendChild(tName)
	sizeH4.appendChild(tSize)
	colorH4.appendChild(tColor)
	stockH4.appendChild(tStock)
	buyNow.appendChild(tButton)
	buyNow.className = 'btn btn-primary btn'
	image.src = tImage
	image.className = "img-responsive"

	newCol.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + i + " thumbnail"
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById("shirts").appendChild(newCol)
}