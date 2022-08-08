var saldoActual = 0;
var fecha = new Date();
var billete = 0;

function consultaSaldo() {
  var saldoDisponible = saldoActual;
  var saldo = document.getElementById("saldoactual");
  var fechaActual = document.getElementById('fechaactual');
  var retiroDe = document.getElementById('retiroDe');
  var horaActual = document.getElementById('hora');
  var tipo = document.getElementById('tipo');
  var saldoActual1 = document.getElementById('saldoactual1');
  var dia = fecha.getDate();
  var mes = fecha.getMonth();
  var anio = fecha.getFullYear();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var seconds = fecha.getSeconds();
  if (saldoDisponible === 0) {
    swal({
      title: "Banco Afonca.S.A",
      icon: "error",
      text: "No cuenta con suficiente saldo, deposite!",
      button: "Aceptar",

    });

    fechaActual.innerHTML = `Fecha: ${dia}/${mes}/${anio}`;
    horaActual.innerHTML = `Hora:  ${horas}:${minutos}:${seconds}`;
    tipo.innerHTML = 'Tipo: Consulta';
    saldoactual1.innerHTML = `Saldo:$${saldoDisponible}.00`
    retiroDe.innerHTML = ` `;
  }
  if (saldoDisponible < saldoActual) {
    swal({
      title: "Banco Afonca.S.A",
      icon: "warning",
      text: "Actualmente no tiene suficiente fondo!",
      button: "Aceptar",
    });
    fechaActual.innerHTML = `Fecha: ${dia}/${mes}/${anio}`;
    horaActual.innerHTML = `Hora:  ${horas}:${minutos}:${seconds}`;
    tipo.innerHTML = 'Tipo: Consulta';
    saldoactual1.innerHTML = `Saldo:$${saldoDisponible}.00`;
  } else {
    saldo.innerHTML = `Su saldo  es de:$${saldoActual}.00`;
    fechaActual.innerHTML = `Fecha: ${dia}/${mes}/${anio}`;
    horaActual.innerHTML = `Hora:  ${horas}:${minutos}:${seconds}`;
    tipo.innerHTML = 'Tipo: Consulta';
    saldoactual1.innerHTML = `Saldo:$${saldoActual}.00`
  }
}

function depositarSaldo() {
  var saldoDepositar = saldoActual;
  var depositar = parseFloat(document.getElementById("montoDepositar").value);
  var saldo = document.getElementById("saldoactual");
  var fechaActual = document.getElementById('fechaactual');
  var horaActual = document.getElementById('hora');
  var tipo = document.getElementById('tipo');
  var saldoActual1 = document.getElementById('saldoactual1');
  var dia = fecha.getDate();
  var mes = fecha.getMonth();
  var anio = fecha.getFullYear();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var seconds = fecha.getSeconds();
  if (depositar > 0.0 && depositar != 0) {
    saldoDepositar = saldoDepositar + depositar;
    saldoActual = saldoDepositar;
    limpiar();
    saldo.innerHTML = `Saldo actual:$${saldoActual}.00`;

    swal({
      title: "Banco Afonca.S.A",
      text: "Se ha realizado el deposito correctamente!",
      icon: "success",
      button: "Aceptar",

    });
    fechaActual.innerHTML = `Fecha: ${dia}/${mes}/${anio}`;
    horaActual.innerHTML = `Hora:  ${horas}:${minutos}:${seconds}`;
    tipo.innerHTML = 'Tipo: Deposito';
    saldoactual1.innerHTML = `Saldo:$${saldoActual}.00`;
    document.getElementById("montoDepositar").focus();
  } else {
    swal('Banco Afonca S.A', 'Para depositar debe ingresar el valor al campo que sea mayor a 0.00', 'warning');
    limpiar();
    document.getElementById("montoDepositar").focus();
  }
}



