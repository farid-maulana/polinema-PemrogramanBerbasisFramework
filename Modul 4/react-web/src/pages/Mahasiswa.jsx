import React, { useEffect, useState } from 'react'
import FormMahasiswa from '../components/Mahasiswa/FormMahasiswa'
import MahasiswaComponent from '../components/Mahasiswa/Mahasiswa'

const Mahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState(false)
  const [NIM, setNIM] = useState(0)
  const [nama, setNama] = useState('')
  const [alamat, setAlamat] = useState('')
  const [hp, setHp] = useState('')
  const [angkatan, setAngkatan] = useState(0)
  const [status, setStatus] = useState('')

  const getDataMahasiswa = () => {
    fetch('http://localhost:3001/mahasiswa')
      .then(function(response) { 
        return response.json()
       })
      .then(function(data) {
        setMahasiswa(data)
      })
  }


  const deleteMahasiswa = (id) => {
    fetch(`http://localhost:3001/mahasiswa/${id}`, { method: 'DELETE' })
      .then(() => {
        getDataMahasiswa()
      })
  }


  const createMahasiswa = () => {
    const id = mahasiswa.length + 1

    const saveDataMahasiswa = {
      id: id,
      NIM: NIM,
      nama: nama,
      alamat: alamat,
      hp: hp,
      angkatan: angkatan,
      status: status,
    }
    console.log(saveDataMahasiswa)

    fetch('http://localhost:3001/mahasiswa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(saveDataMahasiswa),
    })
      .then(response => response.json())
      .then(() => {
        getDataMahasiswa()
      })
  }

  useEffect(() => {
    getDataMahasiswa()
  }, [])

  return (
    <>
        <FormMahasiswa
          setNIM={setNIM}
          setNama={setNama}
          setAlamat={setAlamat}
          setHp={setHp}
          setAngkatan={setAngkatan}
          setStatus={setStatus}
          onSave={createMahasiswa}
        />
        <hr />
        <h5>Data Mahasiswa</h5>
        <div className='row g-3'>
          {
            mahasiswa && mahasiswa.map((mhs, index) => (
              <MahasiswaComponent
                key={index}
                nama={mhs.nama}
                alamat={mhs.alamat}
                nim={mhs.NIM}
                hp={mhs.hp}
                idMahasiswa={mhs.id}
                angkatan={mhs.angkatan}
                status={mhs.status}
                deleteMahasiswa={deleteMahasiswa} />
            ))
          }
        </div>
      </>
  )
}

export default Mahasiswa