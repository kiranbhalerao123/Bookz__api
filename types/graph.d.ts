export const typeDefs = ["directive @authenticated on FIELD_DEFINITION\n\nscalar Date\n\ninput SellerInput {\n  name: String!\n  url: String\n  price: String\n}\n\ntype Seller {\n  name: String!\n  url: String\n  price: String\n}\n\ntype Book {\n  id: String!\n  user: User!\n  title: String!\n  description: String\n  verified: Boolean!\n  author: String\n  publisher: String\n  photos: [String]\n  pages: Int\n  language: String\n  isbn10: String\n  isbn13: String\n  publishDate: Date\n  sellers: [Seller]\n}\n\ntype Comment {\n  id: String!\n  comment: String!\n  user: User!\n  likes: [User]\n  dislikes: [User]\n}\n\ntype Review {\n  id: String!\n  book: Book!\n  user: User!\n  title: String!\n  description: String\n  rating: Int!\n  upvotes: [User]\n  approved: Boolean!\n  comments: [Comment]\n}\n\nenum Role {\n  ADMIN\n  MEMBER\n  CONTRIBUTOR\n}\n\ntype User {\n  id: String!\n  email: String!\n  name: String!\n  role: Role!\n  photo: String\n  about: String\n  wishlist: [Book]\n}\n\ntype CreateBookResponse {\n  message: String!\n  book: Book\n}\n\ntype Mutation {\n  CreateBook(title: String!, description: String, author: String, publisher: String, photos: [String], pages: Int, language: String, isbn10: String, isbn13: String, publishDate: Date, sellers: [SellerInput]): CreateBookResponse! @authenticated\n  Login(email: String!, password: String!): LoginResponse!\n  Signup(email: String!, password: String!, name: String!): SignupResponse!\n  UpdateProfile(name: String, photo: String, about: String, password: String): User! @authenticated\n}\n\ntype Query {\n  GetProfile: User @authenticated\n  GetUser(userId: String!): GetUserResponse\n}\n\ntype GetUserResponse {\n  id: String\n  name: String\n  role: Role\n  about: String\n  photo: String\n}\n\ntype LoginResponse {\n  message: String\n  token: String\n}\n\ntype SignupResponse {\n  message: String!\n  token: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetProfile: User | null;
  GetUser: GetUserResponse | null;
}

export interface GetUserQueryArgs {
  userId: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  photo: string | null;
  about: string | null;
  wishlist: Array<Book> | null;
}

export type Role = "ADMIN" | "MEMBER" | "CONTRIBUTOR";

export interface Book {
  id: string;
  user: User;
  title: string;
  description: string | null;
  verified: boolean;
  author: string | null;
  publisher: string | null;
  photos: Array<string> | null;
  pages: number | null;
  language: string | null;
  isbn10: string | null;
  isbn13: string | null;
  publishDate: Date | null;
  sellers: Array<Seller> | null;
}

export type Date = any;

export interface Seller {
  name: string;
  url: string | null;
  price: string | null;
}

export interface GetUserResponse {
  id: string | null;
  name: string | null;
  role: Role | null;
  about: string | null;
  photo: string | null;
}

export interface Mutation {
  CreateBook: CreateBookResponse;
  Login: LoginResponse;
  Signup: SignupResponse;
  UpdateProfile: User;
}

export interface CreateBookMutationArgs {
  title: string;
  description: string | null;
  author: string | null;
  publisher: string | null;
  photos: Array<string> | null;
  pages: number | null;
  language: string | null;
  isbn10: string | null;
  isbn13: string | null;
  publishDate: Date | null;
  sellers: Array<SellerInput> | null;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface SignupMutationArgs {
  email: string;
  password: string;
  name: string;
}

export interface UpdateProfileMutationArgs {
  name: string | null;
  photo: string | null;
  about: string | null;
  password: string | null;
}

export interface SellerInput {
  name: string;
  url: string | null;
  price: string | null;
}

export interface CreateBookResponse {
  message: string;
  book: Book | null;
}

export interface LoginResponse {
  message: string | null;
  token: string | null;
}

export interface SignupResponse {
  message: string;
  token: string | null;
}

export interface Comment {
  id: string;
  comment: string;
  user: User;
  likes: Array<User> | null;
  dislikes: Array<User> | null;
}

export interface Review {
  id: string;
  book: Book;
  user: User;
  title: string;
  description: string | null;
  rating: number;
  upvotes: Array<User> | null;
  approved: boolean;
  comments: Array<Comment> | null;
}