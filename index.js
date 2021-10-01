var table=document.createElement('table');
table.setAttribute('class','table');

var thead=document.createElement('thead');
thead.setAttribute('class','thead');

var tr=document.createElement('tr');

var th1=createthtd('th','id');
var th2=createthtd('th','name');
var th3=createthtd('th','email');

tr.append(th1,th2,th3);
thead.append(tr);

var tbody=document.createElement('tbody');
tbody.setAttribute('class','tbody');


table.append(thead,tbody);
document.body.append(table);

function createthtd(elementname,value){
    var element=document.createElement(elementname,name);
    element.innerHTML=value;
    return element;

}

var request=new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",true);
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    for(var i in data){
    console.log(data[i].id);
    console.log(data[i].name);

    console.log(data[i].email);


    }
}

