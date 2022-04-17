import React, { Component } from 'react'
import Post from '../components/Post'
import API from '../services'
import './BlogPost.css'

class BlogPost extends Component {
  state = {
    listArtikel: [],
    insertArtikel: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    }
  }

  ambilDataDariServerAPI = () => {
    API.getNewsBlog().then(result => {
      this.setState({
        listArtikel: result
      })
    })
  }

  componentDidMount() {
    this.ambilDataDariServerAPI()
  }

  handleHapuArtikel = (data) => {
    API.deleteNewsBlog(data)
      .then((response) => {
        this.ambilDataDariServerAPI()
      })
  }

  handleTambahArtikel = (event) => {
    let formInsertArtikel = {...this.state.insertArtikel}
    let timestamp = new Date().getTime()
    formInsertArtikel['id'] = timestamp
    formInsertArtikel[event.target.name] = event.target.value
    this.setState({
      insertArtikel: formInsertArtikel
    })
  }

  handleTombolSimpan = () => {
    API.postNewsBlog(this.state.insertArtikel)
      .then((response) => {
        this.ambilDataDariServerAPI()
      })
  }

  render() {
    return (
      <div className='post-artikel'>
        <div className='form pb-2 border-bottom mb-3'>
          <div className='form-group row mb-2'>
            <label htmlFor='title' className='col-sm-2 col-form-label'>Judul</label>
            <div className='col-sm-10'>
              <input type='text' className='form-control' id='title' name='title' onChange={this.handleTambahArtikel}/>
            </div>
          </div>
          <div className='form-group row mb-2'>
            <label htmlFor='body' className='col-sm-2 col-form-label'>Isi</label>
            <div className='col-sm-10'>
              <textarea className='form-control' id='body' name='body' onChange={this.handleTambahArtikel}></textarea>
            </div>
          </div>
          <button type='submit' className='btn btn-primary mb-2' onClick={this.handleTombolSimpan}>Simpan</button>
        </div>
        <h2 className='mb-4'>Daftar Artikel</h2>
        {
          this.state.listArtikel.map(artikel => {
            return <Post 
              key={artikel.id} 
              judul={artikel.title} 
              isi={artikel.body} 
              idArtikel={artikel.id} 
              hapusArtikel={this.handleHapuArtikel} />
          })
        }
      </div>
    )
  }
}

export default BlogPost
