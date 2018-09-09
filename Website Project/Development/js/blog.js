document.getElementById('myBtn').onclick = function() {

    if (document.getElementById('comment1').style.display === "block") {
        document.getElementById('comment1').style.display = 'none';
    } else {
        document.getElementById('comment1').style.display = 'block';
    }

}


document.getElementById('repsec').onclick = function() {

    if (document.getElementById('comment2').style.display === "block") {
        document.getElementById('comment2').style.display = 'none';
    } else {
        document.getElementById('comment2').style.display = 'block';
    }

}

document.getElementById('likebutton').onclick = function() { 
  
  if(document.getElementById('likebutton').innerHTML === "Like" ){
  	document.getElementById('likebutton').innerHTML = "Liked";
  }else {
    document.getElementById('likebutton').innerHTML ="Like";
  } 

}

document.getElementById('likebtn').onclick = function() { 
  
  if(document.getElementById('likebtn').innerHTML === "Like" ){
  	document.getElementById('likebtn').innerHTML = "Liked";
  }else {
    document.getElementById('likebtn').innerHTML ="Like";
  } 

}

