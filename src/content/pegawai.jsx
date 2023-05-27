import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import '../css/style1.css';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';



function Pegawai() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8000/api/data/karyawan')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleEdit = (id) => {
    // Logika untuk menghandle aksi edit sesuai dengan ID
    console.log(`Edit data dengan ID: ${id}`);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>NIK</th>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
      {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.no_payroll}</td>
              <td>{item.nama_asli}</td>
              <td>{item.sex}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
  
}



export default Pegawai;
