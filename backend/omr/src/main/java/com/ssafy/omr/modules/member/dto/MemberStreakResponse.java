package com.ssafy.omr.modules.member.dto;

import java.util.List;

public record MemberStreakResponse(
        List<StreakProjection> streaks,
        int currentStreak,
        int longestStreak
) {
}
