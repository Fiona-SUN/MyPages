
//初始化loading
function loadingInit(){

	var data = "<div class='loading_part' id='loading'><div class='spinner'><div></div><div></div><div></div><div></div><div></div><div></div><aside>loading</aside></div></div>"
	
	document.write(data);

	var loading = document.getElementById("loading");
	loading.style.height = document.documentElement.clientHeight+"px";

}

//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loading');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}

//loading
loadingInit();
//监听加载状态改变
document.onreadystatechange = completeLoading;
