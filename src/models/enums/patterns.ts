export enum Patterns {
  MAIL = "^[A-Za-z0-9_-]+[@]([A-Za-z0-9_-])+[.]([A-Za-z])+$",
  PHONE = "[8+][0-9]{10,15}",
  PASSWORD = "(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{8,40}",
  LOGIN = "(?=.*[A-Za-z])[A-Za-z0-9-_]{3,20}",
  NAME = "^[A-ZА-Я][a-zа-я-]+",
}
