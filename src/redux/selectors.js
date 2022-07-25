// App Reducer

export const selectIsAppInitialized = (state) => state.app.appInitialized;

// Auth Reducer

export const selectIsAuth = (state) => state.auth.isAuth;
export const selectAuthUserId = (state) => state.auth.userData.id;
export const selectAuthUserName = (state) => state.auth.userData.name;
export const selectAuthUserPhoto = (state) => state.auth.userData.photo;

// Header Reducer

export const selectIsBurgerActive = (state) => state.header.burgerMenu.isActive;

// Users Reducer

export const selectUsers = (state) => state.usersPage.users;

export const selectUsersIsFetching = (state) => state.usersPage.isFetching;

export const selectDisabledFollowBtnUsersId = (state) => state.usersPage.disabledFollowBtnUsersId;

export const selectCurrentPage = (state) => state.usersPage.currentPage;

export const selectUsersPerPage = (state) => state.usersPage.usersPerPage;

export const selectTotalUsersCount = (state) => state.usersPage.usersPerPage;

// Profile Reducer

export const selectProfileIsFetching = (state) => state.profilePage.profileInfoIsFetching;
export const selectProfileInfo = (state) => state.profilePage.profileInfo;
export const selectProfilePosts = (state) => state.profilePage.posts;

// Messages Reducer

export const selectDialogs = (state) => state.messagesPage.dialogs;
export const selectDialogMessages = (state) => state.messagesPage.messages;
export const selectMessageInput = (state) => state.messagesPage.messageInput;
export const selectMessageInputPlaceholder = (state) => state.messagesPage.messageInputPlaceholder;
