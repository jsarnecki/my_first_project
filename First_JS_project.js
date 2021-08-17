function setup(){
   
}

function draw(){
    
}

console.log("mojito", process.argv)

//This application/extension to Potplayer that will automatically pull up the desired (Eng/Kor) subtitles from the 
// predetermined folder (of folders), so that it is not needed to be done manually.  The app will match whichever 
// video file (name) is being played against the subtitle folders, then extract and load whichever Eng/Kor subtitles 
// within that matched folder.  


//NOT SURE ABOUT THESE THINGS
//Can I make this sort of application solely thru javascript?  Or is html/css required?
//How to pair it with Potplayer?  
//



//Create canvas?  

//Input search box that opens the folder location containing other folders full of subtitles

//Have an input toggle that toggles between whichever desired subtitle I want to use English/Korean
    //Have either mouse/keyboard access to toggle during video play, so it can be switched back and forth without
    // disrupting video playback


//PSEUDO CODE LETS GO
//For the search box
//Takes in a string that is the video file name

//Somehow break the string down so that it's easy to compare against the folder name strings.

//Once the matched folder is found, open it, and go through all the subtitles matching the English and Korean files

//Now knowing the file locations of the desired subtitles, use that pathway to connect to the toggles
//Save these locations as variables?  Or...




//Anthony suggested steps:
//Determine inputs - parse inputs (vid file, sub folder, language)

//Extract from video name, recursively go thru subs to find match, handling nested folders

//Create array of folders to recurse through, from the 
