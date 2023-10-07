var aProteins= 0;
var aCarbs= 0;
var aFats= 0;
var eProteins= 0;
var eCarbs= 0;
var eFats= 0;
var dProteins= 0;
var dCarbs= 0;
var dFats=0;

function update(){
    document.getElementById("aProteins").innerHTML = "Grams of Protein: " + aProteins;
    document.getElementById("aCarbs").innerHTML = "Grams of Carbohydrates: " + aCarbs;
    document.getElementById("aFats").innerHTML = "Grams of Fat: " + aFats;
    document.getElementById("eProteins").innerHTML = "Grams of Protein: " + eProteins;
    document.getElementById("eCarbs").innerHTML = "Grams of Carbohydrates: " + eCarbs;
    document.getElementById("eFats").innerHTML = "Grams of Fat: " + eFats;
    document.getElementById("dProteins").innerHTML = "Grams of Protein: " + dProteins;
    document.getElementById("dCarbs").innerHTML = "Grams of Carbohydrates: " + dCarbs;
    document.getElementById("dFats").innerHTML = "Grams of Fat: " + dFats;
    document.getElementById("aCalories").innerHTML = "Total amount of Calories:  " + ((aFats *9) + (aCarbs * 4) + (aProteins * 4));
    document.getElementById("eCalories").innerHTML = "Total amount of Calories:  " + ((eFats *9) + (eCarbs * 4) + (eProteins * 4));
    document.getElementById("dCalories").innerHTML = "Total amount of Calories:  " + ((dFats *9) + (dCarbs * 4) + (dProteins * 4));
    document.getElementById("mealCalories").innerHTML = "Meal Calories: " + ((aFats *9) + (aCarbs * 4) + (aProteins * 4)+(eFats *9) + (eCarbs * 4) + (eProteins * 4)+(dFats *9) + (dCarbs * 4) + (dProteins * 4))

}

function load(){
    aProteins = parseInt(prompt("Enter Appetizer proteins in grams (do NOT click cancel for any of the popups)", 0), 10);
    aCarbs = parseInt(prompt("Enter Appetizer carbs in grams", 0),10);
    aFats = parseInt(prompt("Enter Appetizer fat in grams" ,0), 10);
    eProteins = parseInt(prompt("Enter Entree proteins in grams", 0),10);
    eCarbs = parseInt(prompt("Enter Entree carbs in grams", 0),10);
    eFats = parseInt(prompt("Enter Entree fat in grams", 0),10)
    dProteins = parseInt(prompt("Enter Dessert proteins in grams", 0),10);
    dCarbs = parseInt(prompt("Enter Dessert carbs in grams", 0),10);
    dFats = parseInt(prompt("Enter Dessert fat in grams" ,0),10);
    update()
}

function addInfo (typeOfSection, typeOfInfo, amtChanged){
    /* Appetizer */
    if(typeOfSection=="appetizer"){
        if(typeOfInfo == "protein"){
            aProteins += amtChanged;
        if (aProteins < 0){aProteins = 0}}
    
        if(typeOfInfo == "carb"){
            aCarbs += amtChanged;
        if (aCarbs < 0){aCarbs = 0}}
        if(typeOfInfo == "fat"){
            aFats += amtChanged;
        if (aFats < 0){aFats = 0}}
    }
    
    /* Entree */
    if(typeOfSection=="entree"){
        if(typeOfInfo == "protein"){
            eProteins += amtChanged;
        if (eProteins < 0){eProteins = 0}}
    
        if(typeOfInfo == "carb"){
            eCarbs += amtChanged;
        if (eCarbs < 0){eCarbs = 0}}
        if(typeOfInfo == "fat"){
            eFats += amtChanged;
        if (eFats < 0){eFats = 0}}
    }

    /* Dessert */
    if(typeOfSection=="dessert"){
        if(typeOfInfo == "protein"){
            dProteins += amtChanged;
        if (dProteins < 0){dProteins = 0}}
    
        if(typeOfInfo == "carb"){
            dCarbs += amtChanged;
        if (dCarbs < 0){eCarbs = 0}}
        if(typeOfInfo == "fat"){
            dFats += amtChanged;
        if (dFats < 0){dFats = 0}}
    }

   update();

}

    function reset(){
        aProteins= 0;
        aCarbs= 0;
        aFats= 0;       
        eProteins= 0;
        eCarbs= 0;
        eFats= 0;
        dProteins= 0;
        dCarbs= 0;
        dFats=0;
        update();
        load();
    }









