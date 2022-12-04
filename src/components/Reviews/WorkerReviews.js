import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AverageRating from './AverageRating';
import { Image, Avatar } from 'antd';
import ProfileIcon from "../../assets/img/user2.png";

const WorkerReviews = (props) => {
  const { workerReviews } = props

  return (
    <>
      {workerReviews.map((review) => {
        const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
        const formattedDateReview = `${day}/${month}/${year}`

        return (
          <div key={review.idreview}>
            <div className='block-avaliation'>
              <div className='part1-avaliation'>
                {
                  review.profilepicture ?
                    <Avatar
                      id='icon-avaliation'
                      size={100}
                      src={
                        <Image
                          src={review.profilepicture}
                        />
                      }
                    />
                    :
                    <Avatar
                      id='icon-avaliation'
                      size={65}
                      src={
                        <Image
                          src={ProfileIcon}
                        />
                      }
                    />
                }
              </div>
              <div className='all-info-avaliation'>
                <div className='info-avaliation'>
                  <p id='name-avaliation'>
                    {review.firstnameperson} {review.lastnameperson}
                  </p>
                  <p id='date-avaliation'>
                    {formattedDateReview}
                  </p>
                </div>
                <AverageRating />
              </div>
            </div>
            <p id='text-avaliation'>
              {review.messagereview}
            </p>
          </div>
        )
      })
      }
    </>
  )
}

export default WorkerReviews; 