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


 function startScanner() {
        // Change the display style to block to show the overlay
        document.getElementById('ovl').style.display = 'block';

        // Start QR code scanner
        Quagga.init({
            inputStream: {
                type: 'LiveStream',
                constraints: {
                    width: 640,
                    height: 480,
                    facingMode: 'environment' // or user
                }
            },
            decoder: {
                readers: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader', 'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader']
            }
        }, function(err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Initialization finished. Ready to start');
            Quagga.start();
        });

        Quagga.onDetected(function(result) {
            console.log('Result', result);
            alert('Detected code: ' + result.codeResult.code);
            Quagga.stop();
        });
    }