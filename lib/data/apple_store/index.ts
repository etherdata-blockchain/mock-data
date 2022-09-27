import {
  AppleStoreList,
  CarouselCard,
  ListType,
} from "../../types/AppleStoreInterface";

export const HomeCarousel: CarouselCard = {
  id: 0,
  title: "iPhone 14 Pro",
  description: "Welcome to the Apple Store",
  backgroundImage:
    "https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_static__fljrzu0tp662_small_2x.jpg",
  backgroundColor: "#000000",
  link: "/1",
};

export const HomeAppleStoreList: [AppleStoreList] = [
  {
    id: 1,
    type: ListType.carousel,
    items: [{
      id: 2,
      content: HomeCarousel
    }],
  },
];
