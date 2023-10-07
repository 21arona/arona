function sendMail(){
    var params = {
        name: document.getElementById("contactName").value,
        email: document.getElementById("contactEmail").value,
        message: document.getElementById("contactMessage").value
    };
    const serviceID = "service_lgo72ad";
const templateID = "template_zrypw4u";

emailjs.send(serviceID,templateID,params)
.then((res) => {
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMessage").value = "";
    console.log(res);
        // Afficher le message de confirmation
        document.getElementById("successMessage").style.display = "block";
    
        // Cacher le formulaire
        document.getElementById("contactForm").style.display = "none";
})
.catch((err) => console.log(err));
}

