function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

    const serviceId = "service_8f8ud0r"
const templeteId = "template_ahbz6xo"

emailjs.send(serviceId,templeteId,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message sent Successfully");
    }
)
.catch((err) => console.log(err));

}
