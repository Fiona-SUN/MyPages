//隐藏所有的主页中的文字块
function hiddens(){
	var des_txt = getClassName("des_txt");
	var len = des_txt.length;
	for(var i=0;i<len;i++){
		des_txt[i].style.opacity = "0";
	}
}

var curr=0;
//获取className
function getClassName(clsName,Parent){

	var oParent = Parent?document.getElementById(Parent):document;
	var eles =[];
	var elements = oParent.getElementsByTagName("*");

	for(var i=0;i<elements.length;i++){
		if(clsName == elements[i].className){
			eles.push(elements[i]);
		}
	}
	return eles;
}

//鼠标移入导航栏的变化
function flagChange(flag){
	var des_txt = getClassName("des_txt");
	var nav_txt = getClassName("nav_txt");
	var len = nav_txt.length;

	//当是主页的时候
	if(flag == 0){
		//处理鼠标移入移出navigation的效果
		mainMouseMove(len,nav_txt,des_txt)
	}
	
	//当是我的信息的时候
	if(flag == 1){
		//处理鼠标移入移出navigation的效果
		infoMouseMove(len,nav_txt);
	}

	if(flag == 4){
		webMouseMove(len,nav_txt);
	}
}

//主页的导航栏动作
function mainMouseMove(len,nav_txt,des_txt){
	for(var i=0;i<len;i++){

		(function(m){
			nav_txt[i].onmouseover =function(){
				hiddens();
				if(curr!=m){
					des_txt[curr].style.animation = "scale_out 0.3s linear";
					des_txt[curr].style.webkitAnimation = "scale_out 0.3s linear";
					des_txt[curr].style.mozAnimation = "scale_out 0.3s linear";
				}
				nav_txt[m].style.paddingRight = "30px";
				des_txt[m].style.opacity="1"
				des_txt[m].style.animation="scale_in 0.3s linear";
				des_txt[m].style.webkitAnimation="scale_in 0.3s linear";
				des_txt[m].style.mozAnimation="scale_in 0.3s linear";
				curr = m;
			}
			nav_txt[i].onmouseout =function(){
				nav_txt[m].style.paddingRight = "0";
			}
		})(i)

	}

}


//设置主页<->个人信息的导航栏显示
function showMainMsg(nav_txt,len,start,end){
	
	var t = start;
	if(t<len){
		nav_txt[t].style.transform="translateX("+end+"%)";
		nav_txt[t].style.webkitTransform="translateX("+end+"%)";
		nav_txt[t].style.mozTransform="translateX("+end+"%)";
		nav_txt[t].style.msTransform="translateX("+end+"%)";
		nav_txt[t].style.oTransform="translateX("+end+"%)";
		setTimeout(function(){
			showMainMsg(nav_txt,len,t+1,end);
		},50)
	}
}

//我的信息导航栏动作
function infoMouseMove(len,nav_txt){

	if(webInfo_flag == 0){

		for(var i=0;i<len;i++){
		
			(function(m){
				nav_txt[i].onmouseover =function(){
					nav_txt[m].style.transform = "translateX(-80%)";
					nav_txt[m].style.webkitTransform="translateX(-80%)";
					nav_txt[m].style.mozTransform="translateX(-80%)";
					nav_txt[m].style.msTransform="translateX(-80%)";
					nav_txt[m].style.oTransform="translateX(-80%)";

				}
				nav_txt[i].onmouseout =function(){
					nav_txt[m].style.transform="translateX(-93%)";
					nav_txt[m].style.webkitTransform="translateX(-93%)";
					nav_txt[m].style.mozTransform="translateX(-93%)";
					nav_txt[m].style.msTransform="translateX(-93%)";
					nav_txt[m].style.oTransform="translateX(-93%)";
				}
			})(i)

		}

	}

	else if(webInfo_flag == 1){

		for(var i=0;i<len;i++){
		
			(function(m){
				nav_txt[i].onmouseover =function(){
					nav_txt[m].style.transform = "translateX(12%)";
					nav_txt[m].style.webkitTransform="translateX(12%)";
					nav_txt[m].style.mozTransform="translateX(12%)";
					nav_txt[m].style.msTransform="translateX(12%)";
					nav_txt[m].style.oTransform="translateX(12%)";

				}
				nav_txt[i].onmouseout =function(){

					nav_txt[m].style.transform="translateX(0%)";
					nav_txt[m].style.webkitTransform="translateX(0%)";
					nav_txt[m].style.mozTransform="translateX(0%)";
					nav_txt[m].style.msTransform="translateX(0%)";
					nav_txt[m].style.oTransform="translateX(0%)";
					
				}
			})(i)

		}


	}
		

}

