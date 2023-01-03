const user = {
  name: 'lorentz',
  age: 30,
}

test("lorentz is 30", () => {
  expect(user.name).toBe("lorentz");
  expect(user.age).toBe(30);
});