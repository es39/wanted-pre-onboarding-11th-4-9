export type SickData = {
  sickCd: string;
  sickNm: string;
};

export type SickDataProps = SickData[];

export type SickProps = {
  isSearching: boolean;
  recommendSearch: SickDataProps;
  userInput: string;
};
