export const OrderStatus = {
  AWAITING_REALIIATION: "Awaiting realization",
  BEING_REALIZED: "Being realized",
  READY_FOR_COLLECTION: "Ready for collection",
};

class Order {
  constructor(orderId, customerId, dateOrderPlaced) {
    this.orderId = orderId;
    this.customerId = customerId;
    this.dateOrderPlaced = dateOrderPlaced;
    this.status = this.orderProductList = [];
    this.billingTotalAmount = null;
  }

  addOrderProduct(orderProduct) {
    this.orderProductList.push(orderProduct);
  }
}

export default Order;
