(() => {
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
                    document.querySelector(".day1t").innerHTML = Math.round(avgBe)
                    document.querySelector(".day1").innerHTML = formatData[0][i].dt_txt.split(" ")[0]
                }
                for (let i = 0; i < formatData[1].length; i++) {
                    tempArr.push(formatData[1][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.querySelector(".day2t").innerHTML = Math.round(avgBe)
                    document.querySelector(".day2").innerHTML = formatData[1][i].dt_txt.split(" ")[0]
                }
                for (let i = 0; i < formatData[2].length; i++) {
                    tempArr.push(formatData[2][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.querySelector(".day3t").innerHTML = Math.round(avgBe)
                    document.querySelector(".day3").innerHTML = formatData[2][i].dt_txt.split(" ")[0]
                }
                for (let i = 0; i < formatData[3].length; i++) {
                    tempArr.push(formatData[3][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.querySelector(".day4t").innerHTML = Math.round(avgBe)
                    document.querySelector(".day4").innerHTML = formatData[3][i].dt_txt.split(" ")[0]
                }
                for (let i = 0; i < formatData[4].length; i++) {
                    tempArr.push(formatData[4][i].main.temp)
                    const totalWeather = tempArr.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let avgBe = totalWeather / tempArr.length
                    document.querySelector(".day5t").innerHTML = Math.round(avgBe)
                    document.querySelector(".day5").innerHTML = formatData[4][i].dt_txt.split(" ")[0]
                }


            })
    }

    document.getElementById('run').addEventListener('click', weatherApp)

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


