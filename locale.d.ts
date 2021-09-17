interface Options {
  returnUndefined: boolean;
}

export default class Locale {
  dir: string;
  languages: any;
  actualLang: string;
  options: Options;
  constructor(dir: string);
  init(options: Options): Promise<(locale: string, options?: any) => any>;
  setLang(lang: string): Promise<void>;
  t(Locale: string, options?: any): any;
  FormData(locale: string, options: any): any;
}
export {};
