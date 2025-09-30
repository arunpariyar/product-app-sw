export function getImageName(name: string) {
  const imageUrlBase =
    "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/ui/assets/images/";
  return `${imageUrlBase + name}`;
}
