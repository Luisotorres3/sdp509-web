export type MerchItem = {
  id: string;
  name: string;
  image?: string;
  price?: string;
  url?: string;
  status: "available" | "coming-soon" | "sold-out" | "concept";
};
export const merch: MerchItem[] = [];
export const storeUrl = "";
