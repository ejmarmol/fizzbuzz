var num = document.getElementById("num");
function fizzbuzz(){
    var array=[];
    for (var i = 0; i<=100; i++){
        if (i%15===0){
            array.push(i+" FizzBuzz!\n")
        }

        else if (i%3===0){
            array.push(i+" Fizz!\n")
        }

        else if (i%5===0){
            array.push(i+" Buzz!\n")
        }

        else{
            array.push(i+"\n")
        }
    }
    for (var i = 0; i<array.length; i++){
        num.innerText += array[i];
    }
}