//---------- Navbar ----------//
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.active-a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Remove the "active" class from all links
        navLinks.forEach(function (otherLink) {
          otherLink.classList.remove('active');
        });
  
        // Add the "active" class to the clicked link
        link.classList.add('active');
      });
    });
  });
  

window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

const scripturl = 'https://script.google.com/macros/s/AKfycbzMCpyXISPW3pRqw3ViiORp7jsqyc24Z8AApj6kyiqGvDGFp1QYT5ZFGMxbf6yIgls/exec'

let form=document.querySelector('#formdata');
//   e is object 
form.addEventListener("submit",(e)=>{
    e.target.button.innerHTML="Submitting...";
    let data= new FormData(form);
    fetch(scripturl,{
        method:"POST",
        body:data
    }).then((res)=>res.text())
    .then((finalRes)=>{
        e.target.button.innerHTML="Send Your Massage"
        console.log(finalRes)
        document.getElementById("res").innerHTML=finalRes;
        form.reset();
        setTimeout(()=>{
            document.getElementById("res").innerHTML='';

        },5000)

    })



    // used for control load page
    e.preventDefault();                      
})
			

