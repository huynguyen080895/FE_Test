export interface categoryModel {
  id: number;
  Name: string;
}
export interface gamesModel {
  id: number;
  Name: string;
  idCatogory: number;
  UrlImage: string;
}

export interface RequestCate {
  idCatogory: number;
  Count: number;
}
