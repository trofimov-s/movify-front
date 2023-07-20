export interface DropdownModel {
  translationKey?: string;
  icon?: string;
  displayCondition?: (args?: any) => boolean;
  dropdownMenu?: DropdownMenu[];
}

export interface DropdownMenu {
  text: string;
  action: (args?: any) => void;
  icon?: string;
  customIcon?: string;
  displayConditions?: (args?: any) => boolean;
  separator?: boolean;
}
