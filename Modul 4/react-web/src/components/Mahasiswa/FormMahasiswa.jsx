import React from 'react'

const FormMahasiswa = (props) => {
  return (
    <div className='row g-3'>
      <h5>Tambah Data Baru</h5>
      <div className='col-md-6'>
        <label htmlFor='nim' className='form-label'>NIM</label>
        <input type='text' className='form-control' id='NIM' name='NIM' onChange={props.createData} />
      </div>
      <div className='col-md-6'>
        <label htmlFor='nama' className='form-label'>Nama</label>
        <input type='text' className='form-control' id='nama' name='nama' onChange={props.createData} />
      </div>
      <div className='col-md-12'>
        <label htmlFor='alamat' className='form-label'>Alamat</label>
        <textarea className='form-control' id='alamat' name='alamat' onChange={props.createData}></textarea>
      </div>
      <div className='col-md-4'>
        <label htmlFor='hp' className='form-label'>No. Handphone</label>
        <input type='text' className='form-control' id='hp' name='hp' onChange={props.createData} />
      </div>
      <div className='col-md-4'>
        <label htmlFor='angkatan' className='form-label'>Angkatan</label>
        <input type='number' className='form-control' id='angkatan' name='angkatan' onChange={props.createData} />
      </div>
      <div className='col-md-4'>
        <label htmlFor='status' className='form-label'>Status</label>
        <select id='status' name='status' className='form-select' onChange={props.createData} defaultValue='{DEFAULT}'>
          <option value="DEFAULT">Choose...</option>
          <option value='aktif'>Aktif</option>
          <option value='cuti'>Cuti</option>
          <option value='lulus'>Lulus</option>
        </select>
      </div>
      <div className='col-12'>
        <button type='submit' className='btn btn-primary' onClick={props.buttonSave}>Simpan</button>
      </div>
    </div>
  )
}

export default FormMahasiswa
