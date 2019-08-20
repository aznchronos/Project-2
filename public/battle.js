/////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOGIC FOR BATTLEING
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var currentEnemy;


encounter();


function encounter(){
    var enemyChoice = Math.floor(Math.random()*10);

    //Demon is the enemy
    if(enemyChoice > 7){
        currentEnemy = "demon";
        $("#minotaurAnimationID").css("display","none");
        $("#adventurerAnimationID").css({
            'right':'0px',
            'left': '200px'
           });
        console.log("here");
   

    }
    //Minotaur is the enemy
    else{
        currentEnemy = "minotaur";
        $("#demonAnimationID").css("display","none");
        $("#adventurerAnimationID").css({
            'right':'0px',
            'left': '300px'
           });
        console.log("here instead")
       

    }



}
function damage(){

}
function ending(){

}
