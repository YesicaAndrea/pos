/*=============================================
MODIFCAR LA CANTIDAD
=============================================*/

$(".fomrmularioVenta").on("change", "input.nuevaCantidadProducto", function(){

	var precio = $(this).parent().parent().children(".ingresoPrecio").children().children(".nuevoPrecioProducto");

	var precioFinal = $(this).val() * precio.attr("precioReal");

	precio.val(precioFinal);

	if (Number($(this).val()) > Number($(this).attr("stock"))) {

		$(this).val(1);

		swal({

			title: "La cantidad supera el Stock",
			text: "¡Sólo hay "+$(this).attr("stock")+" unidades!",
			type: "error",
			confirmButtonText: "¡Cerrar!"
		});

	}
	
})
