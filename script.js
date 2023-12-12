//your JS code here. If required.
// let student ={
// 	name:"nexus",
	
// }
// student.getKeys= function(){
// 	let x=[];
// 	for(let i in student){
// 		x.push(i);
// 	}
// 	return x;
// }
// console.log(student.getKeys());
Object.prototype.getKeys = function () {
  return Object.keys(this);
};