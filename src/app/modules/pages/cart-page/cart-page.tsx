import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

const CartPage: FC = () => {
  return (
    <PageLayout pageClassName="cart-page">
      <PageTitle pageName="Корзина" />
    </PageLayout>
  );
};

export default CartPage;
