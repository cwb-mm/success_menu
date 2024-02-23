// $(".slide-box-switch").click(function () {
//     $(this).toggleClass("active");
//     let status = $(this).hasClass("active");
//     if(status){
//         $(".slide-box-container").animate({left:0},500,function () {
//             $(".slide-box-switch i").removeClass("close").addClass("open");
//         });
//     }else{
//         $(".slide-box-container").animate({left:"-326px"},500,function () {
//             $(".slide-box-switch i").removeClass("open").addClass("close");
//         });
//     }
// });


const address = document.getElementById('address');

address.addEventListener('mouseover', () => {
address.style.transform = 'scale(1)';
});

address.addEventListener('mouseout', () => {
address.style.transform = 'scale(1)';
});

 // JavaScript code to calculate total price and update display
 const menuItems = document.querySelectorAll('#menuItems input[type="checkbox"]');
 const totalPriceDisplay = document.getElementById('totalPrice');

 // Add event listener to each checkbox
 menuItems.forEach(item => {
     item.addEventListener('change', calculateTotalPrice);
 });

 // Function to calculate total price
 function calculateTotalPrice() {
     let totalPrice = 0;
     menuItems.forEach(item => {
         if (item.checked) {
             // Extract price from the DOM
             const price = parseFloat(item.dataset.price.replace(',', ''));
             totalPrice += price;
         }
     });
     // Update total price display
     totalPriceDisplay.textContent = totalPrice.toLocaleString() + ' MMK';
 }

 // Function to handle order submission
 function submitOrder() {
     // Implement order submission logic here
     console.log('Order submitted!');
 }