//your JS code here. If required.
let student ={
	name:"nexus",
	
}
student.getKeys= ()=>{
	let x=[];
	for(let i in this){
		x.push(i);
	}
	return x;
}
