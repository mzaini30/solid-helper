import { createRenderEffect } from "solid-js";

export const model = (element: HTMLInputElement, value: () => any): void => {
  const [field, setField, object = null] = value();

  createRenderEffect(
    () => (element.value = object ? field()[object] : field())
  );

  element.addEventListener("input", (e: Event) =>
    object
      ? setField({ [object]: (e.target as HTMLInputElement).value })
      : setField((e.target as HTMLInputElement).value)
  );
};

export const modelCheckbox = (
  element: HTMLInputElement,
  value: () => any
): void => {
  const [field, setField, item] = value();
  createRenderEffect(() => (element.value = field())); /*bagian ini diubah*/
  element.addEventListener("change", x => {
    if ((x.target as HTMLInputElement).checked) {
      setField([...field(), item]);
    } else {
      setField(field().filter((o: any) => o !== item));
    }
  });
};
