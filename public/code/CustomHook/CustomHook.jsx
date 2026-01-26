import useFetch from "./useFetch";

const CustomHook = () => {
  const { data, loading, error } = useFetch({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos?_limit=10",
  });

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <table style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "Done" : "Pending"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomHook;
