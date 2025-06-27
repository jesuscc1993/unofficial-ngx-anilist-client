export type NodeList<T> = {
  nodes: T[];
};

export type Edge<T, R> = T & { node: R };

export type EdgeList<T, R> = {
  edges: Edge<T, R>[];
};
