export const orderItemTitlePlaceholder = {
  Polish: "Produkt (np. jabłka)",
  German: "Produkt (z.B. Äpfel)",
  English: "Product (e.g. apples)",
};

export const orderItemSubtitlePlaceholder = {
  Polish: "Opis (np. 3 sztuki, 20 dag)",
  German: "Beschreibung (z.B. 3 Stück)",
  English: "Description (e.g. 3 pieces, 200g)",
};

class OrderItem {
  constructor(orderItemId, orderId, productName, productDescription) {
    this.orderItemId = orderItemId;
    this.orderId = orderId;
    this.productName = productName;
    this.productDescription = productDescription;
  }

  getContents() {
    const contents = {
      orderId: this.orderId,
      productName: this.productName,
      productDescription: this.productDescription,
    };

    return contents;
  }
}

export default OrderItem;
