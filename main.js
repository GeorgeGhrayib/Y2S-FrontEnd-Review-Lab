var flag = true;
function changeBackgroundColor(color)
{
	if(flag) {document.body.style.backgroundColor =  color; flag = false;}
	else {document.body.style.backgroundColor =  "red"; flag = true;}
}