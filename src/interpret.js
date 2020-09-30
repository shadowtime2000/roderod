module.exports = (ast) => {
  let data = {};
  let curloc = 0;
  ast.body.map((statement) => {
    if (statement.func === "log") {
      console.log(
        statement.params
          .join(" ")
          .replace(/{loc}/, curloc)
          .replace(/{val}/, data[curloc] || "none")
      );
    } else if (statement.func === "set") {
      data[curloc] = statement.params.join(" ");
    } else if (statement.func === "up") {
      if (!statement.params[0].search(/[0-9]+/) === 0)
        throw new TypeError("Expected number got something else!");
      curloc += statement.params[0] || 1;
    } else if (statement.func === "down") {
      if (!statement.params[0].search(/[0-9]+/) === 0)
        throw new TypeError("Expected number got something else!");
      curloc -= statement.params[0] || 1;
    } else if (statement.func === "move") {
      if (!statement.params[0].search(/[0-9]+/) === 0)
        throw new TypeError("Expected number got something else!");
      curloc = statement.params[0] || 0;
    }
  });
};
