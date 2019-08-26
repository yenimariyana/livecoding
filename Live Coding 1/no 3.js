//1
function addTitle(a,b,c,d){
    console.log("Mr."+""+a+"Mr."+""+b+"Mr."+""+c+"Mr."+""+d);
}
addTitle("Stive Fox","Jin Kazama","Eddie Gordo","Geese Howard")

// 2
function changeSpacesWith(a,b){
    var kata = a.split(" ");
    var hasil = kata[0]+ b +kata[1]
    return hasil
  }
  console.log(changeSpacesWith('Steve Fox', '-'));
  console.log(changeSpacesWith('Sergei Dragunov', '+'));
  //3
  function cutString (str) {
    var hasil = str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6];
    return hasil
  }
  console.log(cutString('Kazuya Mishima'));
  console.log(cutString('Sergei Dragunov'));
  console.log(cutString('Sasuke Uchiha'));