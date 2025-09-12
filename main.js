
const sidemenu = document.getElementById('sidemenu');
const closeBtn = document.getElementById('closeBtn');

function showmenu() {
  sidemenu.style.display = sidemenu.style.display === 'block' ? 'none' : 'block' ;
}
closeBtn.addEventListener('click', () => {
    sidemenu.style.display = 'none'
});


const sideMenu = document.getElementById('sidemenu');
const menuLinks = sideMenu.querySelectorAll('.menu-list a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidemenu.style.display = 'none'
  });
});


function go(e) {
  e.preventDefault();

  let mail = {
    name: document.getElementById('firstname').value + ' ' + document.getElementById('secondname').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value + '...you can call us on' + ' ' + document.getElementById('number').value,
    email: document.getElementById('email').value,
  };

  emailjs.send("service_puzkmot", "template_59g51oq", mail)
    .then(() => {
      alert('Your mail has been sent!!');
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(field => {
        field.value = ''
     })
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Try again.");
    });
    alert(`hello ${mail.name} your mail will be sent soon`)
}

function hide(param) {
const project = document.getElementById('projects');

    project.style.height = project.style.height === '1000px' ? '405px' : '1000px'
    console.log(17282)
}