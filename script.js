var studlist = document.getElementById("studentList");
//remove unnecessary whitespaces
for(let i=0; i<studlist.children.length; i++)                   {
studlist.children[i].firstElementChild.nextSibling.remove();
studlist.children[i].children[1].nextSibling.remove();          
studlist.children[i].children[2].nextSibling.remove();          }


studlist.addEventListener('click', function(e){
    // console.log(e.target);
//remove student
if(e.target.className=="deleteSt"){
a=e.target.parentNode;
//  console.log(e.target);
a.remove()                           }
//edit student
if(e.target.className=="editSt"){
// console.log(e.target.previousElementSibling.previousElementSibling);
var temp = e.target.previousElementSibling.previousElementSibling;
var editing = document.createElement('input');
// console.log(temp.textContent);
editing.value=temp.textContent;
// console.log(temp.parentNode)
temp.parentNode.replaceChild(editing, temp);
// console.log(e.target.parentNode)
e.target.parentNode.children[3].className="finisheditSt show";
e.target.parentNode.children[2].className="editSt hide";
                                }
if(e.target.className=="finisheditSt show"){
    // console.log(e.target);
var temp2= e.target.parentNode.children[0];
// console.log(temp2.value)
var edited = document.createElement('span');
edited.textContent=temp2.value; 
edited.className="student";
temp2.parentNode.replaceChild(edited, temp2); 
e.target.parentNode.children[3].className="finisheditSt hide";
e.target.parentNode.children[2].className="editSt";
// console.log(e.target.parentNode.children[2]);
// console.log(e.target.parentNode.children[2].parentNode);
                                      }


})


//add student
 var addbutton = document.getElementById("add");
 var finishbutton = document.getElementById("finish");
 addbutton.addEventListener('click', function(e){
     b=e.target.parentNode.nextElementSibling;
     b.className="show";
// console.log(b);
     c=b.nextElementSibling;
     c.className="show";
    addbutton.className="hide";
    finishbutton.className="show";
})
    finishbutton.addEventListener('click', function(e){
const li = document.createElement("li");
studentName=document.createElement('span');
deleteButton=document.createElement('span');
editButton=document.createElement('span');
finisheditButton=document.createElement('span');
studentName.textContent=`${b.value} ${c.value}`;
studentName.className="student";
deleteButton.textContent="Delete";
deleteButton.className="deleteSt";
editButton.textContent="Edit";
editButton.className="editSt";
finisheditButton.textContent="Finish";
finisheditButton.className="finisheditSt hide";

li.appendChild(studentName);
li.appendChild(deleteButton);
li.appendChild(editButton);
li.appendChild(finisheditButton);
studlist.appendChild(li);
addbutton.className="show";
finishbutton.className="hide";
b.value='';
c.value='';
b.className="hide";
c.className="hide";
    })



    
// const li = document.createElement("li");
// studentName=document.createElement('span');
// deleteButton=document.createElement('span');
// li.appendChild(studentName);
// li.appendChild(deleteButton);
// studlist.appendChild(li);


function myFunction() {
    var studentArray = [];
    console.log("nibaa");
    var studentCollection = document.getElementsByClassName('student')
    console.log(studentCollection)
    for(let i=0; i<studentCollection.length; i++)
    studentArray.push(studentCollection[i].textContent);
    studentArray.sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0));
    console.log(studentArray)
    for(let i=0; i<studentCollection.length; i++)
    studentCollection[i].textContent=studentArray[i];
    
    }