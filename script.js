(() => {
    document.querySelector(".container-2").style.display = "none";
    document.querySelector(".container-2").style.display = "none";
    document.querySelector(".forecast").style.display = "none";

    function gropedByDate(dataArray) {
        let ref = {};
        const res = dataArray.reduce(function (gropedData, elem) {
            let date = new Date(elem.dt_txt.split(" ")[0]).getDate()
            if (!(date in ref)) {
                ref[date] = gropedData.length;
                gropedData.push([]);
            }
            gropedData[ref[date]].push(elem);
            return gropedData;

        }, []);
        return res;
    }

    async function picOfCity() {
        let input = document.getElementById('city_input').value
        // await fetch(`https://api.unsplash.com/search/photos/1600x900/?query=${input}&client_id=${secretKey2}`)
        //     .then(response => response.json())
        //     .then((data) => {
        //         console.log(data)
        document.getElementById("img").src = `https://source.unsplash.com/1200x600/?${input},city`

        // })
    }

    function daysOftheWeek(day) {
        let monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        let dayNames = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        let today = new Date(day);
        let dd = today.getDate();
        let dayname = dayNames[today.getDay()];
        let mm = monthNames[today.getMonth()];
        // let yyyy = today.getFullYear();
        let fullDate =  `${dayname} </br> ${dd} ${mm}`;

        return fullDate
    }

function averageWeather (tempArr){
        const totalWeather = tempArr.reduce(function (a, b) {
    return a + b;
}, 0);
    const averageTemp = totalWeather / tempArr.length
        return  averageTemp.toFixed()
    }

const DAYS_COUNT = 5;

    function renderDay(day, avgBe, city, iconUrl, description, data= false){
        console.log(`.day${day}t`)
        document.querySelector(`.day${day}t`).innerHTML = avgBe + "°C";
        document.querySelector(`.day${day}Icon`).src = `http://openweathermap.org/img/wn/${iconUrl}@2x.png`
        if (day === 1) {
            document.querySelector(`.day${day}Des`).innerHTML = description
            document.getElementById(`day${day}`).innerHTML = "Today " + "in " + city;
        }else {
            document.getElementById(`day${day}`).innerHTML = daysOftheWeek(data);
        }
    }

    function weatherApp() {
        let input = document.getElementById('city_input').value
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${secretKey}`)
            .then(response => response.json())
            .then((data) => {
                let temp = data.list
                const formatData = gropedByDate(temp)
                // console.log(formatData);
                for (let i = 0; i < DAYS_COUNT; i++) {
                    // console.log(formatData[i])
                    const currentDay = formatData[i];
                    const dayNumber = i+1
                    const temp = currentDay.map(hour=>hour.main.temp)
                    // console.log(temp)
                    const averageTemp = averageWeather(temp);
                    // console.log(averageTemp);
                    // console.log(currentDay[0].dt_txt.split(" ")[0])
                    const iconUrl = dayNumber===1 ? currentDay[0].weather[0].icon : currentDay[3].weather[0].icon;
                    const desc = currentDay[0].weather[0].description;
                    const date = currentDay[0].dt_txt.split(" ")[0];

                    renderDay(dayNumber, averageTemp, input, iconUrl, desc, date )

                }



                // let tempArr = []
                // for (let i = 0; i < formatData[0].length; i++) {
                //     // console.log(formatData[0][i].main.temp)
                //     tempArr.push(formatData[0][i].main.temp)
                //     const totalWeather = tempArr.reduce(function (a, b) {
                //         return a + b;
                //     }, 0);
                //     let avgBe = totalWeather / tempArr.length
                //     document.querySelector(".day1t").innerHTML = Math.round(avgBe) + "°C"
                //     document.getElementById("day1").innerHTML = "Today " + "in " + input
                //     document.querySelector(".day1Icon").src = `http://openweathermap.org/img/wn/${formatData[0][0].weather[0].icon}@2x.png`
                //     document.querySelector(".day1Des").innerHTML = formatData[0][0].weather[0].description
                // }
                // for (let i = 0; i < formatData[1].length; i++) {
                //     tempArr.push(formatData[1][i].main.temp)
                //     const totalWeather = tempArr.reduce(function (a, b) {
                //         return a + b;
                //     }, 0);
                //     let avgBe = totalWeather / tempArr.length
                //     document.getElementById("day2t").innerHTML = Math.round(avgBe) + "°C"
                //     document.getElementById("day2").innerHTML = daysOftheWeek(formatData[1][i].dt_txt.split(" ")[0])
                //     document.getElementById("day2Icon").src = `http://openweathermap.org/img/wn/${formatData[1][3].weather[0].icon}@2x.png`
                // }
                // for (let i = 0; i < formatData[2].length; i++) {
                //     tempArr.push(formatData[2][i].main.temp)
                //     const totalWeather = tempArr.reduce(function (a, b) {
                //         return a + b;
                //     }, 0);
                //     let avgBe = totalWeather / tempArr.length
                //     document.getElementById("day3t").innerHTML = Math.round(avgBe) + "°C"
                //     document.getElementById("day3").innerHTML = daysOftheWeek(formatData[2][i].dt_txt.split(" ")[0])
                //     document.getElementById("day3Icon").src = `http://openweathermap.org/img/wn/${formatData[2][3].weather[0].icon}@2x.png`
                // }
                // for (let i = 0; i < formatData[3].length; i++) {
                //     tempArr.push(formatData[3][i].main.temp)
                //     const totalWeather = tempArr.reduce(function (a, b) {
                //         return a + b;
                //     }, 0);
                //     let avgBe = totalWeather / tempArr.length
                //     document.getElementById("day4t").innerHTML = Math.round(avgBe) + "°C"
                //     document.getElementById("day4").innerHTML = daysOftheWeek(formatData[3][i].dt_txt.split(" ")[0])
                //     document.getElementById("day4Icon").src = `http://openweathermap.org/img/wn/${formatData[3][3].weather[0].icon}@2x.png`
                // }
                // for (let i = 0; i < formatData[4].length; i++) {
                //     tempArr.push(formatData[4][i].main.temp)
                //     const totalWeather = tempArr.reduce(function (a, b) {
                //         return a + b;
                //     }, 0);
                //     let avgBe = totalWeather / tempArr.length
                //     document.getElementById("day5t").innerHTML = Math.round(avgBe) + "°C"
                //     document.getElementById("day5").innerHTML = daysOftheWeek(formatData[4][i].dt_txt.split(" ")[0])
                //     document.getElementById("day5Icon").src = `http://openweathermap.org/img/wn/${formatData[4][3].weather[0].icon}@2x.png`
                //     // console.log(formatData[4][3])
                // }


            }).catch((error) => {
            console.error(error)
        })

    }
 function getWeather () {
     weatherApp();
     picOfCity();
     document.querySelector(".container-2").style.display = "block";
     document.querySelector(".forecast").style.display = "inline";

 }

    document.getElementById('run').addEventListener('click', function () {
        getWeather ()
    });

    document.getElementById('city_input').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            getWeather ()
        }
    });

})();