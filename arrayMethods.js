const methods = [
  {
    base: new Array(4).fill("🟠"),
    method: "push",
    args: ["🟢"],
  },
  {
    base: new Array(4).fill("🟠"),
    method: "unshift",
    args: ["🟢"],
  },
  {
    base: ["🟠", "🟠", "🟠", "🟢"],
    method: "pop",
    args: [],
  },
  {
    base: ["🟢", "🟠", "🟠", "🟠"],
    method: "shift",
    args: [],
  },
  {
    base: ["🟠", "🟢", "🟢", "🟠"],
    method: "filter",
    args: [(d) => d === "🟢"],
  },
  {
    base: ["🟠", "🟣", "🔴", "🟢"],
    method: "join",
    args: ["-"],
  },
  {
    base: ["🟠", "🟣"],
    method: "concat",
    args: [["🔴", "🟢"]],
  },
  {
    base: ["🟠", "🟣", ["🔴", "🟢"]],
    method: "flat",
    args: [],
  },
  {
    base: ["🟠", "🟣", "🔴", "🟢"],
    method: "slice",
    args: [1, 3],
  },
  {
    base: ["🟠", "🟣", "🔴", "🟢"],
    method: "slice",
    args: [0, -2],
  },
  {
    base: ["🟠", "🟣", "🔴", "🟢"],
    method: "slice",
    args: [2],
  },
];

const isMutable = (method) =>
  ["push", "shift", "unshift", "pop", "sort"].includes(method);

methods.forEach(({ method, base, args }) => {
  const originalBase = Array.from(base);
  const res = base[method](...args);
  const outString = `${JSON.stringify(originalBase)}.${method}(${args})`;
  const spacer = new Array(50 - outString.length).fill(" ").join("");
  console.log(
    `${outString}${spacer}->\t${JSON.stringify(isMutable(method) ? base : res)}`
  );
});
