import React, { useState, useEffect } from 'react';
import './style.css';
import kookminIcon from '../../common/images/kookmin.png';
import Swal from 'sweetalert2';
import comment from '../../common/images/comment.png';
import { firestore, createComment, deleteComment } from '../../utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import GalleryTypeA from '../../components/Gallery/GalleryTypeA';
import CalendarTypeA from '../../components/Calendar/CalendarTypeA';
import MapKakaoTypeA from '../../components/Map/MapKakaoTypeA';
import SNSTypeA from '../../components/SNS/SNSTypeA';
import GreetingTypeA from '../../components/Greeting/GreetingTypeA';
import homcomemingMain from '../../common/images/homecomeingMain.webp';
import gallery01 from '../../common/images/gallery01.webp';
import gallery02 from '../../common/images/gallery02.webp';
import gallery03 from '../../common/images/gallery03.webp';
import gallery04 from '../../common/images/gallery04.webp';
import imageCompression from 'browser-image-compression';
import Loading from '../../components/Loading';

function TypeHomecoming() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

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
        setTimeout(() => setLoading(false), 3500);

        fetchUserData();
    }, []);

    function handleAddComment(e) {
        e.preventDefault();
        const value = {
            name: e.target.name.value,
            password: e.target.password.value,
            time: new Date().toLocaleString(),
            message: e.target.message.value,
        };
        createComment(collection, document, value);

        Swal.fire({
            icon: 'success',
            title: "<span style='font-size:1.3rem'>댓글을 작성하였습니다.</span>",
            customClass: 'swal-width',
        });

        e.target.name.value = '';
        e.target.password.value = '';
        e.target.message.value = '';
    }

    function handleCommentDelete(e) {
        e.preventDefault();

        console.log(1);
    }

    return (
        <div id="wrap">
            {loading ? <Loading /> : ''}

            <div id="area-main">
                <img src={homcomemingMain} alt="" className="main-img" />
            </div>
            <GreetingTypeA
                content={
                    <>
                        <span style={{ fontSize: '1rem' }}>Re-Build</span>
                        <br />
                        갑작스럽게 시작된 비대면 생활은 <br />
                        다양한 변화를 불러왔습니다.
                        <br /> 그 영향으로 개설 이래 이어온 <br />
                        경영정보학부 네트워크에 단절이 생겼습니다.
                        <br /> 그러나 본격적인 전면 대면 학기가 시작된 2023년,
                        <br /> 4년만에 개최되는 홈커밍데이를 통해 <br /> 재건의 시작을 알립니다.
                    </>
                }
            />
            <GalleryTypeA value={[gallery01, gallery02, gallery03, gallery04]} />
            <CalendarTypeA time="2023.11.03 FRI PM 7:00" dateValue="2023-11-03" />
            <MapKakaoTypeA
                lat="37.5187346999467"
                lng="127.0180824999451"
                level="3"
                mapHref="https://map.kakao.com/link/map/23201274"
                name="더 리버사이드 호텔 노벨라홀"
                address="서울 서초구 강남대로 107길 6 지하 1층"
                number="02-6710-1100"
            />
            <SNSTypeA
                name="하랑"
                facebookHref="https://www.facebook.com/KookminMIS/"
                instaHref="https://www.instagram.com/kmu_mis"
            />

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
                        <input
                            type="password"
                            name="password"
                            className="comment-input-input"
                            maxLength="12"
                            required
                        />
                    </div>

                    <div className="comment-input-box">
                        <p className="comment-input-text">Message</p>
                        <p className="comment-input-colon">:</p>
                        <input type="text" name="message" className="comment-input-input" maxLength="70" required />
                    </div>
                    <button type="submit" className="comment-input-submit">
                        메시지 남기기
                    </button>
                </form>
                <div className="comment-list">
                    {comments
                        ? comments.map((v, i) => (
                              <div className="comment-item">
                                  <div className="comment-item-top">
                                      <p className="comment-item-name">{v.name}</p>
                                      <p className="comment-item-time">{v.time}</p>
                                  </div>
                                  <div className="comment-item-main">
                                      <p className="comment-item-message">{v.message}</p>
                                      <div
                                          className="close"
                                          onClick={() => {
                                              Swal.fire({
                                                  title: "<span style='font-size:1.3rem'>비밀번호를 입력해주세요</span>",
                                                  input: 'text',
                                                  customClass: 'swal-width',
                                                  showCancelButton: true,
                                                  confirmButtonText: '삭제',
                                                  cancelButtonText: '취소',
                                                  preConfirm: (password) => {
                                                      if (password == v.password || password == 'admin1103') {
                                                          const value = {
                                                              name: v.name,
                                                              time: v.time,
                                                              password: v.password,
                                                              message: v.message,
                                                          };
                                                          deleteComment(collection, document, value);
                                                      } else {
                                                          Swal.showValidationMessage(
                                                              "<span style='font-size:1.3rem'>비밀번호가 일치하지 않습니다.</span>",
                                                          );
                                                      }
                                                  },
                                              }).then((result) => {
                                                  if (result.isConfirmed) {
                                                      Swal.fire({
                                                          icon: 'success',
                                                          title: "<span style='font-size:1.3rem'>댓글을 삭제하였습니다.</span>",
                                                          customClass: 'swal-width',
                                                      });
                                                  }
                                              });
                                          }}
                                      ></div>
                                  </div>
                                  <div className="comment-item-delete-box ">
                                      <form action="delete">
                                          <input type="password" required />
                                          <button onClick={handleCommentDelete}>삭제하기</button>
                                      </form>
                                  </div>
                              </div>
                          ))
                        : ''}
                </div>
            </div>
            <div id="area-footer">@Jin</div>
        </div>
    );
}

export default TypeHomecoming;
