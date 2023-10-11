import React, { useState, useEffect } from 'react';
import './style.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import kookminIcon from '../../common/images/kookmin.png';
import dear from '../../common/images/dear.png';
import insta from '../../common/images/instagram.png';
import kakaoTalk from '../../common/images/kakaoTalk.png';
import location from '../../common/images/location.png';
import gallery from '../../common/images/gallery.png';
import comment from '../../common/images/comment.png';
import time from '../../common/images/time.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import moment from 'moment';
import { firestore, getComment, createComment } from '../../utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

function TypeHomecoming() {
    const [comments, setComments] = useState([]);

    const collection = window.location.pathname.split('/')[1];
    const document = window.location.pathname.split('/')[2];

    useEffect(() => {
        const fetchUserData = async () => {
            const docRef = doc(firestore, collection, document);
            const unsub = await onSnapshot(doc(firestore, collection, document), (doc) => {
                setComments(doc.data().comment);
            });
            return () => {
                unsub();
            };
        };

        fetchUserData();
    }, []);

    // getComment(collection, document);

    function handleAddComment(e) {
        e.preventDefault();
        const value = {
            name: e.target.name.value,
            password: e.target.password.value,
            time: new Date().toLocaleString(),
            message: e.target.message.value,
        };
        createComment(collection, document, value);

        e.target.name.value = '';
        e.target.password.value = '';
        e.target.message.value = '';
    }

    function toggleCommentDelete(e) {
        e.preventDefault();

        console.log(1);
    }

    return (
        <div id="wrap">
            <div id="area-main">
                <div className="main-wrapper">
                    <div className="main-subTitle">
                        <img src={kookminIcon} alt="" style={{ width: '2rem', marginTop: '20px' }} />
                        <div className="main-subTitle-content">
                            <p>
                                You`re invited <br />
                                to 2023 MIS Homecomingday
                            </p>
                        </div>
                    </div>
                    <div className="main-title">
                        <p className="verticle-lr">
                            경영정보학부
                            <br />
                            홈커밍데이
                        </p>
                    </div>
                    <div className="main-information">
                        <p>제37대 경영정보학부 학생회 '하랑'</p>
                        <p>
                            2023.11.03 FRI PM 7:00
                            <br />더 리버사이드 호텔 노벨리홀
                        </p>
                    </div>
                </div>
            </div>
            <div id="area-greeting">
                <img src={dear} alt="" style={{ width: '7rem', marginTop: '20px' }} />
                <p className="greeting-content">
                    <span style={{ fontSize: '1.2rem' }}>Re-Build</span>
                    <br />
                    갑작스럽게 시작된 비대면 생활은 <br />
                    다양한 변화를 불러왔습니다.
                    <br /> 그 영향으로 개설 이래 이어온 <br />
                    경영정보학부 네트워크에 단절이 생겼습니다.
                    <br /> 그러나 본격적인 전면 대면 학기가 시작된 2023년,
                    <br /> 4년만에 개최되는 홈커밍데이를 통해 <br />
                    재건의 시작을 알립니다.
                </p>
            </div>
            <div id="area-gallery">
                <img src={gallery} alt="" style={{ width: '100%' }} />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/kookinvite-1bcc8.appspot.com/o/DSC08159.jpg?alt=media&token=0c31f0d8-34d5-4ee7-9f55-f4462201b3fe&_gl=1*jj872r*_ga*MTU5NzI5ODI2NS4xNjkyMDA3NzYw*_ga_CW55HF8NVT*MTY5Njk5OTI1NS4xMDcuMS4xNjk2OTk5OTc2LjMzLjAuMA.."
                    alt=""
                    style={{ width: '90%', margin: '10px auto' }}
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/kookinvite-1bcc8.appspot.com/o/DSC07523.jpg?alt=media&token=3814ceab-e105-4642-8148-1de79867b9a7&_gl=1*1ic94b6*_ga*MTU5NzI5ODI2NS4xNjkyMDA3NzYw*_ga_CW55HF8NVT*MTY5Njk5OTI1NS4xMDcuMS4xNjk3MDAwMDg0LjUxLjAuMA.."
                    alt=""
                    style={{ width: '90%', margin: '10px auto' }}
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/kookinvite-1bcc8.appspot.com/o/DSC07556.jpg?alt=media&token=8ac7ced3-8c3b-43c8-ab48-8cdfa1987799&_gl=1*trhzsy*_ga*MTU5NzI5ODI2NS4xNjkyMDA3NzYw*_ga_CW55HF8NVT*MTY5Njk5OTI1NS4xMDcuMS4xNjk3MDAwMDA4LjEuMC4w"
                    alt=""
                    style={{ width: '90%', margin: '10px auto' }}
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/kookinvite-1bcc8.appspot.com/o/DSC07743.jpg?alt=media&token=4f2a5815-85d7-465c-a94e-a88a1cba8973&_gl=1*1xg2v4*_ga*MTU5NzI5ODI2NS4xNjkyMDA3NzYw*_ga_CW55HF8NVT*MTY5Njk5OTI1NS4xMDcuMS4xNjk3MDAwMDI2LjQ0LjAuMA.."
                    alt=""
                    style={{ width: '90%', margin: '10px auto' }}
                />
            </div>
            <div id="area-calendar">
                <img src={time} alt="" style={{ width: '100%' }} />
                <div className="calendar-time">
                    <span>2023.11.03 FRI PM 7:00</span>
                </div>
                <Calendar
                    locale="ko"
                    value={'2023-11-03'}
                    next2Label={null}
                    prev2Label={null}
                    formatDay={(locale, date) => moment(date).format('DD')}
                />
            </div>
            <div id="area-timeTable"></div>

            <div id="area-sns">
                <div className="sns-box">
                    <div className="sns-type">
                        <span>하랑 카카오톡</span>
                    </div>
                    <div className="sns-image">
                        <a href="/">
                            <img src={kakaoTalk} alt="" style={{ width: '4rem' }} />
                        </a>
                    </div>
                </div>
                <div className="sns-box">
                    <div className="sns-type">
                        <span>하랑 인스타</span>
                    </div>
                    <div className="sns-image">
                        <a href="https://www.instagram.com/kmu_mis">
                            <img src={insta} alt="" style={{ width: '4rem' }} />
                        </a>
                    </div>
                </div>
            </div>
            <div id="area-location">
                <img src={location} alt="" style={{ width: '100%' }} />
                <div>
                    <Map center={{ lat: 37.5187346999467, lng: 127.0180824999451 }} level={3} className="map">
                        <MapMarker position={{ lat: 37.5187346999467, lng: 127.0180824999451 }}>
                            더 리버사이드 호텔
                        </MapMarker>
                    </Map>
                    <a href="https://map.kakao.com/link/map/23201274" className="map-link">
                        지도 바로가기
                    </a>
                </div>
                <div className="location-information">
                    <p style={{ fontSize: '1.2rem', margin: '0', marginTop: '20px' }}>더 버리사이드 호텔 2층</p>
                    <p style={{ margin: '0', marginTop: '10px' }}>서울 서초구 강남대로107길 6 리버사이드호텔</p>
                    <p style={{ margin: '0', marginTop: '4px' }}>02-6710-1100</p>
                </div>
            </div>

            <div id="area-comment">
                <img src={comment} alt="" style={{ width: '100%' }} />
                <form action="submit" onSubmit={handleAddComment} className="comment-input">
                    <div className="comment-input-box">
                        <p className="comment-input-text">Name</p>
                        <p className="comment-input-colon">:</p>
                        <input type="text" name="name" className="comment-input-input" required />
                    </div>

                    <div className="comment-input-box">
                        <p className="comment-input-text">Password</p>
                        <p className="comment-input-colon">:</p>
                        <input type="password" name="password" className="comment-input-input" required />
                    </div>

                    <div className="comment-input-box">
                        <p className="comment-input-text">Message</p>
                        <p className="comment-input-colon">:</p>
                        <input type="text" name="message" className="comment-input-input" required />
                    </div>
                    <button type="submit" className="comment-input-submit">
                        메시지 남기기
                    </button>
                </form>
                <div className="comment-list">
                    {comments
                        ? comments.map((v) => (
                              <div className="comment-item">
                                  <div className="comment-item-top">
                                      <p className="comment-item-name">{v.name}</p>
                                      <p className="comment-item-time">{v.time}</p>
                                  </div>
                                  <div className="comment-item-main">
                                      <p className="comment-item-message">{v.message}</p>
                                      <div className="close" onClick={toggleCommentDelete}></div>
                                  </div>
                                  <div className="comment-item-delete-box">
                                      <form action="delete">
                                          <input type="password" required />
                                          <button>삭제하기</button>
                                      </form>
                                  </div>
                              </div>
                          ))
                        : '1'}
                </div>
            </div>
            <div id="area-footer">@Jin</div>
        </div>
    );
}

export default TypeHomecoming;
