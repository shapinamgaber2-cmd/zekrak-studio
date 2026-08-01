// Replace with your real business WhatsApp number, in international format
// (country code, no +, no spaces, no leading zero), e.g. 201234567890.
export const WHATSAPP_NUMBER = '201200990798';

/**
 * Builds a WhatsApp deep link pre-filled with an order message for a product.
 * @param {{ name: string, price: string }} product
 * @returns {string} wa.me URL
 */
export function buildWhatsAppOrderLink(product) {
  const message = product
    ? `Hello I'd like to start an order with Zekrak.\n\nProduct: ${product.name}\nPrice: ${product.price}\n\nPlease provide the payment and delivery details.`
    : `Hello I'd like to start an order with Zekrak.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Opens a WhatsApp chat pre-filled for the given product in a new tab. */
export function openWhatsAppOrder(product) {
  window.open(buildWhatsAppOrderLink(product), '_blank', 'noopener,noreferrer');
}

/**
 * Builds the formatted WhatsApp message for a full, multi-product order.
 * @param {{
 *   name: string,
 *   phone: string,
 *   email?: string,
 *   address: string,
 *   items: Array<{ name: string, packageLabel: string, price: string }>
 * }} order
 * @returns {string} formatted message
 */
export function buildOrderMessage(order) {
  const lines = [
    "Hello I'd like to start an order with Zekrak.",
    '',
    '*Customer Information*',
    '--------------------',
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
  ];

  if (order.email) {
    lines.push(`Email: ${order.email}`);
  }

  lines.push(`Address: ${order.address}`, '', '*Products*', '---------');

  order.items.forEach((item) => {
    lines.push(`• ${item.name}`, `  Package: ${item.packageLabel}`, `  Price: ${item.price}`, '');
  });

  lines.push(`Total Products: ${order.items.length}`);

  return lines.join('\n');
}

/**
 * Builds a WhatsApp deep link pre-filled with a full, multi-product order message.
 * @param {{ name: string, phone: string, email?: string, address: string, items: Array }} order
 * @returns {string} wa.me URL
 */
export function buildWhatsAppOrderMultiLink(order) {
  const message = buildOrderMessage(order);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Opens a WhatsApp chat pre-filled with a full, multi-product order in a new tab. */
export function openWhatsAppOrderMulti(order) {
  window.open(buildWhatsAppOrderMultiLink(order), '_blank', 'noopener,noreferrer');
}