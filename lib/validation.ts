export const validEmail = (email: string) =>
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?:\b|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(
    email.toLowerCase(),
  );