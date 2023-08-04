function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {

  modalbg.style.display = "block";
  
}


const btnSignup =  document.querySelector(".modal-btn");

btnSignup.addEventListener( "click", ()=> {

  console.log("je clique cur je m'inscrit")

  modalbg.style.display = "block";
  

})

const btnSignup1 =  document.querySelector(".modal-btn1");

btnSignup1.addEventListener( "click", ()=> {

  console.log("je clique cur je m'inscrit")
  
  modalbg.style.display = "block";
  

})


/*********** gestion des formulaires */

 // gestion des expressions régulières 
 let regexNomPrenom = new RegExp("^[a-zA-Z]+$")

 let regexEmail = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+")
 //let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 


let formDataPrenom = document.querySelector(".prenomContainer")
const prenomAlert = document.createElement("p")
prenomAlert.classList.add("prenom")
prenomAlert.style.display = "none"
formDataPrenom.appendChild(prenomAlert)

let prenomValue
let nomValue
let emailValue
let dateValue
let quantityValue
let localisationValue 
let conditionValue

/*
const prenomfunction = () => {

  prenom.textContentontent = " "
}
prenomfunction()
*/

const prenom = document.querySelector("#first");

//gestion de la disparition de l'alerte du prenom
const prenomNomFunction = () => {

    console.log("bienvenue dans la la function prenom et nom")

    //gestion du prenom
    prenom.addEventListener("input", (event) => {

      console.log("event.target.value")
      console.log(event.target.value)

      prenomValue = event.target.value

     

      if(prenomValue.trim()){

        prenom.style.border = "solid black"
        prenomAlert.style.display = "none"
      }

     

  })

 

}
prenomNomFunction()


  



let formDataNom = document.querySelector(".nomContainer")
const nomAlert = document.createElement("p")
nomAlert.classList.add("nom")
nomAlert.style.display = "none"
formDataNom.appendChild(nomAlert)

const nom = document.querySelector("#last");
//gestion de la disparition de l'alerte du nom
const nomFunction = () => {

  //gestion du nom
  
    nom.addEventListener("input", (event1) => {

      console.log("event1.target.value")
      console.log( event1.target.value)
    
      nomValue = event1.target.value

      if(nomValue){

        nom.style.border = "solid black"
        nomAlert.style.display = "none"
      }

  })

}

nomFunction()


let formDataEmail = document.querySelector(".emailContainer")
const emailAlert = document.createElement("p")
emailAlert.classList.add("email")
emailAlert.style.display = "none"
formDataEmail.appendChild(emailAlert)

const email = document.querySelector("#email");
//gestion de la disparition de l'alerte du mail
const emailFunction = () => {

  //gestion du nom
  
    email.addEventListener("input", (event) => {

      console.log("event1.target.value")
      console.log( event.target.value)
    
      emailValue = event.target.value

      if(emailValue){

        email.style.border = "solid black"
        emailAlert.style.display = "none"
      }

  })

}

emailFunction()




let formDataBirthdate = document.querySelector(".dateNaissanceContainer")
const birthdateAlert = document.createElement("p")
birthdateAlert.classList.add("birthdate")
birthdateAlert.style.display = "none"
formDataBirthdate.appendChild(birthdateAlert)

const birthdate = document.querySelector("#birthdate");

//gestion de la disparition de l'alerte de la date 
const dateFunction = () => {

  //gestion de la date de naissance
  birthdate.addEventListener("change", (event) => {

      console.log("event.target.value dans le bon if")
      console.log( event.target.value)
    
      dateValue = event.target.value

      if(dateValue){

        console.log("bienvenu dans  dans le bon if de dateValue")

        birthdate.style.border = "solid black"
        birthdateAlert.style.display = "none"
      }

  })

}

dateFunction()



let formDataQuantity = document.querySelector(".quantityContainer")
const quantityAlert = document.createElement("p")
quantityAlert.classList.add("birthdate")
quantityAlert.style.display = "none"
formDataQuantity.appendChild(quantityAlert )

const quantityTournoi = document.querySelector("#quantity");

