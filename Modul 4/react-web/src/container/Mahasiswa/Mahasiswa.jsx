import React, { Component } from 'react'
import FormMahasiswa from '../../components/Mahasiswa/FormMahasiswa'
import Student from '../../components/Mahasiswa/Student'

class Mahasiswa extends Component {
  state = {
    students: [],
    addStudent: {
      NIM: 1,
      nama: "",
      alamat: "",
      hp: "",
      angkatan: 1,
      status: "",
    }
  }

  getAllDataHandler = () => {
    fetch('http://localhost:3001/mahasiswa')
      .then(response => response.json())
      .then(student => {
        this.setState({
          students: student
        })
      })
  }

  componentDidMount() {
    this.getAllDataHandler();
  }

  deleteDataHandler = (data) => {
    fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })
      .then(response => {
        this.getAllDataHandler()
      })
  }

  createNewDataHandler = (event) => {
    let formInsertStudent = { ...this.state.addStudent }
    formInsertStudent[event.target.name] = event.target.value
    this.setState({
      addStudent: formInsertStudent
    })
  }

  buttonSaveHandler = () => {
    fetch('http://localhost:3001/mahasiswa', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.addStudent),
    })
      .then((response) => {
        this.getAllDataHandler()
      })
  }

  render() {
    return (
      <>
        <FormMahasiswa
          createData={this.createNewDataHandler}
          buttonSave={this.buttonSaveHandler} />
        <hr />
        <h5>Data Mahasiswa</h5>
        <div className='row g-3'>
          {
            this.state.students.map(mahasiswa => {
              return <Student
                key={mahasiswa.id}
                nama={mahasiswa.nama}
                alamat={mahasiswa.alamat}
                nim={mahasiswa.NIM}
                hp={mahasiswa.hp}
                idMahasiswa={mahasiswa.id}
                angkatan={mahasiswa.angkatan}
                status={mahasiswa.status}
                deleteMahasiswa={this.deleteDataHandler} />
            })
          }
        </div>
      </>
    )
  }
}

export default Mahasiswa
