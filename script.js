
let currentIndex = 1
showSlide(currentIndex)

function left() {

    currentIndex  -- ;
    if (currentIndex < 1) {
        currentIndex = 10
        
    }
    showSlide(currentIndex)

}
function right() {
    currentIndex  ++ ;
    if (currentIndex > 10) {
        currentIndex = 1
        
    }
    showSlide(currentIndex)
}
function showSlide(Index) {
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")
    
    const img3 = document.getElementById("img3")
    
    const img4 = document.getElementById("img4")
    
    const img5 = document.getElementById("img5")

    const img6 = document.getElementById("img6")

    const img7 = document.getElementById("img7")
    
    const img8 = document.getElementById("img8")
    
    const img9 = document.getElementById("img9")
    
    const img10 = document.getElementById("img10")


    
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "none"
    img4.style.display = "none"
    img5.style.display = "none"
    img6.style.display = "none"
    img7.style.display = "none"
    img8.style.display = "none"
    img9.style.display = "none"
    img10.style.display = "none"
    if (Index ==1) {
        img1.style.display = "block"
        
    } else if (Index ==2) {
                img2.style.display = "block"

    } else if (Index ==3) {
                        img3.style.display = "block"

        
    }else if (Index ==4) {
                        img4.style.display = "block"

    }else if (Index ==5) {
                        img5.style.display = "block"

    }else if (Index ==6) {
                        img6.style.display = "block"

    }else if (Index ==7) {
                        img7.style.display = "block"

    }else if (Index ==8) {
                        img8.style.display = "block"

    }else if (Index ==9) {
                        img9.style.display = "block"

    }else if (Index ==10) {
                        img10.style.display = "block"

    }
    

    
}

