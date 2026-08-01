export function openWhatsAppOrderMulti({ name, phone, email, address, canPost, items }) {
  // رقم الواتساب الخاص بـ Zekrak
  const phoneNumber = '201200990798'; // استبدلي الرقم برقم الواتساب الخاص بكِ

  let itemsText = '';
  items.forEach((item, index) => {
    itemsText += `\n   ${index + 1}. *${item.name}* (${item.packageLabel}) - ${item.price}`;
  });

  // صياغة النص النهائي للرسالة
  let message = `Hi Zekrak! I'd like to place an order:

👤 *Name:* ${name}
📞 *Phone:* ${phone}`;

  if (email) {
    message += `\n📧 *Email:* ${email}`;
  }

  message += `\n📍 *Address:* ${address}

📦 *Selected Products:*${itemsText}

📸 *Can post order on page?:* ${canPost || 'Yes'}`;

  // تحويل النص لرابط واتساب
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}