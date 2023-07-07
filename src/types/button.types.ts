export enum ButtonTypes {
  DISCORD = 'discord',

}

export interface Button {
  link: string;
  type: ButtonTypes;
}
