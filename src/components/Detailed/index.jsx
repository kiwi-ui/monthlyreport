import React from 'react';
import {undoneRequest, undoneFindings } from '../../data/undonedetailed';

const Detailed = () => {
  return (
    <section className="vh-100 bg-light-subtle ">
      <div className="container text-center">
        <div className="d-flex flex-row mx-5 gap-4 align-items-center my-4">
          <table className='my-3 table table-info table-hover'>
            <thead>
              <tr className='border'>
                <th scope="col">Jenis</th>
                <th scope="col">Jumlah</th>
              </tr>
            </thead>

            <tbody>
            { 
              undoneFindings.map((a,i) => (
                <tr key={i} className="request border table-info">
                  <th className="px-2">{a.type}</th>
                  <th className='border-start px-3'>{a.amount}</th>
                </tr>
              ))
              
            }
            </tbody>
          </table>

          <table className='my-3 table table-info table-hover'>
            <thead>
              <tr className='border'>
                <th scope="col">Jenis</th>
                <th scope="col">Jumlah</th>
              </tr>
            </thead>
            
            <tbody>
            { 
              undoneRequest.map((a,i) => (
                <tr key={i} className="request border table-info">
                  <th className="px-2">{a.type}</th>
                  <th className='border-start px-1'>{a.amount}</th>
                </tr>
              ))

            }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Detailed