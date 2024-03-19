export interface IWord {
  id: string;
  word: string;
  color?: string;
  dateAdded: {
    date: string;
    time: string;
    full: Date | string;
  };
  ownDescription: string;
  imageURL: string;
  language: ILanguage; // model Language
  includedInLists?: IList[]; // lists to which the word has been added
}
export type ILanguage = {
  id: string;
  label: string;
};
export interface IList {
  id: string;
  name: string;
  description?: string;
  coverURL?: string;
  dateAdded: {
    date: string;
    time: string;
    full: Date | string;
  };
  url: string;
  language: ILanguage;
}
