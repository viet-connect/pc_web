import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { FcHighPriority } from 'react-icons/fc';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';
import { Posting, IPosting } from '../../../../models/posting';
import { inputPostingState } from '../../../../recoil/atom/posting';
import CommonButton from '../../../common/Button';
import Modal from '../../../common/Modal';
import Postcode from '../../../common/PostCode';
import { ItemTitle, PlaceHolder, PlaceHolderWrapper, SubTitleWrapper } from '../first_part';
import Editor from '../../../common/Editor';

/*
	contents: '',
	address: '',
*/

export default function JobOpeningPostingFourthPart({ data, isAdmin }) {
  const [showModal, setShowModal] = useState(false);
  const [newJobPosting, setNewJobPosting] = useRecoilState(inputPostingState);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState({});
  const [isDetailedAddressOn, setIsDetailedAddressOn] = useState(true);
  const router = useRouter();
  const [isRequesting, setIsRequesting] = useState(false);
  const { t } = useTranslation();
  const [maxContentLength, setMaxContentLength] = useState(402);
  const session = useSession();
  let uid = null;
  if (session.data) {
    uid = session.data.user.id;
  }

  const toggleModal = async (e) => {
    if (isRequesting) return;

    // 여기서 full state를 setState해줘도, 반영이 안됩니다.
    const fullAddressHandledObj = {
      ...newJobPosting,
      address: {
        ...newJobPosting.address,
        full: `${newJobPosting.address.main} ${newJobPosting.address.sub}`,
      },
    };

    /* 저장 전에는 전화번호 하이픈 제거 */
    fullAddressHandledObj.contact_number = fullAddressHandledObj.contact_number.replaceAll('-', '');

    /* 일하는 날짜 sorting */
    const workingDay = [...fullAddressHandledObj.working_day].sort();
    fullAddressHandledObj.working_day = workingDay;
    setNewJobPosting(fullAddressHandledObj);

    if (
      !Posting.validateNewPost(fullAddressHandledObj) ||
      localStorage.getItem(process.env.NEXT_PUBLIC_ADMIN_KEY) === process.env.NEXT_PUBLIC_ADMIN_KEY_VALUE
    ) {
      setIsRequesting(true);
      try {
        await postRequest(fullAddressHandledObj).then((res) => {
          if (localStorage.getItem(process.env.NEXT_PUBLIC_ADMIN_KEY)) {
            localStorage.removeItem(process.env.NEXT_PUBLIC_ADMIN_KEY);
          }
        });
        await router.push('/');
      } catch (err) {
        console.log(err);
      } finally {
        setIsRequesting(false);
      }
    } else {
      setError(Posting.validateNewPost(fullAddressHandledObj));
      setShowErrorModal(true);
    }
  };

  const postRequest = async (posting: IPosting) => {
    try {
      const content = { ...posting, authorId: uid };
      if (data) {
        await Posting.handleUpdatePost(data.id, content);
      } else if (uid) {
        await Posting.handleNewPost(content);
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    const item = localStorage.getItem(process.env.NEXT_PUBLIC_ADMIN_KEY);
    if (item) setMaxContentLength(Number.MAX_SAFE_INTEGER);
  }, []);

  return (
    <Container>
      <SubTitleWrapper>
        <ItemTitle>{t('posting:moreInformation')}</ItemTitle>
        <Editor
          value={newJobPosting.contents}
          onChange={(value) =>
            setNewJobPosting({
              ...newJobPosting,
              contents: value,
            })
          }
          placeholder={t('posting:moreInformationPlaceholder')}
          maxLength={maxContentLength}
        />
      </SubTitleWrapper>
      <ButtonWrapper>
        <ItemTitle style={{ width: 140, paddingBottom: 0 }}>{t('posting:placeOfWork')}</ItemTitle>
        {/* <CommonButton
					wrapperStyle={{
						// width: 355,
						width: 150,
						height: 40,
						color: '#dda672',
					}}
					className="home-button"
					onClick={() => setShowModal(true)}
				>
					클릭해서 주소찾기
				</CommonButton> */}
        <PlaceHolderWrapper style={{ height: 30, marginBottom: 15, marginTop: 15 }}>
          <PlaceHolder
            defaultValue={newJobPosting.address.main}
            placeholder={t('posting:placeOfWorkPlaceholder')}
            onClick={() => setShowModal(true)}
            readOnly={true}
          />
        </PlaceHolderWrapper>
        <DetailedAddressWrapper>
          <AddressLabel>{t('posting:detailedAddress')}</AddressLabel>
          <PlaceHolder
            style={{ height: 30 }}
            defaultValue={newJobPosting.address.sub}
            onChange={(e) => {
              setNewJobPosting({
                ...newJobPosting,
                address: {
                  ...newJobPosting.address,
                  sub: e.target.value,
                },
              });
            }}
            disabled={isDetailedAddressOn}
          />
        </DetailedAddressWrapper>
      </ButtonWrapper>
      {/* {!data && (
				<RegisterInputContainer>
					<RegisterInputItemWrapper>작성자</RegisterInputItemWrapper>
					<PlaceHolder
						style={{ height: 30 }}
						defaultValue={newJobPosting.author}
						onChange={(e) => {
							setNewJobPosting({
								...newJobPosting,
								author: e.target.value,
							});
						}}
						maxLength={20}
						autoComplete="off"
						required
					/>
				</RegisterInputContainer>
			)} */}
      <RegisterInputContainer>
        <RegisterInputItemWrapper>{t('posting:password')}</RegisterInputItemWrapper>
        <PlaceHolder
          type="password"
          style={{ height: 30 }}
          defaultValue={newJobPosting.password}
          onChange={(e) => {
            setNewJobPosting({
              ...newJobPosting,
              password: e.target.value,
            });
          }}
          disabled={isAdmin}
          name="password"
          placeholder={t('posting:passwordPlaceholder')}
          autoComplete="off"
          required
        />
      </RegisterInputContainer>
      <RegisterButtonWrapper>
        <CommonButton
          wrapperStyle={{
            width: 150,
            height: 40,
            color: '#EA7B14',
          }}
          extraWrapperStyle={{ marginTop: 40 }}
          disabled={isRequesting}
          loading={isRequesting}
          onClick={toggleModal}
        >
          {data ? t('posting:editBtnLabel') : t('posting:registrationBtnLabel')}
        </CommonButton>
      </RegisterButtonWrapper>
      <Modal
        width={330}
        height={420}
        // onClose={() => setShowModal(false)}
        show={showModal}
      >
        <Postcode
          onComplete={() => {
            setShowModal(false);

            if (isDetailedAddressOn) {
              setIsDetailedAddressOn(false);
            }
          }}
        />
        <ClosingModalButton onClick={() => setShowModal(false)}>{t('posting:closeBtnLabel')}</ClosingModalButton>
      </Modal>
      <Modal
        width={320}
        height={400}
        // onClose={() => setShowErrorModal(false)}
        show={showErrorModal}
      >
        {showErrorModal && (
          <ErrorContainer>
            {Object.entries(error).map((el: [string, string]) => {
              if (el[1].length === 0) {
                return null;
              }

              return (
                <ErrorWrapper key={el[0]}>
                  <div style={{ marginRight: 5 }}>
                    <FcHighPriority />
                  </div>
                  <div>{el[1]}</div>
                </ErrorWrapper>
              );
            })}
            <ClosingModalButton onClick={() => setShowErrorModal(false)}>닫기</ClosingModalButton>
          </ErrorContainer>
        )}
      </Modal>
    </Container>
  );
}

const ErrorContainer = styled.div`
  padding: 20px;
`;

const ErrorWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Container = styled.div`
  margin-bottom: 20px;

  .common-editor__editor {
    min-height: 100px;
  }
`;

const ButtonWrapper = styled.div``;

const AddressLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 100px;
`;

export const ClosingModalButton = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  background-color: #faa453;
  height: 40px;
  cursor: pointer;
`;

const DetailedAddressWrapper = styled.div`
  display: flex;
  height: 30px;
`;

export const RegisterInputContainer = styled.div`
  display: flex;
  margin-top: 20px;
  font-weight: bold;
`;

export const RegisterInputItemWrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100px;
  font-weight: bold;
  font-size: 18px;
`;

const RegisterButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TextAreaWrapper = styled.label`
  width: 100%;
  textarea {
    width: 100%;
    box-sizing: border-box;
    resize: none;
  }
`;
