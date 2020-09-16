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
           for (let i = 0; i <  4; i++) {
               console.log(temp[i].main.temp)
               // let avPerDay = temp[i].main.temp / 4
               // console.log(avPerDay)
               // console.log(all)
           }


       }
     }
        document.getElementById('run').addEventListener('click', weatherApp )

})();

