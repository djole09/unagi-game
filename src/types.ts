export interface PlayerDataType {
  firstname: string;
  lastname: string;
  image: string;
  birthday: string;
}

export interface PlayerType {
  id: number;
  player: PlayerDataType;
}
