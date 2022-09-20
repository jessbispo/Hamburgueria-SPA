import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { InputLabel } from '../InputLabel/index';
import { Button } from '../Button/style';
import { PaymentStyle } from './style';
import { CartContext } from '../../context/cart';

export function Payment() {
  const {
    confirmOrder,
  } = useContext(CartContext);
  return (

    <PaymentStyle>

      <Link to="/Burguers">
        <p className="returnPage"> ← VOLTAR</p>
      </Link>

      <form className="secContainer">

        <p className="title"> Seus dados</p>

        <section className="infoSec">
          <InputLabel labelName="Nome:" placeholderName="Nome completo" inputWidth={400} inputHeight={40} required="true">Nome:</InputLabel>
          <InputLabel labelName="Celular:" placeholderName="(00) 00000-0000" inputWidth={400} inputHeight={40} required="true" />
        </section>

        {/* <p className="title">Adicionar endereço</p> */}

        <section className="adressInfo">
          <InputLabel labelName="CEP:" placeholderName="00000-000" inputWidth={200} inputHeight={40} required="true">CEP</InputLabel>
          <InputLabel labelName="Estado:" placeholderName="Estado" inputWidth={200} inputHeight={40} required="true">Estado</InputLabel>
          <InputLabel labelName="Cidade:" placeholderName="Cidade" inputWidth={200} inputHeight={40} required="true"> Cidade</InputLabel>
          <InputLabel labelName="Bairro:" placeholderName="Bairro" inputWidth={200} inputHeight={40} required="true"> Bairro</InputLabel>
          <InputLabel labelName="Rua:" placeholderName="Rua" inputWidth={200} inputHeight={40} required="true"> Rua</InputLabel>
          <InputLabel labelName="Numero:" placeholderName="Numero" inputWidth={100} inputHeight={40} required="true"> Numero</InputLabel>
        </section>

        <p className="title">Pagamento</p>
        <p className="paymentMethod">Metodo de Pagamento:</p>

        <section className="radioContainerPayment">
          <div>
            <input className="inputRadio" type="radio" name="payment" id="card" />
            <label htmlFor="card">Cartão</label>
          </div>
          <div>
            <input type="radio" name="payment" id="money" />
            <label htmlFor="money">Dinheiro</label>
          </div>
          <div>
            <input type="radio" name="payment" id="pix" />
            <label htmlFor="Pix">Pix</label>
          </div>
        </section>

        <section className="secBtn">
          <Button onClick={() => confirmOrder()} className="paymentBtn">Confirmar pedido</Button>
        </section>

      </form>

    </PaymentStyle>

  );
}
