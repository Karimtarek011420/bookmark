var siteName = document.getElementById('siteName');
var sitUrl =document.getElementById('sitUrl');
var tbody = document.getElementById('tbody');
var manySite = [];
if (localStorage.getItem('site') !=null){
    manySite=JSON.parse(localStorage.getItem('site'));
    dispalysite(manySite);
}
function addurl(){
    var site ={
       sit:siteName.value,
       url:sitUrl.value
    }
    manySite.unshift(site);
    localStorage.setItem('site',JSON.stringify(manySite));
    dispalysite(manySite);
    siteclear();
}
function siteclear(){
    siteName.value ="";
    sitUrl.value ="";
}
function dispalysite(arr) {
 var box =``;
 for(var i=0; i<arr.length;i++){
    box+=`<tr>
                <td>${i+1}</td>
                <td>${arr[i].sit}</td>
                <td><button class="btn btn-danger"><a href="visitsite (${arr[i].url})" >visit<a/></button></td>
                <td><button class="btn btn-info" onclick=" deletsite (${i})">Delet</button></td>
            <tr>`
 }
tbody.innerHTML =box;
}
function deletsite(index){
    manySite.splice(index,1);
    dispalysite(manySite);
}
function visitsite(){

sitUrl.value=manySite[i].url;

}





 