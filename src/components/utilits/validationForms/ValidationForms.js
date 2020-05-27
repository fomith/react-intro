export const required = (value) =>
  value || typeof value === "number" ? undefined : "Обязательно для заполения";

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Неверный Email адрес"
    : undefined;

const maxLength = (max) => (value) =>
  value && value.length > max ? `Длинна ${max} символов превышена` : undefined;

export const maxLength70 = maxLength(70);
export const maxLength15 = maxLength(15);

export const minLength = (min) => (value) =>
  value && value.length < min ? `Допустимая длинна не менее ${min} символов` : undefined;
export const minLength4 = minLength(4);
export const minLength3 = minLength(3);
