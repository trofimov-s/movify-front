import { AppLanguage } from '../../modules/translate-config/enum';

export interface Query {
  language?: AppLanguage;
  page?: number;
}
