function petFinder() {
    var final = ''
    var display = document.getElementById("display")
    var start = prompt("Do it have four legs?")
    
    if (start == "yes"){
        
        var animal1 = prompt("Are you a big animal")
            
        if (animal1 == "yes"){
            var bark = prompt("Do you bark")
    
            if (bark == "yes"){
                 final = "dog"
            
            } else {
                final = "cat"
            }
        
        }else{
        var hop = prompt("Do you hop")
            if(hop == "yes"){
                final = "rabbit"
            }else{
                final = "hamster"
            }
        }
    }else{
        var legs = prompt("Do you have legs")
            if(legs == "yes"){
                var fly = prompt("Can you fly")
                    if(fly == "yes"){
                        final = "Parrot"
                    }else{
                        final = "spider"
                    }
            }else{
                var fin = prompt("Do you have fins")
                    if(fin == "yes"){
                        final = "fish"
                    }else{
                        final = "snake"
                    }
            }
    }
    display.innerHTML = "it's a" + final + "!";
}