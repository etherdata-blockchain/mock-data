import {
  AppleStoreList,
  CarouselCard,
  ListType,
  VerticalListItem,
  VerticalImageItem,
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
  link: "/0",
};

export const HomeCarousel2: CarouselCard = {
  id: 1,
  title: "iPhone 14",
  description:
    "iOS 16 lets you customize your Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings. And see live updates from your favorite apps.",
  label: "New",
  backgroundImage:
    "https://www.apple.com/v/iphone-14/a/images/overview/hero/hero_iphone_14_plus__fra3gmuj0aum_large_2x.jpg",
  backgroundColor: "#FFFFFF",
  link: "/1",
};

export const HomeCarousel3: CarouselCard = {
  id: 2,
  title: "AirPods",
  description:
    "Music on a more personal note. Adaptive EQ automatically tunes music to your ears. Inward-facing microphones detect what you’re hearing, then adjust low and midrange frequencies to deliver the rich details in every song, customized for you in real time.",
  backgroundImage:
    "https://www.apple.com/v/airpods/s/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large_2x.jpg",
  backgroundColor: "#FFFFFF",
  link: "/2",
};

export const verticalListItem1: VerticalListItem = {
  id: 3,
  image:
    "https://www.apple.com/v/iphone/switch/h/images/overview/compare/compare_iphone_14_pro__n89p3mzde9e2_small_2x.jpg",
  title: "iPhone 14 Pro and iPhone 14 Pro Max",
  link: "/3",
  linkText: "From $999",
};

export const verticalListItem2: VerticalListItem = {
  id: 4,
  image:
    "https://www.apple.com/v/iphone/switch/h/images/overview/compare/compare_iphone_14__ffrnsy2xheum_small_2x.jpg",
  title: "iPhone 14 and iPhone 14 Plus",
  link: "/3",
  linkText: "From $799",
};

export const verticalListItem3: VerticalListItem = {
  id: 5,
  image:
    "https://www.apple.com/v/iphone/switch/h/images/overview/compare/compare_iphone_13__e2p1kl3sf96q_small_2x.jpg",
  title: "iPhone 13",
  link: "/5",
  linkText: "From $599",
};

export const verticalListItem4: VerticalListItem = {
  id: 6,
  image:
    "https://www.apple.com/v/iphone/switch/h/images/overview/compare/compare_iphone_se__gm4bi8tnyeuu_small_2x.jpg",
  title: "iPhone SE",
  link: "/6",
  linkText: "From $429",
};

export const verticalImageItem1: VerticalImageItem = {
  id: 7,
  title: "Compare with your existing iPhone 13 Pro Max",
  description: "",
  image:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-trade-in-202209?wid=1976&hei=788&fmt=jpeg&qlt=90&.v=1660864453310",
  link: "/7",
  linkTitle:
    "Easy to trade in your eligible device for credit toward your next purchase",
};

export const verticalImageItem2: VerticalImageItem = {
  id: 8,
  title: "Your existing iPhone 13 Pro Max worth up to $1,000",
  description:
    "It’s easy to trade in your eligible device for credit toward your next purchase, or get an Apple Gift Card you can use anytime.Footnote",
  image:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/trade-in-compare-iphone-14-pro-202209?wid=392&hei=540&fmt=jpeg&qlt=90&.v=1663712444791",
  link: "/7",
  linkTitle:
    "Easy to trade in your eligible device for credit toward your next purchase",
};

export const verticalImageItem3: VerticalImageItem = {
  id: 8,
  title: "It goes on to help the planet",
  description:
    "You may be done with your device, but chances are it still has more to give. If it’s in good shape, we’ll help it go to a new owner, diverting electronic waste from landfills. If not, we’ll send it to our recycling partner, so we can save more precious materials and take less from the earth.",
  image:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/trade-in-recycle-daisy-202106?wid=1256&hei=1216&fmt=jpeg&qlt=90&.v=1622814967000",
  link: "/8",
  linkTitle: "Learn more about Apple Trade In and recycling",
};

export const HomeAppleStoreList: AppleStoreList[] = [
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
  {
    id: 5,
    type: ListType.verticalList,
    items: [
      {
        id: 6,
        content: verticalListItem1,
      },
      {
        id: 7,
        content: verticalListItem2,
      },
      {
        id: 8,
        content: verticalListItem3,
      },
      {
        id: 9,
        content: verticalListItem4,
      },
    ],
  },
  {
    id: 6,
    type: ListType.verticalImage,
    items: [
      {
        id: 10,
        content: verticalImageItem1,
      },
      {
        id: 11,
        content: verticalImageItem2,
      },
      {
        id: 12,
        content: verticalImageItem3,
      },
    ],
  },
];
