import logo from "../../assets/images/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img
          src={logo}
          alt="Dois garçons de uniforme, um segurando uma bandeja com garrafa e taça de vinho, e outro segurando uma bandeja com tampa de prato."
        />
      </Content>
    </Container>
  );
}