//gestion de la disparition de l'alerte de la quantité
const quantityFunction = () => {

  //gestion de la date de naissance
  quantityTournoi.addEventListener("change", (event) => {

      console.log("event.target.value")
      console.log( event.target.value)
    
      quantityValue = event.target.value

      if(quantityValue){

        quantityTournoi.style.border = "solid black"
        quantityAlert.style.display = "none"
      }

  })

}

quantityFunction()



//gestion de la disparition de l'alerte de la localisation

const condition = document.querySelectorAll('input[name="check"]');
    ////////////////////////////
    let formDataCondition = document.querySelector(".conditionContainer")
   // let condi = document.querySelectorAll(".checkbox-input")////////
   // const condition1 = document.querySelector("location");
    const conditionAlert = document.createElement("p")
    conditionAlert.classList.add("condition")
    conditionAlert.style.display = "none"
    formDataCondition.appendChild(conditionAlert)


const conditionFunction = () => {

  
  let listeChoices1 = [ ];
    
  for( let i = 0; i<condition.length; i++){

    condition[i].addEventListener("change", function(){

      if(condition[i].checked){

        listeChoices1.push(condition[i].value)
        console.log('La case est cochée');
        conditionAlert.style.display = "none"
        
      }  else{

        console.log('La case est décochée');
        conditionAlert.textContent = "veillez entrez votre quantité"
        conditionAlert.style.display = "block"
        conditionAlert.style.color = "#FF4E60"
        conditionAlert.style.fontWeight = "400"
        conditionAlert.style.fontSize = "10px"

      }

    })
    

  }
}

conditionFunction()


//gestion de la disparition de l'alerte de la localisation

const localisation = document.querySelectorAll('input[name="location"]');
    ////////////////////////////
    let formDatalocation = document.querySelector(".location1Container")
    let locali = document.querySelectorAll(".checkbox-input")////////
    const localisation1 = document.querySelector("location");
    const localisationAlert = document.createElement("p")
    localisationAlert.classList.add("location")
    localisationAlert.style.display = "none"
    formDatalocation.appendChild(localisationAlert)


const locationFunction = () => {

  
  let listeChoices = [ ];
    
  for( let i = 0; i<localisation.length; i++){

    localisation[i].addEventListener("change", function(){

      if(localisation[i].checked){

        listeChoices.push(localisation[i].value)
        console.log('La case est cochée');
       
        localisationAlert.style.display = "none"
        
      }  

    })
    

  }
}

locationFunction()


//gestion de l'affichage de la fenêtre de fermeture du message de confirmation

const messageContainer = document.querySelector(".messageContainer")
const buttonFerme = document.querySelector(".buttonFerme")

buttonFerme.addEventListener("click", () => {

  messageContainer.style.display = "none"

  //application de la fonction pour soumettre le formulaire et vider le contenu des champs
  formSubmit.submit()

})


/********* gestion de la fermeture de la modale */

//récupération des l'élément
const close = document.querySelector(".close");
const bground = document.querySelector(".bground"); 
const content = document.querySelector(".content")

const formSubmit = document.querySelector("#reserve"); //form

close.addEventListener("click", () => {

  //modification du style pour masquer l'élément
  bground.style.display = "none"  //"block"

 // formSubmit.style.display = "none"
 
 //////////////////////:

 function resetFormManually() {
 
  const elements = formSubmit.elements; 

  for (let i = 0; i < elements.length; i++) {

    const element = elements[i];

    if ( element.type === "number" || element.type === "date" || element.type === "email" || element.type === "text" || element.type === "textarea" || element.type === "select-one") {
      
      element.value = ""; // Remise à zéro du champ de saisie, zone de texte ou liste déroulante
    
    } else if (element.type === "checkbox" || element.type === "radio") {
     
      element.checked = false; // Décocher les cases à cocher et les boutons radio
   
    }
   
  }
}
resetFormManually()


 //////////////////////

  
});
 

/************************************************* */
/******** gestion de la soumission du formulaire **/



