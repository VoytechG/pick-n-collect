import Order from "../logic/Orders/Order";
import OrderItem from "../logic/Orders/OrderItem";
import { OrderStatus } from "./../logic/Orders/Order";

const getExampleOrders = () => {
  const exampleOrdersList = [
    new Order("someid1", "customerid", "mleko i banany", 1, "23/04/2020"),
    new Order(
      "someid2",
      "customerid",
      "zakupy na cały tydzień",
      2,
      "26/04/2020"
    ),
    new Order("someid3", "customerid", "mineralna i ser", 3, "03/05/2020"),
    new Order("someid4", "customerid", "-", 4, "03/05/2020"),
  ];

  const orderStatuses = [
    OrderStatus.COLLECTED,
    OrderStatus.COLLECTED,
    OrderStatus.BEING_REALIZED,
    OrderStatus.DRAFT,
  ];

  const totalAmounts = [47.3, 130.56, null, null];

  const exampleOrders = {};

  for (let j = 0; j < exampleOrdersList.length; j++) {
    const order = exampleOrdersList[j];
    for (let i = 0; i < 3; i++) {
      const exampleOrderItem = new OrderItem(
        `somemockid_${i}`,
        order.orderId,
        "Mleko",
        "UHT 3.2%, 3 kartony"
      );
      order.addOrderItem(exampleOrderItem);
      order.status = orderStatuses[j];
      order.totalBillingAmount = totalAmounts[j];
    }

    exampleOrders[order.number] = order;
  }

  return exampleOrders;
};

export const exampleOrders = getExampleOrders();
