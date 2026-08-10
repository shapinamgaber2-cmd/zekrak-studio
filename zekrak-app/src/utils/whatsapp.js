export function openWhatsAppOrderMulti({ name, phone, email, city, address, canPost, items = [] }) {
  const phoneNumber = '201200990798';

  let productsText = '';
  items.forEach((item) => {
    productsText += `\n• ${item.name}\n  Package: ${item.packageLabel}\n  Price: ${item.price}\n`;
  });

  let message = `Hello! I'd like to start an order with Zekrak

Customer Information
--------------------
Name: ${name}
Phone: ${phone}`;

  if (email) {
    message += `\nEmail: ${email}`;
  }

  if (city) {
    message += `\nCity / Governorate: ${city}`;
  }

  message += `\nAddress Details: ${address}
Can post on page: ${canPost || 'Yes'}

Products
---------${productsText}
Total Products: ${items.length}`;

  const encodedMessage = encodeURIComponent(message);
  
  // رابط الواتساب المباشر
  window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
}