function Function(){

try{
	adddlert("fhgd");
}
catch(err)
{
	document.getElementById("demo2").innerHTML=err.message;
}
}

function valid()
{
	var x=document.forms["myform"]["name"].value;
	if(x=="")
	{
		alert("plz fill the name");
	}
	else{
		document.write("Name:" +x);
	}
}