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
        const responses=await fetch("https://api.catboys.com/dice");
        const data=await responses.json();
        btnEl.disabled=false;
        btnEl.innerText="roll dice";
       // console.log(data);
        animecontainerEl.style.display="block";
        if(data.response==1){
            animeimgEl.src="data:image/png;base64,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";
            animenameEl.innerText=data.response;
        }
        else{
        animeimgEl.src=data.url; 
        animenameEl.innerText=data.response;}
    } catch (error) {
        //console.log(error);
        btnEl.disabled=false;
        btnEl.innerText="roll dice";
        animenameEl.innerText="please try again";
    }
});
