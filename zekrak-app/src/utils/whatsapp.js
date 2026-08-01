export function openWhatsAppOrderMulti({ name, phone, email, address, canPost, items }) {
  const phoneNumber = '201200990798'; // استبدلي الرقم برقم الواتساب الخاص بكِ

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

  message += `\nAddress: ${address}
Can post on page: ${canPost || 'Yes'}

Products
---------${productsText}
Total Products: ${items.length}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}