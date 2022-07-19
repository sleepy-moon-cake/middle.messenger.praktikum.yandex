import { Component } from "../core/component/component";

export function render(block: Component, query = "root") {
  const root = document.getElementById(query);
  if (root) {
    root.innerHTML = "";
    root.appendChild(block.getContent());
  }
}
