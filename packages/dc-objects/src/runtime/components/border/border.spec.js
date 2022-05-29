/* eslint-disable-next-line */ // somehow eslint does not read the workspace devDependencies
import { shallowMount } from "@vue/test-utils";
import OBorder from "./border.vue";

// @info no snapshot testing, svg rendering are dynamicly
describe("border", () => {
  it("without border", () => {
    // generate
    const cmp = shallowMount(OBorder, { propsData: {} });
    expect(cmp.element.className).toBe("o-border is-regular as-color-gradient");
  });

  it("can have a arrow", () => {
    // generate
    const cmp = shallowMount(OBorder, { propsData: { arrow: true } });
    expect(cmp.element.classList.contains("has-arrow")).toBe(true);
  });
});
