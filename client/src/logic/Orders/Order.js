import OrderItem from "./OrderItem";

export const OrderStatus = {
  EMPTY: "EMPTY",
  DRAFT: "DRAFT",
  AWAITING_REALIZATION: "AWAITING_REALIZATION",
  BEING_REALIZED: "BEING_REALIZED",
  READY_FOR_COLLECTION: "READY_FOR_COLLECTION",
  COLLECTED: "COLLECTED",
};

export const orderListHeader = {
  Polish: "Moje zakupy",
  German: "Meine Einkaufen",
  English: "My orders",
};

export const sumMessage = {
  Polish: "Suma",
  German: "Summe",
  English: "Sum",
};

export const orderTitle = {
  Polish: "Zakupy",
  German: "Bestellung",
  English: "Order",
};

export const OrderStatusMessages = {
  EMPTY: {
    Polish: "Koszyk pusta. Dodaj produkty.",
    German: "Leere Einkaufsliste. Produkte hinzufügen.",
    English: "Basket empty. Add products.",
  },
  DRAFT: {
    Polish: "Koszyk",
    German: "Entwurf",
    English: "Draft",
  },
  AWAITING_REALIZATION: {
    Polish: "Wysłano zamówienie",
    German: "Bestellung aufgegeben",
    English: "Order sent",
  },
  BEING_REALIZED: {
    Polish: "Produkty są właśnie pakowane",
    German: "Bestellung wird verpackt",
    English: "Products are being packed",
  },
  READY_FOR_COLLECTION: {
    Polish: "Gotowe do odbioru",
    German: "Bereit zur Abholung",
    English: "Ready for collection",
  },
  COLLECTED: {
    Polish: "Odebrano",
    German: "Bestellung abgeholt",
    English: "Collected",
  },
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
