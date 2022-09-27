export interface CarouselCard {
  id: number;
  label?: string;
  title: string;
  description: string;
  backgroundImage: string;
  backgroundColor: string;
  carouselAction?: CarouselCardAction;
  link: string;
}

export interface CarouselCardAction {
  id: number;
  title: string;
  actionTitle: string;
  actionLink: string;
}

export enum ListType {
  carousel = "carousel",
  horizontal = "horizontal",
  grid = "grid",
  verticalImage = "verticalImage",
  verticalList = "verticalList",
}

export interface AppleStoreList {
  id: number;
  type: ListType;
  items: AppleStoreListItem<
    GridItem | VerticalListItem | VerticalImageItem | CarouselCard
  >[];
  title?: string;
}

export interface AppleStoreListItem<T> {
  id: number;
  content: T;
}

export interface GridItem {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface VerticalImageItem {
  id: number;
  title: string;
  description: string;
  backgroundColor?: string;
  image: string;
  link: string;
  linkTitle: string;
}

export interface VerticalListItem {
  id: number;
  image: string;
  label?: string;
  title: string;
  link: string;
  linkText: string;
}