function retirarSaldo() {
  var saldoRetirar = saldoActual;
  var montoRetirar = 0;
  var saldo = document.getElementById("saldoactual");
  var fechaActual = document.getElementById('fechaactual');
  var horaActual = document.getElementById('hora');
  var tipo = document.getElementById('tipo');
  var saldoActual1 = document.getElementById('saldoactual1');
  var retiroDe = document.getElementById('retiroDe');
  var dia = fecha.getDate();
  var mes = fecha.getMonth();
  var anio = fecha.getFullYear();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var seconds = fecha.getSeconds();


  if (document.getElementById('valorUno').checked) {
    var b1 = parseFloat(document.getElementById('valorUno').value);
    billete = b1;
  }

  if (document.getElementById('valorDos').checked) {
    var b2 = parseFloat(document.getElementById('valorDos').value);
    billete = b2;
  }

  if (document.getElementById('valorTres').checked) {
    var b3 = parseFloat(document.getElementById('valorTres').value);
    billete = b3;
  }

  if (document.getElementById('valorCuatro').checked) {
    var b4 = parseFloat(document.getElementById('valorCuatro').value);
    billete = b4;
  }

  if (document.getElementById('valorQuinto').checked) {
    var b5 = parseFloat(document.getElementById('valorQuinto').value);
    billete = b5;
  }

  if (document.getElementById('valorSexto').checked) {
    var b6 = parseFloat(document.getElementById('valorSexto').value);
    billete = b6;
  }

  montoRetirar = billete;

  if (montoRetirar == 0) {
    swal({
      title: "Banco Afonca.S.A",
      icon: "warning",
      text: "Para poder ejecutar esta opcion debe seleccionar el monto y haber depositado",
      button: "Aceptar",
    });

    limpiar();
  }

  if (montoRetirar > saldoRetirar) {

    swal({
      title: "Banco Afonca.S.A",
      icon: "error",
      text: "El retiro solicitado es mayor al saldo disponible, seleccione una casilla válida o deposite más dinero!",
      button: "Aceptar",
    });

    limpiar();
  }

  if (montoRetirar <= saldoRetirar && montoRetirar > 0 && montoRetirar != 0) {
    saldoRetirar = saldoRetirar - montoRetirar;
    saldoActual = saldoRetirar;

    saldo.innerHTML = `Saldo actual:$${saldoActual}.00`;
    swal({
      title: "Banco Afonca.S.A",
      icon: "success",
      text: "Se ha realizado el retiro correctamente!",
      button: "Aceptar",
    });

    fechaActual.innerHTML = `Fecha: ${dia}/${mes}/${anio}`;
    horaActual.innerHTML = `Hora:  ${horas}:${minutos}:${seconds}`;
    tipo.innerHTML = 'Tipo: Retiro';
    saldoactual1.innerHTML = `Saldo despues del retiro:$${saldoActual}.00`;



    if (montoRetirar == 10000) {
      mostrarBilleter('billete1');
    } else if (montoRetirar == 20000) {
      mostrarBilleter('billete2');
    } else if (montoRetirar == 30000) {
      mostrarBilleter('billete3');
    } else if (montoRetirar == 40000) {
      mostrarBilleter('billete4');
    } else if (montoRetirar == 50000) {
      mostrarBilleter('billete5');
    } else if (montoRetirar == 100000) {
      mostrarBilleter('billete6');
    }
    limpiar();
  } else {
    limpiar();
  }
}

function limpiar() {
  document.getElementById("montoDepositar").value = "";
}


function mostrarBilleter(tipoBillete) {
  var imagen1 = document.getElementById('imagen1');
  var imagen2 = document.getElementById('imagen2');


  switch (tipoBillete) {
    case 'billete1':
      imagen1.setAttribute("src", "img/b1.jpg");
      imagen2.setAttribute("src", "");
      break;
    case 'billete2':
      imagen1.setAttribute("src", "img/b2.jpg");
      imagen2.setAttribute("src", "");
      break;
    case 'billete3':
      imagen1.setAttribute("src", "img/b1.jpg");
      imagen2.setAttribute("src", "img/b2.jpg");
      break;
    case 'billete4':
      imagen1.setAttribute("src", "img/b2.jpg");
      imagen2.setAttribute("src", "img/b2.jpg");
      break;
    case 'billete5':
      imagen1.setAttribute("src", "img/b3.jpg");
      imagen2.setAttribute("src", "");
      break;
    case 'billete6':
      imagen1.setAttribute("src", "img/b4.jpg");
      imagen2.setAttribute("src", "");
      break;

    default:
      // statements_def
      break;
  }


}

function direccionar() {
  window.location.assign('index.html');
}