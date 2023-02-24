import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';

import { RiAlertFill, RiMailSendFill, RiPhoneFill, RiSendPlane2Fill, RiSendPlaneFill } from 'react-icons/ri';
import { useForm } from '../../hooks/useForm';
import { portfolio } from "../../info/info";
import { SEND_DATA } from '../../graphql/email';

const validationSchema = Yup.object().shape({
  message: Yup.string()
    .min(3, 'El mensaje debe tener al menos 3 caracteres')
    .required('El mensaje es requerido'),
  email: Yup.string()
    .email('Ingrese un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  name: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .required('El nombre es requerido'),
  
});





const ContactMe = ({post,scrollRef, mode}) => {
  const [formValues,handleInputChange, reset] = useForm({ name: '', email: '', message: '' })
  const [sendEmail, {loading, error}] = useMutation(SEND_DATA)
  const [errorMsg, setErrorMsg] = useState('');
  const toastOptions = {     
    style: {
      borderRadius: '10px',
      background: mode ? '#333' : '#fff',
      color: mode ? '#fff' : '#000',
    },
  }
  
  // const client = new ApolloClient({
  //   uri: 'http://localhost:4000/graphql',
  //   cache: new InMemoryCache()
  // });
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      // await validationSchema.validate({ email:formValues.email, name: formValues.name , message: formValues.message }, { abortEarly: false })
      await validationSchema.validate({ email:formValues.email, name: formValues.name , message: formValues.message })
        sendEmail({ variables: { name: formValues.name, email: formValues.email, message: formValues.message } })
        // la validación ha sido exitosa, podemos enviar el formulario
        reset()
    } catch (error) {
      // setErrorMsg(err.message);
      // err.inner.forEach((error) => {
          toast.error(error.message);
        //   toast.error(error.message,{
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //     });
        // });
      // })
    }
    


    // reset()
  }
  const lang ='es'
  const {contactme} = portfolio

 
  return (
    <section
        ref={(element) => {
          scrollRef.current[4] = element;
        }}
        className={`contact section reveal ${post[4] == true ? "active" : ""}`}
        id="contact"
      >


        <h2 className="section__title">{contactme.title[lang]}</h2>
        <span className="section__subtitle">{contactme.subtitle[lang]}</span>
        <div className="contact__container container grid">
          <div className="">
            <div className="contact__information">
              <RiPhoneFill className="contact__icon" />
              <div className="">
                <h3 className="contact__title">{contactme.call[lang]}</h3>
                <span className="contact__subtitle">9241225500</span>
              </div>
            </div>
            <div className="contact__information">
              <RiMailSendFill className='uil-react contact__icon'/>
              <div className="">
                <h3 className="contact__title">{contactme.email[lang]}</h3>
                <span className="contact__subtitle">
                  alexandercruzaragon@gmail.com
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact__form grid">
          {errorMsg && (<div className="error-message">
                      <RiAlertFill/>
                      <p>{errorMsg}</p>
                    </div>)}

            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  {lang == 'es' ? ' Nombre' : 'Name'}
                </label>
                <input type="text" className="contact__input" value={formValues.name} onChange={handleInputChange} name="name" />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                {contactme.email[lang]}
                </label>
                <input type="text" value={formValues.email} onChange={handleInputChange} className="contact__input" name="email"  />
              </div>
            </div>
            <div className="contact__content">
              {/* <label htmlFor="" className="contact__label">
                Nombre
              </label> */}
              <textarea
                name="message"
                id=""
                className="contact__input"
                cols="30"
                rows="10"
                value={formValues.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="">
              <button className={`contact__button ${loading ?"clicked":""}`} id="send-button">
                <div className="wrapper">
                <RiSendPlane2Fill className='bx bxs-send contact__send'/>
                  {/* <i className='bx bxs-send contact__send'></i> */}
                </div>
                <span className="contact__text">Enviar mensaje</span>
              </button>
              {/* <button type='submit' href="#" disabled={loading} className="button button--flex">
                Enviar mensaje
              <RiSendPlane2Fill/>
              </button> */}
            </div>
          </form>
        </div>
      </section>
  )
}

export default ContactMe