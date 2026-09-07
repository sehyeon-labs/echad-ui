import { PATH } from "@/utils/path";

export const MENU_LIST = [
  { key: 'PLAN', label: '계획', path: PATH.PLAN },
  { key: 'EDITOR', label: '청첩장', path: PATH.EDITOR },
  { key: 'NOTICE', label: '공지사항', path: PATH.NOTICE },
  { key: 'SETTING', label: '설정', path: PATH.SETTING },
] as const;

export type MenuKey = typeof MENU_LIST[number]['key'];