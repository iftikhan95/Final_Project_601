
function displayResume(){

    fetch('Iftikhar_info.json').then((response) =>{
        console.log(response);
        return response.json();
    }).then(data => {
        
        var element = document.getElementById("page");
        element.innerHTML = " ";
        for (let i = 0 ; i< data.Degrees.length; i++){
            
            var para1 = document.createElement("p");
            var para2 = document.createElement("p");
            var para3 = document.createElement("p");
            var h2   = document.createElement("h2");
            var element = document.getElementById("page");

            var node = document.createTextNode(data.Degrees[i].degree.School);
            h2.appendChild(node);
            element.appendChild(h2);

            var node = document.createTextNode(data.Degrees[i].degree.Program);
            para1.appendChild(node);
            element.appendChild(para1);

            var node = document.createTextNode(data.Degrees[i].degree.Type);
            para2.appendChild(node);
            element.appendChild(para2);

            var node = document.createTextNode(data.Degrees[i].degree.Year);
            para3.appendChild(node);
            element.appendChild(para3);

        }

        document.getElementById("displayResult").textContent = text;
        console.log(data.Degrees[0].degree);

    }).catch((err)=>{
        console.log(err);
    })    
}
