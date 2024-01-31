

//NEXT PAGE FUNCTION NÄYTTÄÄ YHDEN VISAN KERRALLAAN
function nextpage() { 
   const visas = document.querySelectorAll('.visa');
   const welcomeDiv = document.getElementById('welcomepage');
   const nextBtn = document.getElementById('nextpage');
   let currentIndex = 0;
   
   // vain tervetuloa visa esillä
   for (let i = 1; i < visas.length; i++) {
     visas[i].style.display = 'none';
   }
   
   nextBtn.addEventListener('click', () => {
     // piilottaa nykyisen visan
     if (currentIndex !== 0) {
       visas[currentIndex].style.display = 'none';
     }
     
     currentIndex = (currentIndex + 1) % (visas.length + 1);
     // tuo esille uuden visan
     if (currentIndex === 0) {
       welcomeDiv.style.display = 'block';
     } else {
       visas[currentIndex - 1].style.display = 'none';
       visas[currentIndex].style.display = 'block';
     }
   })
  }


//RANDOM NUMBER GENERATOR DO NOT TOUCH   
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let firstvisa = true;

function firstquestion() { 

  if (firstvisa) {
    firstvisa = false;
    
    /*Hyödynnetty aikaisemmasta koulutehtävästä*/
      let lotto = new Array();
      let arr = [];
        for (let i = 0; i <= 50; i++) {
          lotto[i] = 0;
        }
      let count = 0;
      let sum = 0;
        while (count < 4) {
          let luku = getRndInteger(5, 50);
          if (lotto[luku] != 5 && luku % 5 == 0 && sum + luku <= 100) { // Tarkistaa onko jaollinen 5 ja summa alle 100
            lotto[luku] = 5;
            count++;
            sum += luku;
          }
        }
        
        for (let i = 1; i <= 50; i++) {
          if (lotto[i] == 5) {
            arr.push(i);
          }
        }
        
        /*Muuttaa arr vastaukset litroiksi*/
        let rightanswer = 300 * (arr[3]/100);
        let wrongone = 300 * (arr[1]/100);
        let wrongtwo = 300 * (arr[2]/100);
        let wrongthree = 300 * (arr[0]/100);
        
        document.getElementById("visa1answer1").innerHTML = wrongone + " litraa";
        document.getElementById("visa1answer2").innerHTML = wrongtwo + " litraa";
        document.getElementById("visa1answer3").innerHTML = rightanswer + " litraa";
        document.getElementById("visa1answer4").innerHTML = wrongthree + " litraa";
        
        document.getElementById("food").innerHTML += "Farmari menee markkinoille ostamaan ruokaa lampailleen. Hän pyytää myyjää täyttämään ämpärinsä " + arr[0]+ " % päärynöitä, " +arr[1] + " % omenoita, " + arr[2]+ " % banaaneja ja " + arr[3] + " % kuivattua leipää." + "<br>"+ "Ämpärin tilavuus on 300 litraa.";
  }
}


//Tarkistus buttonin käyttö rajoitus
let isFirstCall = true;
let isFirstCall2 = true;
let isFirstCall3 = true;
let isFirstCall4 = true;
let isFirstCall5 = true;


/*Kaikissa check functioissa sama toiminta tapa, tarkastavat oikean/väärän ja syöttävät kuvaa tai tekstiä tarvittaessa. Myös estävät toiseen tarkistamisen ja vaihtavat taustan värin harmaaksi samalla kun ilmoittavat siirtymisen toiselle sivulle*/ 

