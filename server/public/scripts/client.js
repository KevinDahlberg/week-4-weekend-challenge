$(function(){
  init();

});// end document ready

function init(){
  eventListeners(true);
  getRental();
}

//Event Listeners
function eventListeners (value){
  if (true){
    $("#nav").on('click', '#rentalNav', showRentals);
    $("#nav").on('click', '#saleNav', showSales);
    $('#nav').on('click', "#showAll", showAll);
    $('#formItem').on('submit', addItem);
  } else {
    $("#nav").off('click', '#rentalNav', showRentals);
    $("#nav").off('click', '#saleNav', showSales);
    $('#nav').off('click', '#addItem', addItem);
  }
}

//append loop
function appendRental (array){
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    var property = array[i];
    propertyDefine(property);
  }
}

//append rental to DOM
function appendRentalToDom (rental){
  $('#rentals').append('<div class="col-md-3 rentalContainer"><p>Rental Container</p></div>');
  var $el = $("#rentals").children().last();
  $el.append('<p>Price: '+rental.rent+'</p');
  $el.append('<p>Size: '+rental.sqft+'</p');
  $el.append('<p>Location: '+rental.city+'</p');
}

//append sale to DOM
function appendSaleToDom (sale){
  $('#sales').append('<div class="col-md-3 saleContainer"><p>Sale Container</p></div>');
  var $el = $("#sales").children().last();
  $el.append('<p>Price: '+sale.cost+'</p');
  $el.append('<p>Size: '+sale.sqft+'</p');
  $el.append('<p>Location: '+sale.city+'</p');
}

//show rentals
function showRentals (){
  console.log('in show rental path');
  $('.saleContainer').hide();
  $('.rentalContainer').show();
  //code to show rentals
}

//show sales
function showSales (){
  console.log('in show sales path');
  $('.saleContainer').show();
  $('.rentalContainer').hide();
  //code to show just rentals
}

//shows everybody
function showAll () {
  $('.saleContainer').show();
  $('.rentalContainer').show();
}

//toggle modal
function toggleModal() {
   $('#modal').modal('toggle');
}

//clear form
function clearForm(){
  $('#optionSelect').val('default').change();
  $('#priceInput').val('');
  $('#sizeInput').val('');
  $('#locationInput').val('');
}

//figures out whether a property is a rental or a sale
function propertyDefine(data){
  if (data.rent) {
    appendRentalToDom(data);
  } else if (data.cost){
    appendSaleToDom(data);
  } else {
    console.log("no data to show");
  }
}

//add item
function addItem(){
  event.preventDefault();
  if ($("#optionSelect").val()===$('#optionRent').val()){
    addRental();
    toggleModal();
    clearForm();
  } else if ($("#optionSelect").val()===$('#optionSale').val()){
    addSale();
    toggleModal();
    clearForm();
  } else {
    console.log('error adding item');
    alert("Please Select Type of Posting");
  }
}

//add rental unit
function addRental(){
  var rentalItem = {rent: $('#priceInput').val(), sqft: $('#sizeInput').val(), city: $('#locationInput').val()};
  postItem(rentalItem);
}

//add property for sale
function addSale () {
  var saleItem = {cost: $('#priceInput').val(), sqft: $('#sizeInput').val(), city: $('#locationInput').val()};
  postItem(saleItem);
}

//ajax calls
function getRental(){
  $.ajax({
    type: "GET",
    url: "/rental",
    success: function(response){
      appendRental(response);
      console.log(response);
    }
  });
}

function postItem(data){
  console.log("trying to post ", data);
  $.ajax({
    type: "POST",
    url: "/rental/newItem",
    data: data,
    success: function(response){
      getRental();
    }
  });
}
