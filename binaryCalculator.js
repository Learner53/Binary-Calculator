var zero=0,one=1
document.getElementById("btn0").addEventListener('click',function(){
	var data0 =document.getElementById('res').innerHTML+zero;
	document.getElementById('res').innerHTML=data0;
});
document.getElementById("btn1").addEventListener('click',function(){
	var data1 =document.getElementById('res').innerHTML+one;
	document.getElementById('res').innerHTML=data1;
});
document.getElementById("btnClr").addEventListener('click',function(){
	document.getElementById('res').innerHTML='';
});
document.getElementById("btnEql").addEventListener('click',function(){
	function dec2bin(s){
	  return (s >>> 0).toString(2);
	}
	let a=document.getElementById('res').innerHTML;
	let arr,s,b;
	if(a.includes("+")){
		arr=a.split('+');
		s=parseInt(arr[0],2)+parseInt(arr[1],2);
		b=parseInt(s, 10).toString(2);
	}
	if( a.includes("-") ){
		arr=a.split('-');
			s=parseInt(arr[0],2)-parseInt(arr[1],2);
			if(s>=0){
				b=parseInt(s, 10).toString(2);
			}else{
				b=dec2bin(s);
			}
	}
	if(a.includes("*")){
		arr=a.split('*');
		s=parseInt(arr[0],2)*parseInt(arr[1],2);
		b=parseInt(s, 10).toString(2);

	}
	if(a.includes("/")){
		arr=a.split('/');
		if(parseInt(arr[0],2)>parseInt(arr[1],2)){
			s=parseInt(arr[0],2)/parseInt(arr[1],2);
		}else{
			s=parseInt(arr[1],2)/parseInt(arr[0],2);
		}
		
		b=parseInt(s, 10).toString(2);

	}
	document.getElementById('res').innerHTML=b;

});
document.getElementById("btnSum").addEventListener('click',function(){
	let a=document.getElementById('res').innerHTML;
	if(a.includes("+")==false && a.includes("-")==false && a.includes("*")==false && a.includes("/")==false && a!==''){
		var sum =document.getElementById('res').innerHTML+'+';
		document.getElementById('res').innerHTML=sum;
	}
	
});
document.getElementById("btnSub").addEventListener('click',function(){
	let a=document.getElementById('res').innerHTML;
	if(a.includes("+")==false && a.includes("-")==false && a.includes("*")==false && a.includes("/")==false && a!==''){
		var sub =a+'-';
		document.getElementById('res').innerHTML=sub;
	}
});
document.getElementById("btnMul").addEventListener('click',function(){
	let a=document.getElementById('res').innerHTML;
	if(a.includes("+")==false && a.includes("-")==false && a.includes("*")==false && a.includes("/")==false && a!==''){
		var mul =a+'*';
		document.getElementById('res').innerHTML=mul;
	}
});
document.getElementById("btnDiv").addEventListener('click',function(){
	let a=document.getElementById('res').innerHTML;
	if(a.includes("+")==false && a.includes("-")==false && a.includes("*")==false && a.includes("/")==false && a!==''){
		var div =a+'/';
		document.getElementById('res').innerHTML=div;
	}
});




// document.getElementById("demo").innerHTML = dec2bin(5);
// function dec2bin(dec){
//   return (dec >>> 0).toString(2);
// }