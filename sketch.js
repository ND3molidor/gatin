var imgfundo,fundo;
var cat,catimg;
var cat2,catimg2,catimg3;
var rato,ratoimg,ratoimg2;
var catimg3,ratoimg3;




function preload() {
    //carregue as imagens aqui
    imgfundo = loadImage("images/garden.png");
    catimg = loadImage("images/cat1.png");
    ratoimg = loadImage("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    ratoimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg3 = loadImage("images/cat4.png");
    ratoimg3 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    fundo = createSprite(width/2,height/2);
    fundo.addImage(imgfundo);
    
    cat = createSprite(900,700);
    cat.addImage("gatosentado",catimg);
    cat.scale = 0.1;

    cat.addAnimation("gadoandando",catimg2);

    rato = createSprite(200,700);
    rato.addImage("ratin",ratoimg);
    rato.scale = 0.1;

    rato.addAnimation("ratoProvocando",ratoimg2);

    cat.addImage("ultimogato",catimg3);

    rato.addImage("ultimorato",ratoimg3);
}

function draw() {

    background("0");
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    
    if(cat.x - rato.x < cat.width/2 - rato.width/2){
       cat.velocityX = 0;
       cat.changeAnimation("ultimogato");
       cat.x =300;
       cat.scale =0.1;
       rato.changeAnimation("ultimorato");
    }
    
    
    drawSprites();
}


function keyPressed(){
   if(keyCode === LEFT_ARROW){
   
   rato.changeAnimation("ratoProvocando");
   rato.framedelay =25;

   cat.velocityX = -5;

   
   cat.changeAnimation("gadoandando");
   cat.framedelay = 25;
   }
  //Para mover e alterar a animação, escreva o código aqui


}