function checkfirst() {
  if (isFirstCall) {
    isFirstCall = false;

    if (document.getElementById("radio3").checked) {
      document.getElementById("resultvisa1").innerHTML = "Vastauksesi on OIKEIN"

      const img = document.createElement("img");
      img.src = "../kuvat/pointstar.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);

    }
    else if (document.getElementById("radio4").checked) {
      document.getElementById("resultvisa1").innerHTML = "Vastauksesi on VÄÄRIN vaihtoehto C olisi ollut oikein";

      const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
   
    }
    else if (document.getElementById("radio2").checked) {
      document.getElementById("resultvisa1").innerHTML = "Vastauksesi on VÄÄRIN vaihtoehto C olisi ollut oikein";

      const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
  
    } 
    else if (document.getElementById("radio1").checked) {
      document.getElementById("resultvisa1").innerHTML = "Vastauksesi on VÄÄRIN vaihtoehto C olisi ollut oikein";

      const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
      
    }
    else {
      document.getElementById("resultvisa1").innerHTML = "Et valinnut vastausta";
    }

  } else {
    document.getElementById("resultvisa1").innerHTML = "SIIRRY SEURAAVAAN TEHTÄVÄÄN";
    const colorVisa1 = document.getElementById("visa1");
    colorVisa1.style.backgroundColor = '#cfcfcf';
  }
}


function checksecond() {
  if (isFirstCall2) {
    isFirstCall2 = false;

  if (document.getElementById("visafourth").checked) {
    document.getElementById("resultvisa2").innerHTML = "Vastauksesi on OIKEIN";

    const img = document.createElement("img");
    img.src = "../kuvat/pointstar.png";
    const followResults = document.getElementById("followresults");
    followResults.appendChild(img);
  }
  else if (document.getElementById("visasecond").checked) {
    document.getElementById("resultvisa2").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation2").innerHTML = "Luku ei ole kokonaisluku tämä on 7,444..";

    const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
  }
  else if (document.getElementById("visafirst").checked) {
    document.getElementById("resultvisa2").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation2").innerHTML = "Luku ei ole kokonaisluku tämä on 6,5";

    const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
    
  }
  else if (document.getElementById("visathird").checked) {
    document.getElementById("resultvisa2").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation2").innerHTML = "Luku ei ole kokonaisluku tämä on 4,5";

    const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
  }
  else {
    document.getElementById("resultvisa2").innerHTML = "Et valinnut vastausta";
  }

} else {
  document.getElementById("resultvisa2").innerHTML = "SIIRRY SEURAAVAAN TEHTÄVÄÄN";
  document.getElementById("explanation2").innerHTML = "";
  const colorVisa2 = document.getElementById("visa2");
    colorVisa2.style.backgroundColor = '#cfcfcf';
}
}


function checkthird() {
  
  if (isFirstCall3) {
    isFirstCall3 = false;

  if (document.getElementById("pick4").checked) {
    document.getElementById("resultvisa3").innerHTML = "Vastauksesi on OIKEIN";

    const img = document.createElement("img");
    img.src = "../kuvat/pointstar.png";
    const followResults = document.getElementById("followresults");
    followResults.appendChild(img);

  }
  else if (document.getElementById("pick1").checked) {
    document.getElementById("resultvisa3").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation3").innerHTML = "Vastauksesi vastaa: " 

    const fraction = document.createElement("img");
    fraction.src = "../kuvat/puolikas.jpg";
    fraction.height = 80;
    const explanation3 = document.getElementById("explanation3");
    explanation3.appendChild(fraction);

    const rasti = document.createElement("img");
      rasti.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(rasti);
    
  }
  else if (document.getElementById("pick2").checked) {
    document.getElementById("resultvisa3").innerHTML = "Vastauksesi vastaa: "

    const fraction = document.createElement("img");
    fraction.src = "../kuvat/neljasosa.jpg";
    fraction.height = 80;
    const explanation3 = document.getElementById("explanation3");
    explanation3.appendChild(fraction);

    const rasti = document.createElement("img");
      rasti.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(rasti);
  }
  else if (document.getElementById("pick3").checked) {
    document.getElementById("resultvisa3").innerHTML = "Vastauksesi vastaa: ";

    const fraction = document.createElement("img");
    fraction.src = "../kuvat/yksiviidesosa.jpg";
    fraction.height = 80;
    const explanation3 = document.getElementById("explanation3");
    explanation3.appendChild(fraction);

    const rasti = document.createElement("img");
      rasti.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(rasti);
  }
  else {
    document.getElementById("resultvisa3").innerHTML = "Et valinnut vastausta";
  }

} else {
  document.getElementById("resultvisa3").innerHTML = "SIIRRY SEURAAVAAN TEHTÄVÄÄN";
  document.getElementById("explanation3").innerHTML = "";
  const colorVisa3 = document.getElementById("visa3");
    colorVisa3.style.backgroundColor = '#cfcfcf';
}
}


