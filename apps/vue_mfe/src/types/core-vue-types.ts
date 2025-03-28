interface MenuItem {
  name: string;
  path: string;
  hasChildren?: boolean;
  children?: MenuItem[];
}

export { MenuItem };
