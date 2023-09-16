import { Button, Card, CardImg } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const StoreItem = ({ id, name, price, imageUrl }: StoreItemProps) => {
  return (
    <Card className="h-100">
      <CardImg
        variant="top"
        src={imageUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>

        <Button className="w-100">+ Add To Cart</Button>

        <div
          className="d-flex align-items-center flex-column"
          style={{ gap: ".5rem" }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: ".5rem" }}
          >
            <Button> - </Button>
            <div>
              <span className="fs-3">Quantity</span> in cart
            </div>

            <Button variant="danger" size="sm">
              Remove
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
