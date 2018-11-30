var a=0;
function border(){
	if(a==0){document.getElementById('pic').style.border='5px solid gray'; a=1;}
	else {document.getElementById('pic').style.border='none'; a=0;} 
}

function yazi(){
	var c=document.getElementById('yaz').value;
	document.getElementById('wrt').innerHTML=c;
}

function sil(){
	var c=" ";
	document.getElementById('wrt').innerHTML=c;
}

function changeimg(){
	var pic=document.getElementById('pic');
	var lnk=document.getElementById('link').value;
	pic.src=lnk;
}