import $ from "jquery";

async function getComponent(file: string) {
  await import(
    /* webpackMode: "lazy-once", webpackChunkName: "[request]" */ `./NICE.Bootstrap/NICE.${file}`
  );
}

const mappings = {
  "[data-red]": "Red",
  "[data-green]": "Green",
};

const loadModules = async () => {
  for (let [selector, file] of Object.entries(mappings)) {
    if ($(selector).length > 0) {
      await getComponent(file);
    }
  }
};

loadModules();

$("#load-modules-btn").click(() => {
  loadModules();
});
