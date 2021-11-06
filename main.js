 name_of_student =[];
function submit(){
    
    var n1 =document.getElementById("s1").value;
    var n2 =document.getElementById("s2").value;
    var n3 =document.getElementById("s3").value;
    var n4 =document.getElementById("s4").value;

    name_of_student.push(n1);
    name_of_student.push(n2);
    name_of_student.push(n3);
    name_of_student.push(n4);

    console.log(name_of_student);

    document.getElementById("emptydiv").innerHTML=name_of_student;
    document.getElementById("Submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}
function sorting(){

name_of_student.sort();
console.log(name_of_student);
document.getElementById("emptydiv").innerHTML=name_of_student;
}
