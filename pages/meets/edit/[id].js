import moment from 'moment';
import { FaImage } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image';
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import ImageUpload from '@/components/ImageUpload';
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'
import { values } from 'lodash'

export default function MeetPage({ evt }) {
 const [value, setValues] = useState({
    name: evt.name,
    host: evt.host,
    vaccine: evt.vaccine,
    minlevel: evt.minlevel,
    venue: evt.venue,
    address: evt.address,
    date: evt.date,
    time: evt.time,
    description: evt.description,
  })

 const [imagePreview, setImagePreview] = useState (evt.image ? evt.image.formats.thumbnail.url : null)

 const [showModal, setShowModal] = useState(false) 

 const router = useRouter()

 const handleSubmit = async (e) => {
     e.preventDefault()

     const hasEmptyFields = Object.values(values).some((element) => element === '')

     if (hasEmptyFields) {
         toast.error('Please fill in all fields')
    }

    const res = await fetch(`${API_URL}/meets/${evt.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })

    if(!res.ok) {
        toast.error('Something went wrong')
    } else {
        const evt = await res.json()
        router.push('/meets/${evt.slug}')
    }
 }

 const handleInputChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
 }

 const imageUploaded = async (e) => {
    const res = await fetch(`{API_URL}/meets/${evt.id}`)
    const data = await res.json()
    setImagePreview(data.image.formats.thumbnail.url)
    setShowModal(false)
 }

//  const handleEnumChange = (e) => {
//     const {name, values} = e.target
//     setState({values: e.target.values});
//     // this.setState({value: e.target.value});
//   }
  
    return (
        <Layout title='Add New Meet'>
            <Link href='/meets'>Go Back</Link>
            <h1>Edit Meet</h1>

            <ToastContainer />

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    
                    <div>
                       <label htmlFor="name">Meet Name</label>
                       <input
                            type='text'
                            id='name'
                            name='name'
                            values={values.name}
                            onChange={handleInputChange}
                        />     
                    </div>
                    
                    <div>
                        <label htmlFor="vaccine">Select Vaccine</label>
                        <select>
                            <option value="Any">Any</option>
                            <option value="COVISHIELD">COVISHIELD</option>
                            <option value="COVAXIN">COVAXIN</option>
                            <option value="SPUTNIKV">SPUTNIKV</option>
                        </select>                        
                    </div>

                    <div>
                        <label htmlFor="minlevel">Select Vaccine Stage</label>
                        <select>
                            <option value="Partially_Vaccinated">Partially_Vaccinated</option>
                            <option value="Fully_Vaccinated">Fully_COVISHIELD</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='venue'>Venue</label>
                            <input
                            type='text'
                            name='venue'
                            id='venue'
                            value={values.venue}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='address'>Address</label>
                            <input
                            type='text'
                            name='address'
                            id='address'
                            value={values.address}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='date'>Date</label>
                            <input
                            type='date'
                            name='date'
                            id='date'
                            value={moment(values.date).format('yyyy-MM-DD')}
                            onChange={handleInputChange}
                        />
                    </div>
                
                    <div>
                        <label htmlFor='time'>Time</label>
                            <input
                            type='text'
                            name='time'
                            id='time'
                            value={values.time}
                            onChange={handleInputChange}
                            />
                    </div>

                </div>
                
                    <div>
                            <label htmlFor='description'>Meet Description</label>
                                <textarea
                                    type='text'
                                    name='description'
                                    id='description'
                                    value={values.description}
                                    onChange={handleInputChange}
                                ></textarea>
                    </div>
                
                <input type='submit' value='Update Meet' className='btn' />

            </form>

            <h2>Meet Image</h2>
                {imagePreview ? (
                    <Image src={imagePreview} height={100} width={170} />
                ) : <div>
                    <p>No image uploaded</p>
                    </div>}

                <div>
                    <button onClick={() => setShowModal(true)} className="btn-secondary">
                        <FaImage /> Set Image
                    </button>
                </div>

                <Modal show={showModal} onClose={() => setShowModal(false)}>
                    <ImageUpload evtId={evt.id} imageUploaded={imageUploaded} />
                </Modal>
        </Layout>
    )
}

export async function getServerSideProps({params: {id} }) {
    const res = await fetch(`${API_URL}/meets/${id}`)
    const evt = await res.json()

    return {
        props: {
            evt
        }
    }
}
