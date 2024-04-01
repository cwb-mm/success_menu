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


 document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById("videoElement");
    const canvasElement = document.getElementById("canvasElement");
    const scanButton = document.getElementById("scanButton");
  
    // Check if getUserMedia is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Request access to the camera
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          videoElement.srcObject = stream;
          videoElement.play();
        })
        .catch(function(error) {
          console.error('Error accessing camera:', error);
        });
    } else {
      console.error('getUserMedia not supported in this browser');
    }
  
    // Function to capture video frame and decode QR code
    function scanQRCode() {
      const context = canvasElement.getContext('2d');
      context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
      const imageData = context.getImageData(0, 0, canvasElement.width, canvasElement.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });
      if (code) {
        console.log('QR Code detected:', code.data);
        alert('QR Code detected: ' + code.data); // You can perform any action here with the scanned QR code
      } else {
        console.log('No QR Code detected');
      }
      // Request the next animation frame to continue scanning
      requestAnimationFrame(scanQRCode);
    }
  
    // Add click event listener to the scan button
    scanButton.addEventListener('click', function() {
      // Start scanning QR code
      scanQRCode();
    });
  });
  
