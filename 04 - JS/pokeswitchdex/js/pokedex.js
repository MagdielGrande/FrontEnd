const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../images/vaciapokeball.png")
        }
        else {
            return res.json();
            
        }
       
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let idPokemon = data.id;
            let nombrePokemon = data.name;
            

            if(data.types.length==2){
                let tiPokemon = data.types[0].type.name;
                let tiPokemon2 = data.types[1].type.name;


                let eraser=document.getElementById("type2").classList[0];
                document.getElementById("type2").classList.remove(eraser);

                let eraserprimer=document.getElementById("type1").classList[0];
                document.getElementById("type1").classList.remove(eraserprimer);

                document.getElementById("type1").innerHTML=tiPokemon;
                document.getElementById("type2").innerHTML=tiPokemon2;
                document.getElementById("type1").classList.add(tiPokemon);
                document.getElementById("type2").classList.add(tiPokemon2);
            }
            else{
                let tiPokemon = data.types[0].type.name;
             
                let eraser=document.getElementById("type2").classList[0];
                document.getElementById("type2").classList.remove(eraser);

                let eraserprimer=document.getElementById("type1").classList[0];
                document.getElementById("type1").classList.remove(eraserprimer);

           
                document.getElementById("type1").classList.add(tiPokemon);  
                document.getElementById("type1").innerHTML=tiPokemon; 
                document.getElementById("type2").innerHTML="";

            }
            
        ///    for(let i=0; i < data.types.length;i++){
                //let tipoPokemon = data.types[i].type.name;
           //     let li = document.createElement("li");
             ///   li.classList.add("pokemon-type");
                //li.innerHTML=data.types[i].type.name;
               // document.querySelector("#tipoDepokemon").appendChild(li);
           // }
            let statsHp = data.stats[0].base_stat;
            let statsAtack = data.stats[1].base_stat;
            let statsDefence = data.stats[2].base_stat;
            let statsSpecialAtack = data.stats[3].base_stat;
            let statsSpecialDefense = data.stats[4].base_stat;
            let statsSpeed = data.stats[5].base_stat;

           
            if(data.moves.length >=2 ){
                let moveUno = data.moves[0].move.name;
                let moveDos = data.moves[1].move.name;
               
                    document.getElementById("movpoke1").innerHTML=moveUno;                 
                    document.getElementById("movpoke2").innerHTML=moveDos;  
            }
            else {
                let moveUno = data.moves[0].move.name;
                document.getElementById("movpoke1").innerHTML=moveUno;
                document.getElementById("movpoke2").innerHTML=""; 
            }


            pokeImage(pokeImg);
            nombrePoke(nombrePokemon,idPokemon);
            hpstats(statsHp);
            atackStats(statsAtack);
            defenceStat(statsDefence);
            specialAtackStats(statsSpecialAtack);
            specialDefenseStats(statsSpecialDefense);
            speedStats(statsSpeed);
            
        }
    });
}

const pokeImage = (url) => {
    //encuentra la ubicacion donde se va a insertar la imagen 
    const pokePhoto = document.getElementById("pokeImg"); 
    //url de la imagen en la api 
    pokePhoto.src = url;
}


const nombrePoke= (nomPoke, idPokem)=>{
    nomPoke = nomPoke.toUpperCase();
   document.getElementById("nombreDelPokemon").innerHTML="#"+ idPokem +" "+ nomPoke;  
}



//STATS
const hpstats= (hp)=>{
    document.getElementById("stat1").innerHTML=hp;  
}
const atackStats= (atk)=>{
    document.getElementById("stat2").innerHTML=atk;  
}
const defenceStat= (def)=>{
    document.getElementById("stat3").innerHTML=def;  
}
const specialAtackStats= (satk)=>{
    document.getElementById("stat4").innerHTML=satk;  
}
const specialDefenseStats= (sdef)=>{
    document.getElementById("stat5").innerHTML=sdef;  
}
const speedStats= (speed)=>{
    document.getElementById("stat6").innerHTML=speed;  
}
