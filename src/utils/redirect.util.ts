export function redirectTo(dynamicPath: string = "") {
  const link = document.createElement("a");
  const path = window.location.pathname;

  link.href = `${path}/${dynamicPath}`;
  link.click();
  link.remove();
}
