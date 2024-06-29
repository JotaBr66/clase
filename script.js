document.addEventListener('DOMContentLoaded', () => {
  const invoiceItems = document.getElementById('invoice-items');
  const totalField = document.getElementById('total');
  const addItemButton = document.getElementById('add-item');

  let total = 0;
  let itemId = 1;

  const addItem = (id, name, price, quantity) => {
      const subtotal = price * quantity;
      total += subtotal;

      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${id}</td>
          <td>${name}</td>
          <td>${price.toFixed(2)}</td>
          <td>${quantity}</td>
          <td>${subtotal.toFixed(2)}</td>
      `;
      invoiceItems.appendChild(row);
      totalField.value = total.toFixed(2);
  };

  addItemButton.addEventListener('click', () => {
      const name = prompt('Nombre del Producto:');
      const price = parseFloat(prompt('Precio:'));
      const quantity = parseInt(prompt('Cantidad:'), 10);
      addItem(itemId++, name, price, quantity);
  });
});
