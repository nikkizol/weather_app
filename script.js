(() => {
   function weatherApp () {
       let input = document.getElementById('city_input').value
   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${secretKey}`)
             .then(response => response.json())
             .then((data) => weather(data))
             // .catch(function () {
             //     console.error("error");
             // });
       function weather(data) {
let temp = data.list
           // console.log(temp)
           let tempAr =[]
           for (let i = 0; i <  temp.length; i++) {
               console.log(temp[i].dt_txt.split(" ")[1])
               if (temp[i].dt_txt.split(" ")[1] === "21:00:00") {
                 break
               }
               tempAr.push(temp[i].main.temp)
               console.log(tempAr)
               const total = tempAr.reduce(function(a, b){
                   return a + b;
               }, 0);
let avgBe = total/tempAr.length
               console.log(Math.round(avgBe))
               // let avV = temp[i].main.temp
               // avV += temp[i].main.temp
               // console.log(avV)
               // let avPerDay = temp[i].main.temp / 4
               // console.log(avPerDay)
               // console.log(all)
           }


       }
     }
        document.getElementById('run').addEventListener('click', weatherApp )

})();

