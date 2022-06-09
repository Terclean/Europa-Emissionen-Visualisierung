//https://raw.githubusercontent.com/plotly/datasets/master/Emissions%20Data.csv
let bg;
let data;
//Multiplikator für Größe der Kreise
let l = 10;
//Color Cirles
let c1;
let c2;
//Color Lable´


search for problems


lol Follow ATD on Twitter

  createCanvas(1000, 1000);
  //Damit es vereinheitlicht ist
  textSize(12);
  background(bg);
  //vorbereiten der Daten zur Visualisierung (Nur Europa, Nur 2011)
  prepareData();
  print(data.getColumn(1))
  //Erzeugt den Kreis für die Emmisonen der jewieligen länder pro Einwohner
  //createCircle(x Koordinate,y Koordinate,Land);
  createCircle(500,500,"Germany");
  createCircle(480,400,"Denmark");
  createCircle(460,620,"Switzerland");
  createCircle(370,590,"France");
  createCircle(260,750,"Spain");
  createCircle(150,770,"Portugal");
  createCircle(320,480,"United Kingdom");
  createCircle(220,450,"Ireland");
  createCircle(630,480,"Poland");
  createCircle(540,340,"Sweden");
  createCircle(460,290,"Norway");
  createCircle(750,610,"Romania");
  createCircle(650,600,"Hungary");
  createCircle(630,670,"Bosnia And Herzegovina");
  createCircle(540,710,"Italy");
  createCircle(570,600,"Austria");
  createCircle(740,800,"Greece");
  createCircle(770,685,"Bulgaria");
  createCircle(830,500,"Ukraine");
  createCircle(750,420,"Belarus");
  createCircle(680,390,"Lithuania");
  
  
  sortTopTen();
  createLableEpl();
}

function draw() {
  
}

function sortTopTen() {
  let EData = [];
  //2x für die Sicherheit
  //Durchsuchen der ganzen CSV
    for(let x = 0; x < data.getRowCount(); x++){
      EData.push(round(data.getNum(x,3),2))
    }

  sort(EData);
  print(EData)
  crateTopTen(EData);
}

function crateTopTen(EData) {
  let y1=110;
  
  //Der Versuch die "Worst Ten" darzustellen
  fill(255);
  rect(0,y1-110,width,220);
  print("----------------------------")
  //Für das Spacing der Kreise
  let u = 200;
  let t = 200;
  let e = 0;
  
  let r = 0;
  //Sind nur noch die Top 6 (Sonst zu wenig Platz)
  for(let i = EData.length; i >= (EData.length-6); i=i-1){
    for(let x = 0; x < data.getRowCount(); x++){
      print(EData[i])
      if(EData[i]==round(data.getNum(x,3),2)){
        let s = data.getString(x,1);
        print(s)
        //r==0 ist nie true???
        if(r==0){
           createCircle(11000,y1,s);
           }
        if(r==1){
           createCircle(890,y1,s);
           }
        if(r==2){
           createCircle(710,y1,s);
           }
        if(r==3){
           createCircle(570,y1,s);
           }
        if(r==4){
           createCircle(450,y1,s);
           }
        if(r==5){
           createCircle(340,y1,s);
           }
        if(r==6){
           createCircle(230,y1,s);
           }
        

        
      }
    }
    t = t - 25
    e = u;
    u = u + t
    r++
    print("u " + u)
  }
  //überschrift
  textSize(18);
  text("Worst 6 der Emission pro Kopf",300,23)
  textSize(12);
}

function createLableEpl() {
  let r1 = 100;
  let y2 = 0;
  stroke(0)
  rect(0,y2,r1*1.7,220,0,0,0,0);
  fill(255);
  noStroke()
  rect(0,y2,r1*1.7,r1*3-30,0,0,20,0);
  
  fill(0);
  
  textAlign(CENTER);
  textSize(20);
  text("Lable",r1*1.7/2,y2+23);
  for(let k = 0;k<12;k++){
   if(k>=0){
     c3 = color("RGBA(0,255,0,0.5)")
    c4 = color("RGBA(0,255,0,0.9)")
     }
  if(k>=1){
     c3 = color("RGBA(50,255,0,0.5)")
    c4 = color("RGBA(50,255,0,0.9)")
     }
  if(k>=2){
     c3 = color("RGBA(100,255,0,0.5)")
    c4 = color("RGBA(100,255,0,0.9)")
     }
  if(k>=3){
     c3 = color("RGBA(150,255,0,0.5)")
    c4 = color("RGBA(150,255,0,0.9)")
     }
  if(k>=4){
     c3 = color("RGBA(200,255,0,0.5)")
    c4 = color("RGBA(200,255,0,0.9)")
     }
  if(k>=5){
     c3 = color("RGBA(255,255,0,0.5)")
    c4 = color("RGBA(255,255,0,0.9)")
     }
  if(k>=6){
     c3 = color("RGBA(255,200,0,0.5)")
    c4 = color("RGBA(255,200,0,0.9)")
     }
  if(k>=7){
     c3 = color("RGBA(255,150,0,0.5)")
    c4 = color("RGBA(255,150,0,0.9)")
     }
  if(k>=8){
     c3 = color("RGBA(255,100,0,0.5)")
    c4 = color("RGBA(255,100,0,0.9)")
     }
  if(k>=9){
     c3 = color("RGBA(255,50,0,0.5)")
    c4 = color("RGBA(255,50,0,0.9)")
     }
  if(k>=10){
     c3 = color("RGBA(255,0,0,0.5)")
    c4 = color("RGBA(255,0,0,0.9)")
     }
  if(k>=11){
     c3 = color("RGBA(155,0,0,0.5)")
    c4 = color("RGBA(155,0,0,0.9)")
     }
  fill(c3);
  stroke(c4)
  rect(10,y2+30+k*(r1/6+3),r1/3,r1/6);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
    textSize(12);
  text(">= " + k + "t per Capita",r1/3+70,y2+39+k*(r1/6+3));
  }
}

