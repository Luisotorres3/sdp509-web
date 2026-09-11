export type Concert = {
  id: string;
  date: string;
  city: string;
  venue: string;
  time?: string;
  ticketUrl?: string;
  ticketLabel?: string;
  soldOut?: boolean;
  free?: boolean;
};
export const concerts: Concert[] = [];
