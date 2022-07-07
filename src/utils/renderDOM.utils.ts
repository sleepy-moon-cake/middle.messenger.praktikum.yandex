import { Component } from "../core/component/component";

export function render(block: Component, query = "root") {
  const root = document.getElementById(query);
  root?.appendChild(block.getElement());

  block.dispatchComponentDidMount();

  return root;
}