
    let api_url = `https://api.1inch.exchange/v3.0/1/tokens`;
    
    
    //***********ce qu'on ne doit pas faire ***** async sans await    */
    
    async function parseToken(){

      try{
        let response =    fetch(api_url);//error ==> car on n'a pas mis await fetch(api_url)
        let tokens =     response.json()  ;//error ==> car on n'a pas mis await  response.json()

        console.log(tokens);
        console.log("inside function sans Await");
        } catch(e){
          console.log(`Error sans Await is: ${e}`)
        }
 
    }

    parseToken();
    console.log(" outside function async sans Await");//affiche avant parseToken();


     //***********ce qu'on ne doit pas faire ***** async avec await    */


     async function parseToken2(){ //toujours async function quand on utilise await

      try{
        let response =  await  fetch(api_url);//correct car on a await fetch(api_url);
        let tokens =   await   response.json()  ;//correct car on a await  response.json() ;

        console.log(tokens);
        console.log("inside function asynchronous AVEC Await");
        // s'affiche en dernier après  console.log(" outside function async AvEC Await")ss;
          } catch(e){
            console.log(`Error is: ${e}`)
          }

    }

    parseToken2();
    console.log(" outside function async AvEC Await");// s'affiche en 1er avant parseToken2();


     

    //throw error ==> provoquer une error 
    let webservice = fetch(api_url).then(response => response.json())
    .then(data => {
        throw `Error occured`;//throw error ==>provoque une erreur ==> on va directement au bloc catch(e => )
    document.body.innerHTML = `<p>${data.tokens["0x006bea43baa3f7a6f765f14f10a1a1b08334ef45"].symbol}</p>`//objet json contient une property "symbol`;
    document.body.innerHTML += `<p>${data.tokens["0x006bea43baa3f7a6f765f14f10a1a1b08334ef45"].name}</p>`;//objet json contient une property "name`;
    console.log(data);
     })
    .catch(e => {
     console.log(`Error Throwed ===>${e}`)
    });