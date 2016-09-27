
var web_flag = -1;
var webInfo_flag = 0;
//var webInfo_flag2 = 0;
window.onload=function(){

	var des_txt = getClassName("des_txt");
	
	var nav_txt = getClassName("nav_txt");
	var len = nav_txt.length;
	var main_part = document.getElementById("main_part");
	var navigation = document.getElementById("navigation");
	var info_part = document.getElementById("info_part");

	var del_info = getClassName("del_info");
	var info_base = getClassName("info_base");
	var add_info =document.getElementById("add_info");
	var add_list = document.getElementById("add_list");
	var fixed_add = getClassName("fixed_add");

	var myWebsite = document.getElementById("myWebsite");

	var webSite_part = document.getElementById("webSite_part");
	
	//表示页面的位置
	var flag = 0;
	flagChange(flag);
    
    //自动触发一次点击时间->我的信息
    setTimeout(function() {
    	Init(nav_txt[1]);
	},50)

	//点击主页
	nav_txt[0].onclick=function(){
		webInfo_flag = 0;
		navigation.style.top = "0";

		if(flag == 1){
			flag =0;
			flagChange(flag);
			for(var i=0;i<len;i++){
				nav_txt[i].style.paddingRight = "0px";
			}
			document.body.scrollTop="0px";
			//导航栏变幻

			navigation.style.position="relative";
			document.body.style.overflow = "hidden";
			info_part.style.display="none";

			for(var i=0;i<len;i++){
				nav_txt[i].style.left="0";
			}

			navigation.style.left="0px";

			showMainMsg(nav_txt,len,0,0);

			setTimeout(function(){
				main_part.style.transform="translateX(0%)";
				main_part.style.webkitTransform="translateX(0%)";
				main_part.style.mozTransform="translateX(0%)";
				main_part.style.msTransform="translateX(0%)";
				main_part.style.oTransform="translateX(0%)";
				des_txt[0].style.opacity = "1";
			},200);
			
		}
		else if(flag == 4){
			flag = 0;
			//放在showMainWeb里面，由于类名的变化加上异步问题
			//flagChange(flag);

			webSite_part.style.display = "none";
			navigation.style.left = "0";
			showMainWeb(nav_txt,navigation,len,0,flag);
			document.body.style.overflow = "hidden";
			setTimeout(function(){
				main_part.style.transform="translateX(0%)";
				main_part.style.webkitTransform="translateX(0%)";
				main_part.style.mozTransform="translateX(0%)";
				main_part.style.msTransform="translateX(0%)";
				main_part.style.oTransform="translateX(0%)";

			},100)
			setTimeout(function(){
				des_txt[0].style.opacity = "1";
			},200)
			
		}

		
	}

	//点击我的信息
	nav_txt[1].onclick=function(){
		web_flag = 0;
		if(flag == 0){
			flag = 1;
			

			for(var i=0;i<len;i++){
				nav_txt[i].style.paddingRight = "0px";
			}
			
			for(var i=0;i<len;i++){
				nav_txt[i].style.left="93%";
			}
			navigation.style.left="-93%";

			navigation.style.position="fixed";
			document.body.style.overflow = "auto";
			info_part.style.display="block";

			setTimeout(function(){
				main_part.style.transform="translateX(-93%)";
				main_part.style.webkitTransform="translateX(-93%)";
				main_part.style.mozTransform="translateX(-93%)";
				main_part.style.msTransform="translateX(-93%)";
				main_part.style.oTransform="translateX(-93%)";
			},50);

			//导航栏变幻
			showMainMsg(nav_txt,len,0,-93);

			flagChange(flag);

		}
		else if(flag == 4){
			flag = 1;

			webSite_part.style.display = "none";
			document.body.style.overflow = "auto";
			info_part.style.display="block";
		
			showMainWeb(nav_txt,navigation,len,0,flag);
			navigation.style.position="fixed";

			for(var i=0;i<len;i++){
				nav_txt[i].style.left="93%";
			}
			navigation.style.left="-93%";

			//导航栏变幻
			showMainMsg(nav_txt,len,0,-93);
		}
		
	}


	//---我的信息事件处理----
	var del_len = del_info.length;
	for(var i=0;i<del_len;i++){
		
		(function(m){

			//我的信息页面点击x	
			del_info[i].onclick = function(){
				del_infos(info_base,fixed_add,m);
			};

			//add_list点击
			fixed_add[i].onclick=function(){
				if(fixed_add[m].checked == false){
					del_infos(info_base,fixed_add,m);
				}
				else if(fixed_add[m].checked == true){
					add_infos(info_base,fixed_add,m);
				}
			};

		})(i)
		
	}

	//我的信息鼠标移到+上显示块
	add_info.onmouseover=function(){
		add_list.style.display = "block";
	}
	add_info.onmouseout = function(){
		add_list.style.display = "none";
	}

	//---我的信息事件处理----


	//点击我的临摹网页
	myWebsite.onclick=function(){
		//对临摹网页的初始化
		webSite_part.style.display = "block";
		webInit(web_intro_len);

		if(flag == 0){
			
			flag = 4;
			//由于类名的改变，要在类名之前就进行flagChange
			flagChange(flag);

			for(var i=0;i<len;i++){
				nav_txt[i].style.paddingRight="0";
			}

			main_part.style.transform="translateX(-93%)";
			main_part.style.webkitTransform="translateX(-93%)";
			main_part.style.mozTransform="translateX(-93%)";
			main_part.style.msTransform="translateX(-93%)";
			main_part.style.oTransform="translateX(-93%)";

			setTimeout(function(){
				showMainWeb(nav_txt,navigation,len,0,flag);
			},300)

		}
		else if(flag == 1){
			
			flag = 4;
			flagChange(flag)

			navigation.style.left="0";
			for(var i=0;i<len;i++){
				nav_txt[i].style.left="0";
			}
			info_part.style.display="none";
			

			for(var i=0;i<len;i++){
				nav_txt[i].style.transform="translateX(0%)";
				nav_txt[i].style.webkitTransform="translateX(0%)";
				nav_txt[i].style.mozTransform="translateX(0%)";
				nav_txt[i].style.msTransform="translateX(0%)";
				nav_txt[i].style.oTransform="translateX(0%)";
			}
			showMainWeb(nav_txt,navigation,len,0,flag);
		}
					
	}


	//点击临摹网站的简介/返回
	var web_return = getClassName("web_return");
	var web_introduce = getClassName("web_introduce");
	var web_intro_len = web_introduce.length;

	for(var i = 0;i<web_intro_len;i++){

		(function(m){
			var webSite_flag;
			//点击简介
			web_introduce[i].onclick = function(){
				webSite_flag = true;
				webChange(m,webSite_flag);
			}
			//点击返回
			web_return[i].onclick = function(){
				webSite_flag = false;
				webChange(m,webSite_flag);
			}

		})(i)
	}
}

