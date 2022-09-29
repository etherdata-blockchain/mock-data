import { AppleStoreList, ListType, WebViewItem } from "../../types/AppleStoreInterface";

export const webViewItem1: WebViewItem = {
  id: 0,
  link: "https://apple.com",
};

export const AppleStoreListDetail: AppleStoreList[] = [
  {
    id: 0,
    type: ListType.webview,
    items: [
      {
        id: 0,
        content: webViewItem1,
      },
    ],
  },
];
