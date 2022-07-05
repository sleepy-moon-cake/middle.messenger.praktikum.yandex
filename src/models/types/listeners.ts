import { SimpleObject } from "./simple-object";

export type Listeners<T = (event: Event) => void> = Array<SimpleObject<T>>;
