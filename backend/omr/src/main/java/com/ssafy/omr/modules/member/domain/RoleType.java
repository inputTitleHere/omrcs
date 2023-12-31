package com.ssafy.omr.modules.member.domain;

public enum RoleType {
    USER("USER"), ADMIN("ADMIN");

    private final String name;

    RoleType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public boolean isNot(String roleType) {
        return !this.name.equals(roleType);
    }
}
