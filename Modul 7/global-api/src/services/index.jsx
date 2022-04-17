import GetAPI from './Get'
import PostAPI from './Post'
import DeleteAPI from './Delete'

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc')
const postNewsBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim)
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus)

const getMahasiswa = () => GetAPI('mahasiswa?_sort=id&_order=desc')
const postMahasiswa = (dataYgDiKirim) => PostAPI('mahasiswa', dataYgDiKirim)
const deleteMahasiswa = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus)

const API = {
  getNewsBlog,
  postNewsBlog,
  deleteNewsBlog,
  getMahasiswa,
  postMahasiswa,
  deleteMahasiswa
}

export default API
