import Order from "../logic/Orders/Order";
import OrderItem from "../logic/Orders/OrderItem";
import { OrderStatus } from "../logic/Orders/Order";
import { v4 as id4 } from "uuid";

const exampleCustomer = id4();

const getExampleOrders = (exampleCustomer) => {
  const exampleOrdersList = [
    new Order(id4(), exampleCustomer, "mleko i banany", 1, "23/04/2020"),
    new Order(
      id4(),
      exampleCustomer,
      "zakupy na cały tydzień",
      2,
      "26/04/2020"
    ),
    new Order(id4(), exampleCustomer, "mineralna i ser", 3, "03/05/2020"),
    new Order(id4(), exampleCustomer, "-", 4, "03/05/2020"),
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
        id4(),
        order.orderId,
        "Mleko",
        "UHT 3.2%, 3 kartony"
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
