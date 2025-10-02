const DataList = ({ data }) => {
  return (
    <div className="data-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DataList;
