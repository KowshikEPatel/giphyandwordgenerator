/*Implementation with Promises 
document.body.append("This is fetch and then  code")

fetch(url_String)
.then((data)=>{return data.json()})
.then((response)=>{console.log(response)
    let header1Ele=document.createElement("h2")
    header1Ele.innerHTML=response;
    document.body.append(header1Ele);

    let url_String2=`https://api.giphy.com/v1/gifs/search?api_key=8BWUNgcQNeCc0ObGnHi2Iw6qkGfGboCo&q=${response}&limit=1&offset=0&rating=g&lang=en`;
    
    fetch(url_String2)
    .then((response)=>{
        //console.log(response.json())
         return response.json()})
    .then((data)=>{
        let imgelement=document.createElement("img")
        imgelement.src=data.data[0].images.downsized.url;
        document.body.append(imgelement);
})
})
.catch((err)=>{console.log("Sorry I was not able to find" +err)})*/


// <img src="https://api.giphy.com/v1/gifs/search?api_key=8BWUNgcQNeCc0ObGnHi2Iw6qkGfGboCo&q=smile&limit=5&offset=0&rating=g&lang=en" alt="">

/*Implementation with async await*/

document.body.append("This is async await section code");
async function pinger(){
    let url_String='https://random-word-api.herokuapp.com//word?number=1'
    const responseStr1 = await fetch(url_String);
    const dataStr1 = await responseStr1.json();
    let header2Ele = document.createElement("h2");
    header2Ele.innerHTML = dataStr1;
    document.body.append(header2Ele);
    let url2_string = `https://api.giphy.com/v1/gifs/search?api_key=8BWUNgcQNeCc0ObGnHi2Iw6qkGfGboCo&q=${dataStr1}&limit=1&offset=0&rating=g&lang=en`;
        const responseStr2 = await fetch(url2_string);
        const dataStr2 = await responseStr2.json();
        console.log(dataStr2)
        let imgelement1=document.createElement("img");
        imgelement1.src=dataStr2.data[0].images.downsized.url;
        document.body.append(imgelement1);

}
pinger();
