function vali(){

	let x =document.form["myform"]["usr"]["pwd"].value;
	if(x == " "){
		alert("Please enter each field");
		return false;
	}
	
}
function isrting(){
	let a = document.queryselector("#inpt").value;

	const userinfo =document.queryselector("#ref").clonNode(true);

	userinfo.removeAttribute("id");
	userinfo.style.visibility = "visible";
	userinfo.children[0].innerHTML= a;



	const box = document.queryselector("#box");
	box.inserBefore(userinfo, box.firstchild);

	box.queryselector("#inpt").value = "";
}