formSubmit.addEventListener("submit", (event) => {

    event.preventDefault();

   ///////////////////////////::

      //gestion de l'affichage de l'alerte en dessous des champs
      let regexPrenomResult = regexNomPrenom.test(prenomValue)
      console.log("regexPrenomResult : " + regexPrenomResult)
  
      if( regexPrenomResult === false || !prenomValue  ){  //regexPrenomResult === false || !prenomValue
  
            console.log("***** bienvenue au test regexNomPrenom")
  
            prenomAlert.textContent = "veillez entrez votre prénom"
            prenomAlert.style.display = "block"
            prenomAlert.style.color = "#FF4E60"
            prenomAlert.style.fontWeight = "400"
            prenomAlert.style.fontSize = "10px"
  
            prenom.style.border = "solid #FF4E60"
            prenom.style.borderRadius = "10px"
            
      }

   
   ////////////////////////////
  

    let regexNomResult = regexNomPrenom.test(nomValue)
    console.log("regexNomResult : " + regexNomResult)

    if(regexNomResult === false || !nomValue ){


      nomAlert.textContent = "veillez entrez votre nom"
      nomAlert.style.display = "block"
      nomAlert.style.color = "#FF4E60"
      nomAlert.style.fontWeight = "400"
      nomAlert.style.fontSize = "10px"

      nom.style.border = "solid #FF4E60"
      nom.style.borderRadius = "10px"
   
    }



    const emailValFuntion = () => {

      const regexEmailResult =  regexEmail.test(emailValue) 
      console.log("email.value " + emailValue)

      if( regexEmailResult === false || !emailValue  ){  //( !regexEmail.test(emailValue.trim()) )

        console.log("***** bienvenue au test regexEmail")

        emailAlert.textContent = "veillez entrez votre email"
        emailAlert.style.display = "block"
        emailAlert.style.color = "#FF4E60"
        emailAlert.style.fontWeight = "400"
        emailAlert.style.fontSize = "10px"
  
        email.style.border = "solid #FF4E60"
        email.style.borderRadius = "10px"
      
      }else{
        console.log("****regexEmail")
          console.log(regexEmail)
      }
  

    }
    emailValFuntion()
    




   // const birthdate = document.querySelector("#birthdate").value;
    console.log(`${"birthdate : " + birthdate.value }`)
   

    console.log("***** dateValue : " )
    console.log( dateValue )

    if( !dateValue ){  //regexBirthdateResult  === false ||

      console.log("***** bienvenue au test dateValue")
      console.log(`${"dateValue : " + dateValue }`)

      birthdateAlert.textContent = "veillez entrez votre date de naissance"
      birthdateAlert.style.display = "block"
      birthdateAlert.style.color = "#FF4E60"
      birthdateAlert.style.fontWeight = "400"
      birthdateAlert.style.fontSize = "10px"

      birthdate.style.border = "solid #FF4E60"
      birthdate.style.borderRadius = "10px"

    
    }

    //const quantityTournoi = document.querySelector("#quantity").value;
    console.log(`${"quantityTournoi : " + quantityTournoi.value }`)
    console.log("***** quantityTournoi : " )
    console.log( quantityTournoi )

    if(!quantityValue ){  //regexNomResult === false ||


      quantityAlert.textContent = "veillez entrez votre quantité"
      quantityAlert.style.display = "block"
      quantityAlert.style.color = "#FF4E60"
      quantityAlert.style.fontWeight = "400"
      quantityAlert.style.fontSize = "10px"

      quantityTournoi.style.border = "solid #FF4E60"
      quantityTournoi.style.borderRadius = "10px"

   
    }
    

    /******** gestion de l'input radio ****/

    
    //gestion de la disparition de l'alerte de la localisation

    

    //let regexquantityTournoiResult = regexquantity.test(quantityTournoi)
    //console.log("regexquantityTournoiResult : " + regexquantityTournoiResult)

    let listeChoices = [ ];
    
    for( let i = 0; i<localisation.length; i++){

      if(localisation[i].checked){

        listeChoices.push(localisation[i].value)
        console.log('La case est cochée');
        
        localisationAlert.style.display = "none"
        
      }else{

        console.log('La case est décochée');
        // Autres opérations lorsque la case est décochée

        localisationAlert.textContent = "veillez entrez votre quantité"
        localisationAlert.style.display = "block"
        localisationAlert.style.color = "#FF4E60"
        localisationAlert.style.fontWeight = "400"
        localisationAlert.style.fontSize = "10px"

      }
    }

    console.log(`${"localisationValue : " + listeChoices }`)
    console.log( listeChoices)
    
    
  

    /********* gestion de l'input checkbox **/

    
    let listeChoices1 = [ ];
    
    for( let i = 0; i<condition.length; i++){
  
      condition[i].addEventListener("change", function(){
  
        if(condition[i].checked){
  
          listeChoices1.push(condition[i].value)
          console.log('La case est cochée');
          // Autres opérations lorsque la case est cochée
         // localisation.style.border = "solid black"
          conditionAlert.style.display = "none"
          
        }  else{

          console.log('La case est décochée');
          // Autres opérations lorsque la case est décochée
  
          conditionAlert.textContent = "veillez entrez votre quantité"
          conditionAlert.style.display = "block"
          conditionAlert.style.color = "#FF4E60"
          conditionAlert.style.fontWeight = "400"
          conditionAlert.style.fontSize = "10px"
  
        }
  
      })
      
  
    }

    

    console.log(`${"condition : " + listeChoices1 }`)
    console.log( listeChoices1)

    

    
   /////////////////////////////////////
   if( regexPrenomResult === true && regexNomResult === true && nomValue && 
    (regexEmail.test(emailValue.trim())) === true && dateValue && quantityValue  ) {

     //fermeture de la modale
      const modalForme = document.querySelector(".modal-body")
      modalForme.style.display = "none"

      //affichage du block button fermeture
      messageContainer.style.display = "block"

      //fermeture du de l'icon close
      close.style.display = "none"
     

     // formSubmit.submit()
    }

   //////////////////////////////////

})



