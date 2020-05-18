// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json) {
           
           for (const index of json) {
            document.getElementById("container").innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${index.firstName} ${index.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${index.hoursInSpace}</li>
                        <li>Active: ${index.active}</li>
                        <li>Skills: ${index.skills.join(", ")}</li>
                    </ul>
                </div>
                    <img class="avatar" src=${index.picture}>
            </div>
            `;
            }
        });
    
    });

});
