import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "6776e998dd031c2638820957",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1733325930796-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "6776e998dd031c2638820958",
      },
      {
        product: {
          name: "Coca cola",
          imagePath: "1733339359820-coca-cola.png",
          price: 8,
        },
        quantity: 2,
        _id: "6776e998dd031c2638820959",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕜" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="🧑‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto" orders={[]} />
    </Container>
  );
}
