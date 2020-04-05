import OrderItem from "./OrderItem";

export const OrderStatus = {
  EMPTY: "EMPTY",
  DRAFT: "DRAFT",
  AWAITING_REALIIATION: "AWAITING_REALIIATION",
  BEING_REALIZED: "BEING_REALIZED",
  READY_FOR_COLLECTION: "READY_FOR_COLLECTION",
  COLLECTED: "COLLECTED",
};

export const OrderStatusMessagesInPolish = {
  EMPTY: "Lista pusta. Dodaj produkty.",
  DRAFT: "Złóż zamówienie",
  AWAITING_REALIIATION: "Wysłano zamówienie",
  BEING_REALIZED: "Produkty są właśnie pakowane",
  READY_FOR_COLLECTION: "Gotowe do odbioru",
  COLLECTED: "Odebrano",
};

class Order {
  constructor(orderId, customerId, notes, number, dateOrderPlaced) {
    this.orderId = orderId;
    this.customerId = customerId;
    this.notes = notes;
    this.number = number;
    this.dateOrderPlaced = dateOrderPlaced;
    this.status = OrderStatus.DRAFT;
    this.orderItemsList = [];
    this.totalBillingAmount = null;
  }

  addOrderItem(orderItem) {
    if (!(orderItem instanceof OrderItem)) {
      throw new TypeError("orderItem must be an instance of OrderItem");
    }
    this.orderItemsList.push(orderItem);
  }

  getContentOfOrder() {
    const orderContents = {
      dateOrderPlaced: this.dateOrderPlaced,
      notes: this.notes,
      number: this.number,
      status: this.status,
      billingTotalAmont: this.totalBillingAmount,
      numberOfItems: this.orderItemsList.length,
    };

    return orderContents;
  }

  getContentOfOrderItemsList() {
    return this.orderItemsList.map((orderItem) => orderItem.getContents());
  }
}

export default Order;
