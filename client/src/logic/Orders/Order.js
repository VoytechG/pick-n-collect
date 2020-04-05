import OrderItem from "./OrderItem";

export const OrderStatus = {
  DRAFT: "DRAFT",
  AWAITING_REALIIATION: "AWAITING_REALIIATION",
  BEING_REALIZED: "BEING_REALIZED",
  READY_FOR_COLLECTION: "READY_FOR_COLLECTION",
  COLLECTED: "COLLECTED",
};

export const OrderStatusMessagesInPolish = {
  DRAFT: "Wersja robocza. Nie zlecono zamówienia sklepowi.",
  AWAITING_REALIIATION: "Oczekuje na realizacje przez pracowników EPI",
  BEING_REALIZED: "Produkty są właśnie pakowane",
  READY_FOR_COLLECTION: "Gotowe do odbioru",
  COLLECTED: "Zapłacono i odebrano",
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
    this.billingTotalAmount = null;
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
      billingTotalAmont: this.billingTotalAmount,
      numberOfItems: this.orderItemsList.length,
    };

    return orderContents;
  }

  getContentOfOrderItemsList() {
    return this.orderItemsList.map((orderItem) => orderItem.getContents());
  }
}

export default Order;
