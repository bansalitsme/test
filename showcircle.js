function showme (){
  
let circles = ["circle1","circle2","circle3","circle4"];
    circles.forEach(circle =>
    {
        var x = document.getElementsByClassName(circle);
        console.log(x);
        var z = [... x];
        console.log(z);
        z.forEach(y =>
        {
            y.style.visibility="Visible";
        })
    })
}

   