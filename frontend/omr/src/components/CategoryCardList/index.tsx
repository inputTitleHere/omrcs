'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import styles from './index.module.scss';
import CategoryCardButton from '../CategoryCardButton';

import useCategoryCount from '@/hooks/useCategoryCount';
import useCategoryList from '@/hooks/useCategoryList';

const CategoryCardList = () => {
  const { categoryList } = useCategoryList();
  const { categoryCount } = useCategoryCount();

  const router = useRouter();

  const handleClickViewAll = () => {
    router.push('/questionlist');
  };

  return (
    <div className={styles.CateoryCardList}>
      <div className={styles.header}>
        <div className={styles.title}>카테고리별 문제 보기</div>
        <button onClick={handleClickViewAll} className={styles.viewAllBtn}>
          전체 보기
        </button>
      </div>
      <div className={styles.list}>
        {categoryList &&
          categoryCount &&
          categoryList.map((category) => {
            let count = 0;
            for (let i = 0; i < categoryCount.length; i++) {
              if (categoryCount[i].interviewCategory.id === category.id) {
                count = categoryCount[i].count;
              }
            }

            return (
              <CategoryCardButton
                key={category.id}
                category={category}
                count={count}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CategoryCardList;