const btnEl=document.getElementById("btn");
const animecontainerEl=document.querySelector(".anime-container");
const animeimgEl=document.querySelector(".anime-img");
const animenameEl=document.querySelector(".anime-name");

btnEl.addEventListener("click",async function(){
    try {
        btnEl.disabled=true;
        btnEl.innerText="Loading...";
        animenameEl.innerText="updating...";
        animeimgEl.src="spinner.svg"; 
        const response=await fetch("https://api.catboys.com/dice");
        const data=await response.json();
        btnEl.disabled=false;
        btnEl.innerText="roll dice";
       // console.log(data);
        animecontainerEl.style.display="block";
        animeimgEl.src=data.url; 
        animenameEl.innerText=data.response;
    } catch (error) {
        //console.log(error);
        btnEl.disabled=false;
        btnEl.innerText="roll dice";
        animenameEl.innerText="please try again";
    }
});