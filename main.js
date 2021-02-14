var namearray = [
    "Myself",
    "My Mother" ,
    "My Father" , 
    "My Brother" ,
    "My Family Book"
    ];
    
    var images = [
    "me.png" , 
    "mother.png" , 
    "Dad.jpg" , 
    "brother.jpeg",
    "family.png"
    ];
    
    var arrayindex = 0;
    
    function next()
    {
     document.getElementById("names").innerHTML= namearray [arrayindex];
    
    document.getElementById("members").src= images [arrayindex];
    arrayindex++;


    if (arrayindex == 5) {
    
    arrayindex = 0;

    }
    }