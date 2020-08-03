import Order from "../../logic/Orders/Order";
import OrderItem from "../../logic/Orders/OrderItem";
import { OrderStatus } from "../../logic/Orders/Order";
import idGen from "../../utils/idGenerator";

const exampleCustomer = idGen();

const getExampleOrders = (exampleCustomer) => {
  const exampleOrdersList = [
    new Order(idGen(), exampleCustomer, "milk and bananas", 1, "23/04/2020"),
    new Order(idGen(), exampleCustomer, "weekly shopping", 2, "26/04/2020"),
    new Order(
      idGen(),
      exampleCustomer,
      "mineral water and cheese",
      3,
      "03/05/2020"
    ),
    new Order(idGen(), exampleCustomer, "", 4, "03/05/2020"),
  ];

  const orderStatuses = [
    OrderStatus.COLLECTED,
    OrderStatus.COLLECTED,
    OrderStatus.BEING_REALIZED,
    OrderStatus.DRAFT,
  ];
  const totalAmounts = [47.3, 130.56, null, null];

  for (let j = 0; j < exampleOrdersList.length; j++) {
    const order = exampleOrdersList[j];

    order.totalBillingAmount = totalAmounts[j];
    order.status = orderStatuses[j];
  }

  return exampleOrdersList;
};

const getExampleOrderItems = (orders) => {
  const items = [];

  for (let j = 0; j < orders.length; j++) {
    const order = orders[j];
    for (let i = 0; i < 3; i++) {
      const exampleOrderItem = new OrderItem(
        idGen(),
        order.orderId,
        "Milk",
        "UHT 3.2%, 3 bottles"
      );

      items.push(exampleOrderItem);
    }
  }

  return items;
};
const exOrders = getExampleOrders(exampleCustomer);
const exItems = getExampleOrderItems(exOrders);

export const exampleOrderAndItems = {
  orders: exOrders,
  items: exItems,
};
