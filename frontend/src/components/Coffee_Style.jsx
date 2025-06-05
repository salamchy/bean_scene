import Card from "./Card";
import Image1 from "../assets/Rectangle1.png";
import Image2 from "../assets/Rectangle2.png";
import Image3 from "../assets/Rectangle3.png";
import Image4 from "../assets/Rectangle4.png";
import Title from "./Title";

const Coffee_Style = () => {
  return (
    <div className="px-10 md:px-20 lg:px-32 mt-20" >
      <div className=" flex flex-col items-center justify-center">
        <Title heading="Enjoy a new blend of coffee style" subHeading=" Explore all flavours of coffee with us. There is always a new cup worth
        experiencing" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mt-8 gap-8">
        <Card
          image={Image1}
          title="Cappuccino"
          description="Coffee 50% | Milk 50%"
          price="8.50"
        />
        <Card
          image={Image2}
          title="Chai Latte"
          description="Coffee 50% | Milk 50%"
          price="8.50"
        />
        <Card
          image={Image3}
          title="Macchiato"
          description="Coffee 50% | Milk 50%"
          price="8.50"
        />
        <Card
          image={Image4}
          title="Expresso"
          description="Coffee 50% | Milk 50%"
          price="8.50"
        />
      </div>
    </div>
  );
};

export default Coffee_Style;
