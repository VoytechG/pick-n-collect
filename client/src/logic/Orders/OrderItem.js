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
