import React from 'react'

const Student = ({ nim, nama, alamat, hp, angkatan, status, deleteMahasiswa, idMahasiswa }) => {
  return (
    <div className='col-sm-4'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{nama} - <span className='badge bg-success text-capitalize'>{status}</span></h5>
          <h6 className='card-subtitle mb-2 text-muted'>{nim}</h6>
          <p className='card-text'>{angkatan} - {hp}</p>
          <p className='card-text'>{alamat}</p>
          <button className='btn btn-danger' onClick={() => deleteMahasiswa(idMahasiswa)}>Hapus</button>
        </div>
      </div>
    </div>
  )
}

export default Student