function createCircle(x,y,z) {
  //k = Größe der Emissionen der jeweiligen Landes
  let k;
  //Durchsuchen der ganzen CSV
  for(let x = 0; x < data.getRowCount(); x++){
    if(data.getString(x,1)==z){
      k = round(data.getNum(x,3),2)
    }
    
  }
  print(k)
  //Setzt Farbe des Kreises in Abhänigkeit der Emissionen
  setColor(k);
  
  
  fill(c1);
  stroke(c2);
  circle(x,y,k*l);
  
  //Erzeugt die Schrift im Kreis
  setLable(x,y,z,k);
}

function setColor(k) {
  //je geringer die Emissionen desto grüner die Farbe
    c1 = color("RGBA(0,255,0,0.5)")
    c2 = color("RGBA(0,255,0,0.9)")
  if(k>=1){
     c1 = color("RGBA(50,255,0,0.5)")
    c2 = color("RGBA(50,255,0,0.9)")
     }
  if(k>=2){
     c1 = color("RGBA(100,255,0,0.5)")
    c2 = color("RGBA(100,255,0,0.9)")
     }
  if(k>=3){
     c1 = color("RGBA(150,255,0,0.5)")
    c2 = color("RGBA(150,255,0,0.9)")
     }
  if(k>=4){
     c1 = color("RGBA(200,255,0,0.5)")
    c2 = color("RGBA(200,255,0,0.9)")
     }
  if(k>=5){
     c1 = color("RGBA(255,255,0,0.5)")
    c2 = color("RGBA(255,255,0,0.9)")
     }
  if(k>=6){
     c1 = color("RGBA(255,200,0,0.5)")
    c2 = color("RGBA(255,200,0,0.9)")
     }
  if(k>=7){
     c1 = color("RGBA(255,150,0,0.5)")
    c2 = color("RGBA(255,150,0,0.9)")
     }
  if(k>=8){
     c1 = color("RGBA(255,100,0,0.5)")
    c2 = color("RGBA(255,100,0,0.9)")
     }
  if(k>=9){
     c1 = color("RGBA(255,50,0,0.5)")
    c2 = color("RGBA(255,50,0,0.9)")
     }
  if(k>=10){
     c1 = color("RGBA(255,0,0,0.5)")
    c2 = color("RGBA(255,0,0,0.9)")
     }
  if(k>=11){
     c1 = color("RGBA(155,0,0,0.5)")
    c2 = color("RGBA(155,0,0,0.9)")
     }
}

function setLable(x,y,z,k) {
  //Text foramtion
  textAlign(CENTER);
  fill(0);
  noStroke();
  //Das Land
  text(z, x, y-12);
  //Die Emissionen in t per Capita
  text(k + " t",x,y+1);
  //Beschrinftung "per Capita"
  text("per Capita",x,y+13);
}

function prepareData() {
  //10x durchgehen damit alle Daten gelöscht werden; Wenn nur 1x wird nicht alles gelöscht
  for(let i = 0; i < 10; i++){
//Durchsuchen der ganzen CSV
    for(let x = 0; x < data.getRowCount(); x++){
      if(data.getString(x,2)!="Europe"){
        //Löschen der Daten
        data.removeRow(x);
      }
    }
  }
  //10x durchgehen damit alle Daten gelöscht werden; Wenn nur 1x wird nicht alles gelöscht
  for(let i = 0; i < 10; i++){
    for(let x = 0; x < data.getRowCount(); x++){
      if(data.getString(x,0)!=2011){
        //Löschen der Daten
        data.removeRow(x);
      }
    }
  }
}
