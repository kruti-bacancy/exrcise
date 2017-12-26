function valid()
{
		
		var result;
		var check="";
		
		var name=document.forms["register"]["name"].value;
		var cour=document.forms["register"]["course"].value;
		var address=document.forms["register"]["address"].value;
		var email=document.forms["register"]["email"].value;
		var birthdate=document.forms["register"]["birthdate"].value;
		var male=document.getElementById("male");
		var female=document.getElementById("female");
		var language=document.getElementsByClassName("lang");

		
		var contactno=document.forms["register"]["contactno"].value;
		var textar=document.forms["register"]["teaxtarea"].value;
		  
			if(validname(name))
			{
				if(validaddres(address))
				{
			
				if(ValidateEmail(email))  
			    { 
				   if(validgender(male,female))
				   {
				    if(validcontactno(contactno))
				    {
						 if(validcheckbox(language))
						    {	
						 		document.write(
									"<html>"+
									"<center>"+
									"<B>"+
									"Registration Data:"+
									"</B>"+
									"</br>"+
									"</br>"+
									"<table border=1>"+
									"<tr>"+
									"<td>"+"Name:"+"</td>"+
									"<td>"+name+"</td>"+
									"</tr>"+
									
									"<tr>"+
									"<td>"+"Address:"+"</td>"+
									"<td>"+address+"</td>"+
									"</tr>"+
									
									"<tr>"+
									"<td>"+"Email:"+"</td>"+
									"<td>"+email+"</td>"+
									"</tr>"+
									
									"<tr>"+
									"<td>"+"Birthdate:"+"</td>"+
									"<td>"+birthdate+"</td>"+
									"</tr>"+
									
									"<tr>"+
									"<td>"+"ContactNo:"+"</td>"+
									"<td>"+contactno+"</td>"+
									"</tr>"+
									
									"<tr>"+
									"<td>"+"Remarks:"+"</td>"+
									"<td>"+textar+"</td>"+
									"</tr>"+
									
									"<tr>"+
									"<td>"+"Gender:"+"</td>"+
									"<td>"+result+"</td>"+
									"</tr>"+
									
									"<tr>"+
									"<td>"+"language:"+"</td>"+
									"<td>"+check+"</td>"+
									"</tr>"+
									
									"</center>"+
									"</table>"+	
									"</html>");
							
					}
						
				    }
				
			       }   
			    }
				}
			
			}
		
		
		function validname(name)
		{
			if(name=="")
			{
				//alert("please fill the name");
				
				document.getElementById('validname').innerHTML="please fill name";
				return false;
				//document.getElementById('validname').innerHTML="";
			}
			
			return true;
		}

		function validaddres(address)
		{
			if(address=="")
			{
				document.getElementById('validadd').innerHTML="please fill address";
				return false;
			}
			return true;
		}		
			
		function ValidateEmail(email)  
        {  
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
			if(email.match(mailformat))  
			{  
				return true;
			}
			else if(email=="")
			{
				document.getElementById('validemail').innerHTML="please enter email";
			}		
			else  
			{  
			document.getElementById('validemail').innerHTML="please enter valid email";
			return false;  
			}  
        }  
		
		function validcontactno(contactno)  
		{   
			var numbers = /^[0-9]+$/;  
			if(contactno.match(numbers))  
			{  
				if((contactno.length>10)||(contactno.length<8))
				{
					document.getElementById('validcontact').innerHTML="contactno have max=10 and min=8 numbers";
					return false;
				}
				return true;  
			}  
			else  
			{  
				document.getElementById('validcontact').innerHTML="enter numeric characters";  
				return false;  
			}  
        }  

		function validgender(male,female)  
        {   
			if(male.checked)   
			{  
				female.checked==false;
				result=document.getElementById("male").value;
				return result;
			}
			else if(female.checked)  
			{  	
				male.checked==false;
				result=document.getElementById("female").value;
				return result;
			}  
			else 
			{  
			document.getElementById('validgender').innerHTML="please select gender";  
			return false;
			}
			return true;	    
        } 
		
		function validcheckbox(language)
		{
			//console.log("language>>>>", language);				
			for(var i=0;i<language.length;i++)
			{
				if(language[i].checked==true)
				{
					check=(check+language[i].value)+"</br>";
			    
				}
			//console.log("loop check", check, i);	
			}
			
				return check;				
			
		}

 }
 