function checkfourth() {
 
  if (isFirstCall4) {
    isFirstCall4 = false;

  if (document.getElementById("buttonfirst").checked) {
    document.getElementById("resultvisa4").innerHTML = "Vastauksesi on OIKEIN";
    
    const img = document.createElement("img");
    img.src = "../kuvat/pointstar.png";
    const followResults = document.getElementById("followresults");
    followResults.appendChild(img);
  }
  else if (document.getElementById("buttonsecond").checked) {
    document.getElementById("resultvisa4").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation4").innerHTML = "Tämä murtoluku vastaa 50% isoin murtoluku (vaihtoehto A) olisi vastannut 77.78%";

    const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
  }
  else if (document.getElementById("buttonthird").checked) {
    document.getElementById("resultvisa4").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation4").innerHTML = "Tämä murtoluku vastaa 10% isoin murtoluku (vaihtoehto A) olisi vastannut 77.78%";

    const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
  }
  else if (document.getElementById("buttonfourth").checked) {
    document.getElementById("resultvisa4").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation4").innerHTML = "Tämä murtoluku vastaa 40% isoin murtoluku (vaihtoehto A) olisi vastannut 77.78%";

    const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
  }
  else {
    document.getElementById("resultvisa4").innerHTML = "Et valinnut vastausta";
  }
  
} else {
  document.getElementById("resultvisa4").innerHTML = "SIIRRY SEURAAVAAN TEHTÄVÄÄN";
  document.getElementById("explanation4").innerHTML = "";
  const colorVisa4 = document.getElementById("visa4");
    colorVisa4.style.backgroundColor = '#cfcfcf';
}

}


function checkfifth() {
  
   if (isFirstCall5) {
    isFirstCall5 = false;

   if (document.getElementById("thirdfifth").checked) {
    document.getElementById("resultvisa5").innerHTML = "Vastauksesi on OIKEIN";
 
    const img = document.createElement("img");
    img.src = "../kuvat/pointstar.png";
    const followResults = document.getElementById("followresults");
    followResults.appendChild(img);
  }

  else if (document.getElementById("firstfifth").checked) {
    document.getElementById("resultvisa5").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation5").innerHTML = "Tämä luku olisi vastannut 4,8 lammasta"

    const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
  }
  else if (document.getElementById("secondfifth").checked) {
    document.getElementById("resultvisa5").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation5").innerHTML = "Tämä luku olisi vastannut 5,6 lammasta"

    const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
  }
  else if (document.getElementById("fourthfifth").checked) {
    document.getElementById("resultvisa5").innerHTML = "Vastauksesi on VÄÄRIN";
    document.getElementById("explanation5").innerHTML = "Tämä olisi vastannut 3,2 lammasta"

    const img = document.createElement("img");
      img.src = "../kuvat/minirasti.png";
      const followResults = document.getElementById("followresults");
      followResults.appendChild(img);
  }
  else {
    document.getElementById("resultvisa5").innerHTML = "Et valinnut vastausta";
  }
  
} else {
  document.getElementById("resultvisa5").innerHTML = "SIIRRY SEURAAVAAN TEHTÄVÄÄN";
  document.getElementById("explanation5").innerHTML = "";
  const colorVisa5 = document.getElementById("visa5");
    colorVisa5.style.backgroundColor = '#cfcfcf';
}
}




