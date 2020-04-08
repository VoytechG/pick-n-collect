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
    this.items = [];
    this.totalBillingAmount = null;
  }

  addOrderItem(orderItem) {
    if (!(orderItem instanceof OrderItem)) {
      throw new TypeError("orderItem must be an instance of OrderItem");
    }
    this.items.push(orderItem);
  }

  getContentOfOrder() {
    const orderContents = {
      customerId: this.customerId,
      notes: this.notes,
      number: this.number,
      dateOrderPlaced: this.dateOrderPlaced,
      status: this.status,
      totalBillingAmount: this.totalBillingAmount,
      items: this.items,
    };

    return orderContents;
  }

  getContentOfOrderItemsList() {
    return this.items.map((orderItem) => orderItem.getContents());
  }
}

export default Order;
