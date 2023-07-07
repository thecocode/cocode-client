export enum ScreenTypes {
  LARGE_LAPTOP = 'largeLaptop',
  MID_LAPTOP = 'midLaptop',
  TABLET = 'tablet',
  MOBILE = 'mobile',
}

export type ListItem = {
  name: string;
    img: string;
    stars?: number;
}