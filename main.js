let mainArrCount = 0;
let mainArr = [];
let j = 0;
function addPropertys(){
    let objHouse = 
    {"city": "none",
    "street": "none",
    "home size": "none",
    "number of rooms": "none",
    "cost to sell": "none",};
    arrCity = [" Kyiv ", " Tokio ", " Warshawa ", " Singapure "," Otawa "];
    let i = 0;
    for(let key of Object.keys(objHouse)){
        if(i === 0){
            let choiceSity = prompt(`Select the city number: ${arrCity}`);
            choiceSity = --choiceSity;
            if(choiceSity < 0 || choiceSity >= 5 || choiceSity !== Number(choiceSity)){
                alert(`Eror, the city is inaccessible, please enter the number city again :${arrCity}!!!`);
                j++;
                break;
            }
            alert(`You add ${arrCity[choiceSity]}`);
            objHouse[key] =  arrCity[choiceSity];
        }
        else{
            objHouse[key] =  prompt(`Add your ${key} .`);
        }
        i++;
    }
    if(j === 0){
        mainArr.push(objHouse);
        alert(`Your property ${Object.entries(objHouse).join(" ; ")}.`);
        if(i >= 5){
            let check = confirm(`Do you want to sell another house?`);
            if(check){
                addPropertys();
                mainArrCount++;
            }
            else{
                alert(`You sell ${mainArr.length} house. `);
                mainArrCount++;
                while(mainArrCount > 0){
                    mainArr.pop(mainArr.length-1)
                    mainArrCount--;
                }
            }
        }
    }
    else{
        j = 0;
        addPropertys();
    }

}