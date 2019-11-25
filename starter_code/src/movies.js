/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let copy = [...array];
    copy.sort((a,b)=>{
        if(a.year < b.year){
            return -1;
        }
        else if(b.year < a.year){
            return 1;
        }
        
           else if(a.title < b.title){
                return -1;
            }
            
            else if(b.title < a.title){
                return 1;
            }
            else{
                return 0;
            }
        })
        return copy;
    }    
    
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(number){

    let steven = number.filter( (eachMovie) =>{
        return eachMovie.genre.includes("Drama") && eachMovie.director == "Steven Spielberg"
    })
        return steven.length;
    }
       
       
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(order){
    let copy = [...order];
    copy.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        else if (b.title < a.title) {
            return 1;
        }
    })
    let top20 = copy.splice(0, 20);
    let finalTop20 = top20.map((eachMovie) => {
        return eachMovie.title;
    })
    return finalTop20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(average){
    
    if(average.length == 0){
        return 0;
    }
    let sumRate = average.reduce( (a, b) => {
        return a + (b.rate ? b.rate : 0);
    }, 0);
    
    let averageRate = (sumRate / average.length).toFixed(2);

  return Number(averageRate);
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(average){
    let dramaMovies = average.filter(aMovie => {
        return aMovie.genre.includes("Drama")
    });
    let avgRate = ratesAverage(dramaMovies);

    return avgRate;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){

    let copy = [...array];

    let newArray = copy.map((eachMovie) =>{

        let duration = eachMovie.duration;

        let min = 0;
        let hour = 0;
        let convert = 0;
        let place;
        if (duration.includes('h') && duration.includes('min')){
            place = duration.replace('h', '').replace('min', '').trim();
            let hour = Number(place.substring(0, place.indexOf(" ")));
            let min = Number(place.substring(place.indexOf(" ") + 1));
            convert = (hour * 60 + min);

        }
        else if (duration.includes('h')){
            hour = Number(duration.substring(0, duration.indexOf("h")));
            convert = hour * 60;
        }
        else if (duration.includes('min')){
            min = Number(duration.substring(0, duration.indexOf("min")));
            convert = min;
        }
        return{
            duration: convert,
            }
    })
    return newArray;
}
  
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(avg){

}