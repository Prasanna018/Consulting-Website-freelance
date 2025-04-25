import React from 'react'

function Contact() {
    return (
        <div className="container mt-20  mx-auto px-4 py-8 pb-20 w-full max-w-5xl">
            <h1 className="text-3xl font-normal text-white mb-8">Contact Us</h1>

            <div className='text-white'>
                <p>EPR, P.C. ensures nondiscrimination in all programs and activities in accordance with Title VI of the Civil Rights Act of 1964.  If you need more information or special assistance for persons with disabilities or limited English proficiency, contact Lynette Wuensch at 804-647-7701.</p>

            </div>

            <div className='text-white pt-8 flex justify-between items-center md:flex-row flex-col gap-6'>
                <div>
                    <b className='text-white'>
                        Charlottesville Office
                    </b>
                    <br></br>
                    902 East Jefferson Street, Suite 101
                    <br></br>
                    Charlottesville, VA 22902
                    <br></br>

                    Richmond Area Office
                    <br></br>

                    4333 Cox Rd
                    <br></br>

                    Glen Allen, VA 23060
                    <br></br>

                    Tel. - (434) 202-5082
                    <br></br>

                    Fax - (866) 233-8801
                    <br></br>

                    Email - info@epr-pc.com
                    <br></br>


                </div>

                <div className='w-full max-w-2xl'>
                    <img src='/contact.jpg.crdownload'></img>
                </div>
            </div>
        </div>
    )
}

export default Contact
