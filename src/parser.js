module.exports = (code) => {
  let ast = { body: code.split("\n") };
  ast.body.forEach((line, i) => {
    const res = line.split("->");
    const func = res[0];
    const params = res.slice(1, line.length);
    ast.body[i] = {
      type: "FunctionUsage",
      func,
      params,
    };
  });
  return ast;
};
