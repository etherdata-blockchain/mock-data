import {
  AppleStoreList,
  CarouselCard,
  ListType,
} from "../../types/AppleStoreInterface";

export const HomeCarousel1: CarouselCard = {
  id: 0,
  title: "iPhone 14 Pro",
  description:
    "A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.",
  label: "New",
  backgroundImage:
    "https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_endframe__cvklg0xk3w6e_large_2x.jpg",
  backgroundColor: "#000000",
  link: "/1",
};

export const HomeCarousel2: CarouselCard = {
  id: 1,
  title: "iPhone 14",
  description:
    "iOS 16 lets you customize your Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings. And see live updates from your favorite apps.",
  label: "New",
  backgroundImage:
    "https://www.apple.com/v/iphone-14/a/images/overview/hero/hero_iphone_14_plus__fra3gmuj0aum_large_2x.jpg",
  backgroundColor: "#000000",
  link: "/2",
};

export const HomeCarousel3: CarouselCard = {
  id: 2,
  title: "AirPods",
  description:
    "Music on a more personal note. Adaptive EQ automatically tunes music to your ears. Inward-facing microphones detect what you’re hearing, then adjust low and midrange frequencies to deliver the rich details in every song, customized for you in real time.",
  backgroundImage:
    "https://www.apple.com/v/airpods/s/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large_2x.jpg",
  backgroundColor: "#000000",
  link: "/3",
};

export const HomeAppleStoreList: [AppleStoreList] = [
  {
    id: 1,
    type: ListType.carousel,
    items: [
      {
        id: 2,
        content: HomeCarousel1,
      },
      {
        id: 3,
        content: HomeCarousel2,
      },
      {
        id: 4,
        content: HomeCarousel3,
      },
    ],
  },
];
