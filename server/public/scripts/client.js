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

//Append to DOM functions
//append loop for getRental
function appendRental (array){
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    var property = array[i];
    propertyDefine(property);
  }
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

//append rental to DOM
function appendRentalToDom (rental){
  $('#rentals').append('<div class="col-sm-3 rentalContainer"><p>Property for Rent</p></div>');
  var $el = $("#rentals").children().last();
  $el.append('<p>Price: '+rental.rent+'</p');
  $el.append('<p>Size: '+rental.sqft+'</p');
  $el.append('<p>Location: '+rental.city+'</p');
}

//append sale to DOM
function appendSaleToDom (sale){
  $('#sales').append('<div class="col-sm-3 saleContainer"><p>Property for Sale</p></div>');
  var $el = $("#sales").children().last();
  $el.append('<p>Price: '+sale.cost+'</p');
  $el.append('<p>Size: '+sale.sqft+'</p');
  $el.append('<p>Location: '+sale.city+'</p');
}

//functions for adding an item to the DB
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

//functions that show and hide the different types of property
//show rentals
function showRentals (){
  console.log('in show rental path');
  $('.saleContainer').hide("slide", { direction: "right" }, 1000);
  $('.rentalContainer').hide().delay(500).show("slide", {direction: "left"}, 1000);
}

//show sales
function showSales (){
  console.log('in show sales path');
  $('.rentalContainer').hide("slide", { direction: "right" }, 1000);
  $('.saleContainer').hide().delay(500).show("slide", {direction: "left"}, 1000);
  //code to show just rentals
}

//shows everybody
function showAll () {
  $('.saleContainer').fadeOut("slow").show("drop");
  $('.rentalContainer').fadeOut("slow").show("drop");
}

//hides everybody
function hideAll(){
  $('.saleContainer').hide();
  $('.rentalContainer').hide();
}

//functions dealing with the modal
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


//ajax calls
function getRental(){
  $.ajax({
    type: "GET",
    url: "/rental",
    success: function(response){
      appendRental(response);
      console.log(response);
      hideAll();
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
