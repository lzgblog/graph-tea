const cowsay = require('cowsay');
const teawordart = require('tea-word-art');
const teacharactergraph = require('tea-character-graph');
const teaclassificationdescription = require('tea-classification-description');
const teaintroduce = require('tea-introduce');
const checkiputil = require('check-ip-util');
const substringbylength = require('substring-by-length');

// 创建喝茶的图案
function printTea() {
	let teaCow = cowsay.say({
    text: "喝茶",
    e: "oO",
    T: "U "
	});

	console.log(teaCow);
}

module.exports = {
    printTea
}