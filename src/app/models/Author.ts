export interface AuthorAddress {
  number: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface Author {
  id: number;
  name: string;
  photo: string;
  pseudo: string[];
  address: AuthorAddress;
}
