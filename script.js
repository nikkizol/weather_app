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
        let fullDate = dayname + " " + dd + " " + mm

        return fullDate
    }


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
                    document.getElementById("centered-1").innerHTML = "Today " + "in " + input
                    document.querySelector(".centered-2").src = `http://openweathermap.org/img/wn/${formatData[0][0].weather[0].icon}@2x.png`
                    document.querySelector(".centered-3").innerHTML = formatData[0][0].weather[0].description
                }
                for (let i = 0; i < formatData[1].length; i++) {
                    tempArr.push(formatData[1][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.getElementById("day2t").innerHTML = Math.round(avgBe) + "°C"
                    document.getElementById("day2").innerHTML = daysOftheWeek(formatData[1][i].dt_txt.split(" ")[0])
                    document.getElementById("day2Icon").src = `http://openweathermap.org/img/wn/${formatData[1][3].weather[0].icon}@2x.png`
                }
                for (let i = 0; i < formatData[2].length; i++) {
                    tempArr.push(formatData[2][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.getElementById("day3t").innerHTML = Math.round(avgBe) + "°C"
                    document.getElementById("day3").innerHTML = daysOftheWeek(formatData[2][i].dt_txt.split(" ")[0])
                    document.getElementById("day3Icon").src = `http://openweathermap.org/img/wn/${formatData[2][3].weather[0].icon}@2x.png`
                }
                for (let i = 0; i < formatData[3].length; i++) {
                    tempArr.push(formatData[3][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.getElementById("day4t").innerHTML = Math.round(avgBe) + "°C"
                    document.getElementById("day4").innerHTML = daysOftheWeek(formatData[3][i].dt_txt.split(" ")[0])
                    document.getElementById("day4Icon").src = `http://openweathermap.org/img/wn/${formatData[3][3].weather[0].icon}@2x.png`
                }
                for (let i = 0; i < formatData[4].length; i++) {
                    tempArr.push(formatData[4][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.getElementById("day5t").innerHTML = Math.round(avgBe) + "°C"
                    document.getElementById("day5").innerHTML = daysOftheWeek(formatData[4][i].dt_txt.split(" ")[0])
                    document.getElementById("day5Icon").src = `http://openweathermap.org/img/wn/${formatData[4][3].weather[0].icon}@2x.png`
                    // console.log(formatData[4][3])
                }


            }).catch(() => {
            console.error("error")
        })

    }


    document.getElementById('run').addEventListener('click', function () {
        weatherApp();
        picOfCity();
        document.querySelector(".container-2").style.display = "block";
        document.querySelector(".forecast").style.display = "inline";
    });

    document.getElementById('city_input').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            weatherApp();
            picOfCity();
            document.querySelector(".container-2").style.display = "block";
            document.querySelector(".forecast").style.display = "inline";
        }
    });

})();


