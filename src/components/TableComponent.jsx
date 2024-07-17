import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import LoadingComponent from "./LoadingComponent";

const TableComponent = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Tittle",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Posted Date",
      selector: (row) => row.birthDate,
      sortable: true,
    },
  ];

  //   with api

  async function fetchData() {
    const data = await fetch("https://dummyjson.com/users");
    const res = await data.json();
    setData(res.users);
    setIsLoading(false);
    setFilteredData(res.users);
  }

  useEffect(() => {
    fetchData();
  }, []);

  //   filter data when search
  useEffect(() => {
    if (!search) {
      setFilteredData(data);
      return;
    }

    const result = data.filter((item) => {
      // if api title in here is set title
      return item.username.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredData(result);
  }, [search, data]);

  return (
    <div>
      <section className="bg-gray-100">
        <DataTable
          fixedHeader={true}
          fixedHeaderScrollHeight="600px"
          columns={columns}
          progressPending={isLoading}
          progressComponent={
            <h2>
              <LoadingComponent />
            </h2>
          }
          data={filteredData}
          pagination
          subHeader
          subHeaderComponent={
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="round-md boder-gray-400"
              placeholder="Search ..."
              type="text"
            ></input>
          }
          actions={
            <button className="bg-3fbaf1 text-white p-2 m-2 rounded-lg">
              + New
            </button>
          }
        />
      </section>
    </div>
  );
};

export default TableComponent;
