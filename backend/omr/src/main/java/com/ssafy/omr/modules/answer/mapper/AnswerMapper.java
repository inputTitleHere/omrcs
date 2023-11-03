package com.ssafy.omr.modules.answer.mapper;

import com.ssafy.omr.modules.answer.domain.Answer;
import com.ssafy.omr.modules.answer.dto.AnswerResponse;
import com.ssafy.omr.modules.answer.dto.CreateAnswerRequest;
import com.ssafy.omr.modules.answer.dto.CreateAnswerResponse;
import com.ssafy.omr.modules.answer.dto.QuestionAnswerResponse;
import com.ssafy.omr.modules.answer.dto.ToggleLikeAnswerResponse;
import com.ssafy.omr.modules.member.domain.Member;
import com.ssafy.omr.modules.question.domain.InterviewQuestion;
import org.springframework.data.domain.Page;

public class AnswerMapper {

    public static CreateAnswerResponse supplyCreateAnswerResponseFrom(Answer createdAnswer) {
        return new CreateAnswerResponse(
                createdAnswer.getId(),
                createdAnswer.getContent()
        );
    }

    public static Answer supplyAnswerOf(Member member, InterviewQuestion interviewQuestion, CreateAnswerRequest createAnswerRequest) {
        return Answer.builder()
                .member(member)
                .interviewQuestion(interviewQuestion)
                .content(createAnswerRequest.content())
                .build();
    }

    public static ToggleLikeAnswerResponse supplyToggleLikeAnswerResponseOf(boolean isToggled) {
        return new ToggleLikeAnswerResponse(isToggled);
    }

    public static AnswerResponse supplyAnswerResponseOf(Answer answer) {
        Member member = answer.getMember();
        return new AnswerResponse(
                answer.getId(),
                member.getNickname(),
                member.getEmoji(),
                answer.getContent(),
                answer.getLikeCount()
        );
    }

    public static QuestionAnswerResponse supplyQuestionAnswerResponseOf(
            Long questionId,
            Page<AnswerResponse> answerList
    ) {
        return new QuestionAnswerResponse(questionId, answerList);
    }
}