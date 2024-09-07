var chickens = document.querySelector('.chicken')
let container = document.querySelector('.container')
let containersize = container.getBoundingClientRect()
for(var x=0 ; x<60 ; x++)
{
    var creat = document.createElement('img')
    creat.setAttribute('src','./images/Chicken.png')
    chickens.appendChild(creat)
}

var rocket = document.querySelector('.rock')
var yaxis = 0
var xaxis=0;

window.addEventListener('keydown',function(e){

    
    if(e.code == "ArrowUp")
    {
        yaxis += 20
        rocket.style.bottom = yaxis + 'px'

        if(yaxis >= (containersize.height - 100))
        {
            yaxis = containersize.height - 100
        }


    }else if(e.code == "ArrowDown"){
        yaxis -= 20
        rocket.style.bottom = yaxis + 'px'
        if (yaxis < 10 )
        {
            yaxis = 0
        }
    }else if(e.code == "ArrowLeft")
    {
        xaxis -= 20
        rocket.style.left = xaxis + 'px'
        if (xaxis < 0)
            {
                xaxis = 0
            }
    }
    else if(e.code == "ArrowRight")
        {
            xaxis += 20
            rocket.style.left = xaxis + 'px'

            if(xaxis >= (containersize.width - 100))
            {
                xaxis = containersize.width - 100
            }
        }
     if(e.code == "Space")
    {
        let Bulet = document.createElement('img')

        Bulet.src = './images/Bullet.png'
        Bulet.classList.add('bulet')
        rocket.append(Bulet)
        var buletposition = 0
       var gun =  setInterval(function(){

        buletposition += 20
        Bulet.style.bottom = buletposition + 'px'

        if(buletposition > 1000){

            clearInterval(gun)
            rocket.removeChild(Bulet)
        }
        },100)
    }
})