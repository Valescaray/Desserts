import Dcomponents from "./Dcomponents";
import Header from "./Header";
function Desserts({ onAddItems }) {
  return (
    <div className="md:grid md:col-start-1 md:col-end-3">
      <span className="md:grid-cols-none">
        <Header />
      </span>
      <div className="mt-10 md: grid md:grid-cols-3 md:gap-3">
        <Dcomponents
          image="/assets/images/image-waffle-mobile.jpg"
          alt="waffle"
          name="waffle"
          description="Waffle with berries"
          price="6.50"
          onAddItems={onAddItems}
        />
        <Dcomponents
          image="/assets/images/image-creme-brulee-mobile.jpg"
          alt="creme brulee"
          name="Creme Brulee"
          description="Vanilla Bean Creme brulee"
          price="7.00"
          onAddItems={onAddItems}
        />
        <Dcomponents
          image="/assets/images/image-macaron-mobile.jpg"
          alt="macaron"
          name="Macaron"
          description="Macaron Mix of Five"
          price="8.00"
          onAddItems={onAddItems}
        />
        <Dcomponents
          image="/assets/images/image-tiramisu-mobile.jpg"
          alt="tiramisu"
          name="Tiramisu"
          description="Classic Tiramisu"
          price="5.50"
          onAddItems={onAddItems}
        />
        <Dcomponents
          image="/assets/images/image-baklava-mobile.jpg"
          alt="baklava"
          name="Baklava"
          description="Pistachio Baklava"
          price="4.00"
          onAddItems={onAddItems}
        />
        <Dcomponents
          image="/assets/images/image-meringue-mobile.jpg"
          alt="meringue"
          name="Pie"
          description="Lemon Meringue Pie"
          price="5.00"
          onAddItems={onAddItems}
        />
        <Dcomponents
          image="/assets/images/image-cake-mobile.jpg"
          alt="cake"
          name="Cake"
          description="Red Velvet Cake"
          price="4.50"
          onAddItems={onAddItems}
        />
        <Dcomponents
          image="/assets/images/image-brownie-mobile.jpg"
          alt="brownie"
          name="Brownie"
          description="Salted Caramel Brownie"
          price="5.50"
          onAddItems={onAddItems}
        />
        <Dcomponents
          image="/assets/images/image-panna-cotta-mobile.jpg"
          alt="panna"
          name="Panna Cotta"
          description="Vanilla Panna Cotta"
          price="6.50"
          onAddItems={onAddItems}
        />
      </div>
    </div>
  );
}

export default Desserts;
