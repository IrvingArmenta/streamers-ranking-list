// type for incoming data of the streamers from the api

export type StreamerPropsType = {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
};

export type StreamerArrayType = StreamerPropsType[];
