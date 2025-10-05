
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
  const loadingText = document.getElementById('loadingText');
const loading = document.getElementById('loading');
const success = document.getElementById('success');
const successText = document.getElementById('successText');
const pop = document.getElementById('pop');
const fail = document.getElementById('fail');


    pop.style.display = 'block';
    loading.style.display = 'block';
    success.style.display = 'none';
    fail.style.display = 'none';
    loadingText.textContent = 'sending...'
    successText.textContent = 'Hold on tight your message will be sent soon'

  let mail = {
    name: document.getElementById('firstname').value + ' ' + document.getElementById('secondname').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value + '...you can call us on' + ' ' + document.getElementById('number').value,
    email: document.getElementById('email').value,
  };

  emailjs.send("service_puzkmot", "template_59g51oq", mail)
    .then(() => {
   success.style.display = 'block';
  loading.style.display = 'none';
  fail.style.display = 'none'
  successText.textContent = 'Thank you ,Sent successfully!!';
  loadingText.textContent = 'Your message has been sent successful to Abdulkareem Ayomide!!!'
  setTimeout(()=> {
    pop.style.display = 'none';
  },3000)
const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(field => {
        field.value = ''
     })
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      fail.style.display = 'block';
      loading.style.display = 'none';
      success.style.display = 'none';
      loadingText.textContent = 'Unable to send Message to Abdulkareem Ayomide 😔';
      successText.textContent = 'Oops error occured while sending your mail please try again!!';
      setTimeout(()=>{
        pop.style.display = 'none';
      },3000)
      
    });
}

function hide(param) {
const project = document.getElementById('projects');

    project.style.height = project.style.height === '1000px' ? '405px' : '1000px'
    console.log(17282)
}