//我的信息中点击x
function del_infos(info_base,fixed_add,n){
	
	fixed_add[n].checked=false;

	var h = fixed_add[n].style.offsetheight 

	if(n==0){
		info_base[n].style.transform = "rotate(70deg) translate(300px,520px)";
		info_base[n].style.webkitTransform = "rotate(70deg) translate(300px,520px)";
		info_base[n].style.mozTransform = "rotate(70deg) translate(300px,520px)";
		info_base[n].style.msTransform = "rotate(70deg) translate(300px,520px)";
		info_base[n].style.oTransform = "rotate(70deg) translate(300px,520px)";
		info_base[n].style.opacity = "0";
		setTimeout(function(){
			info_base[n].style.position = "absolute";
		},700)
	}
	else if(n==1){
		info_base[n].style.transform = "rotatex(90deg)";
		info_base[n].style.webkitTransform = "rotatex(90deg)";
		info_base[n].style.mozTransform = "rotatex(90deg)";
		info_base[n].style.msTransform = "rotatex(90deg)";
		info_base[n].style.oTransform = "rotatex(90deg)";
		info_base[n].style.opacity = "0";
		setTimeout(function(){
			info_base[n].style.position = "absolute";
		},700)
	}
	else if(n==2){
		info_base[n].style.transform = "rotatex(-90deg)";
		info_base[n].style.webkitTransform = "rotatex(-90deg)";
		info_base[n].style.mozTransform = "rotatex(-90deg)";
		info_base[n].style.msTransform = "rotatex(-90deg)";
		info_base[n].style.oTransform = "rotatex(-90deg)";
		info_base[n].style.opacity = "0";
		setTimeout(function(){
			info_base[n].style.position = "absolute";
		},700)
	}
	else if(n==3){
		info_base[n].style.transform = "rotatey(90deg)";
		info_base[n].style.webkitTransform = "rotatey(90deg)";
		info_base[n].style.mozTransform = "rotatey(90deg)";
		info_base[n].style.msTransform = "rotatey(90deg)";
		info_base[n].style.oTransform = "rotatey(90deg)";
		info_base[n].style.opacity = "0";
		setTimeout(function(){
			info_base[n].style.position = "absolute";
		},700)
	}
	else if(n==4){
		info_base[n].style.transform = "rotatey(-90deg)";
		info_base[n].style.webkitTransform = "rotatey(-90deg)";
		info_base[n].style.mozTransform = "rotatey(-90deg)";
		info_base[n].style.msTransform = "rotatey(-90deg)";
		info_base[n].style.oTransform = "rotatey(-90deg)";
		info_base[n].style.opacity = "0";
		setTimeout(function(){
			info_base[n].style.position = "absolute";
		},700)
	}
	else if(n==5){
		info_base[n].style.transform = "sacle(2)";
		info_base[n].style.webkitTransform = "sacle(2)";
		info_base[n].style.mozTransform = "sacle(2)";
		info_base[n].style.msTransform = "sacle(2)";
		info_base[n].style.oTransform = "sacle(2)";
		info_base[n].style.opacity = "0";
		setTimeout(function(){
			info_base[n].style.position = "absolute";
		},700)
	}
	//opactiy
	else{
		info_base[n].style.opacity = "0";
		setTimeout(function(){
			info_base[n].style.position = "absolute";
		},700)
	}
}


//我的信息中添加
function add_infos(info_base,fixed_add,n){
	
	fixed_add[n].checked=true;

	if(n==0){
		info_base[n].style.transform = "rotate(0deg) translate(0px,0px)";
		info_base[n].style.webkitTransform = "rotate(0deg) translate(0px,0px)";
		info_base[n].style.mozTransform = "rotate(0deg) translate(0px,0px)";
		info_base[n].style.msTransform = "rotate(0deg) translate(0px,0px)";
		info_base[n].style.oTransform = "rotate(0deg) translate(0px,0px)";
		info_base[n].style.opacity = "1";
		info_base[n].style.position = "relative";
	}
	else if(n==1){
		info_base[n].style.transform = "rotatex(0deg)";
		info_base[n].style.webkitTransform = "rotatex(0deg)";
		info_base[n].style.mozTransform = "rotatex(0deg)";
		info_base[n].style.msTransform = "rotatex(0deg)";
		info_base[n].style.oTransform = "rotatex(0deg)";
		info_base[n].style.opacity = "1";
		info_base[n].style.position = "relative";
	}
	else if(n==2){
		info_base[n].style.transform = "rotatex(0deg)";
		info_base[n].style.webkitTransform = "rotatex(0deg)";
		info_base[n].style.mozTransform = "rotatex(0deg)";
		info_base[n].style.msTransform = "rotatex(0deg)";
		info_base[n].style.oTransform = "rotatex(0deg)";
		info_base[n].style.opacity = "1";
		info_base[n].style.position = "relative";
	}
	else if(n==3){
		info_base[n].style.transform = "rotatey(0deg)";
		info_base[n].style.webkitTransform = "rotatey(0deg)";
		info_base[n].style.mozTransform = "rotatey(0deg)";
		info_base[n].style.msTransform = "rotatey(0deg)";
		info_base[n].style.oTransform = "rotatey(0deg)";
		info_base[n].style.opacity = "1";
		info_base[n].style.position = "relative";
	}
	else if(n==4){
		info_base[n].style.transform = "rotatey(0deg)";
		info_base[n].style.webkitTransform = "rotatey(0deg)";
		info_base[n].style.mozTransform = "rotatey(0deg)";
		info_base[n].style.msTransform = "rotatey(0deg)";
		info_base[n].style.oTransform = "rotatey(0deg)";
		info_base[n].style.opacity = "1";
		info_base[n].style.position = "relative";
	}
	else if(n==5){
		info_base[n].style.transform = "sacle(1)";
		info_base[n].style.webkitTransform = "sacle(1)";
		info_base[n].style.mozTransform = "sacle(1)";
		info_base[n].style.msTransform = "sacle(1)";
		info_base[n].style.oTransform = "sacle(1)";
		info_base[n].style.opacity = "1";
		info_base[n].style.position = "relative";
	}
	//opactiy
	else{
		info_base[n].style.opacity = "1";
		info_base[n].style.position = "relative";
	}
}

