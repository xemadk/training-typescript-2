interface ClientORM {
  id: number;
  name: string;
  _timestamp: Date;
  _internalState: string;
}

interface ItemORM {
  id: number;
  name: string;
  price: number;
  qty: number;
  _timestamp: Date;
  _internalState: string;
}

type Client = Pick<ClientORM, "id" | "name">;
type Item = Omit<ItemORM, "_timestamp" | "_internalState">;

var client: Client = {
  id: 1,
  name: "Joan"
};

const mapClientOrmToDm = (orm: ClientORM): Client => {
  return { id: orm.id, name: orm.name };
};

const mapItemOrmToDm = (orm: ItemORM): Item => {
  return { id: orm.id, name: orm.name, price: orm.price, qty: orm.qty };
};
