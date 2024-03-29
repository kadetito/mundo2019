
    //SUGERENCIA
    $(document).ready(function() {    
        //Al escribr dentro del input con id="service"
        $('#servicioSugerencia').keyup(function(){
            //Obtenemos el value del input
            var servicioSugerencia = $(this).val();       
            if (servicioSugerencia.length> 1) { // dos letras como mínimo
                
                var dataString = 'servicioSugerencia='+servicioSugerencia;
    
                //Le pasamos el valor del input al ajax
                $.ajax({
                type: "POST",
                url: "https://elmundo.webexpo.es/autocompletarSugerencia.php",
                data: dataString,
                success: function(data) {
                    if (data) {
                        //Escribimos las sugerencias que nos manda la consulta
                        $('#Sugerencia').slideDown(250).html(data);
                        //Al hacer click en algua de las sugerencias
                        $('.suggest-element').on('click', function(){
                            //Obtenemos la id unica de la sugerencia pulsada
                            var id = $(this).attr('id');
                            
                            var previo = $('#'+id).attr('previo');
                            if (previo == ' ') previo = '';
                            
                            var dato   = $('#'+id).attr('data');
                            //Editamos el valor del input con data de la sugerencia pulsada
                            $('#servicioSugerencia').val(previo + dato + ' ');
                            $('#servicioSugerencia').focus();
                            sessionStorage.setItem('Explicacion', previo + dato );
                            
                            //Hacemos desaparecer el resto de sugerencias
                            // >>>
                            //alert ($('#'+id).attr('group')); // recuperamos el grupo para preconfigurar las categorias.
                            
                            // pel grupo, agafem la categoria
                            $('#Sugerencia').slideUp(250); 
                        });              
                      }
                   }
                 });
                
            } else {
               $('#Sugerencia').slideUp(250); 
            }
        });              
    });   
    
            //<![CDATA[
    $(function(){
    $('#my-modal').on('hidden.bs.modal', function () {
      window.location.reload();
    });
    });//]]> 
    
        
    // Al iniciar, muestra el boton para hecer fotos o la foto realizada.
    // si imagen existe, muestra la imagen. Sino el boton para hacer la foto.	
        
    var imagen = sessionStorage.getItem('imgData');	
    if (!imagen || imagen === null || imagen === 'null') { 
        document.getElementById("posicioBotoImatge").innerHTML ='<a href="camarafr.html"><img src="img/backphoto.jpg" alt="subir foto" /></a>';	
    } else {
        $("#tableBanner").attr('src', imagen);
        document.getElementById("posicioBotoImatge").innerHTML = '<center><div class="imgtpunt"><a href="#" class="pop"><img src="'+imagen+'" id="tableBanner" style="width:100%"/></a></div></center><center><a href="camarafr.html"  class="btn btn-default massfh groddo  biff"><i class="fa fa-camera fa-2x" aria-hidden="true"></i><br />Cambiar</a><div class="btn btn-default massfh groddo  biff" id="elimag" onclick="esborrarFoto()"><i class="fa fa-trash fa-2x" aria-hidden="true" style="margin-top:34px"></i><br />Borrar</div></center>';	
    }	
        
    //borrar imatge
    function esborrarFoto() {
        if (!imagen || imagen === null || imagen === 'null') {} else {
            sessionStorage.removeItem("imgData");
            location.reload();
        }
    }
    
      
    $(document).ready(function(){
        
        
    // --------------------------------------------------------------------------
    // Inicialiamos la pantalla
    // Si no tiene registrado usuario y contraseña válido, retorna a index.html
    // recolecta los valores que inserto el usuario
        var datosUsuario    = sessionStorage.getItem('datosUsuario');
        var datosPassword   = sessionStorage.getItem('datosPassword');
        var parametreBase   = sessionStorage.getItem('CategoriaBase'); // Recuperamos en qué categoría estamos	
        var parametreNivel1	= sessionStorage.getItem('CategoriaNivel1');
        var parametreNivel2	= sessionStorage.getItem('CategoriaNivel2');
        var Explicacion   	= sessionStorage.getItem('Explicacion'); 
    
          archivoValidacion = "https://elmundo.webexpo.es/procesos.php?jsoncallback=?";
        $.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword, paso:1})
            .done(function(respuestaServer) {
                if(respuestaServer.validacion != "ok") {
                    window.location.replace('index.html');
                }
                else {
                    // elegimos una imagen de fondo al azar
                    var randomID = new Date().getTime();
    
                // en segunda.php, se aplica sobre body, pero hace dos refrescos, uno ajustando ancho y otro ajustando alto. A mejorar		
                    $('body').css({
                        "background-image": "url('https://elmundo.webexpo.es/" + respuestaServer.ImagenDeFondo + "?r=" + randomID+ "')",
                        "background-repeat": "repeat",
                        "background-position": "top center"
                        });
    
            // elegimos un anuncio de pie al azar	
                    $("#bannerinferior").html('<img style="width:100%" src="' + respuestaServer.BannerPublicitario + '">');
    
            // Carrega inicial categories
                    var optionscategoria = '<option value="0">Selecciona de que se trata</option>';
                    $.each(respuestaServer.Botones, function(id, datos) {
                        optionscategoria = optionscategoria + '<option value="'+ id +'">' + datos.Title +'</option>';
                    });
                    $("#category").html(optionscategoria);
    
            // si ja s'havien registrat previament, carreguem valors previs		
                    if (Explicacion) 	$("#servicioSugerencia").val(Explicacion);
    
                    if (parametreBase)	{
                        $("#category option[value="+parametreBase+"]").prop("selected", "selected");
                        $('#category').trigger('change');
                        if (parametreNivel1) {
                            setTimeout (function() {
                                $("#subcategory option[value="+parametreNivel1+"]").prop("selected", "selected");
                                $('#subcategory').trigger('change');
    
                                if (parametreNivel2) {
                                    setTimeout (function() {
                                        $("#tipoArticulo option[value="+parametreNivel2+"]").prop("selected", "selected");
                                        $('#tipoArticulo').trigger('change');
                                    },300); // delay 300 ms
                                }
                            } ,300); //delay 300 ms
                        }
                    }
                }
            });	
         
    // ----------------------------------------------------------------------
    //COMBOS DEPENENTS
    //en cambiar la id_category es tria la subcategory
    
       $("#category").change(function () {
               $("#category option:selected").each(function () {
                id_category = $(this).val();
    
                // ignoramos primer elemento
                if (id_category != 0) {
                    archivoValidacion = "https://elmundo.webexpo.es/procesos.php?jsoncallback=?";
                    $.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword, Nivel1:id_category})
    
                    .done(function(respuestaServer) {
                        if(respuestaServer.validacion != "ok") {
                            window.location.replace('index.html');
                        }
                        else {
    
                            // Carreguem subcategories
                            var optionssubcategoria = '<option value="0">Selecciona de que se trata</option>';
                            $.each(respuestaServer.Botones, function(id, datos) {
                                optionssubcategoria = optionssubcategoria + '<option value="'+ id +'">' + datos.Title +'</option>';
                            });
    
                            sessionStorage.setItem('CategoriaBase', id_category);
                            sessionStorage.setItem('CategoriaNivel1', null);
                            sessionStorage.setItem('CategoriaNivel2', null);
                            $("#subcategory").html(optionssubcategoria);
                            $("#subcategoria").show('fast');
                            $("#botonsiguiente").hide();
                            $("#TipoProducto").hide('fast');
                        }
                    });
                 } else {
                    $("#botonsiguiente").hide();
                    $("#TipoProducto").hide('fast');
                    $("#subcategoria").hide('fast');
                 }
            });
        });
        
    // SUB CATEGORIA
    
       $("#subcategory").change(function () {
               $("#subcategory option:selected").each(function () {
                id_subcategory = $(this).val();
                
                // ignoramos primer elemento
                if (id_subcategory != 0) {
                    archivoValidacion = "https://elmundo.webexpo.es/procesos.php?jsoncallback=?";
                    $.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword, Nivel2:id_subcategory})
    
                    .done(function(respuestaServer) {
                        if(respuestaServer.validacion != "ok") {
                            window.location.replace('index.html');
                        }
                        else {
    
                            // segun la subcategoria, es posible elegir más niveles o no. comprobamos cuantos registros ha devuelto antes de iniciar.
    
                            if ( respuestaServer.Botones ) {
                                // Carreguem subcategories
                                var optionsestado = '<option value="0">Nuevo o usado</option>';
                                $.each(respuestaServer.Botones, function(id, datos) {
                                    optionsestado = optionsestado + '<option value="'+ id +'">' + datos.Title +'</option>';
                                });
    
                                sessionStorage.setItem('CategoriaNivel1', id_subcategory);
                                sessionStorage.setItem('CategoriaNivel2', null);
                                $("#tipoArticulo").html(optionsestado);
                                $("#TipoProducto").show('fast');
                                $("#botonsiguiente").hide();
    
                            } else {
                                sessionStorage.setItem('CategoriaNivel1', id_subcategory);
                                sessionStorage.setItem('CategoriaNivel2', null);
                                $("#botonsiguiente").show();
                            // mostramos el boton de aceptar.
                            }
    
                        }
                    })
                } else {
                    $("#botonsiguiente").hide();
                    $("#TipoProducto").hide('fast');
                }
            });
        });
    
    
    // ESTADO PRODUCTO
    // Solo que muevan o elijan un valor, ya aparece el boton de confirmar
        $("#tipoArticulo").change(function () {
               
              $("#tipoArticulo option:selected").each(function () {
                id_tipoArticulo = $(this).val();
                
                // ignoramos primer elemento
                if (id_tipoArticulo != 0) {
                    sessionStorage.setItem('CategoriaNivel2', id_tipoArticulo);
                    $("#botonsiguiente").show();
                } else {
                    $("#botonsiguiente").hide();
                }
            });
        });
        
        // Guardamos texto de explicación	
        $("#servicioSugerencia").change(function() {
            var valor = $("#servicioSugerencia").val();
            sessionStorage.setItem('Explicacion', valor);
        });		
        
    // PULSAMOS BOTON SIGUIENTE
        $("#botonsiguiente").click(function () {
            // NADA, TODO ESTA YA GUARDADO EN SESSIONSTORAGE
        });	
        
         definiciones_comunes();
    
    // Definim la acció del Submit	
    
        $("#paso4").submit(function () {
            // controlamos que solo haga submit si el boton ya es visible
            if (!($("#botonsiguiente").is(":visible"))) return false;
            
            });	
    });
        
    
    

                    
    
 
    
