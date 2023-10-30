package com.ssafy.omr.modules.question.mapper;

import com.ssafy.omr.modules.meta.domain.InterviewCategory;
import com.ssafy.omr.modules.meta.domain.MetaData;
import com.ssafy.omr.modules.question.domain.DailyQuestion;
import com.ssafy.omr.modules.question.domain.InterviewQuestion;
import com.ssafy.omr.modules.question.dto.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class QuestionMapper {

    public static QuestionsResponse supplyQuestionsResponse(Page<QuestionElement> questionElements) {
        return QuestionsResponse.builder()
                .questions(questionElements.getContent())
                .currentPage(questionElements.getNumber())
                .totalPageCount(questionElements.getTotalPages())
                .build();
    }

    public static QuestionDetailResponse supplyQuestionDetailResponse(InterviewQuestion interviewQuestion, Boolean isScrapped, String answer) {
        return QuestionDetailResponse.builder()
                .category(interviewQuestion.getInterviewCategory())
                .content(interviewQuestion.getContent())
                .isScraped(isScrapped)
                .answer(answer)
                .build();
    }

    public static DailyQuestionResponse supplyDailyQuestionResponse(InterviewQuestion interviewQuestion) {
        return DailyQuestionResponse.builder()
                .category(interviewQuestion.getInterviewCategory())
                .content(interviewQuestion.getContent())
                .build();
    }

    public static DailyQuestionResponse supplyDailyQuestionResponse(DailyQuestion dailyQuestion) {
        return DailyQuestionResponse.builder()
                .category(dailyQuestion.getInterviewCategory())
                .content(dailyQuestion.getContent())
                .build();
    }

    public static DailyQuestion supplyDailyQuestion(Integer seed, InterviewQuestion interviewQuestion) {
        return DailyQuestion.builder()
                .id(seed)
                .interviewCategory(interviewQuestion.getInterviewCategory())
                .content(interviewQuestion.getContent())
                .build();
    }

    public static List<InterviewQuestion> supplyInterviewQuestionEntityOf(
            List<String> categories,
            List<String> contents) {
        List<InterviewQuestion> interviewQuestions = new ArrayList<>();

        for(int i = 0; i < categories.size(); i++) {
            interviewQuestions.add(InterviewQuestion.builder()
                    .interviewCategory(InterviewCategory.ofName(categories.get(i)))
                    .content(contents.get(i))
                    .build());
        }

        return interviewQuestions;
    }
}
