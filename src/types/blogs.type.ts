export interface Iblogs {
  _id: string;
  title: string;
  content: string;
  author: Author;
  isPublished: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  _id: string;
  name: string;
  email: string;
  needsPasswordChange: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  passwordChangedAt: string;
}
