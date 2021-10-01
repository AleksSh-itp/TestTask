import { InputNode } from "./input-node.type";

export type NestedNode =  InputNode & { nested?: NestedNode[]}
