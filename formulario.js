(function(d){

  var btnPublicar  = d.querySelector('#mostrar-form'),
      form = d.querySelector('#formulario'),
      title = d.querySelector('#titulo'),
      url = d.querySelector('#url'),
      autor = d.querySelector('#autor');
      http = form.children[2],
      content = d.querySelector('#contenido');
      post  = d.querySelector('.item'),
      widthWindow = window.matchMedia("(max-width: 434px)");

  //localStorage

  if(localStorage.getItem('autosave')){
     autor.value = sessionStorage.getItem('autor');
     title.value = sessionStorage.getItem('title');
     url.value = sessionStorage.getItem('url');
  }else{
    setInterval(function(){
      localStorage.setItem('autosave','1');
      sessionStorage.setItem('autor',autor.value);
      sessionStorage.setItem('title',title.value);
      sessionStorage.setItem('url',url.value);
    },1000)
     
  } 


  
  var showFormPublicar = function(e){
  	  e.preventDefault();
      form.classList.toggle('show');
      content.classList.add('hide');
  };


  var sendData = function(e){
     e.preventDefault();
     var autor1 = autor.value;
     var title1 = title.value;
     var url1 = url.value;

     var newPost = post.cloneNode(true);  //cloneNode clona un elemento del dom
     newPost.childNodes[3].textContent = title1; //childNodes me lista los hijos de un elemento padre y con textContent me muestra el contenido
     //newPost.childNodes[4].textContent = url1;
     newPost.childNodes[5].children[0].textContent = autor1;
     newPost.childNodes[5].children[0].setAttribute('href',url1);
     newPost.classList.add('hide');
     content.insertBefore(newPost,post);  //insertBefore inserta un elemento al antes del elemento que le indiquemos
     newPost.classList.remove('hide');
     content.classList.remove('hide');
     limpiar();
  };


  var limpiar = function(){
    title.value = " ";
    url.value = " ";
    autor.value = " ";
  };

   var showHttp = function(){
   	 http.value = "http://"; 
   };




//Eventos
 btnPublicar.addEventListener("click", showFormPublicar);
 form.addEventListener("submit",  sendData);
 http.addEventListener("focus",  showHttp);
 //widthWindow.addListener(resizeDetect);




})(document);


//APUNTES---------------------------------------------------------------------------------


 //Medias queries con javascript
  /*var resizeDetect = function(){
        if(widthWindow.matches){
           
          //document.body.style.backgroundColor = "red";
        }else{
          //document.body.style.backgroundColor = "white";
        }   
       
  }*/



/*
  $('#publicar_nav').parents('nav').children().children()  => Dame todos los padres nav y luego sus hijos del mismo
 
*/



/* sessionStorage y localStorage diferentes maneras de guardar

   sesionStorage.setItem('nombre','jorge');
   
   sessionStorage['apellido'] = "reyes"

   sesionStorage.edad = 35

   session.removeItem('nombre')  => Elimina un item

   sessionStorage.key(0)  => ingreso al valor q tengo en esa posicion

   session.getItem() => Otro metodo  

*/























