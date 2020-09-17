(() => {
    document.querySelector(".container-2").style.display = "none";

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

    function picOfCity() {
        let input = document.getElementById('city_input').value
        // await fetch(`https://api.unsplash.com/search/photos/1600x900/?query=${input}&client_id=${secretKey2}`)
        //     .then(response => response.json())
        //     .then((data) => {
        //         console.log(data)
        document.getElementById("img").src = `https://source.unsplash.com/600x600/?${input},city`
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
        let fullDate = dayname + " " + dd + " " + mm

         return fullDate
    };



    function weatherApp() {
        let input = document.getElementById('city_input').value
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${secretKey}`)
            .then(response => response.json())
            .then((data) => {
                let temp = data.list
                const formatData = gropedByDate(temp)
                let tempArr = []
                for (let i = 0; i < formatData[0].length; i++) {
                    // console.log(formatData[0][i].main.temp)
                    tempArr.push(formatData[0][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.querySelector(".centered").innerHTML = Math.round(avgBe) + "°C"
                    document.querySelector(".centered-1").innerHTML = "Today " + "in " + input
                }
                for (let i = 0; i < formatData[1].length; i++) {
                    tempArr.push(formatData[1][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.querySelector(".day2t").innerHTML = Math.round(avgBe) + "°C"
                    document.querySelector(".day2").innerHTML = daysOftheWeek(formatData[1][i].dt_txt.split(" ")[0])
                }
                for (let i = 0; i < formatData[2].length; i++) {
                    tempArr.push(formatData[2][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.querySelector(".day3t").innerHTML = Math.round(avgBe) + "°C"
                    document.querySelector(".day3").innerHTML = daysOftheWeek(formatData[2][i].dt_txt.split(" ")[0])
                }
                for (let i = 0; i < formatData[3].length; i++) {
                    tempArr.push(formatData[3][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.querySelector(".day4t").innerHTML = Math.round(avgBe) + "°C"
                    document.querySelector(".day4").innerHTML = daysOftheWeek(formatData[3][i].dt_txt.split(" ")[0])
                }
                for (let i = 0; i < formatData[4].length; i++) {
                    tempArr.push(formatData[4][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.querySelector(".day5t").innerHTML = Math.round(avgBe) + "°C"
                    document.querySelector(".day5").innerHTML = daysOftheWeek(formatData[4][i].dt_txt.split(" ")[0])
                    console.log(typeof formatData[4][i].dt_txt.split(" ")[0])
                }


            })

    }


    document.getElementById('run').addEventListener('click', function () {
        weatherApp();
        picOfCity();

        document.querySelector(".container-2").style.display = 'block'
    });

    document.getElementById('city_input').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            weatherApp();
            picOfCity();

            document.querySelector(".container-2").style.display = 'block'
        }
    });

})();

//     let tempAr = []
//     for (let i = 0; i < temp.length; i++) {
//         console.log(temp[i].dt_txt.split(" ")[1])
//         if (temp[i].dt_txt.split(" ")[1] === "00:00:00") {
//             break
//         }
//         tempAr.push(temp[i].main.temp)
//         console.log(tempAr)
//         const total = tempAr.reduce(function (a, b) {
//             return a + b;
//         }, 0);
//         let avgBe = total / tempAr.length
//         console.log(Math.round(avgBe))
//         document.querySelector(".day1").innerHTML = temp[i].dt_txt.split(" ")[0]
//         document.querySelector(".day1t").innerHTML = Math.round(avgBe)
//
//         let avV = temp[i].main.temp
//         avV += temp[i].main.temp
//         console.log(avV)
//         let avPerDay = temp[i].main.temp / 4
//         console.log(avPerDay)
//         console.log(all)
//     }
//
//


