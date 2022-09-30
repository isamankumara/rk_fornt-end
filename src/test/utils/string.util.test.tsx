import React from "react";
import { isValidEmail } from "../../utils/string.util";

test("check black email", () => {
    const res = isValidEmail("");
    expect(res).toBe(false);
});

test("check email without domain", () => {
    const res = isValidEmail("kk@c");
    expect(res).toBe(false);
});

test("check invalid email without @", () => {
    const res = isValidEmail("kkc");
    expect(res).toBe(false);
});

test("check email with .", () => {
    const res = isValidEmail("test.test@test.com");
    expect(res).toBe(true);
});

test("check email with .", () => {
    const res = isValidEmail("test.test@test.com");
    expect(res).toBe(true);
});