//设置主页/我的信息<->我的临摹网页 的导航栏显示
function showMainWeb(nav_txt,navigation,len,start,flag){
	var t = start;
	if(t == 0){

		if(flag == 4){
			nav_txt[t].style.paddingRight = "0";
			navigation.style.top = "100%";
			navigation.style.position = "fixed";
		}
		else if(flag == 0 || flag == 1){
			navigation.style.top = "0";
			navigation.style.position = "relative";
			navigation.style.transform="translateY(0%)";
		}	
				
	}

	if(t<len){
		
		// nav_txt[t].style.height = Math.ceil((nav_txt[t].offsetWidth/7))+"px";
		// nav_txt[t].getElementsByTagName("img")[0].className = "img2"

		//inline-block
		if(flag == 4){
			nav_txt[t].style.width = "14.37%";
			nav_txt[t].className = "nav_txt nav_txt1";
			nav_txt[t].getElementsByTagName("SPAN")[0].style.display = "none";
			nav_txt[t].getElementsByTagName("img")[0].className = "img1";
			nav_txt[t].style.transform="translateY(-50%)";
		}
		else if(flag == 0 || flag == 1){
			nav_txt[t].style.width = "100%";
			nav_txt[t].className = "nav_txt";
			nav_txt[t].getElementsByTagName("SPAN")[0].style.display = "inline";
			nav_txt[t].getElementsByTagName("img")[0].className = "img";
			nav_txt[t].style.transform="translateY(0%)";
		}

		setTimeout(function(){
			showMainWeb(nav_txt,navigation,len,t+1,flag);
		},30)
	}
	else{
		flagChange(flag);
		return;
	}
	
}


//临摹网页的导航栏动作
function webMouseMove(len,nav_txt,des_txt){

	for(var i=0;i<len;i++){
		
		(function(m){
			nav_txt[i].onmouseover =function(){
				hiddens();

				nav_txt[m].getElementsByTagName("img")[0].style.transform="rotatey(180deg)";
				nav_txt[m].getElementsByTagName("img")[0].style.webkitTransform="rotatey(180deg)";
				nav_txt[m].getElementsByTagName("img")[0].style.mozTransform="rotatey(180deg)";
				nav_txt[m].getElementsByTagName("img")[0].style.msTransform="rotatey(180deg)";
				nav_txt[m].getElementsByTagName("img")[0].style.oTransform="rotatey(180deg)";
				
			}
			nav_txt[i].onmouseout =function(){

				nav_txt[m].getElementsByTagName("img")[0].style.transform="rotatey(0deg)";
				nav_txt[m].getElementsByTagName("img")[0].style.webkitTransform="rotatey(0deg)";
				nav_txt[m].getElementsByTagName("img")[0].style.mozTransform="rotatey(0deg)";
				nav_txt[m].getElementsByTagName("img")[0].style.msTransform="rotatey(0deg)";
				nav_txt[m].getElementsByTagName("img")[0].style.oTransform="rotatey(0deg)";
			}
		})(i)

	}

}


//临摹页面的点击简介/返回 的切换
function webChange(index,webSite_flag){
	var web_front = getClassName("web_front");
	var web_back = getClassName("web_back");

	if(webSite_flag == true){
		web_front[index].style.transform = "rotatey(180deg)";
		web_front[index].style.zIndex = "5";

		web_back[index].style.transform = "rotatey(0deg)";
		web_back[index].style.zIndex = "10";
	}
	else if(webSite_flag == false){
		web_front[index].style.transform = "rotatey(0deg)";
		web_front[index].style.zIndex = "10";

		web_back[index].style.transform = "rotatey(180deg)";
		web_back[index].style.zIndex = "5";
	}
}

//对临摹网页的初始化
function webInit(len){
	var web_front = getClassName("web_front");
	var web_back = getClassName("web_back");

	for(var i=0;i<len;i++){
		web_front[i].style.zIndex = "10";
		web_front[i].style.transform = "rotatey(0deg)";
		web_back[i].style.zIndex = "5";
		web_back[i].style.transform = "rotatey(180deg)";
	}
}
//自动触发事件
function Init(initObj){
	//IE
	if(document.all) {
		alert("ok")
		initObj.click();
	}
	// 其它浏览器
	else {
		var mouse_init = document.createEvent("MouseEvents");
		mouse_init.initEvent("click", true, true);
		initObj.dispatchEvent(mouse_init);
	}
}
