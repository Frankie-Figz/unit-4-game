var wins = 0;
var losses = 0;
var playAgain = "";
var gemValues = [];


function play(){    
    var targetValue = 0;
    var myPoints = 0;

    var gems = ["red","blue","yellow","purple"];

    var imgGems = ["https://miro.medium.com/max/959/1*Qc0XxYm-qAZL-7tjjlNfrg.png", 
    "https://classroomclipart.com/images/gallery/Clipart/Gems_and_Minerals/aquamarine-gems-and-minerals-clipart.jpg",
    "https://3.imimg.com/data3/LP/JI/MY-998788/topaz-250x250.jpg",
    "https://images.jtv.com/media/jtv-site/gemopedia/amethyst/amethyst-hero.jpg"];
    
    function numberRandom(){
        return Math.floor(Math.random()*12 + 1);
    }

    function generateTargetValue(){
        targetValue = Math.floor(Math.random()*101 + 19);
        $("#target_points").text("Target Points : " + targetValue);
    }

    function setScore(){
        myPoints = 0;

        $("#wins").text("WINS : " + wins);
        $("#loss").text("LOSS : " + losses);
        $("#points").text("Points : " + myPoints);
        
    }

    clearDrawSpace();
    
    $("div#gem0").on("click", updatePlayerPoints);
    $("div#gem1").on("click", updatePlayerPoints);
    $("div#gem2").on("click", updatePlayerPoints);
    $("div#gem3").on("click", updatePlayerPoints);

    function drawGems(){
        for(var i = 0; i < gems.length;i++){            
            var s = "gem" + i;
    
            var crystal = $("<img>");
    
            crystal.attr({
            "class": 'crystalStyle',
            "numberRandom": numberRandom(),
            "src": imgGems[i],
            "width": 150,
            "height" : 150
            });
    
            $("div#" + s).append(crystal);
            gemValues.push(numberRandom());
            console.log(gemValues.toString());
        }
    }

    function clearDrawSpace(){
        /* Resets the array where the random vlaues are stored*/
        gemValues = [];

        $("#gem0").empty();
        $("#gem1").empty();
        $("#gem2").empty();
        $("#gem3").empty();
        
        $("#wins").empty();
        $("#loss").empty();
        $("#points").empty();
        $("#target_points").empty();
        
        generateTargetValue();
        setScore();
        drawGems();
    }

    function updatePlayerPoints(){
        // var value = $(this).children('img').attr("numberRandom");
        // + parseInt(value);

        var index = $(this).attr("value");

        myPoints = myPoints + gemValues[parseInt(index)];
        $("#points").text("Points : " + myPoints);
        console.log(index);

        if(targetValue == myPoints){
            var playAgain = confirm("You Win ! Do you want to play again ?");
            wins++;
            if(playAgain == true){
                clearDrawSpace();
            }
            
        } else if( myPoints > targetValue){
            var playAgain = confirm("You Lose ! Do you want to play again ?");
            losses++;
            if(playAgain == true){
                clearDrawSpace();    
            }                
        }
    }
}