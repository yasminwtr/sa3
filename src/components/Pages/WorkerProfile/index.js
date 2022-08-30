import React, { useEffect, useState, useContext } from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LeaveAvaliation from './Modal/LeaveAvaliation'
import StarIcon from '@mui/icons-material/StarRounded'
import EmailIcon from '@mui/icons-material/EmailRounded'
import PhoneIcon from '@mui/icons-material/LocalPhoneRounded'
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded'
import LocationIcon from '@mui/icons-material/LocationOnRounded'
import PriceIcon from '@mui/icons-material/SellRounded'
import DescriptionIcon from '@mui/icons-material/InfoRounded'
import api from '../../../api';
import { useLocation } from 'react-router-dom';
import WorkerReviews from './WorkerReviews';
import AuthContext from '../../contexts/auth';

const WorkerProfile = () => {
  const { user } = useContext(AuthContext);
    const location = useLocation();
    const [formattedBirthDate, setFormattedBirthDate] = useState('');
    const [workerReviews, setWorkerReviews] = useState([]);
    const [numberWorkerReviews, setNumberWorkerReviews] = useState('')
    const workerReviewsLength = workerReviews.length 
    const dateAtual = new Date()
    console.log(dateAtual.getDate() , dateAtual.getMonth() , dateAtual.getFullYear());

    async function getReviewsByWorker() {
        const idWorker = location.state.workerId
        try {
            const response = await api.get(`/reviewsByWorker/${idWorker}`);
            console.log(response);
            return setWorkerReviews(response.data)

        } catch (error) {
            setWorkerReviews([])
        }
    }

    function cacularIdade(){
        
    }

    function validationWorkerNumberReviews() {
        if(workerReviewsLength > 1) {
          setNumberWorkerReviews(`${workerReviewsLength} avaliações`)
    
        } else if(workerReviewsLength == 1) {
          setNumberWorkerReviews(`${workerReviewsLength} avaliação`)
    
        } else {
          setNumberWorkerReviews(`Nenhuma avaliação`)
        }
      }

    useEffect(() => {
        getReviewsByWorker()
    }, [])

    useEffect(() => {
        validationWorkerNumberReviews()
      })

    useEffect(() => {
        const [year, month, day] = location.state.birthdate.split("T", 10)[0]?.split("-")
        setFormattedBirthDate(`${day}/${month}/${year}`);
    }, [location])

    return (
        <div className='all-worker-profile'>
            <div className='container-worker-profile'>
                <div className='part1-worker-profile'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-worker-profile' alt="Profile" />
                    <p id='name-worker-profile'>{location.state.name}</p>
                    <p id='categorie-worker-profile'>{location.state.service}, 25 anos</p>
                    <p id='stars-worker-profile'><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></p>
                    <button className='message-button'>Enviar mensagem</button>
                </div>

                <div className='part2-worker-profile'>
                    <p id='title-worker-profile'><EmailIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> E-mail</p>
                    <p id='text-worker-profile'>{location.state.email}</p>

                    <p id='title-worker-profile'><PhoneIcon sx={{ fontSize: 22, marginRight: 0.4 }} /> Telefone</p>
                    <p id='text-worker-profile'>{location.state.phone}</p>

                    <p id='title-worker-profile'><CalendarIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Data de nascimento</p>
                    <p id='text-worker-profile'>{formattedBirthDate}</p>

                    <p id='title-worker-profile'><LocationIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Localização</p>
                    <p id='text-worker-profile'>{location.state.city}, {location.state.cityState}</p>

                    <p id='title-worker-profile'><PriceIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Preço médio dos serviços</p>
                    <p id='text-worker-profile'>R$ {location.state.price}</p>

                    <p id='title-worker-profile'><DescriptionIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Descrição</p>
                    <p id='text-worker-profile'>{location.state.description}</p>
                </div>
            </div>

            <div className='container-blocks'>
                <div className='gallery'>
                    <p id='title-blocks'>Galeria de serviços</p>

                    <section className='carousel' aria-label='Gallery'>
                        <ol className='carousel__viewport'>
                            <li id='carousel__slide1' tabIndex='0' className='carousel__slide'>
                                <div className='carousel__snapper'>
                                    <a href='#carousel__slide4' className='carousel__prev'>Go to last slide</a>
                                    <a href='#carousel__slide2' className='carousel__next'>Go to next slide</a>
                                </div>
                            </li>

                            <li id='carousel__slide2' tabIndex='0' className='carousel__slide'>
                                <div className='carousel__snapper'></div>
                                <a href='#carousel__slide1' className='carousel__prev'>Go to previous slide</a>
                                <a href='#carousel__slide3' className='carousel__next'>Go to next slide</a>
                            </li>

                            <li id='carousel__slide3' tabIndex='0' className='carousel__slide'>
                                <div className='carousel__snapper'></div>
                                <a href='#carousel__slide2' className='carousel__prev'>Go to previous slide</a>
                                <a href='#carousel__slide4' className='carousel__next'>Go to next slide</a>
                            </li>

                            <li id='carousel__slide4' tabIndex='0' className='carousel__slide'>
                                <div className='carousel__snapper'></div>
                                <a href='#carousel__slide3' className='carousel__prev'>Go to previous slide</a>
                                <a href='#carousel__slide1' className='carousel__next'>Go to first slide</a>
                            </li>
                        </ol>

                        <aside className='carousel__navigation'>
                            <ol className='carousel__navigation-list'>
                                <li className='carousel__navigation-item'>
                                    <a href='#carousel__slide1' className='carousel__navigation-button'>Go to slide 1</a>
                                </li>

                                <li className='carousel__navigation-item'>
                                    <a href='#carousel__slide2' className='carousel__navigation-button'>Go to slide 2</a>
                                </li>

                                <li className='carousel__navigation-item'>
                                    <a href='#carousel__slide3' className='carousel__navigation-button'>Go to slide 3</a>
                                </li>

                                <li className='carousel__navigation-item'>
                                    <a href='#carousel__slide4' className='carousel__navigation-button'>Go to slide 4</a>
                                </li>
                            </ol>
                        </aside>
                    </section>
                </div>


                <div className='avaliations'>
                    <p id='title-blocks'>Avaliações</p>

                    <div className='feed-avaliations'>
                        <div className='inicial-avaliations'>
                            {user.idperson == location.state.workerId ?
                            <>
                            <p id='number-avaliations-else'>{numberWorkerReviews}</p>
                            </>
                            :
                            <>
                            <LeaveAvaliation />
                            <p id='number-avaliations'>{numberWorkerReviews}</p>
                            </>}
                        </div>

                        <WorkerReviews />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WorkerProfile;