export const mockedEventForGetProductById = {
  pathParameters: {
    productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
  }
};

export const mockedResponseGetProductById = {
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  },
  body: {
    "count": 1,
    "description": "Iphone 5s",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    "price": 400,
    "title": "Iphone 5s"
  },
}

export const mockedResponseForGetProductsList = {
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  },
  body: [
    {
      "count": 1,
      "description": "Iphone 5s",
      "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      "price": 400,
      "title": "Iphone 5s"
    },
    {
      "count": 2,
      "description": "Iphone 6s",
      "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
      "price": 500,
      "title": "Iphone 6s"
    },
    {
      "count": 3,
      "description": "Macbook Pro",
      "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a2",
      "price": 2000,
      "title": "Macbook Pro"
    },
    {
      "count": 4,
      "description": "Macbook Air",
      "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
      "price": 1500,
      "title": "Macbook Air"
    },
    {
      "count": 5,
      "description": "Iphone X",
      "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
      "price": 800,
      "title": "Iphone X"
    },
    {
      "count": 6,
      "description": "Iphone 13 Pro",
      "id": "7567ec4b-b10c-48c5-9345-fc73348a80a1",
      "price": 1200,
      "title": "Iphone 13 Pro"
    },
    {
      "count": 7,
      "description": "Iphone 12",
      "id": "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
      "price": 1050,
      "title": "Iphone 12"
    },
    {
      "count": 8,
      "description": "Iphone 11",
      "id": "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      "price": 900,
      "title": "Iphone 11"
    }
  ]
};