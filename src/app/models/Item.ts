import { Data } from "@angular/router";

export interface Item {
  id?:string;
  title?:string;
  subContent?: string;
  content?:string;
  thumbnail?:string;
  image?:string;
  images?:string;
  type?:string;
  by?:string;
  creatAt?:Data;
  modifyAt?:Data;
}