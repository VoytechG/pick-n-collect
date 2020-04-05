import Order from "../logic/Orders/Order";
import OrderItem from "../logic/Orders/OrderItem";

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
    new Order("someid3", "customerid", "mineralna i ser", 3, "01/05/2020"),
    new Order("someid4", "customerid", "bułki, masło", 4, "03/05/2020"),
  ];

  for (const order of exampleOrdersList) {
    for (let i = 0; i < 3; i++) {
      const exampleOrderItem = new OrderItem(
        `somemockid_${i}`,
        order.orderId,
        "Mleko",
        "UHT 3.2%, 3 kartony"
      );
      order.addOrderItem(exampleOrderItem);
    }
  }

  return exampleOrdersList;
};

export const exampleOrders = getExampleOrders();
