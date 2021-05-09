import { useState } from "react";
import QueryBuilder, { formatQuery, RuleGroupType } from "react-querybuilder";

function App() {
  const [query, setQuery] = useState<RuleGroupType>({
    id: "root",
    combinator: "and",
    rules: [],
  });

  return (
    <>
      <QueryBuilder
        fields={[{ name: "test", label: "Test" }]}
        query={query}
        onQueryChange={(q) => setQuery(q)}
      />
      <pre>{formatQuery(query, "sql")}</pre>
      <pre>{formatQuery(query, "json")}</pre>
    </>
  );
}

export default App;