/*


           //gestion de l'affichage de l'alerte en dessous des champs
           let regexPrenomResult = regexNomPrenom.test(prenomValue)
           let regexNomResult = regexNomPrenom.test(nomValue)
           let regexBirthdateResult = regexBirthdate.test(birthdate)
           let regexquantityTournoiResult = regexquantity.test(quantityTournoi)
           

    if( regexPrenomResult === false || !prenomValue || regexNomResult === false || !nomValue || 
        (!regexEmail.test(emailValue.trim())) || !dateValue || !quantityValue  ) {

          console.log("****** bienvenue dans la condition confirme : ")

    

        if(regexPrenomResult === false || !prenomValue  ){


              prenomAlert.textContent = "veillez entrez votre prénom"
              prenomAlert.style.display = "block"
              prenomAlert.style.color = "#FF4E60"
              prenomAlert.style.fontWeight = "400"
              prenomAlert.style.fontSize = "10px"
    
              prenom.style.border = "solid #FF4E60"
              prenom.style.borderRadius = "10px"
              
        }
    
        // let regexNomResult = regexNomPrenom.test(nomValue)
        console.log("regexNomResult : " + regexNomResult)
    
        if(regexNomResult === false || !nomValue ){
    
    
          nomAlert.textContent = "veillez entrez votre nom"
          nomAlert.style.display = "block"
          nomAlert.style.color = "#FF4E60"
          nomAlert.style.fontWeight = "400"
          nomAlert.style.fontSize = "10px"
    
          nom.style.border = "solid #FF4E60"
          nom.style.borderRadius = "10px"
      
        }
    
    
    
        const emailValFuntion = () => {
    
          console.log("email.value " + emailValue)
    
          if( (!regexEmail.test(emailValue.trim())) ){
    
            emailAlert.textContent = "veillez entrez votre email"
            emailAlert.style.display = "block"
            emailAlert.style.color = "#FF4E60"
            emailAlert.style.fontWeight = "400"
            emailAlert.style.fontSize = "10px"
      
            email.style.border = "solid #FF4E60"
            email.style.borderRadius = "10px"
          
          }else{
            console.log("****regexEmail")
              console.log(regexEmail)
          }
      
    
        }
        emailValFuntion()
        
    
    
    
    
      // const birthdate = document.querySelector("#birthdate").value;
        console.log(`${"birthdate : " + birthdate.value }`)
      
        console.log("regexBirthdateResult : " + regexBirthdateResult)
    
        if( !dateValue ){  //regexBirthdateResult  === false ||

          console.log("**** bienvenue au if du dateValue")
    
          console.log(`${"dateValue : " + dateValue }`)
    
          birthdateAlert.textContent = "veillez entrez votre date de naissance"
          birthdateAlert.style.display = "block"
          birthdateAlert.style.color = "#FF4E60"
          birthdateAlert.style.fontWeight = "400"
          birthdateAlert.style.fontSize = "10px"
    
          birthdate.style.border = "solid #FF4E60"
          birthdate.style.borderRadius = "10px"
    
        
        }
    
    
        if(!quantityValue ){  //regexNomResult === false ||
    
          console.log("**** bienvenue au if du quantityTournoi")

          //const quantityTournoi = document.querySelector("#quantity").value;
          console.log(`${"quantityTournoi : " + quantityTournoi.value }`)
          
          console.log("regexquantityTournoiResult : " + regexquantityTournoiResult)

          quantityAlert.textContent = "veillez entrez votre quantité"
          quantityAlert.style.display = "block"
          quantityAlert.style.color = "#FF4E60"
          quantityAlert.style.fontWeight = "400"
          quantityAlert.style.fontSize = "10px"
    
          quantityTournoi.style.border = "solid #FF4E60"
          quantityTournoi.style.borderRadius = "10px"
    
      
        }

        //////////////////////////////////////::

        //gestion de l'input radio/

      
      //gestion de la disparition de l'alerte de la localisation

      

      //let regexquantityTournoiResult = regexquantity.test(quantityTournoi)
      console.log("regexquantityTournoiResult : " + regexquantityTournoiResult)

      let listeChoices = [ ];
      
      for( let i = 0; i<localisation.length; i++){

        if(localisation[i].checked){

          listeChoices.push(localisation[i].value)
          console.log('La case est cochée');
          // Autres opérations lorsque la case est cochée
        // localisation.style.border = "solid black"
          localisationAlert.style.display = "none"
          
        }else{

          console.log('La case est décochée');
          // Autres opérations lorsque la case est décochée

          localisationAlert.textContent = "veillez entrez votre quantité"
          localisationAlert.style.display = "block"
          localisationAlert.style.color = "#FF4E60"
          localisationAlert.style.fontWeight = "400"
          localisationAlert.style.fontSize = "10px"

        }
      }

      console.log(`${"localisationValue : " + listeChoices }`)
      console.log( listeChoices)
      
    

      // gestion de l'input checkbox 

      
      let listeChoices1 = [ ];
      
      for( let i = 0; i<condition.length; i++){
    
        condition[i].addEventListener("change", function(){
    
          if(condition[i].checked){
    
            listeChoices1.push(condition[i].value)
            console.log('La case est cochée');
            // Autres opérations lorsque la case est cochée
          // localisation.style.border = "solid black"
            conditionAlert.style.display = "none"
            
          }  else{

            console.log('La case est décochée');
            // Autres opérations lorsque la case est décochée
    
            conditionAlert.textContent = "veillez entrez votre quantité"
            conditionAlert.style.display = "block"
            conditionAlert.style.color = "#FF4E60"
            conditionAlert.style.fontWeight = "400"
            conditionAlert.style.fontSize = "10px"
    
          }
    
        })
        
    
      }

    
    }else{

      //fermeture de la modale
      const modalForme = document.querySelector(".modal-body")
      modalForme.style.display = "none"

      //affichage du block button fermeture
      messageContainer.style.display = "block"

      //fermeture du de l'icon close
      close.style.display = "none"
     

     // formSubmit.submit()
      
    }
   



*/


