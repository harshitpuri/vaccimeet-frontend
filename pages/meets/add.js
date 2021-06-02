import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/Link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'
import { values } from 'lodash'

export default function AddMeetPage() {
 const router = useRouter()
  
 const [value, setValues] = useState({
    name: '',
    host: '',
    vaccine: '',
    minlevel: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
  })

 const handleSubmit = (e) => {
     e.preventDefault()
 }

 const handleInputChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
 }

//  const handleEnumChange = (e) => {
//     const {name, values} = e.target
//     setState({values: e.target.values});
//     // this.setState({value: e.target.value});
//   }
  
    return (
        <Layout title='Add New Meet'>
            <Link href='/meets'>Go Back</Link>
            <h1>Add Meet</h1>

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
                            value={values.date}
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
                
                    <input type='submit' value='Add Meet' className='btn' />

                </div>
            </form>
        </Layout>
    )
}
