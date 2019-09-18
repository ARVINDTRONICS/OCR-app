let convert=document.querySelector("#convert");


convert.addEventListener('click',()=>{

 let url = document.getElementById("inp").src;

 const loader= document.createElement('div');

  loader.innerHTML = `
  <div class="progress">
  <div class="indeterminate"></div>
</div>`;

  document.getElementById('output').appendChild(loader);
 
  console.log(url);
 runOCR(url);
    });


function readFile(event){

    let output=document.querySelector("#inp");

    output.src=URL.createObjectURL(event.target.files[0]);

}

function runOCR(url) {
    
    Tesseract.recognize(url)
         .then(function(result) {
            document.getElementById("output")
                    .innerText = result.text;
         });

      
}

