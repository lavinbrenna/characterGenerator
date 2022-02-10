function Player(){
  this.characterType = "";
  this.playerName = "";
  this.intel = 0;
  this.reflex = 0;
  this.tech = 0;
  this.cool = 0;
  this.luck = 0;
  this.attractive = 0;
  this.empathy = 0;
};

Player.prototype.generateCharacter = function(){
  this.characterType = this.randomizeCharacterType();
  this.playerName = this.randomizeCharacterName();
  this.intel = this.d10Roll();
  this.reflex = this.d10Roll();
  this.tech = this.d10Roll();
  this.cool = this.d10Roll();
  this.luck = this.d10Roll();
  this.attractive = this.d10Roll();
  this.empathy = this.d10Roll();
  let total = this.intel + this.reflex + this.tech + this.cool + this.luck + this.attractive + this.empathy;
  console.log(total);
  while(total > 65){
    this.intel,this.reflex, this.tech, this.cool, this.luck, this.attractive, this.empathy = this.d10Roll();
    if(total <= 65){
      let player = new Player();
      return player;
    }
  }let player = new Player();
  return player;
}

Player.prototype.randomizeCharacterName = function(){
  let randoNames = ['Alt', 'Ava', 'Da5id', 'Case', 'Richter', 'Dex', 'Tal', 'Yuki', 'Hiro', 'Bishop', 'Armitage', 'Neo', 'Deckard', 'Quaid', 'Joi', 'Mara', 'Melina', 'Panam', 'Wolf', 'Grey'];
  let num = Math.floor(Math.random()* 20);
  return randoNames[num];
}
Player.prototype.randomizeCharacterType = function (){
  let num =  Math.floor(Math.random()*9);
  let characterClasses = ['Rockerboy', 'Solo','Netrunner', 'Techie', 'Media', 'Cop', 'Corpo','Fixer', 'Nomad'];
  let character = characterClasses[num];
  return character;
}
Player.prototype.d10Roll = function (){
  let num = Math.floor(Math.random()*10) + 1;
  return num;
}
function attachListeners(){
  $("#again").on('click', function (){
    let player = new Player();
    player.generateCharacter();
    $("#randoName").text(player.playerName);
    console.log(player.playerName);
    $("#randoClass").text(player.characterType);
    $("#randIntel").text(player.intel);
    $("#randReflex").text(player.reflex);
    $("#randTech").text(player.tech);
    $("#randCool").text(player.cool);
    $("#randLuck").text(player.luck);
    $("#randAttract").text(player.attractive);
    $("#randEmpathy").text(player.empathy);
    $("#randCD").hide();
    if(player.characterType.toLowerCase() === "rockerboy" ){
      $("#randCD, #randrockerboy").show();
      $("#randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
    }else if(player.characterType.toLowerCase() === "solo"){
      $("#randCD,#randsolo").show();
      $("#randrockerboy, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
    }else if(player.characterType.toLowerCase() === "netrunner"){
      $("#randCD, #randnetrunner").show();
      $("#randsolo, #randrockerboy, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
    }else if(player.characterType.toLowerCase() === "techie"){
      $("#randCD, #randtechie").show();
      $("#randsolo, #randnetrunner, #randrockerboy, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
    }else if(player.characterType.toLowerCase() === "media"){
      $("#randCD, #randmedia").show();
      $("#randsolo, #randnetrunner, #randtechie, #randrockerboy, #randcop, #randcorpo, #randfixer, #randnomad").hide();
    }else if(player.characterType.toLowerCase() === "cop"){
      $("#randCD,#randcop").show();
      $("#randrockerboy,#randsolo, #randnetrunner, #randtechie, #randmedia, #randcorpo, #randfixer, #randnomad").hide();
    }else if(player.characterType.toLowerCase() === "corpo"){
      $("#randCD, #randcorpo").show();
      $("#randrockerboy, #randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randfixer, #randnomad").hide();
    }else if(player.characterType.toLowerCase() === "fixer"){
      $("#randCD, #randfixer").show();
      $("#randrockerboy, #randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randnomad").hide();
    }else if(player.characterType.toLowerCase() === "nomad"){
      $("#randCD, #randnomad").show();
      $("#randrockerboy,#randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer").hide();
    }else{
      $("#randCD, #randrockerboy,#randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
    }
  });
}


$(document).ready(function(){
  attachListeners();
  let player = new Player()
  player.generateCharacter();
  $("#randoName").text(player.playerName);
  console.log(player.playerName);
  $("#randoClass").text(player.characterType);
  $("#randIntel").text(player.intel);
  $("#randReflex").text(player.reflex);
  $("#randTech").text(player.tech);
  $("#randCool").text(player.cool);
  $("#randLuck").text(player.luck);
  $("#randAttract").text(player.attractive);
  $("#randEmpathy").text(player.empathy);
  $("#randCD").hide();
  if(player.characterType.toLowerCase() === "rockerboy" ){
    $("#randCD, #randrockerboy").show();
    $("#randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "solo"){
    $("#randCD,#randsolo").show();
    $("#randrockerboy, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "netrunner"){
    $("#randCD, #randnetrunner").show();
    $("#randsolo, #randrockerboy, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "techie"){
    $("#randCD, #randtechie").show();
    $("#randsolo, #randnetrunner, #randrockerboy, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "media"){
    $("#randCD, #randmedia").show();
    $("#randsolo, #randnetrunner, #randtechie, #randrockerboy, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "cop"){
    $("#randCD,#randcop").show();
    $("#randrockerboy,#randsolo, #randnetrunner, #randtechie, #randmedia, #randcorpo, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "corpo"){
    $("#randCD, #randcorpo").show();
    $("#randrockerboy, #randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randfixer, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "fixer"){
    $("#randCD, #randfixer").show();
    $("#randrockerboy, #randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randnomad").hide();
  }else if(player.characterType.toLowerCase() === "nomad"){
    $("#randCD, #randnomad").show();
    $("#randrockerboy,#randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer").hide();
  }else{
    $("#randCD, #randrockerboy,#randsolo, #randnetrunner, #randtechie, #randmedia, #randcop, #randcorpo, #randfixer, #randnomad").hide();
  }
})