window.onload=()=>{
    
    const dogApi="https://dog.ceo/api/breeds/image/random"
    var dogButton=document.getElementById("dog")
    var dogClearButton=document.getElementById("cleardog")

    
    dogClearButton.addEventListener('click',()=>{
        document.getElementById("dog-container").innerHTML=null
    })

    dogButton.addEventListener('click',async()=>{
        console.log("Dog button is pressed")
        await fetch(dogApi).then((res)=>{
            res.json().then((data)=>{
                // console.log(data)
                var newdog = document.createElement('img')
                newdog.className="item-image"
                newdog.src = data.message
                document.getElementById("dog-container").innerHTML=null
                document.getElementById("dog-container").appendChild(newdog)
            })

        }).catch((err)=>{
            console.log(err);
        })
    })
}
