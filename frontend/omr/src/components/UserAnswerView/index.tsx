import React from 'react';

import { DeleteIcon } from 'public/icons';

import styles from './index.module.scss';
import LikeButton from '../LikeButton';
import Toast from '../UI/Toast';

import type { Answer } from '@/types/question';

import { useSSRRecoilState } from '@/hooks/useSSRRecoilState';
import { deleteAnswer } from '@/service/answer';
import { toastMessageState } from '@/states/ui';
import { BLACK } from '@/styles/color';

type UserAnswerViewProps = {
  isMine: boolean;
  answer: Answer;
  mutateAnswerList: any;
};

const UserAnswerView = ({
  isMine,
  answer,
  mutateAnswerList,
}: UserAnswerViewProps) => {
  const [toastMessage, setToastMessage] = useSSRRecoilState(
    toastMessageState,
    '',
  );

  const handleClickDeleteBtn = async () => {
    if (!confirm('답변을 삭제합니다.')) return;
    const res = await deleteAnswer(answer.answerId);
    if (res?.status === 200) {
      await mutateAnswerList();
      setToastMessage('답변을 삭제했어요.');
    }
  };

  const handleCloseToast = () => {
    setToastMessage('');
  };

  return (
    <div className={styles.UserAnswerView}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.profileEmojiContainer}>
            <div className={styles.profileEmoji}>{answer.emoji}</div>
          </div>
          <div className={styles.nickname}>{answer.nickname}</div>
        </div>
        {isMine && (
          <button onClick={handleClickDeleteBtn}>
            <DeleteIcon width={20} height={20} fill={BLACK} />
          </button>
        )}
        {/* dummy data */}
        {/* <LikeButton isLiked={true} likeCount={answer.likeCount} /> */}
      </div>
      <div className={styles.content}>{answer.content}</div>
      <Toast
        message={toastMessage}
        isShown={toastMessage !== ''}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default UserAnswerView;